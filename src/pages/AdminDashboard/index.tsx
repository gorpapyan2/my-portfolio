import { useState } from 'react';
import { 
  Settings, 
  LogOut, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Languages,
  FolderOpen
} from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useAuth } from '../../context/AuthContext';
import { BlogAdmin } from './BlogAdmin';
import { ProjectAdmin } from './ProjectAdmin';
import { TranslationManager } from './TranslationManager';
import { ExperienceAdmin } from './ExperienceAdmin';
import { EducationAdmin } from './EducationAdmin';
import { SkillsAdmin } from './SkillsAdmin';

type AdminSection = 'blog' | 'projects' | 'translations' | 'experiences' | 'education' | 'skills';

const sections = [
  { id: 'blog' as AdminSection, label: 'Blog Posts', icon: FileText },
  { id: 'projects' as AdminSection, label: 'Projects', icon: FolderOpen },
  { id: 'translations' as AdminSection, label: 'Translations', icon: Languages },
  { id: 'experiences' as AdminSection, label: 'Experience', icon: Briefcase },
  { id: 'education' as AdminSection, label: 'Education', icon: GraduationCap },
  { id: 'skills' as AdminSection, label: 'Skills', icon: Code2 },
];

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState<AdminSection>('blog');
  const { user, signOut } = useAuth();

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
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
      
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="inline-flex p-2 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a]">
              <Settings className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400">Welcome back, {user?.email}</p>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <Card className="lg:col-span-1">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white mb-4">Content Management</h2>
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
                      {section.label}
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
    </div>
  );
}
