import Link from 'next/link';
import BrochureDownload from '@/components/BrochureDownload';
import { footerTagline } from '@/lib/home/content';
import styles from '@/components/home/HomePage.module.css';

export default function SiteFooter() {
  return (
    <div className={styles.page}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div><strong>SGP DIGITAL SOLUTIONS</strong><p>{footerTagline}</p></div>
            <nav aria-label="Footer navigation">
              <Link href="/about">About us</Link><Link href="/services">All services</Link>
              <Link href="/portfolio">Client work</Link><Link href="/pricing">Pricing</Link>
              <Link href="/admin-workflow-healthcheck">£50 healthcheck</Link><Link href="/contact">Contact</Link>
              <BrochureDownload compact />
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} SGP Digital Solutions. All rights reserved.</p>
            <div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
