import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowUp from 'lucide-react/dist/esm/icons/arrow-up';
import Home from 'lucide-react/dist/esm/icons/home';
import { Link } from "react-router-dom";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check initial position
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-[var(--space-24)] right-[var(--space-24)] z-40 flex flex-col gap-[var(--space-12)]"
        >
          <motion.button
            onClick={scrollToTop}
            className="w-[var(--size-tap)] h-[var(--size-tap)] bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--text)] hover:bg-[var(--surface-strong)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-[var(--space-20)] h-[var(--space-20)]" aria-hidden="true" />
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="w-[var(--size-tap)] h-[var(--size-tap)] bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--text)] hover:bg-[var(--surface-strong)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              aria-label="Go to home"
            >
              <Home className="w-[var(--space-20)] h-[var(--space-20)]" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
