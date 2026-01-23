import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Sun from 'lucide-react/dist/esm/icons/sun';
import Moon from 'lucide-react/dist/esm/icons/moon';
import Monitor from 'lucide-react/dist/esm/icons/monitor';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
      >
        {themes.find(t => t.value === theme)?.icon && (
          (() => {
            const Icon = themes.find(t => t.value === theme)!.icon;
            return <Icon className="w-5 h-5" />;
          })()
        )}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.95 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          x: isOpen ? 0 : 20, 
          scale: isOpen ? 1 : 0.95 
        }}
        transition={{ duration: 0.2 }}
        className={`absolute top-16 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 min-w-[120px] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => {
              setTheme(value);
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
              theme === value 
                ? 'bg-accent/20 text-accent' 
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </motion.div>
    </div>
  );
}

