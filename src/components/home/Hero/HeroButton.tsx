import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

const MotionLink = motion(Link);

export function HeroButton({ variant, href, children }: HeroButtonProps) {
  const baseStyles = "px-[var(--space-24)] py-[var(--space-12)] min-h-[var(--size-tap)] rounded-full font-medium text-[length:var(--font-200)] transition-colors inline-flex items-center gap-[var(--space-8)]";
  const variants = {
    primary: "bg-accent hover:bg-accent-strong text-black",
    secondary: "border border-accent text-accent hover:bg-accent/10"
  };
  
  return (
    <MotionLink
      to={`/${href}`}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {variant === 'primary' && (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
      //     xmlns="http://www.w3.org/2000/svg"
        >
      //     <path 
      //       d="M12 4V20M12 20L18 14M12 20L6 14" 
      //       stroke="currentColor" 
      //       strokeWidth="2" 
      //       strokeLinecap="round" 
      //       strokeLinejoin="round"
          />
        </svg>
      )}
    </MotionLink>
  );
}
