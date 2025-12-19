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
    <footer className="relative bg-[#0A0A0B] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterSection title={<TranslationText translationKey="footer.about" shimmerWidth="80px" />}>
            <p className="text-gray-300">
              <TranslationText translationKey="footer.aboutDescription" as="span" shimmerWidth="200px" />
            </p>
          </FooterSection>

          <FooterSection title={<TranslationText translationKey="footer.contact" shimmerWidth="100px" />}>
            <div className="space-y-3">
              <a 
                href="mailto:gorpapyan2@gmail.com" 
                className="relative group flex items-center gap-2 text-gray-300 hover:text-[#edfc3a] transition-colors"
              >
                <Mail className="h-5 w-5" />
                gorpapyan2@gmail.com
                <Shimmer className="absolute inset-0" />
              </a>
              <a 
                href="tel:+37498500501" 
                className="relative group flex items-center gap-2 text-gray-300 hover:text-[#edfc3a] transition-colors"
              >
                <Phone className="h-5 w-5" />
                +374 (98) 500-501
                <Shimmer className="absolute inset-0" />
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                <TranslationText translationKey="footer.location" shimmerWidth="150px" />
              </div>
            </div>
          </FooterSection>

          <FooterSection title={<TranslationText translationKey="footer.quickLinks" shimmerWidth="120px" />}>
            <nav className="space-y-2">
              {[
                { key: 'nav.about', path: '/about' },
                { key: 'nav.work', path: '/work' },
                { key: 'nav.blog', path: '/blog' },
                { key: 'nav.contact', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  className="relative group block text-gray-300 hover:text-[#edfc3a] transition-colors"
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

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              <TranslationText 
                translationKey="footer.copyright" 
                shimmerWidth="200px"
              />
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#edfc3a] transition-colors">
                <TranslationText translationKey="footer.privacy" shimmerWidth="80px" />
              </a>
              <a href="#" className="hover:text-[#edfc3a] transition-colors">
                <TranslationText translationKey="footer.terms" shimmerWidth="80px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}