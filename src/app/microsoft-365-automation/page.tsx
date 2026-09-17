import AutomationServicePage from '@/components/AutomationServicePage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/microsoft-365-automation');

export default function Page() {
  return <AutomationServicePage service="microsoft-365-automation" />;
}
