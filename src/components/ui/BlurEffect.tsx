interface BlurEffectProps {
  color?: string;
  className?: string;
}

export function BlurEffect({
  color = 'rgba(37, 235, 47, 0.15)',
  className = '',
}: BlurEffectProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 h-[300px] z-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full"
        style={{
          background: `radial-gradient(circle, ${color} 0%, rgba(37, 99, 235, 0) 70%)`,
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
}
