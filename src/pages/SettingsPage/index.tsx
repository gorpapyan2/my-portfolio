import { Settings } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { TranslationManager } from './TranslationManager';
import { useLanguage } from '../../context/LanguageContext';

export function SettingsPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
      <PageHeader
        icon={Settings}
        title={t('settings.title')}
        subtitle={t('settings.translations')}
      />
      
      <TranslationManager />
    </PageLayout>
  );
}
