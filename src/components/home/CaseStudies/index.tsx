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
        className="block h-full rounded-[var(--radius-lg)] overflow-hidden bg-[var(--surface)] border border-[var(--border)] 
        hover:border-accent/30 hover:bg-[var(--surface-strong)] transition-colors duration-300 
        hover:shadow-lg hover:shadow-accent/10"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-transparent">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-[var(--space-24)] flex flex-col h-[calc(100%-192px)]">
          {/* Title */}
          <h3 className="text-[length:var(--font-500)] font-semibold text-[var(--text)] mb-[var(--space-12)] line-clamp-2 group-hover:text-accent transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-[length:var(--font-200)] text-[var(--text-muted)] mb-[var(--space-16)] flex-1 line-clamp-3 group-hover:text-gray-300 transition-colors">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-[var(--space-16)] border-t border-white/5">
            <span className="text-[length:var(--font-100)] text-gray-500 group-hover:text-accent/70 transition-colors">
              {readTime} min read
            </span>
            <span className="text-[length:var(--font-100)] font-semibold text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
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
    <section className="py-[var(--space-64)] bg-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-[var(--space-64)]"
        >
          <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] mb-[var(--space-16)] font-display">
            Real-World Results
          </h2>
          <p className="text-[var(--text-muted)] text-[length:var(--font-300)] max-w-2xl mx-auto">
            Case studies showcasing how I've improved test automation, reduced flakiness, and integrated quality into CI/CD pipelines.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-24)]">
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
          className="text-center mt-[var(--space-64)]"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-[var(--space-8)] px-[var(--space-24)] py-[var(--space-12)] min-h-[var(--size-tap)] rounded-[var(--radius-md)] 
            bg-accent/10 text-accent border border-accent/30
            hover:bg-accent/20 hover:border-accent/60 transition-colors duration-300 text-[length:var(--font-200)]"
          >
            Explore More Articles
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


