import { LoadingSpinner } from './LoadingSpinner';
import { ParticlesBackground } from './ParticlesBackground';
import { ProgressRing } from './ProgressRing';
import { motion } from 'framer-motion';

const loadingMessages = [
  "Welcome! Getting everything ready for you...",
  "Just a moment, we're setting things up...",
  "Almost ready! Preparing your experience...",
  "Thanks for your patience...",
];

export function TranslationLoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0A0B] via-[#0a0a0f] to-[#0A0A0B]"
    >
      <ParticlesBackground />
      
      <div className="relative flex flex-col items-center gap-8 p-8 z-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <ProgressRing progress={undefined} />
          <LoadingSpinner />
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-80 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ 
              delay: 0.5, 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="text-xl font-medium text-white mb-2"
          >
            {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
          </motion.p>

          {/* Loading dots animation */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-[#edfc3a] rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xs text-white/40 mt-4"
        >
          Please wait while we load your preferred language...
        </motion.p>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#edfc3a]/10 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}

