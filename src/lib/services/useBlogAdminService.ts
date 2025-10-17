import { useCallback, useRef, useState } from 'react';
import { BlogPostInsert, BlogPostUpdate } from '../../types/database.types';
import { validateSlugUniqueness } from './useMarkdownService';

const AUTOSAVE_DELAY = 5000; // 5 seconds
const DRAFT_PREFIX = 'blog_draft_';

export interface BlogAdminService {
  autosaveDraft: (postId: string | null, formData: BlogPostInsert | BlogPostUpdate) => void;
  restoreDraft: (postId: string | null) => (BlogPostInsert | BlogPostUpdate) | null;
  clearDraft: (postId: string | null) => void;
  checkSlugUniqueness: (slug: string, excludeId?: string) => Promise<boolean>;
  getDraftKey: (postId: string | null) => string;
  getLastSavedTime: (postId: string | null) => string | null;
  hasDraft: (postId: string | null) => boolean;
  getDraftTimestamp: (postId: string | null) => number | null;
}

/**
 * Hook for admin blog operations
 * Handles autosave, draft management, and slug validation
 */
export function useBlogAdminService(): BlogAdminService {
  const autosaveTimeoutRef = useRef<NodeJS.Timeout>();
  const [lastSavedTimes, setLastSavedTimes] = useState<Record<string, number>>({});

  const getDraftKey = useCallback((postId: string | null): string => {
    return `${DRAFT_PREFIX}${postId || 'new'}`;
  }, []);

  const getLastSavedTime = useCallback((postId: string | null): string | null => {
    const key = getDraftKey(postId);
    const timestamp = lastSavedTimes[key];
    if (!timestamp) return null;

    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }, [getDraftKey, lastSavedTimes]);

  const autosaveDraft = useCallback(
    (postId: string | null, formData: BlogPostInsert | BlogPostUpdate) => {
      // Clear any pending autosave
      if (autosaveTimeoutRef.current) {
        clearTimeout(autosaveTimeoutRef.current);
      }

      // Set new timeout for autosave
      autosaveTimeoutRef.current = setTimeout(() => {
        try {
          const draftKey = getDraftKey(postId);
          localStorage.setItem(draftKey, JSON.stringify(formData));
          
          // Update last saved time
          setLastSavedTimes((prev) => ({
            ...prev,
            [draftKey]: Date.now(),
          }));
        } catch (err) {
          console.error('Error autosaving draft:', err);
        }
      }, AUTOSAVE_DELAY);
    },
    [getDraftKey]
  );

  const restoreDraft = useCallback(
    (postId: string | null): (BlogPostInsert | BlogPostUpdate) | null => {
      try {
        const draftKey = getDraftKey(postId);
        const draft = localStorage.getItem(draftKey);
        return draft ? JSON.parse(draft) : null;
      } catch (err) {
        console.error('Error restoring draft:', err);
        return null;
      }
    },
    [getDraftKey]
  );

  const clearDraft = useCallback(
    (postId: string | null) => {
      try {
        const draftKey = getDraftKey(postId);
        localStorage.removeItem(draftKey);
        
        // Clear last saved time
        setLastSavedTimes((prev) => {
          const newTimes = { ...prev };
          delete newTimes[draftKey];
          return newTimes;
        });
      } catch (err) {
        console.error('Error clearing draft:', err);
      }
    },
    [getDraftKey]
  );

  const hasDraft = useCallback(
    (postId: string | null): boolean => {
      try {
        const draftKey = getDraftKey(postId);
        return localStorage.getItem(draftKey) !== null;
      } catch (err) {
        return false;
      }
    },
    [getDraftKey]
  );

  const getDraftTimestamp = useCallback(
    (postId: string | null): number | null => {
      try {
        const draftKey = getDraftKey(postId);
        const draft = localStorage.getItem(draftKey);
        if (!draft) return null;
        
        // Try to get timestamp from metadata
        const parsed = JSON.parse(draft);
        return parsed._draftTimestamp || null;
      } catch (err) {
        return null;
      }
    },
    [getDraftKey]
  );

  const checkSlugUniqueness = useCallback(
    async (slug: string, excludeId?: string): Promise<boolean> => {
      return validateSlugUniqueness(slug, excludeId);
    },
    []
  );

  return {
    autosaveDraft,
    restoreDraft,
    clearDraft,
    checkSlugUniqueness,
    getDraftKey,
    getLastSavedTime,
    hasDraft,
    getDraftTimestamp,
  };
}
