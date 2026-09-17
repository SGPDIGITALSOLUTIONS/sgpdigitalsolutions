import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/admin-workflow-healthcheck');

export default function AdminWorkflowHealthcheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
