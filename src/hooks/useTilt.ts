import { useRef } from "react";

export function useTilt(maxDeg = 6) {
  const ref = useRef<HTMLDivElement | null>(null);
  function onMove(e: React.MouseEvent) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -maxDeg;
    const ry = (px - 0.5) * maxDeg;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }
  function onLeave() {
    const el = ref.current; if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  }
  return { ref, onMove, onLeave };
}
