import { Technology } from ".";
import { motion } from "framer-motion";
import { TranslationText } from "../../shared/TranslationText";

export const TechnologyCard = ({ technology }: { technology: Technology }) => {
  const { icon: Icon, title, description, level, detailedDescription, realWorldExample, category, tags } = technology;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative"
    >
      {/* Enhanced Glassmorphism container */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-lime-500/10 transition-all duration-700 hover:border-lime-400/20 hover:scale-[1.02]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 via-transparent to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Category Badge */}
        <div className="absolute top-6 right-6 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 backdrop-blur-sm"
          >
            <span className="text-xs font-medium text-lime-400 uppercase tracking-wider">{category}</span>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="relative p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Enhanced Icon with modern glow effect */}
              <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400/30 to-emerald-400/30 blur-2xl rounded-3xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative p-6 rounded-3xl bg-gradient-to-br from-lime-400/10 to-emerald-400/5 border border-lime-400/20 backdrop-blur-sm">
                  <Icon className="w-12 h-12 text-lime-400 drop-shadow-lg" />
                </div>
              </motion.div>

              {/* Enhanced Title and Description */}
              <div className="space-y-6">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                  {title}
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">{description}</p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-lime-400/10 hover:border-lime-400/30 hover:text-lime-400 transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Enhanced Progress Bar */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <TranslationText translationKey="home.technologies.proficiencyLevel" as="span" shimmerWidth="150px" className="text-sm font-medium text-gray-400 uppercase tracking-wider" />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-lime-400">{level}%</span>
                    <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="relative h-4 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-400 rounded-full shadow-lg shadow-lime-400/25"
                  />
                  {/* Progress glow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-lime-400/50 to-emerald-400/50 rounded-full blur-sm"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>

              {/* Enhanced Real World Impact */}
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-lime-400/20 transition-all duration-500"
                whileHover={{ y: -2 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full" />
                  Real World Impact
                </h4>
                <p className="text-gray-300 leading-relaxed text-lg">{realWorldExample}</p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <motion.div 
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-lime-400/20 transition-all duration-500"
                whileHover={{ y: -2 }}
              >
                <h4 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full" />
                  Detailed Overview
                </h4>
                <div className="space-y-6">
                  {detailedDescription.map((desc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed text-lg">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
