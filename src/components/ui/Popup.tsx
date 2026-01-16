import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export function Popup({ isOpen, onClose, message }: PopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-[var(--space-64)] right-[var(--space-16)] z-50"
        >
          <div className="bg-[var(--bg-elevated)] border border-accent/20 rounded-[var(--radius-md)] shadow-[var(--shadow-sm)] p-[var(--space-16)] flex items-start gap-[var(--space-12)] max-w-md">
            <CheckCircle className="h-[var(--space-20)] w-[var(--space-20)] text-accent flex-shrink-0 mt-[var(--space-4)]" />
            <div className="flex-1">
              <p className="text-[var(--text)] text-[length:var(--font-100)]">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              aria-label="Close notification"
            >
              <X className="h-[var(--space-20)] w-[var(--space-20)]" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
