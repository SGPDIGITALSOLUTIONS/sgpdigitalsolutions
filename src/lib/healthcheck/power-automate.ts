import type { HealthcheckLeadPayload } from './types';

export function getHealthcheckFlowUrl(): string | null {
  const url =
    process.env.HEALTHCHECK_FLOW_URL?.trim() ||
    process.env.NEXT_PUBLIC_HEALTHCHECK_FLOW_URL?.trim();
  return url || null;
}

export function isHealthcheckFlowConfigured(): boolean {
  return Boolean(getHealthcheckFlowUrl());
}

export async function submitHealthcheckLead(
  payload: HealthcheckLeadPayload
): Promise<{ ok: boolean; status: number; detail?: string }> {
  const flowUrl = getHealthcheckFlowUrl();
  if (!flowUrl) {
    return { ok: false, status: 503, detail: 'HEALTHCHECK_FLOW_URL is not set' };
  }

  const response = await fetch(flowUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const text = await response.text().catch(() => '');
  const success = response.ok || response.status === 202;

  if (!success) {
    return { ok: false, status: response.status, detail: text.slice(0, 500) };
  }

  return { ok: true, status: response.status };
}
