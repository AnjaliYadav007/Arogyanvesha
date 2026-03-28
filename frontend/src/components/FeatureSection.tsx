import Link from 'next/link';
import { FEATURES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function FeatureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border-gold-subtle mb-4">
            <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">
              Four Pillars of Healing
            </span>
          </div>
          <h2 className="section-heading">The Complete Wellness Ecosystem</h2>
          <p className="section-sub max-w-2xl mx-auto mt-4">
            Four integrated modules powered by AI — each addressing a different dimension of holistic health,
            unified under the philosophy of Ayurveda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className={cn(
                'card-base card-hover group relative overflow-hidden',
                `bg-gradient-to-br ${feature.color}`
              )}
            >
              {/* Coming soon badge */}
              {feature.status === 'coming-soon' && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-maroon-800/80 border border-gold-500/20">
                  <span className="font-josefin text-[9px] tracking-widest uppercase text-gold-600">Coming Soon</span>
                </div>
              )}

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-glass flex items-center justify-center text-3xl border-gold-subtle group-hover:border-gold-mid transition-all duration-300 group-hover:scale-105">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel font-semibold text-lg text-gold-300 mb-2 group-hover:text-gold-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-cormorant text-parchment-400 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

              <div className="mt-4 flex items-center justify-between">
                <span className={cn(
                  'font-josefin text-[10px] tracking-widest uppercase px-3 py-1 rounded-full',
                  feature.status === 'active'
                    ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20'
                    : 'bg-parchment-500/10 text-parchment-500 border border-parchment-500/15'
                )}>
                  {feature.status === 'active' ? '● Active' : '◎ In Development'}
                </span>
                {feature.status === 'active' && (
                  <Link href="/analyze" className="font-josefin text-xs text-gold-500 hover:text-gold-300 tracking-wider uppercase transition-colors flex items-center gap-1">
                    Try Now →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="font-cormorant text-parchment-400 text-lg mb-6">
            Ready to experience Ayurvedic intelligence?
          </p>
          <Link
            href="/analyze"
            className="btn-primary"
          >
            Start Free Analysis
          </Link>
        </div>
      </div>
    </section>
  );
}
