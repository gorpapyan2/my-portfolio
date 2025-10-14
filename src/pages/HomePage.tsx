import { Hero } from '../components/home/Hero';
import { Technologies } from '../components/home/Technologies';
import { ProjectCard } from './WorkPage/ProjectCard';
import { projects } from './WorkPage/projectsData';
import { BlogCard } from './BlogPage/BlogCard';
import { blogPosts } from './BlogPage/blogData.ts';

export function HomePage() {
  return (
    <>
      <Hero />
      <Technologies />
      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            <a href="/work" className="text-[#edfc3a] hover:text-white transition-colors">View all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl font-bold text-white">Latest Articles</h2>
            <a href="/blog" className="text-[#edfc3a] hover:text-white transition-colors">View all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
