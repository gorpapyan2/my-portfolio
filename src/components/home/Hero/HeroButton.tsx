import { motion } from 'framer-motion';

interface HeroButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

export function HeroButton({ variant, href, children }: HeroButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-colors";
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
    </motion.a>
  );
}