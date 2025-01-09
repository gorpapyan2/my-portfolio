import { Mail } from 'lucide-react';
import { PageLayout } from '../../components/shared/PageLayout';
import { PageHeader } from '../../components/shared/PageHeader';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function ContactPage() {
  return (
    <PageLayout>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent" />
      <PageHeader
        icon={Mail}
        title="Contact Me"
        subtitle="Let's discuss how I can help ensure the quality of your software"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </PageLayout>
  );
}