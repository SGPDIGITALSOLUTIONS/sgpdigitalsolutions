import type { ReactNode } from 'react';
import HomeNavigation from '@/components/home/HomeNavigation';
import SiteFooter from '@/components/SiteFooter';
import styles from '@/components/home/HomePage.module.css';

export default function SitePage({ children }: { children: ReactNode }) {
  return (
    <div className="site-page">
      <div className={`${styles.page} site-navigation`}><HomeNavigation /></div>
      <main id="main-content" className="interior-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
