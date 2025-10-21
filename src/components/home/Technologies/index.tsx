import { TechnologyCarousel } from "./TechnologiesCarousel";
import { TechnologiesBackground } from "./TechnologiesBackground";
import { motion } from "framer-motion";

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
  return (
    <section className="py-32 bg-[#0A0A0B] relative overflow-hidden">
      <TechnologiesBackground />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Header with Better Typography */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 mb-6">
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-lime-400 uppercase tracking-wider">Technical Expertise</span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Technologies
            </span>
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              & Tools
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive testing frameworks and automation tools that drive quality engineering excellence
          </p>
        </motion.div>

        <TechnologyCarousel />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
    </section>
  );
}