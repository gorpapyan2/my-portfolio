import { motion } from 'framer-motion';
import { ParticlesBackground } from './ParticlesBackground';

interface ErrorScreenProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  retryText?: string;
}

export function ErrorScreen({ 
  title = "Oops! Something unexpected happened",
  message, 
  onRetry,
  retryText = "Try Again"
}: ErrorScreenProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/30 to-slate-900"
    >
      <ParticlesBackground />
      
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-6 p-8 max-w-md z-10"
      >
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2 
          }}
          className="relative w-20 h-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-16 h-16 text-red-400"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Error Content */}
        <div className="text-center space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-white"
          >
            {title}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-base text-white/80 leading-relaxed">
              {message}
            </p>
            
            <p className="text-sm text-white/50">
              Don't worry, this happens sometimes. Please check your connection and try again.
            </p>
          </motion.div>
        </div>

        {/* Action Buttons */}
        {onRetry && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRetry}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg shadow-lg shadow-purple-500/30 transition-all duration-200"
            >
              {retryText}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm transition-all duration-200"
            >
              Go Home
            </motion.button>
          </motion.div>
        )}

        {/* Technical Details (for debugging) */}
        <motion.details
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 w-full"
        >
          <summary className="text-xs text-white/40 cursor-pointer hover:text-white/60 transition-colors">
            Technical Details
          </summary>
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="mt-2 p-3 bg-black/30 rounded-lg border border-white/10"
          >
            <code className="text-xs text-red-300 font-mono break-all">
              {message}
            </code>
          </motion.div>
        </motion.details>
      </motion.div>

      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}

