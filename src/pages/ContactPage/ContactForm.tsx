import { Send } from 'lucide-react';
import { Card } from '../../components/shared/Card';

interface FormField {
  id: string;
  label: string;
  type: string;
  isTextArea?: boolean;
}

const formFields: FormField[] = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'message', label: 'Message', type: 'text', isTextArea: true },
];

export function ContactForm() {
  return (
    <Card>
      <form className="space-y-4">
        {formFields.map(({ id, label, type, isTextArea }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
              {label}
            </label>
            {isTextArea ? (
              <textarea
                id={id}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent
                         transition-all duration-300"
              />
            ) : (
              <input
                type={type}
                id={id}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent
                         transition-all duration-300"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#edfc3a] 
                   text-black px-6 py-3 rounded-lg font-medium hover:bg-[#f2ff4d] 
                   transition-all duration-300"
        >
          <Send className="h-5 w-5" />
          Send Message
        </button>
      </form>
    </Card>
  );
}