export function LoadingSpinner() {
  return (
    <div className="relative w-16 h-16">
      {/* Modern rotating ring with gradient */}
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent/30 animate-spin-smooth" />
      
      {/* Inner rotating ring (counter-rotation for depth) */}
      <div className="absolute inset-2 rounded-full border-[3px] border-transparent border-b-[#dbe938] border-l-[#dbe938]/30 animate-spin-reverse" />
      
      {/* Center pulsing dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse-smooth" />
      </div>
    </div>
  );
}
