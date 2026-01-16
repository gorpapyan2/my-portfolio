import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FooterSection } from './FooterSection';
import { SocialLinks } from './SocialLinks';
import { Shimmer } from '../ui/Shimmer';
import { TranslationText } from '../shared/TranslationText';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[var(--bg-elevated)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-[var(--space-48)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-48)]">
          <FooterSection title={<TranslationText translationKey="footer.about" shimmerWidth="80px" />}>
            <p className="text-[var(--text-muted)]">
              <TranslationText translationKey="footer.aboutDescription" as="span" shimmerWidth="200px" />
            </p>
          </FooterSection>

          <FooterSection title={<TranslationText translationKey="footer.contact" shimmerWidth="100px" />}>
            <div className="stack [--stack-space:var(--space-12)]">
              <a 
                href="mailto:gorpapyan2@gmail.com" 
                className="relative group flex items-center gap-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-[length:var(--font-100)]"
              >
                <Mail className="h-[var(--space-20)] w-[var(--space-20)]" />
                gorpapyan2@gmail.com
                <Shimmer className="absolute inset-0" />
              </a>
              <a 
                href="tel:+37498500501" 
                className="relative group flex items-center gap-[var(--space-8)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-[length:var(--font-100)]"
              >
                <Phone className="h-[var(--space-20)] w-[var(--space-20)]" />
                +374 (98) 500-501
                <Shimmer className="absolute inset-0" />
              </a>
              <div className="flex items-center gap-[var(--space-8)] text-[var(--text-muted)] text-[length:var(--font-100)]">
                <MapPin className="h-[var(--space-20)] w-[var(--space-20)]" />
                <TranslationText translationKey="footer.location" shimmerWidth="150px" />
              </div>
            </div>
          </FooterSection>

          <FooterSection title={<TranslationText translationKey="footer.quickLinks" shimmerWidth="120px" />}>
            <nav className="stack [--stack-space:var(--space-8)]">
              {[
                { key: 'nav.about', path: '/about' },
                { key: 'nav.work', path: '/work' },
                { key: 'nav.blog', path: '/blog' },
                { key: 'nav.contact', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  className="relative group block text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-[length:var(--font-100)]"
                >
                  <TranslationText translationKey={link.key} shimmerWidth="60px" />
                  <Shimmer className="absolute inset-0" />
                </Link>
              ))}
            </nav>
          </FooterSection>

          <FooterSection title={<TranslationText translationKey="footer.connect" shimmerWidth="100px" />}>
            <SocialLinks />
          </FooterSection>
        </div>

        <div className="mt-[var(--space-48)] pt-[var(--space-32)] border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[var(--space-16)]">
            <p className="text-[var(--text-muted)] text-[length:var(--font-100)]">
              <TranslationText 
                translationKey="footer.copyright" 
                shimmerWidth="200px"
              />
            </p>
            <div className="flex gap-[var(--space-24)] text-[length:var(--font-100)] text-[var(--text-muted)]">
              <a href="#" className="hover:text-[var(--text)] transition-colors">
                <TranslationText translationKey="footer.privacy" shimmerWidth="80px" />
              </a>
              <a href="#" className="hover:text-[var(--text)] transition-colors">
                <TranslationText translationKey="footer.terms" shimmerWidth="80px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
