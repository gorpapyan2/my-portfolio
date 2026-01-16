interface ProgressRingProps {
  progress?: number;
}

export function ProgressRing({ progress = 0 }: ProgressRingProps) {
  const radius = 60;
  const strokeWidth = 4;
  const normalizedProgress = Math.min(100, Math.max(0, progress));
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (normalizedProgress / 100) * circumference;

  return (
    <div className="absolute inset-0 -rotate-90">
      <svg width="100%" height="100%" viewBox="0 0 132 132">
        <circle
          cx="66"
          cy="66"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="66"
          cy="66"
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-[stroke-dashoffset] duration-500 ease-in-out"
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(var(--accent))" />
            <stop offset="100%" stopColor="#dbe938" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
