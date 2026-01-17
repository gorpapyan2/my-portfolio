import { TechnologyCarousel } from "./TechnologiesCarousel";
import { TechnologiesBackground } from "./TechnologiesBackground";
import { motion, useReducedMotion } from "framer-motion";
import { TranslationText } from "../../shared/TranslationText";

export interface Technology {
  icon: React.ElementType;
  title: string;
  description: string;
  detailedDescription: string[];
  realWorldExample: string;
  level: number;
  category: string;
  tags: string[];
}

export function Technologies() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-[var(--space-48)] md:py-[var(--space-64)] bg-[var(--bg-elevated)] relative overflow-hidden">
      <TechnologiesBackground />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header with Better Typography */}
        <motion.div 
          className="text-center mb-[var(--space-32)] md:mb-[var(--space-40)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-[var(--space-8)] px-[var(--space-16)] py-[var(--space-8)] rounded-full bg-accent/10 border border-accent/20 mb-[var(--space-24)]">
            <div className="w-[var(--space-8)] h-[var(--space-8)] bg-accent rounded-full animate-pulse" />
            <TranslationText translationKey="home.technologies.title" as="span" shimmerWidth="180px" className="text-[length:var(--font-100)] font-medium text-accent uppercase tracking-[var(--tracking-wide)]" />
          </div>
          
          <h2 className="text-[length:var(--font-900)] font-semibold font-display mb-[var(--space-24)] text-[var(--text)]">
            <span>
              Technologies
            </span>
            <br />
            <span className="text-accent">
              & Tools
            </span>
          </h2>
          
          <p className="text-[length:var(--font-300)] text-[var(--text-muted)] max-w-3xl mx-auto leading-[var(--leading-body)]">
            Comprehensive testing frameworks and automation tools that drive quality engineering excellence
          </p>
        </motion.div>

        <TechnologyCarousel />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent" />
    </section>
  );
}
