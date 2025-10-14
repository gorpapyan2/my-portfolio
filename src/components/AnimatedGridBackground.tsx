import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import "../styles/animated-grid.css";

export default function AnimatedGridBackground({ children }: { children: React.ReactNode }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });

  const tx = useTransform(sx, v => `translateX(${v}px)`);
  const ty = useTransform(sy, v => `translateY(${v}px)`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth:w, innerHeight:h } = window;
      mx.set(((e.clientX / w) - 0.5) * 8);   // max 8px parallax
      my.set(((e.clientY / h) - 0.5) * 8);
    };
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div style={{ transform: `${tx} ${ty}` }} className="bg-grid min-h-screen">
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
