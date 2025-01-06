export function ParticlesBackground() {
  return (
    <div className="absolute inset-0 opacity-50">
      {/* Animated particles grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff10_0.5px,_transparent_1px)] [background-size:24px_24px] animate-[particles_20s_linear_infinite]" />
      
      {/* Subtle wave overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#ffffff05_1px,_transparent_1px),linear-gradient(to_bottom,_#ffffff05_1px,_transparent_1px)] [background-size:48px_48px] animate-[wave_10s_ease-in-out_infinite]" />
    </div>
  );
}