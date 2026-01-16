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
      <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[var(--surface)] backdrop-blur-xl border border-[var(--border)] shadow-[var(--shadow-md)] transition-all duration-700 hover:border-accent/30 hover:shadow-[var(--shadow-md)] hover:scale-[1.02]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Category Badge */}
        <div className="absolute top-[var(--space-24)] right-[var(--space-24)] z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-[var(--space-12)] py-[var(--space-4)] rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm"
          >
            <span className="text-[length:var(--font-100)] font-medium text-accent uppercase tracking-[var(--tracking-wide)]">{category}</span>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="relative p-[var(--space-32)] lg:p-[var(--space-48)]">
          <div className="grid lg:grid-cols-2 gap-[var(--space-32)] lg:gap-[var(--space-64)]">
            {/* Left Column */}
            <div className="stack [--stack-space:var(--space-32)]">
              {/* Enhanced Icon with modern glow effect */}
              <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent/10 blur-2xl rounded-[var(--radius-xl)] scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative p-[var(--space-24)] rounded-[var(--radius-xl)] bg-accent/10 border border-accent/20 backdrop-blur-sm">
                  <Icon className="w-[var(--space-48)] h-[var(--space-48)] text-accent drop-shadow-lg" />
                </div>
              </motion.div>

              {/* Enhanced Title and Description */}
              <div className="stack [--stack-space:var(--space-24)]">
                <h3 className="text-[length:var(--font-700)] font-semibold text-[var(--text)] leading-[var(--leading-tight)] tracking-[var(--tracking-tight)]">
                  {title}
                </h3>
                <p className="text-[length:var(--font-300)] text-[var(--text-muted)] leading-[var(--leading-body)]">{description}</p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-[var(--space-8)]">
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="px-[var(--space-12)] py-[var(--space-8)] rounded-[var(--radius-md)] bg-[var(--surface-strong)] border border-[var(--border)] text-[length:var(--font-100)] text-[var(--text-muted)] hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Enhanced Progress Bar */}
              <div className="stack [--stack-space:var(--space-16)]">
                <div className="flex justify-between items-center">
                  <TranslationText translationKey="home.technologies.proficiencyLevel" as="span" shimmerWidth="150px" className="text-[length:var(--font-100)] font-medium text-[var(--text-muted)] uppercase tracking-[var(--tracking-wide)]" />
                  <div className="flex items-center gap-[var(--space-8)]">
                    <span className="text-[length:var(--font-600)] font-semibold text-accent">{level}%</span>
                    <div className="w-[var(--space-8)] h-[var(--space-8)] bg-accent rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="relative h-[var(--space-16)] bg-[var(--surface-strong)] rounded-full overflow-hidden border border-[var(--border)]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent via-accent-strong to-accent rounded-full shadow-[var(--shadow-sm)]"
                  />
                  {/* Progress glow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent/50 to-accent/30 rounded-full blur-sm"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>

              {/* Enhanced Real World Impact */}
              <motion.div 
                className="p-[var(--space-32)] rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border)] hover:border-accent/30 transition-all duration-500"
                whileHover={{ y: -2 }}
              >
                <h4 className="text-[length:var(--font-500)] font-semibold text-[var(--text)] mb-[var(--space-16)] flex items-center gap-[var(--space-12)]">
                  <div className="w-[var(--space-12)] h-[var(--space-12)] bg-gradient-to-r from-accent to-accent-strong rounded-full" />
                  Real World Impact
                </h4>
                <p className="text-[var(--text-muted)] leading-[var(--leading-body)] text-[length:var(--font-300)]">{realWorldExample}</p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="stack [--stack-space:var(--space-32)]">
              <motion.div 
                className="p-[var(--space-32)] rounded-[var(--radius-lg)] bg-[var(--surface)] border border-[var(--border)] hover:border-accent/30 transition-all duration-500"
                whileHover={{ y: -2 }}
              >
                <h4 className="text-[length:var(--font-600)] font-semibold text-[var(--text)] mb-[var(--space-32)] flex items-center gap-[var(--space-12)]">
                  <div className="w-[var(--space-12)] h-[var(--space-12)] bg-gradient-to-r from-accent to-accent-strong rounded-full" />
                  Detailed Overview
                </h4>
                <div className="stack [--stack-space:var(--space-24)]">
                  {detailedDescription.map((desc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-[var(--space-16)] p-[var(--space-16)] rounded-[var(--radius-md)] bg-[var(--surface-strong)] hover:bg-[var(--surface)] transition-colors duration-300"
                    >
                      <div className="w-[var(--space-8)] h-[var(--space-8)] bg-gradient-to-r from-accent to-accent-strong rounded-full mt-[var(--space-8)] flex-shrink-0" />
                      <p className="text-[var(--text-muted)] leading-[var(--leading-body)] text-[length:var(--font-300)]">{desc}</p>
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
