import React, { useState } from 'react';
import { Send, Linkedin, Github, Mail } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) {
      e.preventDefault(); // prevent submission if invalid
    } else {
      setIsSubmitting(true);
      // Let the form submit naturally
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-text mb-2">Get in Touch</h2>
        <div className="w-20 h-1 bg-accent mb-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-text/70 mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Fill out the form or reach out through any of the platforms below.
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={<Mail className="text-accent" size={20} />}
                label="Email"
                link="mailto:alzbeta.sumnikova@gmail.com"
                text="alzbeta.sumnikova@gmail.com"
              />
              <ContactInfo
                icon={<Github className="text-accent" size={20} />}
                label="GitHub"
                link="https://github.com/bettysumnikova"
                text="github.com/bettysumnikova"
              />
              <ContactInfo
                icon={<Linkedin className="text-accent" size={20} />}
                label="LinkedIn"
                link="https://linkedin.com/in/alzbetasumnikova"
                text="linkedin.com/in/alzbetasumnikova"
              />
            </div>
          </div>

          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <InputField
                id="name"
                name="name"
                label="Name"
                value={formState.name}
                onChange={handleChange}
                error={errors.name}
              />

              <InputField
                id="email"
                name="email"
                label="Email"
                value={formState.email}
                onChange={handleChange}
                error={errors.email}
                type="email"
              />

              <TextareaField
                id="message"
                name="message"
                label="Message"
                value={formState.message}
                onChange={handleChange}
                error={errors.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-accent text-white rounded-lg flex items-center justify-center transform hover:scale-105 transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accent-dark'
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separated smaller components for neatness

const ContactInfo = ({
  icon,
  label,
  link,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  link: string;
  text: string;
}) => (
  <div className="flex items-center group">
    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-text/60 mb-1">{label}</h4>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text hover:text-accent transition-colors duration-300"
      >
        {text}
      </a>
    </div>
  </div>
);

const InputField = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  type = 'text',
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-text/80 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 rounded-lg bg-white border ${
        error ? 'border-red-300' : 'border-accent/20'
      } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const TextareaField = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-text/80 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      rows={4}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 rounded-lg bg-white border ${
        error ? 'border-red-300' : 'border-accent/20'
      } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default ContactSection;
