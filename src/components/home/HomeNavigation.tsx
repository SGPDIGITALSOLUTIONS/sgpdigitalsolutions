'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AutomationIcon from './AutomationIcon';
import styles from './HomePage.module.css';

const links = [
  { href: '/#automation', label: 'Automation' },
  { href: '/#how-it-works', label: 'How we work' },
  { href: '/about', label: 'About us' },
  { href: '/services', label: 'All services' },
];

/** Homepage-only navigation; the shared header on other pages is unchanged. */
export default function HomeNavigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1080px)');
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <header className={styles.header} onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link href="/" className={styles.logo} aria-label="SGP Digital Solutions home">
            <Image src="/images/logo trimmed.png" alt="SGP Digital Solutions"
              width={640} height={128} priority
              sizes="(max-width: 600px) 218px, 270px" />
          </Link>
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link href="/contact" className={styles.navCta}>Let&apos;s talk <AutomationIcon name="arrow" /></Link>
          </nav>
          <button ref={toggle} type="button" className={styles.menuButton}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open} aria-controls="home-mobile-navigation"
            onClick={() => setOpen(!open)}>
            <AutomationIcon name={open ? 'close' : 'menu'} />
          </button>
        </div>
        <nav id="home-mobile-navigation" className={styles.mobileNav}
          aria-label="Mobile navigation" hidden={!open}>
          {links.map((link) => <Link key={link.href} href={link.href}
            onClick={() => setOpen(false)}>{link.label}</Link>)}
          <Link href="/contact" onClick={() => setOpen(false)}>Let&apos;s talk automation <AutomationIcon name="arrow" /></Link>
        </nav>
      </header>
    </>
  );
}
