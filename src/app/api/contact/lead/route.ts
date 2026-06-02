import { NextResponse } from 'next/server';
import { submitContactLead } from '@/lib/contact/power-automate';
import {
  buildContactLeadPayload,
  type ContactFormValues,
} from '@/lib/contact/types';
import { isValidEmail } from '@/lib/healthcheck/validation';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormValues;

    if (!body.name?.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    if (!body.email?.trim()) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!body.message?.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    const payload = buildContactLeadPayload(body);
    const { ok, status, detail } = await submitContactLead(payload);

    if (!ok) {
      console.error('[contact/lead] Power Automate returned', status, detail);
      return NextResponse.json(
        {
          error:
            'Could not send your message. Please try again or email hello@sgpdigitalsolutions.co.uk directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/lead]', err);
    return NextResponse.json(
      {
        error:
          'Something went wrong. Please try again or email hello@sgpdigitalsolutions.co.uk.',
      },
      { status: 500 }
    );
  }
}
