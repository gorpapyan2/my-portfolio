import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroScroll() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#edfc3a]"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </motion.div>
  );
}
