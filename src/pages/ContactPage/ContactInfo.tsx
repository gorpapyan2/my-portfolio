import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '../../components/shared/Card';

interface ContactDetail {
  icon: typeof Mail | typeof Phone | typeof MapPin;
  label: string;
  value: string;
  href?: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gorpapyan2@gmail.com',
    href: 'mailto:gorpapyan2@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+374 (98) 500-501',
    href: 'tel:+37498500501'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Armenia Kapan, Syunik'
  }
];

export function ContactInfo() {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-white mb-6">Get in Touch</h2>
      <div className="space-y-6">
        {contactDetails.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-white/5">
              <Icon className="h-5 w-5 text-[#edfc3a]" />
            </div>
            <div>
              <div className="text-sm text-gray-400">{label}</div>
              {href ? (
                <a
                  href={href}
                  className="text-white hover:text-[#edfc3a] transition-colors"
                >
                  {value}
                </a>
              ) : (
                <div className="text-white">{value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}