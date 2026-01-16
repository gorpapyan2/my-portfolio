import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import { useLanguage } from '../../context/LanguageContext';
import { TranslationText } from '../../components/shared/TranslationText';

interface ContactDetail {
  icon: typeof Mail | typeof Phone | typeof MapPin;
  label: string;
  value: string;
  href?: string;
}

export function ContactInfo() {
  const { t } = useLanguage();

  const contactDetails: ContactDetail[] = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'gorpapyan2@gmail.com',
      href: 'mailto:gorpapyan2@gmail.com'
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+374 (98) 500-501',
      href: 'tel:+37498500501'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Armenia Kapan, Syunik'
    }
  ];

  return (
    <Card className="stack [--stack-space:var(--space-24)]">
      <h2 className="text-[length:var(--font-500)] font-semibold text-[var(--text)]">
        <TranslationText translationKey="contact.getInTouch" as="span" shimmerWidth="150px" />
      </h2>
      <div className="stack [--stack-space:var(--space-24)]">
        {contactDetails.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-[var(--space-16)]">
            <div className="icon-circle">
              <Icon className="h-[var(--space-16)] w-[var(--space-16)] text-accent" />
            </div>
            <div>
              <div className="text-[length:var(--font-100)] text-[var(--text-muted)]">{label}</div>
              {href ? (
                <a
                  href={href}
                  className="text-[var(--text)] hover:text-accent transition-colors"
                >
                  {value}
                </a>
              ) : (
                <div className="text-[var(--text)]">{value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
