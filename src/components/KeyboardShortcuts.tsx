import { useEffect } from "react";

interface KeyboardShortcutsProps {
  onScrollToTop: () => void;
  onToggleSettings: () => void;
  onToggleSound: () => void;
}

export default function KeyboardShortcuts({ 
  onScrollToTop, 
  onToggleSettings, 
  onToggleSound 
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger if no input is focused
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'Home':
          e.preventDefault();
          onScrollToTop();
          break;
        case 'Escape':
          e.preventDefault();
          onToggleSettings();
          break;
        case 's':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            onToggleSound();
          }
          break;
        case 'h':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            window.location.href = '/';
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onScrollToTop, onToggleSettings, onToggleSound]);

  return null;
}
