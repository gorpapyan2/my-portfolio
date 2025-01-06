import { Card } from '../../components/shared/Card';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  readTime: string;
}

export function BlogCard({ title, date, excerpt, image, readTime }: BlogCardProps) {
  return (
    <Card className="group">
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      
      <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-[#edfc3a] transition-colors">
        {title}
      </h2>
      
      <p className="text-gray-300 mb-4">{excerpt}</p>
      
      <a href="#" className="inline-flex items-center text-[#edfc3a] hover:text-white transition-colors">
        Read More
        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </Card>
  );
}