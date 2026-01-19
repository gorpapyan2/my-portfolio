import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Settings from 'lucide-react/dist/esm/icons/settings';
import LogOut from 'lucide-react/dist/esm/icons/log-out';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import Code2 from 'lucide-react/dist/esm/icons/code-2';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Languages from 'lucide-react/dist/esm/icons/languages';
import User from 'lucide-react/dist/esm/icons/user';
import FolderOpen from 'lucide-react/dist/esm/icons/folder-open';
import Flag from 'lucide-react/dist/esm/icons/flag';
import { Link } from 'react-router-dom';
import { Card } from '../../components/shared/Card';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
import AnimatedGridBackground from '../../components/AnimatedGridBackground';
import ParticleBackground from '../../components/ParticleBackground';

type AdminSection = 'blog' | 'projects' | 'translations' | 'experiences' | 'education' | 'skills' | 'feature-flags' | 'about' | 'technologies';

const BlogAdmin = lazy(() => import('./BlogAdmin').then((module) => ({ default: module.BlogAdmin })));
const ProjectAdmin = lazy(() => import('./ProjectAdmin').then((module) => ({ default: module.ProjectAdmin })));
const TranslationManager = lazy(() => import('./TranslationManager').then((module) => ({ default: module.TranslationManager })));
const ExperienceAdmin = lazy(() => import('./ExperienceAdmin').then((module) => ({ default: module.ExperienceAdmin })));
const EducationAdmin = lazy(() => import('./EducationAdmin').then((module) => ({ default: module.EducationAdmin })));
const SkillsAdmin = lazy(() => import('./SkillsAdmin').then((module) => ({ default: module.SkillsAdmin })));
const FeatureFlagAdmin = lazy(() => import('./FeatureFlagAdmin').then((module) => ({ default: module.FeatureFlagAdmin })));
const AboutContentAdmin = lazy(() => import('./AboutContentAdmin').then((module) => ({ default: module.AboutContentAdmin })));
const TechnologyAdmin = lazy(() => import('./TechnologyAdmin').then((module) => ({ default: module.TechnologyAdmin })));

const sectionPreloaders: Record<AdminSection, () => Promise<unknown>> = {
  blog: () => import('./BlogAdmin'),
  projects: () => import('./ProjectAdmin'),
  translations: () => import('./TranslationManager'),
  about: () => import('./AboutContentAdmin'),
  experiences: () => import('./ExperienceAdmin'),
  education: () => import('./EducationAdmin'),
  skills: () => import('./SkillsAdmin'),
  'feature-flags': () => import('./FeatureFlagAdmin'),
  technologies: () => import('./TechnologyAdmin')
};

