export type HealthcheckFormValues = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  processTask: string;
  currentProcess: string;
  painPoints: string;
  toolsInUse: string;
  preferredContact: string;
  consent: boolean;
};

export type HealthcheckLeadPayload = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  processTask: string;
  currentProcess: string;
  painPoints: string;
  toolsInUse: string;
  preferredContact: string;
  source: 'admin-workflow-healthcheck';
};

export function buildHealthcheckLeadPayload(
  values: HealthcheckFormValues
): HealthcheckLeadPayload {
  return {
    name: values.name.trim(),
    businessName: values.businessName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    website: values.website.trim(),
    processTask: values.processTask.trim(),
    currentProcess: values.currentProcess.trim(),
    painPoints: values.painPoints.trim(),
    toolsInUse: values.toolsInUse.trim(),
    preferredContact: values.preferredContact.trim(),
    source: 'admin-workflow-healthcheck',
  };
}
