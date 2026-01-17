import { Card } from '../../shared/Card';
import { motion, useReducedMotion } from 'framer-motion';

interface EducationCardProps {
  degree: string;
  school: string;
  year: string;
  description: string;
}

export function EducationCard({ degree, school, year, description }: EducationCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <Card className="group hover:bg-[var(--surface-strong)] transition-[background-color,border-color,box-shadow] duration-500">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-semibold text-[var(--text)] group-hover:text-accent transition-colors duration-300">
              {degree}
            </h3>
            <p className="text-accent font-medium mt-1">{school}</p>
          </div>
          <span className="text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1 rounded-full text-sm">
            {year}
          </span>
        </div>
        
        <p className="text-[var(--text-muted)] leading-relaxed group-hover:text-[var(--text)] transition-colors duration-300">
          {description}
        </p>
        
        <div className="mt-6 pt-4 border-t border-[var(--border)]">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
            <span>Bachelor's Degree</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
