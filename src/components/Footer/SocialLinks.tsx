import { Github, Linkedin, X } from 'lucide-react';
import { Shimmer } from '../ui/Shimmer';

export function SocialLinks() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/gorpapyan2/", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gorpapyan2/", label: "LinkedIn" },
    { icon: X, href: "https://x.com/gorpapyan22", label: "X" },
  ];

  return (
    <div className="flex gap-[var(--space-16)]">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-[var(--space-8)] bg-[var(--surface)] rounded-full hover:bg-[var(--surface-strong)] transition-colors"
            aria-label={link.label}
          >
            <Icon className="h-[var(--space-20)] w-[var(--space-20)] text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors" />
            <Shimmer className="absolute inset-0" />
          </a>
        );
      })}
    </div>
  );
}
