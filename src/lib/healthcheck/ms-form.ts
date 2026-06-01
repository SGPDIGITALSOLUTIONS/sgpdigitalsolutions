/**
 * Microsoft Forms pre-fill integration.
 *
 * Setup:
 * 1. In MS Forms: Share → Get a link to pre-fill → copy the URL.
 * 2. Set NEXT_PUBLIC_MS_FORM_HEALTHCHECK_URL in .env.local to that URL.
 * 3. Replace the placeholder keys below with the query param names from your
 *    pre-fill link (e.g. r123abc= for each field).
 */

export type HealthcheckFormValues = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  processTask: string;
  currentProcess: string;
  painPoints: string;
  toolsInUse: string;
  preferredContact: string;
  consent: boolean;
};

/**
 * Map site form fields → MS Forms pre-fill query parameter names.
 * Update these when you have your pre-fill template URL from Microsoft Forms.
 */
export const MS_FORM_FIELD_PARAMS: Partial<
  Record<keyof HealthcheckFormValues, string>
> = {
  name: 'r_name',
  businessName: 'r_business_name',
  email: 'r_email',
  phone: 'r_phone',
  processTask: 'r_process_task',
  currentProcess: 'r_current_process',
  painPoints: 'r_pain_points',
  toolsInUse: 'r_tools',
  preferredContact: 'r_preferred_contact',
};

export function getMsFormBaseUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_MS_FORM_HEALTHCHECK_URL?.trim();
  return url || null;
}

export function isMsFormConfigured(): boolean {
  return Boolean(getMsFormBaseUrl());
}

export function buildMsFormUrl(values: HealthcheckFormValues): string | null {
  const base = getMsFormBaseUrl();
  if (!base) return null;

  let url: URL;
  try {
    url = new URL(base);
  } catch {
    return null;
  }

  const entries: [string, string][] = [
    ['name', values.name],
    ['businessName', values.businessName],
    ['email', values.email],
    ['phone', values.phone],
    ['processTask', values.processTask],
    ['currentProcess', values.currentProcess],
    ['painPoints', values.painPoints],
    ['toolsInUse', values.toolsInUse],
    ['preferredContact', values.preferredContact],
  ];

  for (const [field, value] of entries) {
    const paramKey = MS_FORM_FIELD_PARAMS[field as keyof HealthcheckFormValues];
    if (paramKey && value.trim()) {
      url.searchParams.set(paramKey, value.trim());
    }
  }

  return url.toString();
}
