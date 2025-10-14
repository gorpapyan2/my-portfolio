import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { Card } from '../../components/shared/Card';
import emailjs from '@emailjs/browser';
import { Popup } from '../../components/ui/Popup';
import { useLanguage } from '../../context/LanguageContext';
import { useContactService } from '../../lib/services/useContactService';
import { contactFormSchema } from '../../lib/schemas/contactSchema';

interface FormField {
  id: string;
  label: string;
  type: string;
  isTextArea?: boolean;
}

export function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { t } = useLanguage();
  const contactService = useContactService();

  // Create a ref to the form
  const formRef = useRef<HTMLFormElement | null>(null);

  // Initialize EmailJS inside the component
  useEffect(() => {
    emailjs.init('jAUnep12KdGWp6a-W');
  }, []);

  const formFields: FormField[] = [
    { id: 'from_name', label: t('contact.name'), type: 'text' },
    { id: 'from_email', label: t('contact.email'), type: 'email' },
    { id: 'message', label: t('contact.message'), type: 'text', isTextArea: true },
  ];

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const contactData = {
      from_name: formData.get('from_name') as string,
      from_email: formData.get('from_email') as string,
      message: formData.get('message') as string,
    };

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(contactData);

      // Send email via EmailJS
      const emailResult = await emailjs.sendForm(
        'service_cphipqq',
        'template_nfqpjze',
        e.currentTarget,
        'jAUnep12KdGWp6a-W'
      );

      // Log to Supabase (continue even if this fails)
      try {
        await contactService.createSubmission({
          from_name: validatedData.from_name,
          from_email: validatedData.from_email,
          message: validatedData.message,
          status: 'new'
        });
      } catch (dbError) {
        console.warn('Failed to log contact submission to database:', dbError);
        // Continue with success flow even if DB logging fails
      }

      if (emailResult.text === 'OK') {
        setPopupMessage(t('contact.successMessage'));
        // Reset the form using the ref
        formRef.current?.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        const fieldErrors: Record<string, string> = {};
        (error as { issues: Array<{ path: string[]; message: string }> }).issues.forEach((issue) => {
          fieldErrors[issue.path[0]] = issue.message;
        });
        setErrors(fieldErrors);
        setPopupMessage(t('contact.validationError'));
      } else {
        setPopupMessage(t('contact.errorMessage'));
      }
    } finally {
      setShowPopup(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card>
        <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
          {formFields.map(({ id, label, type, isTextArea }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
                {label}
              </label>
              {isTextArea ? (
                <textarea
                  id={id}
                  name={id}
                  rows={4}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent transition-all duration-300 disabled:opacity-50 ${
                    errors[id] ? 'border-red-500' : 'border-white/10'
                  }`}
                />
              ) : (
                <input
                  type={type}
                  id={id}
                  name={id}
                  required
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 rounded-lg bg-white/5 border text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent transition-all duration-300 disabled:opacity-50 ${
                    errors[id] ? 'border-red-500' : 'border-white/10'
                  }`}
                />
              )}
              {errors[id] && (
                <p className="text-red-400 text-sm mt-1">{errors[id]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#edfc3a] 
                     text-black px-6 py-3 rounded-lg font-medium hover:bg-[#f2ff4d] 
                     transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
          </button>
        </form>
      </Card>

      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        message={popupMessage}
      />
    </>
  );
}
