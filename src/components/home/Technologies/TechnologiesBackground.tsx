import { motion } from 'framer-motion';

export function TechnologiesBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-400/5 to-transparent" />

      {/* Simple circuit board patterns */}
      <div className="absolute inset-0 z-1">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Circuit traces */}
          <motion.path
            d="M10,20 L30,20 L30,40 L50,40 L50,60 L70,60 L70,80"
            stroke="#dbe938"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M80,15 L60,15 L60,35 L40,35 L40,55 L20,55 L20,75"
            stroke="#dbe938"
            strokeWidth="0.2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Circuit nodes */}
          <motion.circle
            cx="30"
            cy="20"
            r="0.8"
            fill="#dbe938"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50"
            cy="40"
            r="0.8"
            fill="#dbe938"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle
            cx="70"
            cy="60"
            r="0.8"
            fill="#dbe938"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0A0B] to-transparent z-1" />
    </div>
  );
}
