'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LOGO_SRC = '/images/logo trimmed.png';
const HEALTHCHECK_PATH = '/admin-workflow-healthcheck';
const HEALTHCHECK_NAV_LABEL = 'ADMIN/PROCESS MOT';

const healthcheckNavLinkClass =
  'nav-link px-4 py-2 rounded-terminal border-2 border-terminal-yellow bg-terminal-yellow/15 text-terminal-yellow font-bold font-terminal-mono shadow-[0_0_12px_rgba(255,255,0,0.25)] hover:bg-terminal-yellow hover:text-terminal-black transition-all duration-200';

const healthcheckNavLinkMobileClass =
  'block nav-link py-3 px-4 rounded-terminal bg-terminal-yellow/15 border-2 border-terminal-yellow text-terminal-yellow font-bold font-terminal-mono hover:bg-terminal-yellow hover:text-terminal-black transition-all duration-200';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const onHealthcheckPage = pathname === HEALTHCHECK_PATH;

  return (
    <header className="bg-terminal-black border-b-3 border-terminal-green sticky top-0 z-50 terminal-section">
      <nav className="container mx-auto px-4 py-2 md:py-2.5">
        <div className="flex justify-between items-center gap-4">
          <Link
            href="/"
            className="flex-shrink-0 rounded-terminal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green"
            aria-label="SGP Digital Solutions — home"
          >
            <Image
              src={LOGO_SRC}
              alt="SGP Digital Solutions"
              width={640}
              height={128}
              sizes="(max-width: 768px) 300px, 540px"
              className="h-12 w-auto max-w-[min(92vw,340px)] sm:h-14 sm:max-w-[440px] md:h-16 md:max-w-[560px] object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link 
              href="/" 
              className="nav-link px-4 py-2 rounded-terminal border-2 border-transparent hover:border-terminal-green hover:bg-terminal-grey transition-all duration-200"
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="nav-link px-4 py-2 rounded-terminal border-2 border-transparent hover:border-terminal-cyan hover:bg-terminal-grey transition-all duration-200"
            >
              ABOUT
            </Link>
            <Link 
              href="/services" 
              className="nav-link px-4 py-2 rounded-terminal border-2 border-transparent hover:border-terminal-purple hover:bg-terminal-grey transition-all duration-200"
            >
              SERVICES
            </Link>
            <Link 
              href="/portfolio" 
              className="nav-link px-4 py-2 rounded-terminal border-2 border-transparent hover:border-terminal-pink hover:bg-terminal-grey transition-all duration-200"
            >
              CLIENTS
            </Link>
            <Link
              href={HEALTHCHECK_PATH}
              className={
                onHealthcheckPage
                  ? `${healthcheckNavLinkClass} ring-2 ring-terminal-yellow ring-offset-2 ring-offset-terminal-black`
                  : healthcheckNavLinkClass
              }
              aria-current={onHealthcheckPage ? 'page' : undefined}
            >
              {HEALTHCHECK_NAV_LABEL}
            </Link>
            <Link 
              href="/contact" 
              className="btn btn-primary px-6 py-2 text-sm"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 bg-terminal-black border-3 border-terminal-green rounded-terminal transition-all duration-200 hover:bg-terminal-grey neo-terminal-element"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-terminal-green"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 space-y-3 bg-terminal-dark border-3 border-terminal-white rounded-neo p-6 neo-terminal-element">
            <Link
              href="/"
              className="block nav-link py-3 px-4 rounded-terminal bg-terminal-black border-2 border-terminal-green hover:bg-terminal-grey transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block nav-link py-3 px-4 rounded-terminal bg-terminal-black border-2 border-terminal-cyan hover:bg-terminal-grey transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="block nav-link py-3 px-4 rounded-terminal bg-terminal-black border-2 border-terminal-purple hover:bg-terminal-grey transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/portfolio"
              className="block nav-link py-3 px-4 rounded-terminal bg-terminal-black border-2 border-terminal-pink hover:bg-terminal-grey transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              CLIENTS
            </Link>
            <Link
              href={HEALTHCHECK_PATH}
              className={
                onHealthcheckPage
                  ? `${healthcheckNavLinkMobileClass} ring-2 ring-terminal-yellow ring-offset-2 ring-offset-terminal-dark`
                  : healthcheckNavLinkMobileClass
              }
              aria-current={onHealthcheckPage ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {HEALTHCHECK_NAV_LABEL}
            </Link>
            <Link
              href="/contact"
              className="block btn btn-primary w-full text-center py-3 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
} 