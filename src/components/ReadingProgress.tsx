import { useState, useEffect } from 'react';

interface ReadingProgressProps {
  className?: string;
}

export function ReadingProgress({ className = "" }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-[var(--space-2)] bg-transparent z-50 ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-accent to-accent-strong transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