const sections = [
  { id: 'blog' as AdminSection, labelKey: 'admin.dashboard.section.blog', icon: FileText },
  { id: 'projects' as AdminSection, labelKey: 'admin.dashboard.section.projects', icon: FolderOpen },
  { id: 'translations' as AdminSection, labelKey: 'admin.dashboard.section.translations', icon: Languages },
  { id: 'about' as AdminSection, labelKey: 'admin.dashboard.section.about', icon: User },
  { id: 'experiences' as AdminSection, labelKey: 'admin.dashboard.section.experiences', icon: Briefcase },
  { id: 'education' as AdminSection, labelKey: 'admin.dashboard.section.education', icon: GraduationCap },
  { id: 'skills' as AdminSection, labelKey: 'admin.dashboard.section.skills', icon: Code2 },
  { id: 'technologies' as AdminSection, labelKey: 'technologies.title', icon: Cpu },
  { id: 'feature-flags' as AdminSection, labelKey: 'admin.dashboard.section.featureFlags', icon: Flag },
];

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<AdminSection>('blog');
  const [prefetchingSection, setPrefetchingSection] = useState<AdminSection | null>(null);
  const prefetchTimeoutRef = useRef<number | null>(null);
  const { user, signOut } = useAuth();
  const { t } = useLanguage();

  const preloadSection = (section: AdminSection) => {
    if (section === activeSection) return;
    if (prefetchTimeoutRef.current) {
      window.clearTimeout(prefetchTimeoutRef.current);
      prefetchTimeoutRef.current = null;
    }
    setPrefetchingSection(section);
    const preloadPromise = sectionPreloaders[section]?.();
    if (!preloadPromise) {
      setPrefetchingSection(null);
      return;
    }
    preloadPromise.finally(() => {
      prefetchTimeoutRef.current = window.setTimeout(() => {
        setPrefetchingSection(null);
        prefetchTimeoutRef.current = null;
      }, 800);
    });
  };

  useEffect(() => {
    return () => {
      if (prefetchTimeoutRef.current) {
        window.clearTimeout(prefetchTimeoutRef.current);
      }
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'blog':
        return <BlogAdmin onClose={() => {}} />;
      case 'projects':
        return <ProjectAdmin onClose={() => {}} />;
      case 'translations':
        return <TranslationManager />;
      case 'about':
        return <AboutContentAdmin />;
      case 'experiences':
        return <ExperienceAdmin onClose={() => {}} />;
      case 'education':
        return <EducationAdmin onClose={() => {}} />;
      case 'skills':
        return <SkillsAdmin onClose={() => {}} />;
      case 'technologies':
        return <TechnologyAdmin onClose={() => {}} />;
      case 'feature-flags':
        return <FeatureFlagAdmin />;
      default:
        return null;
    }
  };

  return (
    <AnimatedGridBackground>
      <ParticleBackground />
      <div className="relative z-10 p-[var(--space-24)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-[var(--space-32)]">
          <div className="flex items-center gap-[var(--space-12)]">
            <div className="inline-flex p-[var(--space-8)] rounded-[var(--radius-md)] bg-[var(--surface)] text-accent">
              <Settings className="h-[var(--space-24)] w-[var(--space-24)]" />
            </div>
            <div>
              <h1 className="text-[length:var(--font-600)] font-semibold text-[var(--text)]">
                <TranslationText translationKey="admin.dashboard.title" as="span" shimmerWidth="200px" />
              </h1>
              <p className="text-[var(--text-muted)] text-[length:var(--font-100)]">
                <TranslationText translationKey="admin.dashboard.welcomeBack" as="span" shimmerWidth="120px" />, {user?.email}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-[var(--space-12)]">
            <Link
              to="/"
              className="inline-flex items-center gap-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-[length:var(--font-100)]"
            >
              <ArrowLeft className="h-[var(--space-16)] w-[var(--space-16)]" />
              <TranslationText translationKey="admin.login.backToPortfolio" as="span" shimmerWidth="180px" />
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-[length:var(--font-100)]"
            >
              <LogOut className="h-[var(--space-16)] w-[var(--space-16)]" />
              {t('admin.common.logout')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[var(--space-24)]">
          {/* Sidebar Navigation */}
          <Card className="lg:col-span-1">
            <div className="p-[var(--space-16)]">
              <h2 className="text-[length:var(--font-400)] font-semibold text-[var(--text)] mb-[var(--space-16)]">
                <TranslationText translationKey="admin.dashboard.contentManagement" as="span" shimmerWidth="200px" />
              </h2>
              {prefetchingSection && (
                <p className="text-[var(--text-muted)] text-[length:var(--font-100)] mb-[var(--space-12)]" role="status" aria-live="polite">
                  {t('admin.common.loading')} {t(sections.find((section) => section.id === prefetchingSection)?.labelKey ?? '')}
                </p>
              )}
              <nav className="stack [--stack-space:var(--space-8)]">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      onMouseEnter={() => preloadSection(section.id)}
                      onFocus={() => preloadSection(section.id)}
                      className={`w-full flex items-center gap-[var(--space-12)] px-[var(--space-12)] py-[var(--space-8)] rounded-[var(--radius-md)] text-[length:var(--font-100)] transition-colors ${
                        activeSection === section.id
                          ? 'bg-[var(--surface-strong)] text-accent'
                          : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]'
                      }`}
                    >
                      <Icon className="h-[var(--space-16)] w-[var(--space-16)]" />
                      <TranslationText translationKey={section.labelKey} as="span" shimmerWidth="120px" />
                    </button>
                  );
                })}
              </nav>
            </div>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="min-h-[600px]">
              <div className="p-[var(--space-24)]">
                <Suspense
                  fallback={(
                    <div className="flex items-center justify-center py-[var(--space-24)] text-[var(--text)]">
                      <TranslationText translationKey="admin.common.loading" as="span" shimmerWidth="140px" />
                    </div>
                  )}
                >
                  {renderSection()}
                </Suspense>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedGridBackground>
  );
}
