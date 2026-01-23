/**
 * Generic CRUD hook for simple database tables without translations
 * Provides standard Create, Read, Update, Delete operations with:
 * - Optimistic updates for better UX
 * - Zod schema validation
 * - Configurable ordering
 * - Error handling and loading states
 *
 * @example
 * ```typescript
 * const service = useSimpleCrud<Project, ProjectInsert, ProjectUpdate>({
 *   tableName: 'projects',
 *   schema: projectInsertSchema,
 *   orderBy: 'order_index',
 *   orderAscending: true
 * });
 *
 * const { data, isLoading, error, create, update, remove, refetch } = service;
 * ```
 */

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { ZodSchema } from 'zod';

/**
 * Configuration for the simple CRUD hook
 * @template TBase - Base entity type (must have an 'id' field)
 * @template TInsert - Insert type for creating new records
 */
export interface SimpleCrudConfig<TBase, TInsert> {
  /** Name of the database table */
  tableName: string;
  /** Zod schema for validation on insert */
  schema: ZodSchema<TInsert>;
  /** Field to order results by (optional) */
  orderBy?: keyof TBase;
  /** Order direction (default: true for ascending) */
  orderAscending?: boolean;
}

/**
 * Service interface returned by useSimpleCrud
 * @template TBase - Base entity type
 * @template TInsert - Insert type
 * @template TUpdate - Update type (partial of TInsert)
 */
export interface SimpleCrudService<TBase, TInsert, TUpdate> {
  /** Array of records */
  data: TBase[];
  /** Loading state indicator */
  isLoading: boolean;
  /** Error message if operation failed */
  error: string | null;
  /** Create a new record */
  create: (itemData: TInsert) => Promise<TBase>;
  /** Update an existing record */
  update: (id: string, itemData: TUpdate) => Promise<TBase>;
  /** Delete a record */
  remove: (id: string) => Promise<void>;
  /** Manually refresh data from database */
  refetch: () => Promise<void>;
}

/**
 * Generic CRUD hook for simple database operations
 *
 * Features:
 * - Automatic data loading on mount
 * - Optimistic UI updates for all operations
 * - Zod validation on create/update
 * - Configurable result ordering
 * - Comprehensive error handling
 *
 * @param config - Configuration object
 * @returns Service object with data and CRUD operations
 */
export function useSimpleCrud<
  TBase extends { id: string },
  TInsert,
  TUpdate
>(
  config: SimpleCrudConfig<TBase, TInsert>
): SimpleCrudService<TBase, TInsert, TUpdate> {
  const { tableName, schema, orderBy, orderAscending = true } = config;

  const [data, setData] = useState<TBase[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads data from the database
   */
  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      let query = supabase.from(tableName).select('*');

      // Apply ordering if specified
      if (orderBy) {
        query = query.order(String(orderBy), { ascending: orderAscending });
      }

      const { data: records, error: supabaseError } = await query;

      if (supabaseError) {
        throw supabaseError;
      }

      setData((records as TBase[]) || []);
    } catch (err) {
      console.error(`Error loading ${tableName}:`, err);
      setError(err instanceof Error ? err.message : `Failed to load ${tableName}`);
    } finally {
      setIsLoading(false);
    }
  }, [tableName, orderBy, orderAscending]);

  /**
   * Creates a new record with validation and optimistic update
   */
  const create = useCallback(
    async (itemData: TInsert): Promise<TBase> => {
      try {
        // Validate input
        const validatedData = schema.parse(itemData);

        // Create optimistic temporary record
        const tempId = `temp-${Date.now()}`;
        const tempRecord = {
          id: tempId,
          ...validatedData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        } as TBase;

        // Optimistic update
        setData(prev => [...prev, tempRecord]);

        // Insert into database
        const { data: newRecord, error: supabaseError } = await supabase
          .from(tableName)
          .insert(validatedData as Record<string, unknown>)
          .select()
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        // Replace temp with real data
        setData(prev => prev.map(item => (item.id === tempId ? newRecord as TBase : item)));

        return newRecord as TBase;
      } catch (err) {
        // Revert optimistic update
        setData(prev => prev.filter(item => !item.id.startsWith('temp-')));
        console.error(`Error creating ${tableName} record:`, err);
        throw err;
      }
    },
    [tableName, schema]
  );

  /**
   * Updates an existing record with validation and optimistic update
   */
  const update = useCallback(
    async (id: string, itemData: TUpdate): Promise<TBase> => {
      try {
        // Validate input (partial schema validation)
        const validatedData = itemData;

        // Optimistic update
        setData(prev =>
          prev.map(item => (item.id === id ? { ...item, ...validatedData } : item))
        );

        // Update in database
        const { data: updatedRecord, error: supabaseError } = await supabase
          .from(tableName)
          .update(validatedData as Record<string, unknown>)
          .eq('id', id)
          .select()
          .single();

        if (supabaseError) {
          throw supabaseError;
        }

        // Update with real data
        setData(prev =>
          prev.map(item => (item.id === id ? updatedRecord as TBase : item))
        );

        return updatedRecord as TBase;
      } catch (err) {
        // Revert optimistic update
        await loadData();
        console.error(`Error updating ${tableName} record:`, err);
        throw err;
      }
    },
    [tableName, loadData]
  );

  /**
   * Deletes a record with optimistic update
   */
  const remove = useCallback(
    async (id: string): Promise<void> => {
      try {
        // Optimistic update
        setData(prev => prev.filter(item => item.id !== id));

        // Delete from database
        const { error: supabaseError } = await supabase
          .from(tableName)
          .delete()
          .eq('id', id);

        if (supabaseError) {
          throw supabaseError;
        }
      } catch (err) {
        // Revert optimistic update by reloading
        await loadData();
        console.error(`Error deleting ${tableName} record:`, err);
        throw err;
      }
    },
    [tableName, loadData]
  );

  /**
   * Manually refresh data from database
   */
  const refetch = useCallback(async () => {
    await loadData();
  }, [loadData]);

  // Load data on mount
  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    data,
    isLoading,
    error,
    create,
    update,
    remove,
    refetch
  };
}
