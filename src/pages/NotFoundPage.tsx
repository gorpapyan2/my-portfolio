import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Home from 'lucide-react/dist/esm/icons/home';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import Search from 'lucide-react/dist/esm/icons/search';
import { TranslationText } from '../components/shared/TranslationText';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-orange-500/5 to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-[clamp(6rem,15vw,12rem)] font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent leading-none mb-8 tracking-tighter select-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-4 bg-white/5 rounded-full border border-white/10 shadow-lg backdrop-blur-sm">
              <Search className="w-12 h-12 text-[var(--text-muted)]" />
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-display text-[var(--text)] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TranslationText translationKey="pages.notFound.title" as="span" shimmerWidth="200px" />
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--text-muted)] mb-12 max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <TranslationText translationKey="pages.notFound.message" as="span" shimmerWidth="500px" />
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              to="/"
              className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
            >
              <Home className="w-5 h-5" />
              <TranslationText translationKey="pages.notFound.goHome" as="span" shimmerWidth="80px" />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-[var(--text)] hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <TranslationText translationKey="pages.notFound.goBack" as="span" shimmerWidth="80px" />
            </button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-4">
              <TranslationText translationKey="pages.notFound.popularPages" as="span" shimmerWidth="120px" />
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/about" className="px-3 py-1 text-sm text-[var(--text-muted)] hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <TranslationText translationKey="nav.about" shimmerWidth="60px" />
              </Link>
              <Link to="/work" className="px-3 py-1 text-sm text-[var(--text-muted)] hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <TranslationText translationKey="nav.work" shimmerWidth="50px" />
              </Link>
              <Link to="/blog" className="px-3 py-1 text-sm text-[var(--text-muted)] hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <TranslationText translationKey="nav.blog" shimmerWidth="50px" />
              </Link>
              <Link to="/contact" className="px-3 py-1 text-sm text-[var(--text-muted)] hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <TranslationText translationKey="nav.contact" shimmerWidth="70px" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
