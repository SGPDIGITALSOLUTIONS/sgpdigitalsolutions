export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  message: string;
};

export type ContactLeadPayload = {
  name: string;
  email: string;
  phone: string;
  serviceInterestedIn: string;
  message: string;
  source: 'contact';
};

export function buildContactLeadPayload(
  values: ContactFormValues
): ContactLeadPayload {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    serviceInterestedIn: values.serviceInterestedIn.trim(),
    message: values.message.trim(),
    source: 'contact',
  };
}
