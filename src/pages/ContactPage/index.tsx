import { Mail } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { useLanguage } from '../../context/LanguageContext';

export function ContactPage() {
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={Mail}
        title={t('pages.contact.title')}
        subtitle={t('pages.contact.subtitle')}
      />

      <div className="grid md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </PageLayout>
  );
}