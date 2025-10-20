import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-[150px] md:text-[200px] font-bold text-[#edfc3a] leading-none mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>

          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Search className="w-16 h-16 text-gray-500" />
          </motion.div>

          {/* Error Message */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#edfc3a] hover:bg-[#f2ff4d] text-black font-medium rounded-full transition-colors"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#edfc3a] text-[#edfc3a] hover:bg-[#edfc3a]/10 font-medium rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="text-sm text-gray-500 mb-4">Popular Pages</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/about"
                className="text-sm text-gray-400 hover:text-[#edfc3a] transition-colors"
              >
                {t('nav.about')}
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/work"
                className="text-sm text-gray-400 hover:text-[#edfc3a] transition-colors"
              >
                {t('nav.work')}
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/blog"
                className="text-sm text-gray-400 hover:text-[#edfc3a] transition-colors"
              >
                {t('nav.blog')}
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/contact"
                className="text-sm text-gray-400 hover:text-[#edfc3a] transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

