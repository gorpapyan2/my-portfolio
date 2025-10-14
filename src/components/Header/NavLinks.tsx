import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

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

  return (
    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
      <NavLink to="/about">{t('nav.about')}</NavLink>
      <NavLink to="/work">{t('nav.work')}</NavLink>
      <NavLink to="/blog">{t('nav.blog')}</NavLink>
      <NavLink to="/contact">{t('nav.contact')}</NavLink>
      {/* Settings link - accessible but not prominently displayed */}
      <NavLink to="/settings" className="opacity-50 hover:opacity-100">
        {t('nav.settings')}
      </NavLink>
      {/* Admin dashboard link - only visible when authenticated */}
      {isAdmin && (
        <NavLink to="/admin/dashboard" className="inline-flex items-center gap-1 bg-[#edfc3a]/10 text-[#edfc3a] hover:bg-[#edfc3a]/20">
          <Settings className="h-4 w-4" />
          Admin
        </NavLink>
      )}
    </nav>
  );
}
