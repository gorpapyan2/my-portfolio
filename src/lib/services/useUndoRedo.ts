import { useState, useCallback, useRef } from 'react';

interface EditableTranslation {
  en: string;
  ru: string;
  am: string;
}

interface UseUndoRedoState {
  past: EditableTranslation[];
  present: EditableTranslation;
  future: EditableTranslation[];
}

interface UseUndoRedoReturn {
  state: EditableTranslation;
  canUndo: boolean;
  canRedo: boolean;
  historySize: { undo: number; redo: number };
  push: (newState: EditableTranslation) => void;
  undo: () => void;
  redo: () => void;
  clear: () => void;
}

const MAX_HISTORY_SIZE = 10;

/**
 * Hook for managing undo/redo history for translation edits
 * Maintains immutable state with proper past/present/future stacks
 */
export function useUndoRedo(initialState: EditableTranslation): UseUndoRedoReturn {
  const [history, setHistory] = useState<UseUndoRedoState>({
    past: [],
    present: initialState,
    future: [],
  });

  const isTransitioningRef = useRef(false);

  const push = useCallback((newState: EditableTranslation) => {
    setHistory((prev) => {
      // Don't add if state hasn't changed
      if (JSON.stringify(prev.present) === JSON.stringify(newState)) {
        return prev;
      }

      const newPast = [...prev.past, prev.present];
      
      // Limit history size
      if (newPast.length > MAX_HISTORY_SIZE) {
        newPast.shift();
      }

      return {
        past: newPast,
        present: newState,
        future: [],
      };
    });
  }, []);

  const undo = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setHistory((prev) => {
      if (prev.past.length === 0) {
        isTransitioningRef.current = false;
        return prev;
      }

      const newPast = [...prev.past];
      const newPresent = newPast.pop() as EditableTranslation;
      const newFuture = [prev.present, ...prev.future];

      isTransitioningRef.current = false;
      return {
        past: newPast,
        present: newPresent,
        future: newFuture,
      };
    });
  }, []);

  const redo = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setHistory((prev) => {
      if (prev.future.length === 0) {
        isTransitioningRef.current = false;
        return prev;
      }

      const newFuture = [...prev.future];
      const newPresent = newFuture.shift() as EditableTranslation;
      const newPast = [...prev.past, prev.present];

      isTransitioningRef.current = false;
      return {
        past: newPast,
        present: newPresent,
        future: newFuture,
      };
    });
  }, []);

  const clear = useCallback(() => {
    setHistory({
      past: [],
      present: initialState,
      future: [],
    });
  }, [initialState]);

  return {
    state: history.present,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    historySize: { undo: history.past.length, redo: history.future.length },
    push,
    undo,
    redo,
    clear,
  };
}
