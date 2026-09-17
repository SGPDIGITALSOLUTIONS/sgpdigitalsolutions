import HomePage from '@/components/home/HomePage';
import { organizationSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/');

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
    }} />
    <HomePage />
  </>;
}
