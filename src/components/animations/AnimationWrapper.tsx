import React from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'slideIn' | 'scaleIn';
  delay?: number;
  className?: string;
}

export function AnimationWrapper({
  children,
  animation,
  delay = 0,
  className = '',
}: AnimationWrapperProps) {
  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `[animation-delay:${delay}ms]` : '';

  return (
    <div className={`${animationClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
