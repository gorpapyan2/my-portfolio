import { Card } from '../../shared/Card';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export function ExperienceCard({ role, company, period, description, achievements }: ExperienceCardProps) {
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
              {role}
            </h3>
            <p className="text-[#edfc3a] font-medium">{company}</p>
          </div>
          <span className="text-gray-400 bg-white/5 px-3 py-1 rounded-full text-sm">
            {period}
          </span>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide">
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-[#edfc3a] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}