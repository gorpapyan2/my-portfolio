import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Settings } from "lucide-react";

interface SettingsPanelProps {
  onSoundToggle: (enabled: boolean) => void;
  onMotionToggle: (enabled: boolean) => void;
}

export default function SettingsPanel({ onSoundToggle, onMotionToggle }: SettingsPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    onSoundToggle(newState);
  };

  const toggleMotion = () => {
    const newState = !motionEnabled;
    setMotionEnabled(newState);
    onMotionToggle(newState);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Settings className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 min-w-[200px]"
          >
            <h3 className="text-white font-semibold mb-4">Settings</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Sound Effects</span>
                <button
                  onClick={toggleSound}
                  className={`w-10 h-6 rounded-full transition-colors duration-300 ${
                    soundEnabled ? 'bg-[#edfc3a]' : 'bg-white/20'
                  }`}
                >
                  <motion.div
                    className="w-4 h-4 bg-white rounded-full"
                    animate={{ x: soundEnabled ? 20 : 4 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Animations</span>
                <button
                  onClick={toggleMotion}
                  className={`w-10 h-6 rounded-full transition-colors duration-300 ${
                    motionEnabled ? 'bg-[#edfc3a]' : 'bg-white/20'
                  }`}
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
