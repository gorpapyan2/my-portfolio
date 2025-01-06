interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 
                    transition-all duration-300 hover:transform hover:-translate-y-1 
                    hover:bg-white/10 ${className}`}>
      {children}
    </div>
  );
}