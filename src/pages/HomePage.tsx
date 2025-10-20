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
        <section className="py-24 bg-[#0A0A0B]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-4xl font-bold text-white">
                {t('pages.home.featuredProjects')}
              </h2>
              <a href="/work" className="text-[#edfc3a] hover:text-white transition-colors">{t('viewAll')}</a>
            </div>
            {projectsLoading ? (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            ) : projectsError ? (
              <div className="text-center text-gray-400">
                <p>{t('errors.projectsLoadFailed')}: {projectsError}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <section className="py-24 bg-[#0A0A0B]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-4xl font-bold text-white">
                {t('pages.home.latestArticles')}
              </h2>
              <a href="/blog" className="text-[#edfc3a] hover:text-white transition-colors">{t('viewAll')}</a>
            </div>
            {blogLoading ? (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            ) : blogError ? (
              <div className="text-center text-gray-400">
                <p>{t('errors.blogLoadFailed')}: {blogError}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
