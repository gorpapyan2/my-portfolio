import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, X } from "lucide-react";

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
        className="fixed bottom-6 right-20 z-50 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <HelpCircle className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 bg-black/90 backdrop-blur-md border border-white/20 rounded-2xl p-4 min-w-[250px]"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">Keyboard Shortcuts</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">{shortcut.description}</span>
                  <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-xs text-white/80">
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
