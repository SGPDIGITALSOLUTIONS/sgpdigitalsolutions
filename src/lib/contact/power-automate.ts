import type { ContactLeadPayload } from './types';

export function getContactFlowUrl(): string | null {
  const url =
    process.env.CONTACT_FLOW_URL?.trim() ||
    process.env.NEXT_PUBLIC_CONTACT_FLOW_URL?.trim();
  return url || null;
}

export async function submitContactLead(
  payload: ContactLeadPayload
): Promise<{ ok: boolean; status: number; detail?: string }> {
  const flowUrl = getContactFlowUrl();
  if (!flowUrl) {
    return { ok: false, status: 503, detail: 'CONTACT_FLOW_URL is not set' };
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
