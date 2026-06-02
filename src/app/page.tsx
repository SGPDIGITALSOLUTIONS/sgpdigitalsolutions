import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';
import { homeMeta } from '@/lib/home/content';

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
  keywords: homeMeta.keywords,
  openGraph: {
    title: homeMeta.title,
    description: homeMeta.description,
    type: 'website',
  },
};

export default function Page() {
  return <HomePage />;
}
