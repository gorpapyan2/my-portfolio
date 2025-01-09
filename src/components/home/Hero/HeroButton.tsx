import { motion } from 'framer-motion';

interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

export function HeroButton({ variant, href, children }: HeroButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2";
  const variants = {
    primary: "bg-[#edfc3a] hover:bg-[#f2ff4d] text-black",
    secondary: "border border-[#edfc3a] text-[#edfc3a] hover:bg-[#edfc3a]/10"
  };
  
  return (
    <motion.a
      href={href}
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
    </motion.a>
  );
}