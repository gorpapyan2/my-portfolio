import { useEffect, useState } from "react";

interface PerformanceMonitorProps {
  enabled?: boolean;
}

export default function PerformanceMonitor({ enabled = false }: PerformanceMonitorProps) {
  const [fps, setFps] = useState(0);
  const [frameTime, setFrameTime] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measurePerformance = (currentTime: number) => {
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        const currentFrameTime = (currentTime - lastTime) / frameCount;
        
        setFps(currentFps);
        setFrameTime(Math.round(currentFrameTime * 100) / 100);
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measurePerformance);
    };

    animationId = requestAnimationFrame(measurePerformance);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg p-3 text-xs text-white">
      <div className="space-y-1">
        <div>FPS: <span className="text-accent">{fps}</span></div>
        <div>Frame: <span className="text-accent">{frameTime}ms</span></div>
        <div className={`text-xs ${fps >= 55 ? 'text-green-400' : fps >= 30 ? 'text-yellow-400' : 'text-red-400'}`}>
          {fps >= 55 ? 'Excellent' : fps >= 30 ? 'Good' : 'Poor'}
        </div>
      </div>
    </div>
  );
}

