'use client';

import { useState, type FormEvent } from 'react';
import {
  buildMsFormUrl,
  getMsFormBaseUrl,
  isMsFormConfigured,
  type HealthcheckFormValues,
} from '@/lib/healthcheck/ms-form';

const inputClass =
  'w-full px-4 py-3 bg-terminal-black border-3 border-terminal-white rounded-terminal text-terminal-white placeholder:text-terminal-white/40 focus:border-terminal-green focus:outline-none font-terminal-sans';

const labelClass =
  'block text-sm font-terminal-mono uppercase text-terminal-green mb-2 tracking-wide';

const emptyValues: HealthcheckFormValues = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  processTask: '',
  currentProcess: '',
  painPoints: '',
  toolsInUse: '',
  preferredContact: 'Email',
  consent: false,
};

export default function ExpressInterestForm() {
  const [values, setValues] = useState<HealthcheckFormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof HealthcheckFormValues, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const configured = isMsFormConfigured();

  function validate(): boolean {
    const next: Partial<Record<keyof HealthcheckFormValues, string>> = {};

    if (!values.name.trim()) next.name = 'Name is required';
    if (!values.businessName.trim()) next.businessName = 'Business name is required';
    if (!values.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Enter a valid email address';
    }
    if (!values.processTask.trim()) {
      next.processTask = 'Please describe the process or admin task';
    }
    if (!values.consent) {
      next.consent = 'Please confirm you agree to be contacted';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    if (!configured) {
      setSubmitError(
        'The booking form is not configured yet. Please contact hello@sgpdigitalsolutions.co.uk and we will help you book in.'
      );
      return;
    }

    const url = buildMsFormUrl(values);
    if (!url) {
      setSubmitError(
        'Could not open the booking form. Please check the form URL configuration or email hello@sgpdigitalsolutions.co.uk.'
      );
      return;
    }

    setSubmitting(true);
    window.location.href = url;
  }

  function update<K extends keyof HealthcheckFormValues>(
    field: K,
    value: HealthcheckFormValues[K]
  ) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[field];
        return next;
      });
    }
  }

  const baseOnlyHref = getMsFormBaseUrl();

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {!configured && (
        <div
          className="p-4 border-3 border-terminal-yellow rounded-terminal bg-terminal-dark text-terminal-yellow text-sm"
          role="status"
        >
          Microsoft Form URL is not set. Add{' '}
          <code className="text-terminal-white">NEXT_PUBLIC_MS_FORM_HEALTHCHECK_URL</code>{' '}
          to your environment file to enable pre-filled redirects.
          {baseOnlyHref && (
            <p className="mt-2">
              <a
                href={baseOnlyHref}
                className="text-terminal-cyan underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open form without pre-fill (dev)
              </a>
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="hc-name" className={labelClass}>
            Name *
          </label>
          <input
            id="hc-name"
            name="name"
            type="text"
            className={inputClass}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-terminal-red">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="hc-business" className={labelClass}>
            Business name *
          </label>
          <input
            id="hc-business"
            name="businessName"
            type="text"
            className={inputClass}
            value={values.businessName}
            onChange={(e) => update('businessName', e.target.value)}
            autoComplete="organization"
          />
          {errors.businessName && (
            <p className="mt-1 text-sm text-terminal-red">{errors.businessName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="hc-email" className={labelClass}>
            Email address *
          </label>
          <input
            id="hc-email"
            name="email"
            type="email"
            className={inputClass}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-terminal-red">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="hc-phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="hc-phone"
            name="phone"
            type="tel"
            className={inputClass}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="hc-process" className={labelClass}>
          What process or admin task would you like us to look at? *
        </label>
        <input
          id="hc-process"
          name="processTask"
          type="text"
          className={inputClass}
          value={values.processTask}
          onChange={(e) => update('processTask', e.target.value)}
        />
        {errors.processTask && (
          <p className="mt-1 text-sm text-terminal-red">{errors.processTask}</p>
        )}
      </div>

      <div>
        <label htmlFor="hc-current" className={labelClass}>
          What currently happens?
        </label>
        <textarea
          id="hc-current"
          name="currentProcess"
          rows={4}
          className={`${inputClass} resize-none`}
          value={values.currentProcess}
          onChange={(e) => update('currentProcess', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="hc-pain" className={labelClass}>
          What is annoying, slow, repetitive, or unreliable about it?
        </label>
        <textarea
          id="hc-pain"
          name="painPoints"
          rows={4}
          className={`${inputClass} resize-none`}
          value={values.painPoints}
          onChange={(e) => update('painPoints', e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="hc-tools" className={labelClass}>
          Tools you use (Microsoft 365, spreadsheets, CRM, etc.)
        </label>
        <textarea
          id="hc-tools"
          name="toolsInUse"
          rows={3}
          className={`${inputClass} resize-none`}
          value={values.toolsInUse}
          onChange={(e) => update('toolsInUse', e.target.value)}
          placeholder="e.g. Microsoft 365, Excel, Xero, booking software…"
        />
      </div>

      <div>
        <label htmlFor="hc-contact-pref" className={labelClass}>
          Preferred contact method
        </label>
        <select
          id="hc-contact-pref"
          name="preferredContact"
          className={inputClass}
          value={values.preferredContact}
          onChange={(e) => update('preferredContact', e.target.value)}
        >
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="Either">Either</option>
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="hc-consent"
          name="consent"
          type="checkbox"
          className="mt-1 w-5 h-5 accent-terminal-green"
          checked={values.consent}
          onChange={(e) => update('consent', e.target.checked)}
        />
        <label htmlFor="hc-consent" className="text-sm text-terminal-white/90">
          I agree to be contacted by SGP Digital Solutions about the Admin &amp;
          Workflow Healthcheck. *
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-terminal-red -mt-4">{errors.consent}</p>
      )}

      {submitError && (
        <p className="text-terminal-red text-sm" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary w-full md:w-auto disabled:opacity-50"
        aria-label="Let's Find the Faff — Express Interest"
      >
        {submitting ? 'Opening form…' : 'Express Interest'}
      </button>
      <p className="text-xs text-terminal-white/50 font-terminal-mono">
        Alternative: Let&apos;s Find the Faff
      </p>
    </form>
  );
}
