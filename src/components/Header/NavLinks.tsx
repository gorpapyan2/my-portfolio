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
        relative px-3 py-2 md:px-4 text-sm md:text-base transition-colors duration-300 group rounded-md
        ${isActive 
          ? 'text-[#edfc3a] bg-[#edfc3a]/10' 
          : 'text-gray-300 hover:text-[#edfc3a] hover:bg-white/5'
        }
        ${className}
      `}
    >
      {({ isActive }) => (
        <>
          {children}
          {/* Simple active indicator line */}
          <span
            className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#edfc3a] transition-transform duration-300 origin-left ${
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
    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
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
        <NavLink to="/admin/dashboard" className="inline-flex items-center gap-1 bg-[#edfc3a]/10 text-[#edfc3a] hover:bg-[#edfc3a]/20">
          <Settings className="h-4 w-4" />
          <TranslationText translationKey="nav.admin" shimmerWidth="60px" />
        </NavLink>
      )}
    </nav>
  );
}
