import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/websites');

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
