import type { Metadata } from 'next';
import { healthcheckMeta } from '@/lib/healthcheck/content';

export const metadata: Metadata = {
  title: healthcheckMeta.title,
  description: healthcheckMeta.description,
  openGraph: {
    title: healthcheckMeta.title,
    description: healthcheckMeta.description,
  },
};

export default function AdminWorkflowHealthcheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
