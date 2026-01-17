import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { TranslationText } from '../components/shared/TranslationText';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-[var(--space-16)] py-[var(--space-64)]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-[length:clamp(6rem,12vw,12rem)] font-semibold text-accent leading-none mb-[var(--space-16)] tracking-[var(--tracking-tight)]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Icon */}
          <motion.div
            className="flex justify-center mb-[var(--space-24)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Search className="w-[var(--space-64)] h-[var(--space-64)] text-[var(--text-muted)]" />
          </motion.div>

          {/* Error Message */}
          <motion.h2
            className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] mb-[var(--space-16)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TranslationText translationKey="pages.notFound.title" as="span" shimmerWidth="200px" />
          </motion.h2>

          <motion.p
            className="text-[length:var(--font-300)] text-[var(--text-muted)] mb-[var(--space-48)] max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <TranslationText translationKey="pages.notFound.message" as="span" shimmerWidth="500px" />
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              to="/"
              className="btn btn-primary inline-flex items-center gap-[var(--space-8)]"
            >
              <Home className="w-[var(--space-16)] h-[var(--space-16)]" />
              <TranslationText translationKey="pages.notFound.goHome" as="span" shimmerWidth="80px" />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn inline-flex items-center gap-[var(--space-8)] border border-accent text-accent hover:bg-accent/10"
            >
              <ArrowLeft className="w-[var(--space-16)] h-[var(--space-16)]" />
              <TranslationText translationKey="pages.notFound.goBack" as="span" shimmerWidth="80px" />
            </button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            className="mt-[var(--space-64)] pt-[var(--space-32)] border-t border-[var(--border)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="text-[length:var(--font-100)] text-[var(--text-muted)] mb-[var(--space-16)]">
              <TranslationText translationKey="pages.notFound.popularPages" as="span" shimmerWidth="120px" />
            </p>
            <div className="flex flex-wrap gap-[var(--space-12)] justify-center">
              <Link
                to="/about"
                className="text-[length:var(--font-100)] text-[var(--text-muted)] hover:text-accent transition-colors"
              >
                <TranslationText translationKey="nav.about" shimmerWidth="60px" />
              </Link>
              <span className="text-[var(--text-muted)]" aria-hidden="true">/</span>
              <Link
                to="/work"
                className="text-[length:var(--font-100)] text-[var(--text-muted)] hover:text-accent transition-colors"
              >
                <TranslationText translationKey="nav.work" shimmerWidth="50px" />
              </Link>
              <span className="text-[var(--text-muted)]" aria-hidden="true">/</span>
              <Link
                to="/blog"
                className="text-[length:var(--font-100)] text-[var(--text-muted)] hover:text-accent transition-colors"
              >
                <TranslationText translationKey="nav.blog" shimmerWidth="50px" />
              </Link>
              <span className="text-[var(--text-muted)]" aria-hidden="true">/</span>
              <Link
                to="/contact"
                className="text-[length:var(--font-100)] text-[var(--text-muted)] hover:text-accent transition-colors"
              >
                <TranslationText translationKey="nav.contact" shimmerWidth="70px" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


