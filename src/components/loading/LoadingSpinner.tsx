export function LoadingSpinner() {
  return (
    <div className="relative w-32 h-32">
      {/* Main rotating circle */}
      <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm" />
      </div>
      
      {/* Inner pulsing circle */}
      <div className="absolute inset-4 bg-black rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse blur-md" />
      </div>
      
      {/* Orbiting element */}
      <div className="absolute w-4 h-4 bg-white rounded-full animate-[orbit_2s_linear_infinite]">
        <div className="absolute inset-0 bg-white rounded-full blur-sm" />
      </div>
    </div>
  );
}