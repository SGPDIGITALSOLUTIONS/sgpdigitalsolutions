import AutomationServicePage from '@/components/AutomationServicePage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/expense-approval-automation');

export default function Page() {
  return <AutomationServicePage service="expense-approval-automation" />;
}
