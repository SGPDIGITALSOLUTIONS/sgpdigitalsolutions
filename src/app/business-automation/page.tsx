import AutomationServicePage from '@/components/AutomationServicePage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/business-automation');

export default function Page() {
  return <AutomationServicePage service="business-automation" />;
}
