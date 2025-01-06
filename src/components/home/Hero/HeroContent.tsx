import { motion } from 'framer-motion';
import { HeroButton } from './HeroButton';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 h-[calc(100vh-80px)] flex flex-col justify-center">
      <motion.div 
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Delivering Quality,
          <br />
          One Test at a Time
        </h1>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl">
          Hi, I'm a QA Engineer specializing in ensuring flawless software delivery. 
          Let me help you safeguard your applications through comprehensive test 
          automation and meticulous quality checks.
        </p>

        <div className="flex flex-wrap gap-4">
          <HeroButton variant="primary" href="/work">
            See My Work
          </HeroButton>
          <HeroButton variant="secondary" href="/contact">
            Contact Me
          </HeroButton>
        </div>
      </motion.div>
    </div>
  );
}