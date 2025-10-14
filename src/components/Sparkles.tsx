export default function Sparkles() {
  const dots = Array.from({ length: 6 });
  return (
    <div className="pointer-events-none absolute inset-0 group-hover:opacity-100 opacity-60 transition-opacity duration-500">
      {dots.map((_, i) => (
        <div key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px] group-hover:bg-white/60 transition-colors duration-300"
          style={{
            left: `${10 + i * 14}%`,
            top: `${20 + (i % 3) * 18}%`,
            animation: `float${i} 10s ease-in-out ${i * 0.8}s infinite alternate`
          }}
        />
      ))}
      <style>
        {Array.from({ length: 6 }).map((_, i) =>
          `@keyframes float${i}{from{transform:translateY(0)}to{transform:translateY(${4 + (i%3)}px)}}`
        ).join("\n")}
      </style>
    </div>
  );
}
