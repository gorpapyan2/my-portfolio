import { Mail, Phone, MapPin } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { SocialLinks } from './SocialLinks';
import { Shimmer } from '../ui/Shimmer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0A0B] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterSection title="About">
            <p className="text-gray-300">
              Dedicated QA Engineer with a passion for ensuring software excellence through comprehensive testing and quality control.
            </p>
          </FooterSection>

          <FooterSection title="Contact">
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
                Armenia Kapan, Syunik
              </div>
            </div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <nav className="space-y-2">
              {['About', 'Work', 'Experience', 'Blog', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="relative group block text-gray-300 hover:text-[#edfc3a] transition-colors"
                >
                  {link}
                  <Shimmer className="absolute inset-0" />
                </a>
              ))}
            </nav>
          </FooterSection>

          <FooterSection title="Connect">
            <SocialLinks />
          </FooterSection>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} Gor Papyan. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#edfc3a] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#edfc3a] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}