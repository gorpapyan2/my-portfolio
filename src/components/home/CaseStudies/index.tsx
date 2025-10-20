import { motion } from 'framer-motion';
import { useLanguage } from '../../../context/LanguageContext';
import { useBlogService } from '../../../lib/services/useBlogService';
import { LoadingSpinner } from '../../loading/LoadingSpinner';

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  readTime: number;
  index: number;
}

function CaseStudyCard({ title, excerpt, slug, image, readTime, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <a
        href={`/blog/${slug}`}
        className="block h-full rounded-xl overflow-hidden bg-white/5 border border-white/10 
        hover:border-[#edfc3a]/30 hover:bg-white/10 transition-all duration-300 
        hover:shadow-lg hover:shadow-[#edfc3a]/10"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#edfc3a]/10 to-transparent">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-192px)]">
          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-[#edfc3a] transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-400 mb-4 flex-1 line-clamp-3 group-hover:text-gray-300 transition-colors">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <span className="text-xs text-gray-500 group-hover:text-[#edfc3a]/70 transition-colors">
              {readTime} min read
            </span>
            <span className="text-xs font-semibold text-[#edfc3a] opacity-0 group-hover:opacity-100 transition-all duration-300">
              Read Case Study →
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function CaseStudies() {
  const { t } = useLanguage();
  const { blogPosts, isLoading } = useBlogService();

  // Find case study posts by slug pattern
  const caseStudySlugs = [
    'stabilized-ui-e2e-saas',
    'deterministic-e2e-service-virtualization',
    'integration-tests-enrichment-service',
  ];

  const caseStudies = blogPosts
    .filter(post => caseStudySlugs.includes(post.slug))
    .slice(0, 3);

  if (isLoading || caseStudies.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Real-World Results
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Case studies showcasing how I've improved test automation, reduced flakiness, and integrated quality into CI/CD pipelines.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((post, idx) => (
            <CaseStudyCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              image={post.image || 'https://images.unsplash.com/photo-1516321318423-f06f70a504f3?w=800'}
              readTime={post.read_time}
              index={idx}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg 
            bg-[#edfc3a]/10 text-[#edfc3a] border border-[#edfc3a]/30
            hover:bg-[#edfc3a]/20 hover:border-[#edfc3a]/60 transition-all duration-300"
          >
            Explore More Articles
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
