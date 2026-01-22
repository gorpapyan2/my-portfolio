import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import HelpCircle from 'lucide-react/dist/esm/icons/help-circle';
import X from 'lucide-react/dist/esm/icons/x';

export default function HelpTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: 'Home', description: 'Scroll to top' },
    { key: 'Esc', description: 'Toggle settings' },
    { key: 'Ctrl+S', description: 'Toggle sound effects' },
    { key: 'Ctrl+H', description: 'Go to home page' },
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[var(--space-24)] right-[var(--space-64)] z-50 w-[var(--size-tap)] h-[var(--size-tap)] bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--text)] hover:bg-[var(--surface-strong)] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <HelpCircle className="w-[var(--space-20)] h-[var(--space-20)]" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[var(--space-64)] right-[var(--space-24)] z-50 bg-[var(--bg-elevated)] backdrop-blur-md border border-[var(--border)] rounded-[var(--radius-lg)] p-[var(--space-16)] min-w-[16rem]"
          >
            <div className="flex items-center justify-between mb-[var(--space-12)]">
              <h3 className="text-[var(--text)] font-semibold text-[length:var(--font-200)]">Keyboard Shortcuts</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              >
                <X className="w-[var(--space-16)] h-[var(--space-16)]" />
              </button>
            </div>
            
            <div className="stack [--stack-space:var(--space-8)]">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)] text-[length:var(--font-100)]">{shortcut.description}</span>
                  <kbd className="px-[var(--space-8)] py-[var(--space-4)] bg-[var(--surface-strong)] border border-[var(--border)] rounded-[var(--radius-sm)] text-[length:var(--font-100)] text-[var(--text-muted)]">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
