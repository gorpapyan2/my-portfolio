import { useState } from 'react';
import { 
  Settings, 
  LogOut, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Languages,
  FolderOpen,
  Flag
} from 'lucide-react';
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
import AnimatedGridBackground from '../../components/AnimatedGridBackground';
import ParticleBackground from '../../components/ParticleBackground';

type AdminSection = 'blog' | 'projects' | 'translations' | 'experiences' | 'education' | 'skills' | 'feature-flags';

const sections = [
  { id: 'blog' as AdminSection, labelKey: 'admin.dashboard.section.blog', icon: FileText },
  { id: 'projects' as AdminSection, labelKey: 'admin.dashboard.section.projects', icon: FolderOpen },
  { id: 'translations' as AdminSection, labelKey: 'admin.dashboard.section.translations', icon: Languages },
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
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="inline-flex p-2 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a]">
              <Settings className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                <TranslationText translationKey="admin.dashboard.title" as="span" shimmerWidth="200px" />
              </h1>
              <p className="text-gray-400">
                <TranslationText translationKey="admin.dashboard.welcomeBack" as="span" shimmerWidth="120px" />, {user?.email}
              </p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            {t('admin.common.logout')}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <Card className="lg:col-span-1">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white mb-4">
                <TranslationText translationKey="admin.dashboard.contentManagement" as="span" shimmerWidth="200px" />
              </h2>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-[#edfc3a]/10 text-[#edfc3a]'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
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
              <div className="p-6">
                {renderSection()}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedGridBackground>
  );
}
