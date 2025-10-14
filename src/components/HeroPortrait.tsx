import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

export default function HeroPortrait({ src, alt }: { src: string; alt: string }) {
  const tilt = useTilt(6);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.1 }}
      className="group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMove} onMouseLeave={tilt.onLeave}
        className="relative"
        style={{ transition: "transform 300ms cubic-bezier(.2,.8,.2,1)" }}
      >
        <img src={src} alt={alt} className="block w-full h-full object-cover" />
        {/* sheen */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20" />
        <div className="pointer-events-none absolute inset-0"
          style={{
            maskImage: "linear-gradient(120deg, transparent 20%, white 50%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(120deg, transparent 20%, white 50%, transparent 80%)",
            transform: "translateX(-120%)"
          }}
        />
      </div>
    </motion.div>
  );
}
