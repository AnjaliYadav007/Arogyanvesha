'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-maroon-950/90 backdrop-blur-xl border-b border-gold-500/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
<div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500/80 flex-shrink-0 bg-maroon-950">
  <Image
    src="/images/Arogyanvesha.jpeg"
    alt="Arogyanvesha Logo"
    fill
    className="object-contain scale-110"
  />
</div>
          <div>
            <span className="font-cinzel font-bold text-lg text-gold-gradient block leading-none">
              Arogyanvesha
            </span>
            <span className="font-josefin text-[9px] tracking-[0.3em] text-parchment-400 uppercase">
              Where AI Meets Ayurveda
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'font-josefin text-sm tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300',
                pathname === item.href
                  ? 'text-gold-400 bg-gold-500/10'
                  : 'text-parchment-300 hover:text-gold-400 hover:bg-gold-500/5'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full font-josefin text-xs tracking-widest uppercase
              bg-gradient-to-r from-gold-600 to-gold-500 text-maroon-950 font-semibold
              shadow-gold-sm hover:shadow-gold hover:-translate-y-0.5 transition-all duration-300"
          >
            Dashboard
          </Link>
          <Link
            href="/analyze"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full font-josefin text-xs tracking-widest uppercase
              border border-gold-500/50 text-gold-400
              hover:border-gold-500 hover:text-gold-300 transition-all duration-300"
          >
            Analyze Now
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gold-400 hover:text-gold-300 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-400',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="bg-maroon-950/95 backdrop-blur-xl border-t border-gold-500/10 px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block font-josefin text-sm tracking-widest uppercase px-4 py-3 rounded-xl transition-all duration-200',
                pathname === item.href
                  ? 'text-gold-400 bg-gold-500/10'
                  : 'text-parchment-300 hover:text-gold-400 hover:bg-gold-500/5'
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link href="/dashboard" className="btn-primary text-center text-xs">
              Dashboard
            </Link>
            <Link href="/analyze" className="btn-outline text-center text-xs">
              Analyze Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
