import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/privacy');

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
