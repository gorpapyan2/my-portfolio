import { motion, useScroll, useSpring } from "framer-motion";

export default function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#edfc3a] via-white to-[#edfc3a] z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
