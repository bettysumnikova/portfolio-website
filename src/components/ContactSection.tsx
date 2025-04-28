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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as any).toString()
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormState({ name: '', email: '', message: '' });
          
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-text mb-2">Get in Touch</h2>
        <div className="w-20 h-1 bg-accent mb-10"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-text/70 mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Fill out the form or reach out through any of the platforms below.
            </p>

            {/* Email */}
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text/60 mb-1">Email</h4>
                  <a 
                    href="mailto:alzbeta.sumnikova@gmail.com" 
                    className="text-text hover:text-accent transition-colors duration-300"
                  >
                    alzbeta.sumnikova@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Github className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text/60 mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/bettysumnikova" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text hover:text-accent transition-colors duration-300"
                  >
                    github.com/bettysumnikova
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Linkedin className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text/60 mb-1">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/alzbetasumnikova" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text hover:text-accent transition-colors duration-300"
                  >
                    linkedin.com/in/alzbetasumnikova
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white border ${
                    errors.name ? 'border-red-300' : 'border-accent/20'
                  } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white border ${
                    errors.email ? 'border-red-300' : 'border-accent/20'
                  } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg bg-white border ${
                    errors.message ? 'border-red-300' : 'border-accent/20'
                  } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Button */}
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

              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 bg-accent/10 border border-accent/20 text-accent-dark rounded-lg">
                  Thanks for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
