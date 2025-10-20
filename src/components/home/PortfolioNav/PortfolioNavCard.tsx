import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../shared/Card';

export interface PortfolioNavCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  index: number;
}

export function PortfolioNavCard({
  icon: Icon,
  title,
  description,
  href,
  index,
}: PortfolioNavCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={href} className="block h-full">
        <Card className="h-full flex flex-col group-hover:bg-white/10 transition-all duration-500">
          {/* Icon Container */}
          <div className="mb-6">
            <div className="inline-flex p-4 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a] 
            group-hover:bg-[#edfc3a]/20 group-hover:scale-110 transition-all duration-300">
              <Icon className="h-7 w-7" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white group-hover:text-[#edfc3a] transition-colors duration-300 mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-1 leading-relaxed mb-6">
            {description}
          </p>

          {/* CTA Arrow */}
          <div className="inline-flex items-center gap-2 text-[#edfc3a] font-medium transition-all duration-300 group-hover:gap-3">
            <span className="text-sm">Learn more</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#edfc3a]/5 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Card>
      </Link>
    </motion.div>
  );
}
