import { NextResponse } from 'next/server';
import { submitHealthcheckLead } from '@/lib/healthcheck/power-automate';
import {
  buildHealthcheckLeadPayload,
  type HealthcheckFormValues,
} from '@/lib/healthcheck/types';
import { isValidEmail } from '@/lib/healthcheck/validation';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as HealthcheckFormValues;

    if (!body.name?.trim() || !body.businessName?.trim()) {
      return NextResponse.json(
        { error: 'Name and business name are required.' },
        { status: 400 }
      );
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!body.processTask?.trim()) {
      return NextResponse.json(
        { error: 'Please describe the process or admin task.' },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { error: 'Consent is required.' },
        { status: 400 }
      );
    }

    const payload = buildHealthcheckLeadPayload(body);
    const { ok, status, detail } = await submitHealthcheckLead(payload);

    if (!ok) {
      console.error('[healthcheck/lead] Power Automate returned', status, detail);
      return NextResponse.json(
        { error: 'Could not submit your interest. Please try again or email us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[healthcheck/lead]', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email hello@sgpdigitalsolutions.co.uk.' },
      { status: 500 }
    );
  }
}
