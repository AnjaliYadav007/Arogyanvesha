'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Analyse', href: '/analyze' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#3A0A15]/90 backdrop-blur-xl border-b border-yellow-600/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 rounded"
          aria-label="Arogyanvesha — home"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-yellow-600/70 flex-shrink-0 bg-[#3A0A15]">
            <Image
              src="/images/Arogyanvesha.jpeg"
              alt=""
              fill
              className="object-contain scale-110"
              aria-hidden="true"
            />
          </div>
          <div>
            <span className="font-display font-bold text-base lg:text-lg gold-text-gradient block leading-none">
              Arogyanvesha
            </span>
            <span className="font-sans text-[9px] tracking-[0.25em] text-amber-100/40 uppercase hidden sm:block">
              Where AI Meets Ayurveda
            </span>
          </div>
        </Link>

        {/* ── Desktop nav (lg+) ── */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-display text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300',
                pathname === item.href
                  ? 'text-yellow-500 bg-yellow-600/10'
                  : 'text-amber-100/60 hover:text-yellow-500 hover:bg-yellow-600/5'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTAs (lg+) + Mobile toggle ── */}
        <div className="flex items-center gap-3">
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/analyze"
              className="inline-flex items-center px-5 py-2 rounded-full font-display text-xs tracking-widest uppercase transition-all duration-300 border border-yellow-600/50 text-yellow-500 hover:border-yellow-500 hover:bg-yellow-600/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600"
            >
              Analyse Now
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-5 py-2 rounded-full font-display text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #E8CC6A, #B8942A)',
                color: '#3A0A15',
                boxShadow: '0 4px 16px rgba(212,175,55,0.25)',
              }}
            >
              Dashboard
            </Link>
          </div>

          {/* Hamburger — visible below lg */}
          <button
            className="lg:hidden p-2 rounded text-yellow-500 hover:text-yellow-400 hover:bg-yellow-600/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* ── Mobile / Tablet menu (below lg) ── */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <div
          className="border-t px-4 py-5 space-y-1"
          style={{
            background: 'rgba(26, 5, 8, 0.97)',
            borderColor: 'rgba(212, 175, 55, 0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Nav links */}
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center font-display text-sm tracking-widest uppercase px-4 py-3.5 rounded-lg transition-all duration-200',
                pathname === item.href
                  ? 'text-yellow-500 bg-yellow-600/10'
                  : 'text-amber-100/55 hover:text-yellow-500 hover:bg-yellow-600/5'
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span
                  className="ml-auto w-1.5 h-1.5 rounded-full"
                  style={{ background: '#D4AF37' }}
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}

          {/* CTAs */}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/analyze"
              className="flex items-center justify-center w-full py-3.5 rounded-lg font-display text-sm tracking-widest uppercase transition-all duration-300 border text-yellow-500 hover:bg-yellow-600/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600"
              style={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}
            >
              Analyse Now
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center justify-center w-full py-3.5 rounded-lg font-display text-sm tracking-widest uppercase font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #E8CC6A, #B8942A)',
                color: '#3A0A15',
              }}
            >
              Dashboard
            </Link>
          </div>

          {/* Tagline */}
          <p
            className="text-center font-sans text-xs pt-4 pb-1"
            style={{ color: 'rgba(245, 240, 232, 0.2)' }}
          >
            Where AI Meets Ayurvedic Healing
          </p>
        </div>
      </div>
    </header>
  );
}