import { motion } from "framer-motion";
import HeroPortrait from "./HeroPortrait";
import InfoCard from "./InfoCard";
import Sparkles from "./Sparkles";
import Typewriter from "./Typewriter";
import { useLanguage } from "../context/LanguageContext";
import { assetUrls } from "../lib/config";
import { TranslationText } from "./shared/TranslationText";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.1 }}
          className="sticky top-24"
        >
          <HeroPortrait
            src={assetUrls.portrait}
            alt={t('about.portraitAlt')}
          />
          <Sparkles />
        </motion.div>

        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22,1,0.36,1], delay: 0.15 }}
            className="text-2xl md:text-3xl font-semibold text-slate-100 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent"
          >
            <Typewriter 
              text={t('about.headline')}
              speed={30}
              delay={0.5}
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InfoCard 
              title={<TranslationText translationKey="about.professionalJourney" shimmerWidth="200px" />}
              delay={0.20}
            >
              <TranslationText translationKey="about.professionalJourney.content" as="span" shimmerWidth="400px" />
            </InfoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            <InfoCard 
              title={<TranslationText translationKey="about.philosophy" shimmerWidth="150px" />}
              delay={0.26}
            >
              <TranslationText translationKey="about.philosophy.content" as="span" shimmerWidth="400px" />
            </InfoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <InfoCard 
              title={<TranslationText translationKey="about.toolbox" shimmerWidth="120px" />}
              delay={0.32}
            >
              <TranslationText translationKey="about.toolbox.content" as="span" shimmerWidth="400px" />
            </InfoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
