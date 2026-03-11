import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Settings from 'lucide-react/dist/esm/icons/settings';

interface SettingsPanelProps {
  onSoundToggle: (enabled: boolean) => void;
  onMotionToggle: (enabled: boolean) => void;
}

function readBool(key: string, fallback: boolean): boolean {
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored === 'true' : fallback;
  } catch {
    return fallback;
  }
}

export default function SettingsPanel({ onSoundToggle, onMotionToggle }: SettingsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => readBool('settings-sound', false));
  const [motionEnabled, setMotionEnabled] = useState(() => readBool('settings-motion', true));

  // Sync initial persisted values to parent on first mount
  useEffect(() => {
    onSoundToggle(soundEnabled);
    onMotionToggle(motionEnabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem('settings-sound', String(next));
    onSoundToggle(next);
  };

  const toggleMotion = () => {
    const next = !motionEnabled;
    setMotionEnabled(next);
    localStorage.setItem('settings-motion', String(next));
    onMotionToggle(next);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 w-12 h-12 bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] rounded-full flex items-center justify-center text-[var(--text)] hover:bg-[var(--surface-strong)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        aria-label="Open settings"
        aria-expanded={isOpen}
      >
        <Settings className="w-5 h-5" aria-hidden="true" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-6 z-50 bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-4 min-w-[200px] shadow-[0_20px_50px_rgba(7,10,18,0.35)]"
            role="dialog"
            aria-label="Settings panel"
          >
            <h3 className="text-[var(--text)] font-semibold mb-4">Settings</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)] text-sm">Sound Effects</span>
                <button
                  onClick={toggleSound}
                  className={`w-10 h-6 rounded-full transition-colors duration-300 ${soundEnabled ? 'bg-accent' : 'bg-[var(--border)]'
                    }`}
                  aria-pressed={soundEnabled}
                  aria-label="Toggle sound effects"
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{ x: soundEnabled ? 20 : 4 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[var(--text-muted)] text-sm">Animations</span>
                <button
                  onClick={toggleMotion}
                  className={`w-10 h-6 rounded-full transition-colors duration-300 ${motionEnabled ? 'bg-accent' : 'bg-[var(--border)]'
                    }`}
                  aria-pressed={motionEnabled}
                  aria-label="Toggle animations"
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{ x: motionEnabled ? 20 : 4 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
