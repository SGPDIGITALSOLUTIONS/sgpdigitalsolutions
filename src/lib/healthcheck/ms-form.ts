/**
 * Microsoft Forms pre-fill integration.
 *
 * Base URL: NEXT_PUBLIC_MS_FORM_HEALTHCHECK_URL in .env.local
 * Question IDs from Microsoft Forms "Get a link to pre-fill".
 */

import type { HealthcheckFormValues } from './types';

/** Primary pre-fill query param per site field (r + question guid). */
export const MS_FORM_FIELD_PARAMS: Partial<
  Record<keyof HealthcheckFormValues, string>
> = {
  name: 'r74661dab4ec347f88ec8387de318b610',
  businessName: 'r829bcd2742be4eaab5ce172fc77e2ddd',
  email: 'r84f53c06fd1841e694022e30aafed26a',
  phone: 'rca1d3679555d454ca8c4a66ba3843bca',
  processTask: 'rb14c226863bf42d1885a8fe986fd63c6',
  currentProcess: 'r58301804b427468194c293e6ba4d49bf',
  painPoints: 'r46a829d59fea4edd8587093507f2b418',
  toolsInUse: 'r57b098761c7a48d5837299c1de8b578d',
  preferredContact: 'r763471f4692546c1b6b74a96c7a6f99c',
};

/**
 * Choice questions also need QuestionInfo_* (exact option label must match MS Form).
 */
export const MS_FORM_QUESTION_INFO_PARAMS: Partial<
  Record<keyof HealthcheckFormValues, string>
> = {
  processTask: 'QuestionInfo_rb14c226863bf42d1885a8fe986fd63c6',
  preferredContact: 'QuestionInfo_r763471f4692546c1b6b74a96c7a6f99c',
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

  const entries: (keyof HealthcheckFormValues)[] = [
    'name',
    'businessName',
    'email',
    'phone',
    'processTask',
    'currentProcess',
    'painPoints',
    'toolsInUse',
    'preferredContact',
  ];

  for (const field of entries) {
    const raw = values[field];
    if (typeof raw !== 'string' || !raw.trim()) continue;

    const value = raw.trim();
    const paramKey = MS_FORM_FIELD_PARAMS[field];
    if (paramKey) {
      url.searchParams.set(paramKey, value);
    }

    const infoKey = MS_FORM_QUESTION_INFO_PARAMS[field];
    if (infoKey) {
      url.searchParams.set(infoKey, value);
    }
  }

  return url.toString();
}
