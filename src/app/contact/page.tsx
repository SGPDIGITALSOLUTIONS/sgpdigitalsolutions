'use client';

import { useState, type FormEvent } from 'react';
import Header from '@/components/Header';
import type { ContactFormValues } from '@/lib/contact/types';
import { isValidEmail } from '@/lib/healthcheck/validation';

const services = [
  'Website Design',
  'Bespoke WebTools',
  'Integration',
  'Automation',
  'Data Recovery',
  'Maintenance',
  'Other',
];

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    value: 'hello@sgpdigitalsolutions.co.uk',
    link: 'mailto:hello@sgpdigitalsolutions.co.uk',
    description: 'Send us an email anytime',
  },
  {
    icon: '📱',
    title: 'WhatsApp',
    value: 'whatsapp me',
    link: 'https://wa.me/447516735792',
    description: 'Message us anytime',
  },
  {
    icon: '💬',
    title: 'Response Time',
    value: 'Within 24 hours',
    link: null,
    description: 'We always get back to you quickly',
  },
];

const emptyValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  serviceInterestedIn: '',
  message: '',
};

const inputClass =
  'w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors';

export default function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Partial<Record<keyof ContactFormValues, string>> = {};

    if (!values.name.trim()) next.name = 'Name is required';
    if (!values.email.trim()) {
      next.email = 'Email is required';
    } else if (!isValidEmail(values.email)) {
      next.email = 'Enter a valid email address';
    }
    if (!values.message.trim()) next.message = 'Message is required';

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setSubmitError(
          data.error ||
            'We could not send your message right now. Please email hello@sgpdigitalsolutions.co.uk or WhatsApp us.'
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        'We could not send your message right now. Please check your connection or email hello@sgpdigitalsolutions.co.uk directly.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  function update<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[field];
        return next;
      });
    }
  }

  function resetForm() {
    setValues(emptyValues);
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">Let&apos;s Work Together</h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Ready to transform your digital presence? We&apos;d love to hear about your project
              and discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-black/40 border border-white/10 rounded-xl p-6 text-center hover:border-sgp-green/50 transition-colors group"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-sgp-green font-medium hover:text-sgp-green/80 transition-colors block mb-2"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-sgp-green font-medium mb-2">{method.value}</p>
                  )}
                  <p className="text-white/60 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-sgp-green/10 border border-sgp-green/30 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="text-xl font-bold text-sgp-green mb-2">Message Sent!</h3>
                    <p className="text-white/80">
                      Thank you for your message! We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-4 text-sgp-green hover:text-sgp-green/80 transition-colors underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={inputClass}
                          placeholder="Your name"
                          value={values.name}
                          onChange={(e) => update('name', e.target.value)}
                          autoComplete="name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={inputClass}
                          placeholder="your@email.com"
                          value={values.email}
                          onChange={(e) => update('email', e.target.value)}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className={inputClass}
                          placeholder="Your phone number"
                          value={values.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="serviceInterestedIn"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="serviceInterestedIn"
                          name="serviceInterestedIn"
                          className={inputClass}
                          value={values.serviceInterestedIn}
                          onChange={(e) => update('serviceInterestedIn', e.target.value)}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-black">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your project..."
                        value={values.message}
                        onChange={(e) => update('message', e.target.value)}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>

                    {submitError && (
                      <p className="text-red-400 text-sm" role="alert">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-sgp-green text-black px-6 py-4 rounded-lg font-semibold hover:bg-sgp-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-8">
                <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose SGP Digital?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-sgp-green text-xl">⚡</div>
                      <div>
                        <h4 className="font-semibold text-white">Fast Response</h4>
                        <p className="text-white/70 text-sm">
                          We respond to all inquiries within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-sgp-green text-xl">🎯</div>
                      <div>
                        <h4 className="font-semibold text-white">Tailored Solutions</h4>
                        <p className="text-white/70 text-sm">
                          Every project is customized to your specific needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-sgp-green text-xl">💡</div>
                      <div>
                        <h4 className="font-semibold text-white">Expert Guidance</h4>
                        <p className="text-white/70 text-sm">
                          We&apos;ll guide you through every step of the process
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'Initial Consultation',
                        desc: "We'll discuss your project and requirements",
                      },
                      {
                        step: '2',
                        title: 'Custom Proposal',
                        desc: 'Receive a detailed proposal with timeline and pricing',
                      },
                      {
                        step: '3',
                        title: 'Project Kickoff',
                        desc: 'We start building your digital solution',
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start space-x-4">
                        <div className="bg-sgp-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-sgp-green/10 border border-sgp-green/30 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-sgp-green mb-4">Ready to Get Started?</h3>
                  <p className="text-white/80 mb-6">
                    Don&apos;t hesitate to reach out! We&apos;re here to help turn your digital
                    vision into reality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:hello@sgpdigitalsolutions.co.uk"
                      className="inline-flex items-center justify-center bg-sgp-green text-black px-6 py-3 rounded-lg font-medium hover:bg-sgp-green/90 transition-colors"
                    >
                      📧 Email Us Direct
                    </a>
                    <a
                      href="https://wa.me/447516735792"
                      className="inline-flex items-center justify-center border border-sgp-green text-sgp-green px-6 py-3 rounded-lg font-medium hover:bg-sgp-green hover:text-black transition-colors"
                    >
                      📱 WhatsApp Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
