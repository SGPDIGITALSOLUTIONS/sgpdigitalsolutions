'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-terminal-black border-b-3 border-terminal-green sticky top-0 z-50 terminal-section">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-black text-terminal-white hover:text-terminal-green transition-all duration-200 font-terminal-mono uppercase tracking-wider terminal-glow"
            style={{ textShadow: '2px 2px 0px #000000, 0 0 10px rgba(0, 255, 136, 0.6)' }}
          >
            SGP.DIGITAL
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
              PORTFOLIO
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
              PORTFOLIO
            </Link>
            <Link
              href="/contact"
              className="block btn btn-primary w-full text-center py-3 mt-4"
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