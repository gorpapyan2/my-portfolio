import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TranslationText } from './shared/TranslationText';

const sectionsBase = [
  { id: 'about', labelKey: 'pages.about', icon: User },
  { id: 'experience', labelKey: 'experience.title', icon: Briefcase },
  { id: 'education', labelKey: 'pages.education', icon: GraduationCap },
  { id: 'skills', labelKey: 'pages.skills', icon: Lightbulb },
] as const;

export function SectionNavigation() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer for more reliable section detection
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all section elements
    sectionsBase.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate the position accounting for the fixed header
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;
      
      // Smooth scroll to the calculated position
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-4 py-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {sectionsBase.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-accent/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    <TranslationText translationKey={section.labelKey} shimmerWidth="100px" />
                  </span>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-accent/20 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 px-3 py-2 text-white"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                className="w-full h-0.5 bg-white"
              />
              <motion.div
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-full h-0.5 bg-white"
              />
              <motion.div
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                className="w-full h-0.5 bg-white"
              />
            </div>
            <span className="text-sm font-medium">
              <TranslationText translationKey="pages.sections" shimmerWidth="100px" />
            </span>
          </motion.button>

          <motion.div
            initial={false}
            animate={{ 
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0,
              pointerEvents: isOpen ? 'auto' : 'none'
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full left-0 mb-2 w-48 z-50"
          >
            <div className="space-y-1 bg-slate-900/80 backdrop-blur-md rounded-lg border border-white/20 p-2 shadow-xl">
              {sectionsBase.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-white bg-accent/20' 
                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">
                    <TranslationText translationKey={section.labelKey} shimmerWidth="100px" />
                  </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

