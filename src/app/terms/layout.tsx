import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/terms');

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
