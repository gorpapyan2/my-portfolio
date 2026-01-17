import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

const MotionLink = motion(Link);

export function HeroButton({ variant, href, children }: HeroButtonProps) {
  const baseStyles = "px-[var(--space-24)] py-[var(--space-12)] min-h-[var(--size-tap)] rounded-full font-medium text-[length:var(--font-200)] transition-[color,background-color,box-shadow,transform] inline-flex items-center gap-[var(--space-8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";
  const variants = {
    primary: "bg-accent hover:bg-accent-strong text-black shadow-[0_12px_30px_rgba(var(--accent),0.25)]",
    secondary: "border border-accent/60 text-accent hover:bg-accent/10 hover:border-accent"
  };

  return (
    <MotionLink
      to={`/${href}`}
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {variant === 'primary' && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 10H16M16 10L12 6M16 10L12 14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </MotionLink>
  );
}
