import { Card } from '../../shared/Card';
import { motion } from 'framer-motion';

interface EducationCardProps {
  degree: string;
  school: string;
  year: string;
  description: string;
}

export function EducationCard({ degree, school, year, description }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      <Card className="group hover:bg-white/10 transition-all duration-500">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-[#edfc3a] transition-colors duration-300">
              {degree}
            </h3>
            <p className="text-[#edfc3a] font-medium mt-1">{school}</p>
          </div>
          <span className="text-gray-400 bg-white/5 px-3 py-1 rounded-full text-sm">
            {year}
          </span>
        </div>
        
        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
          {description}
        </p>
        
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="w-2 h-2 bg-[#edfc3a] rounded-full group-hover:scale-125 transition-transform duration-300" />
            <span>Bachelor's Degree</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}