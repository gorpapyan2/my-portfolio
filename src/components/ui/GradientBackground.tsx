import React from 'react';

interface GradientBackgroundProps {
  className?: string;
  children: React.ReactNode;
}

export function GradientBackground({ className = '', children }: GradientBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Primary gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px]" />
      
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}