/**
 * Generic hook for admin CRUD form management
 * Extracts common form state and CRUD operation patterns from admin components
 *
 * Supports:
 * - Translated services (with language parameter)
 * - Non-translated services
 * - Zod schema validation
 * - Optimistic UI with error handling
 * - Edit/create/delete workflows
 *
 * @example
 * ```tsx
 * const {
 *   showEditor,
 *   setShowEditor,
 *   editingItem,
 *   formData,
 *   setFormData,
 *   errors,
 *   handleSubmit,
 *   handleEdit,
 *   handleDelete,
 *   resetForm
 * } = useAdminCrudForm({
 *   items: experiences,
 *   isLoading,
 *   createItem: createExperience,
 *   updateItem: updateExperience,
 *   deleteItem: deleteExperience,
 *   schema: experienceSchema,
 *   initialFormData: { role: '', company: '', ... },
 *   language: activeLanguage,
 *   confirmDeleteKey: 'admin.experience.confirm.delete',
 *   deleteErrorKey: 'admin.experience.error.deleteFailed',
 *   itemToFormData: (exp) => ({ ...exp })
 * });
 * ```
 */

import { useState, useCallback } from 'react';
import { ZodSchema } from 'zod';
import type { Language } from '../context/LanguageContext';

export interface UseAdminCrudFormConfig<TItem extends { id: string }, TInsert, TUpdate> {
  /** Array of items from the service */
  items: TItem[];
  /** Loading state from the service */
  isLoading: boolean;
  /** Create function from the service */
  createItem: (data: TInsert, language?: Language) => Promise<TItem>;
  /** Update function from the service */
  updateItem: (id: string, data: TUpdate, language?: Language) => Promise<TItem>;
  /** Delete function from the service */
  deleteItem: (id: string) => Promise<void>;
  /** Zod schema for validation */
  schema: ZodSchema<TInsert>;
  /** Initial/reset form data */
  initialFormData: Partial<TInsert>;
  /** Optional language for translated services */
  language?: Language;
  /** Translation key for delete confirmation */
  confirmDeleteKey: string;
  /** Translation key for delete error */
  deleteErrorKey: string;
  /** Translation function */
  t: (key: string) => string;
  /** Optional custom mapping from item to form data */
  itemToFormData?: (item: TItem) => Partial<TInsert>;
}

export interface UseAdminCrudFormReturn<TItem, TInsert> {
  showEditor: boolean;
  setShowEditor: (show: boolean) => void;
  editingItem: TItem | null;
  formData: Partial<TInsert>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<TInsert>>>;
  errors: Record<string, string>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleEdit: (item: TItem) => void;
  handleDelete: (id: string) => Promise<void>;
  resetForm: () => void;
}

/**
 * Generic hook for admin CRUD form management
 */
export function useAdminCrudForm<
  TItem extends { id: string },
  TInsert,
  TUpdate = Partial<TInsert>
>(
  config: UseAdminCrudFormConfig<TItem, TInsert, TUpdate>
): UseAdminCrudFormReturn<TItem, TInsert> {
  const {
    createItem,
    updateItem,
    deleteItem,
    schema,
    initialFormData,
    language,
    confirmDeleteKey,
    deleteErrorKey,
    t,
    itemToFormData = (item) => item as unknown as Partial<TInsert>
  } = config;

  const [showEditor, setShowEditor] = useState(false);
  const [editingItem, setEditingItem] = useState<TItem | null>(null);
  const [formData, setFormData] = useState<Partial<TInsert>>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const resetForm = useCallback(() => {
    setEditingItem(null);
    setFormData(initialFormData);
    setErrors({});
    setShowEditor(false);
  }, [initialFormData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setErrors({});

      try {
        const validatedData = schema.parse(formData);

        if (editingItem) {
          await updateItem(editingItem.id, validatedData as TUpdate, language);
        } else {
          await createItem(validatedData, language);
        }

        resetForm();
      } catch (error) {
        if (error instanceof Error && 'issues' in error) {
          const fieldErrors: Record<string, string> = {};
          (error as { issues: Array<{ path: string[]; message: string }> }).issues.forEach((issue) => {
            fieldErrors[issue.path[0]] = issue.message;
          });
          setErrors(fieldErrors);
        }
      }
    },
    [formData, editingItem, schema, createItem, updateItem, language, resetForm]
  );

  const handleEdit = useCallback(
    (item: TItem) => {
      setEditingItem(item);
      setFormData(itemToFormData(item));
      setShowEditor(true);
    },
    [itemToFormData]
  );

  const handleDelete = useCallback(
    async (id: string) => {
      if (confirm(t(confirmDeleteKey))) {
        try {
          await deleteItem(id);
        } catch (error) {
          console.error('Error deleting item:', error);
          alert(t(deleteErrorKey));
        }
      }
    },
    [deleteItem, confirmDeleteKey, deleteErrorKey, t]
  );

  return {
    showEditor,
    setShowEditor,
    editingItem,
    formData,
    setFormData,
    errors,
    handleSubmit,
    handleEdit,
    handleDelete,
    resetForm
  };
}
