import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const PRODUCT_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/#features' },
  { label: 'Analyse Symptoms', href: '/analyze' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Twitter / X', href: 'https://twitter.com', icon: Twitter },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t"
      style={{
        background: '#1A0508',
        borderColor: 'rgba(212, 175, 55, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 space-y-5">
            <div>
              <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 rounded">
                <span className="font-display text-xl tracking-widest gold-text-gradient">
                  AROGYANVESHA
                </span>
              </Link>
              <p className="font-sans text-xs tracking-widest mt-1 text-amber-100/30">
                WHERE AI MEETS AYURVEDIC HEALING
              </p>
            </div>

            <p className="font-lora text-sm leading-relaxed max-w-xs text-amber-100/45">
              Personalised Ayurvedic healthcare powered by AI — herbs, diet,
              yoga, and lifestyle guidance tailored to your unique body
              constitution.
            </p>

            {/* Disclaimer */}
            <div
              className="rounded-lg p-4 max-w-xs"
              style={{
                background: 'rgba(212, 175, 55, 0.05)',
                border: '1px solid rgba(212, 175, 55, 0.12)',
              }}
            >
              <p className="font-display text-xs tracking-widest mb-1.5 text-amber-600/60">
                DISCLAIMER
              </p>
              <p className="font-sans text-xs leading-relaxed text-amber-100/35">
                This platform provides informational content only and is not a
                substitute for professional medical advice. Consult a qualified
                Ayurvedic practitioner before beginning any treatment.
              </p>
            </div>
          </div>

          {/* Product links */}
          <nav aria-label="Product navigation">
            <h4 className="font-display text-xs tracking-widest text-yellow-600 mb-5">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-amber-100/45 transition-colors duration-200 hover:text-yellow-600/85 focus:outline-none focus-visible:text-yellow-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials + CTA */}
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-xs tracking-widest text-yellow-600 mb-5">
                FOLLOW US
              </h4>
              <ul className="space-y-3" aria-label="Social media links">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${label}`}
                      className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 rounded"
                    >
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5"
                        style={{
                          background: 'rgba(212, 175, 55, 0.07)',
                          border: '1px solid rgba(212, 175, 55, 0.15)',
                        }}
                      >
                        <Icon
                          size={15}
                          aria-hidden="true"
                          className="text-yellow-600/70 group-hover:text-yellow-500 transition-colors duration-200"
                        />
                      </span>
                      <span className="font-sans text-sm text-amber-100/40 group-hover:text-amber-100/70 transition-colors duration-200">
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle CTA */}
            <Link
              href="/analyze"
              className="inline-flex items-center gap-1.5 font-display text-xs tracking-wider text-yellow-600/80 hover:text-yellow-500 transition-colors duration-200 focus:outline-none focus-visible:underline"
            >
              Begin your analysis
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="h-px mb-8"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.22) 30%, rgba(212,175,55,0.22) 70%, transparent 100%)',
          }}
        />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-sans text-xs text-amber-100/25">
            © {new Date().getFullYear()} Arogyanvesha. All rights reserved.
          </p>

          <nav aria-label="Legal links">
            <ul className="flex items-center gap-6">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-amber-100/25 hover:text-yellow-600/60 transition-colors duration-200 focus:outline-none focus-visible:text-yellow-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </footer>
  );
}