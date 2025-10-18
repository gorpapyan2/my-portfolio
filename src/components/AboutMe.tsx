import { motion } from "framer-motion";
import HeroPortrait from "./HeroPortrait";
import InfoCard from "./InfoCard";
import Sparkles from "./Sparkles";
import Typewriter from "./Typewriter";
import { useLanguage } from "../context/LanguageContext";
import { assetUrls } from "../lib/config";

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
            alt="Gor Papyan"
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
              text="Mid-level QA Automation Engineer specializing in Playwright and CI/CD"
              speed={30}
              delay={0.5}
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InfoCard title={t('about.professionalJourney')} delay={0.20}>
              QA Automation Engineer delivering reliable UI and API automation with Playwright, embedded in Agile teams since October 2022. I build frameworks, integrate them into CI/CD (AWS CodeBuild/CodeArtifact), and use data isolation and tuned timeouts to stabilize regressions and cut runtime.
            </InfoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            <InfoCard title={t('about.philosophy')} delay={0.26}>
              Quality isn't only finding bugs—it's enabling confident, fast delivery. Every test is a design decision: make it readable, deterministic, and valuable to developers and users alike.
            </InfoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <InfoCard title={t('about.toolbox')} delay={0.32}>
              Playwright (TypeScript), PyTest, XCUITest; REST, Postman, Mountebank; PostgreSQL; Git; AWS CodeBuild & CodeArtifact; TestRail; Jira.
            </InfoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
