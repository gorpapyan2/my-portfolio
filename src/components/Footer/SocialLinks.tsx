import { Github, Linkedin, X } from 'lucide-react';
import { Shimmer } from '../ui/Shimmer';

export function SocialLinks() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/gorpapyan2/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gorpapyan2/", label: "LinkedIn" },
    { icon: X, href: "https://x.com/gorpapyan22", label: "X" },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2 bg-white/5 rounded-full hover:bg-[#edfc3a]/20 transition-colors"
            aria-label={link.label}
          >
            <Icon className="h-5 w-5 text-gray-300 group-hover:text-[#edfc3a] transition-colors" />
            <Shimmer className="absolute inset-0" />
          </a>
        );
      })}
    </div>
  );
}