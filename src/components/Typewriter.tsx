import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export default function Typewriter({ text, speed = 50, delay = 0 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(text);
      setCurrentIndex(text.length);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, shouldReduceMotion]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: shouldReduceMotion ? 0 : delay, duration: shouldReduceMotion ? 0 : 0.2 }}
    >
      {displayText}
      <motion.span
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, repeat: shouldReduceMotion ? 0 : Infinity }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </motion.span>
  );
}
