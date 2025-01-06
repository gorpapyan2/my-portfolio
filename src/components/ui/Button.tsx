import React from 'react';
import { Shimmer } from './Shimmer';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  icon: Icon, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 group';
  
  const variants = {
    primary: 'bg-primary/90 hover:bg-primary text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm',
    ghost: 'hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
      <Shimmer className="absolute inset-0" />
    </button>
  );
}