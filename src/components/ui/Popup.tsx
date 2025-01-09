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
          className="fixed top-24 right-4 z-50"
        >
          <div className="bg-[#1a1a1f] border border-[#edfc3a]/20 rounded-lg shadow-lg p-4 flex items-start gap-3 max-w-md">
            <CheckCircle className="h-5 w-5 text-[#edfc3a] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-white">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}