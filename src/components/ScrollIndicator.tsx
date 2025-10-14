import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-[#edfc3a] to-white/60 rounded-full"
          style={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <motion.div
        className="absolute -right-2 top-0 w-2 h-2 bg-[#edfc3a] rounded-full"
        style={{ top: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
