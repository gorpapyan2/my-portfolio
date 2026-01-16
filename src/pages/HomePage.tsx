import { Hero } from '../components/home/Hero';
import { Statistics } from '../components/home/Statistics';
import { Technologies } from '../components/home/Technologies';
import { PortfolioNav } from '../components/home/PortfolioNav';
import { CaseStudies } from '../components/home/CaseStudies';
import { ProjectCard } from './WorkPage/ProjectCard';
import { BlogCard } from './BlogPage/BlogCard';
import { useLanguage } from '../context/LanguageContext';
import { useProjectService } from '../lib/services/useProjectService';
import { useBlogService } from '../lib/services/useBlogService';
import { usePublicFeatureFlags } from '../lib/services/usePublicFeatureFlags';
import { LoadingSpinner } from '../components/loading/LoadingSpinner';
import { TranslationText } from '../components/shared/TranslationText';

export function HomePage() {
  const { t } = useLanguage();
  const { projects, isLoading: projectsLoading, error: projectsError } = useProjectService();
  const { blogPosts, isLoading: blogLoading, error: blogError } = useBlogService();
  const { isFeatureEnabled } = usePublicFeatureFlags();

  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);
  const latestBlogPosts = blogPosts.slice(0, 3);

  const showFeaturedProjects = isFeatureEnabled('featured_projects_section');
  const showLatestArticles = isFeatureEnabled('latest_articles_section');
  const showCaseStudies = isFeatureEnabled('case_studies_section');

  return (
    <>
      <Hero />
      <Statistics />
      <Technologies />
      <PortfolioNav />

      {showCaseStudies && (
        <CaseStudies />
      )}

      {showFeaturedProjects && (
        <section className="py-[var(--space-64)] bg-[var(--bg-elevated)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-[var(--space-24)]">
              <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] font-display">
                <TranslationText translationKey="pages.home.featuredProjects" as="span" shimmerWidth="250px" />
              </h2>
              <a href="/work" className="text-accent hover:text-white transition-colors text-[length:var(--font-200)]">
                <TranslationText translationKey="viewAll" shimmerWidth="80px" />
              </a>
            </div>
            {projectsLoading ? (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            ) : projectsError ? (
              <div className="text-center text-[var(--text-muted)] text-[length:var(--font-200)]">
                <p>{t('errors.projectsLoadFailed')}: {projectsError}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-24)]">
                {featuredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id || index}
                    {...project}
                    image={project.image ?? ''} // Ensures image is string, not null
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {showLatestArticles && (
        <section className="py-[var(--space-64)] bg-[var(--bg-elevated)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-[var(--space-24)]">
              <h2 className="text-[length:var(--font-700)] md:text-[length:var(--font-800)] font-semibold text-[var(--text)] font-display">
                <TranslationText translationKey="pages.home.latestArticles" as="span" shimmerWidth="200px" />
              </h2>
              <a href="/blog" className="text-accent hover:text-white transition-colors text-[length:var(--font-200)]">
                <TranslationText translationKey="viewAll" shimmerWidth="80px" />
              </a>
            </div>
            {blogLoading ? (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            ) : blogError ? (
              <div className="text-center text-[var(--text-muted)] text-[length:var(--font-200)]">
                <p>{t('errors.blogLoadFailed')}: {blogError}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-24)]">
                {latestBlogPosts.map((post, index) => (
                  <BlogCard
                    key={post.id || index}
                    {...post}
                    image={post.image ?? 'https://images.unsplash.com/photo-1517694712202-14819c9cb6e1?w=500&h=300&fit=crop'}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

