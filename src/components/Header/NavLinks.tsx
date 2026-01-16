import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { usePublicFeatureFlags } from '../../lib/services/usePublicFeatureFlags';
import { TranslationText } from '../shared/TranslationText';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

function NavLink({ to, children, className = '' }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => `
        relative px-[var(--space-12)] py-[var(--space-8)] md:px-[var(--space-16)] text-[length:var(--font-100)] md:text-[length:var(--font-200)] transition-colors duration-300 group rounded-[var(--radius-md)]
        ${isActive 
          ? 'text-accent bg-[var(--surface-strong)]' 
          : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]'
        }
        ${className}
      `}
    >
      {({ isActive }) => (
        <>
          {children}
          {/* Simple active indicator line */}
          <span
            className={`absolute -bottom-[var(--space-4)] left-0 w-full h-[var(--space-2)] bg-accent transition-transform duration-300 origin-left ${
              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        </>
      )}
    </RouterNavLink>
  );
}

export function NavLinks() {
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const { isFeatureEnabled } = usePublicFeatureFlags();

  const showWorkSection = isFeatureEnabled('work_section');
  const showBlogSection = isFeatureEnabled('blog_section');

  return (
    <nav className="hidden md:flex items-center gap-[var(--space-16)] lg:gap-[var(--space-24)]">
      <NavLink to="/about">
        <TranslationText translationKey="nav.about" shimmerWidth="60px" />
      </NavLink>
      {showWorkSection && (
        <NavLink to="/work">
          <TranslationText translationKey="nav.work" shimmerWidth="50px" />
        </NavLink>
      )}
      {showBlogSection && (
        <NavLink to="/blog">
          <TranslationText translationKey="nav.blog" shimmerWidth="50px" />
        </NavLink>
      )}
      <NavLink to="/contact">
        <TranslationText translationKey="nav.contact" shimmerWidth="70px" />
      </NavLink>
      {/* Admin dashboard link - only visible when authenticated */}
      {isAdmin && (
        <NavLink to="/admin/dashboard" className="inline-flex items-center gap-[var(--space-4)] bg-[var(--surface-strong)] text-accent hover:bg-[var(--surface)]">
          <Settings className="h-4 w-4" />
          <TranslationText translationKey="nav.admin" shimmerWidth="60px" />
        </NavLink>
      )}
    </nav>
  );
}

