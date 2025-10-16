import { Hero } from '../components/home/Hero';
import { Technologies } from '../components/home/Technologies';
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

  return (
    <>
      <Hero />
      <Technologies />
      {showFeaturedProjects && (
        <section className="py-24 bg-[#0A0A0B]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <h2 className="text-4xl font-bold text-white">{t('pages.home.featuredProjects')}</h2>
              <a href="/work" className="text-[#edfc3a] hover:text-white transition-colors">{t('viewAll')}</a>
            </div>
            {projectsLoading ? (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            ) : projectsError ? (
              <div className="text-center text-gray-400">
                <p>Failed to load projects: {projectsError}</p>
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
              <h2 className="text-4xl font-bold text-white">{t('pages.home.latestArticles')}</h2>
              <a href="/blog" className="text-[#edfc3a] hover:text-white transition-colors">{t('viewAll')}</a>
            </div>
            {blogLoading ? (
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            ) : blogError ? (
              <div className="text-center text-gray-400">
                <p>Failed to load blog posts: {blogError}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestBlogPosts.map((post, index) => (
                  <BlogCard 
                    key={post.id || index} 
                    title={post.title}
                    date={post.created_at}
                    excerpt={post.excerpt}
                    image={post.image || ''}
                    readTime={post.read_time}
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
