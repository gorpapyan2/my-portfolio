import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { PortfolioNav } from '../components/home/PortfolioNav';
import { CaseStudies } from '../components/home/CaseStudies';
import { ProjectCard } from './WorkPage/ProjectCard';
import { BlogCard } from './BlogPage/BlogCard';
import { useLanguage } from '../context/LanguageContext';
import { useProjectService } from '../lib/services/useProjectService';
import { useBlogService } from '../lib/services/useBlogService';
import { usePublicFeatureFlags } from '../lib/services/usePublicFeatureFlags';
import { AsyncContent } from '../components/shared/AsyncContent';
import { TranslationText } from '../components/shared/TranslationText';

// Lazy load below-the-fold sections to reduce initial bundle
const Statistics = lazy(() => import('../components/home/Statistics').then(m => ({ default: m.Statistics })));
const Technologies = lazy(() => import('../components/home/Technologies').then(m => ({ default: m.Technologies })));

export function HomePage() {
  const { t, language } = useLanguage();
  const { projects, isLoading: projectsLoading, error: projectsError } = useProjectService();
  const { blogPosts, isLoading: blogLoading, error: blogError } = useBlogService(language);
  const { isFeatureEnabled } = usePublicFeatureFlags();

  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);
  const latestBlogPosts = blogPosts.slice(0, 3);

  const showFeaturedProjects = isFeatureEnabled('featured_projects_section');
  const showLatestArticles = isFeatureEnabled('latest_articles_section');
  const showCaseStudies = isFeatureEnabled('case_studies_section');

  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <Statistics />
      </Suspense>
      <Suspense fallback={null}>
        <Technologies />
      </Suspense>
      <PortfolioNav />

      {showCaseStudies && (
        <CaseStudies />
      )}

      {showFeaturedProjects && (
        <section className="py-[var(--space-64)] section-surface">
          <div className="max-w-7xl mx-auto px-4 section-inner">
            <div className="flex flex-wrap items-end justify-between gap-[var(--space-16)] mb-[var(--space-24)]">
              <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] font-display">
                <TranslationText translationKey="pages.home.featuredProjects" as="span" shimmerWidth="250px" />
              </h2>
              <Link to="/work" className="text-accent hover:text-white transition-colors text-[length:var(--font-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-full">
                <TranslationText translationKey="viewAll" shimmerWidth="80px" />
              </Link>
            </div>
            <AsyncContent
              isLoading={projectsLoading}
              error={projectsError}
              errorMessage={t('errors.projectsLoadFailed')}
              className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-24)]"
            >
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id || index}
                  {...project}
                  image={project.image ?? ''} // Ensures image is string, not null
                />
              ))}
            </AsyncContent>
          </div>
        </section>
      )}

      {showLatestArticles && (
        <section className="py-[var(--space-64)] section-surface">
          <div className="max-w-7xl mx-auto px-4 section-inner">
            <div className="flex flex-wrap items-end justify-between gap-[var(--space-16)] mb-[var(--space-24)]">
              <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] font-display">
                <TranslationText translationKey="pages.home.latestArticles" as="span" shimmerWidth="200px" />
              </h2>
              <Link to="/blog" className="text-accent hover:text-white transition-colors text-[length:var(--font-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-full">
                <TranslationText translationKey="viewAll" shimmerWidth="80px" />
              </Link>
            </div>
            <AsyncContent
              isLoading={blogLoading}
              error={blogError}
              errorMessage={t('errors.blogLoadFailed')}
              className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-24)]"
            >
              {latestBlogPosts.map((post, index) => (
                <BlogCard
                  key={post.id || index}
                  {...post}
                  image={post.image ?? 'https://images.unsplash.com/photo-1517694712202-14819c9cb6e1?w=500&h=300&fit=crop'}
                />
              ))}
            </AsyncContent>
          </div>
        </section>
      )}
    </>
  );
}
