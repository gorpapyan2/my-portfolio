import Mail from 'lucide-react/dist/esm/icons/mail';
import { PageLayout } from '../../components/shared/PageLayout';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { TranslationText } from '../../components/shared/TranslationText';
import { motion } from 'framer-motion';

export function ContactPage() {
  return (
    <PageLayout className="!overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Custom Glass-Style Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm mb-8 transform rotate-3 hover:rotate-6 transition-transform duration-300"
          >
            <Mail className="w-10 h-10 text-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--text)] mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60"
          >
            <TranslationText translationKey="pages.contact.title" shimmerWidth="200px" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto"
          >
            <TranslationText translationKey="pages.contact.subtitle" as="span" shimmerWidth="400px" />
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          <div className="h-full">
            <ContactInfo />
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
