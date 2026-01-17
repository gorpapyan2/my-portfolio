import { Mail } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { TranslationText } from '../../components/shared/TranslationText';

export function ContactPage() {
  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={Mail}
        title={<TranslationText translationKey="pages.contact.title" shimmerWidth="150px" />}
        subtitle={<TranslationText translationKey="pages.contact.subtitle" as="span" shimmerWidth="300px" />}
      />

      <div className="grid md:grid-cols-2 gap-[var(--space-32)]">
        <ContactInfo />
        <ContactForm />
      </div>
    </PageLayout>
  );
}
