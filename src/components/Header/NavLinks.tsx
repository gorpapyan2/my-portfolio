import { NavLink as RouterNavLink } from 'react-router-dom';
import Settings from 'lucide-react/dist/esm/icons/settings';
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
        relative px-[var(--space-10)] py-[var(--space-6)] md:px-[var(--space-12)] text-[length:var(--font-100)] md:text-[length:var(--font-200)] font-medium transition-[color,background-color,box-shadow] duration-300 group rounded-[var(--radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]
        ${isActive 
          ? 'text-[var(--text)] bg-[var(--surface-strong)] shadow-[0_12px_24px_rgba(7,10,18,0.3)]' 
          : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]'
        }
        ${className}
      `}
    >
      {({ isActive }) => (
        <>
          {children}
          {/* Active indicator */}
          <span
            className={`absolute left-1/2 -bottom-[var(--space-4)] h-[var(--space-4)] w-[var(--space-4)] -translate-x-1/2 rounded-full bg-accent transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
            }`}
          />
        </>
      )}
    </RouterNavLink>
  );
}

export function NavLinks() {
  const { isAdmin } = useAuth();
  const { isFeatureEnabled } = usePublicFeatureFlags();

  const showWorkSection = isFeatureEnabled('work_section');
  const showBlogSection = isFeatureEnabled('blog_section');

  return (
    <nav className="hidden md:flex items-center gap-[var(--space-12)] lg:gap-[var(--space-16)]">
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

