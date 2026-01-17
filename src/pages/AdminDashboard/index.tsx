import { useState } from 'react';
import { 
  Settings, 
  LogOut, 
  ArrowLeft,
  FileText, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Languages,
  User,
  FolderOpen,
  Flag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/shared/Card';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';
import { BlogAdmin } from './BlogAdmin';
import { ProjectAdmin } from './ProjectAdmin';
import { TranslationManager } from './TranslationManager';
import { ExperienceAdmin } from './ExperienceAdmin';
import { EducationAdmin } from './EducationAdmin';
import { SkillsAdmin } from './SkillsAdmin';
import { FeatureFlagAdmin } from './FeatureFlagAdmin';
import { AboutContentAdmin } from './AboutContentAdmin';
import AnimatedGridBackground from '../../components/AnimatedGridBackground';
import ParticleBackground from '../../components/ParticleBackground';

type AdminSection = 'blog' | 'projects' | 'translations' | 'experiences' | 'education' | 'skills' | 'feature-flags' | 'about';

const sections = [
  { id: 'blog' as AdminSection, labelKey: 'admin.dashboard.section.blog', icon: FileText },
  { id: 'projects' as AdminSection, labelKey: 'admin.dashboard.section.projects', icon: FolderOpen },
  { id: 'translations' as AdminSection, labelKey: 'admin.dashboard.section.translations', icon: Languages },
  { id: 'about' as AdminSection, labelKey: 'admin.dashboard.section.about', icon: User },
  { id: 'experiences' as AdminSection, labelKey: 'admin.dashboard.section.experiences', icon: Briefcase },
  { id: 'education' as AdminSection, labelKey: 'admin.dashboard.section.education', icon: GraduationCap },
  { id: 'skills' as AdminSection, labelKey: 'admin.dashboard.section.skills', icon: Code2 },
  { id: 'feature-flags' as AdminSection, labelKey: 'admin.dashboard.section.featureFlags', icon: Flag },
];

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<AdminSection>('blog');
  const { user, signOut } = useAuth();
  const { t } = useLanguage();

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
              <nav className="stack [--stack-space:var(--space-8)]">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
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
                {renderSection()}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedGridBackground>
  );
}

