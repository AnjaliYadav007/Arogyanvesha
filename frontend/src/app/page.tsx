import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import StepSection from '@/components/StepSection';
import Link from 'next/link';
import { BODY_SYSTEMS, DOSHAS } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <StepSection />

      {/* Dosha Section */}
      <section className="py-24 relative bg-maroon-900/20">
        <div className="section-container">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border-gold-subtle mb-4">
              <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">The Three Doshas</span>
            </div>
            <h2 className="section-heading">Understand Your Prakriti</h2>
            <p className="section-sub max-w-xl mx-auto mt-4">
              Ayurveda classifies all human constitutions into three fundamental bio-energies.
              Our AI identifies your dominant Dosha and customises every recommendation accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {DOSHAS.map((dosha) => (
              <div key={dosha.id} className={`card-base bg-gradient-to-br ${dosha.color} card-hover group`}>
                <div className="text-5xl mb-4">{dosha.icon}</div>
                <h3 className="font-cinzel font-bold text-2xl text-gold-300 mb-1">{dosha.name}</h3>
                <p className="font-josefin text-[10px] tracking-widest uppercase text-parchment-500 mb-4">{dosha.element}</p>
                <div className="space-y-2 mb-5">
                  {dosha.traits.map((trait) => (
                    <div key={trait} className="flex items-center gap-2 font-cormorant text-parchment-300 text-base">
                      <span className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Systems */}
      <section className="py-24 relative">
        <div className="section-container">
          <div className="text-center mb-14 space-y-4">
            <h2 className="section-heading">100+ Conditions Across All Body Systems</h2>
            <p className="section-sub max-w-xl mx-auto mt-4">
              Comprehensive Ayurvedic coverage — from digestive disorders to skin conditions,
              mental health to reproductive wellness.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {BODY_SYSTEMS.map((system) => (
              <div key={system.id} className="card-base card-hover text-center group">
                <div className="text-3xl mb-3">{system.icon}</div>
                <h4 className="font-cinzel font-semibold text-gold-400 text-xs mb-2 group-hover:text-gold-300 transition-colors">
                  {system.name}
                </h4>
                <div className="space-y-0.5">
                  {system.conditions.slice(0, 2).map((c) => (
                    <p key={c} className="font-cormorant text-parchment-500 text-xs">{c}</p>
                  ))}
                  <p className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600">+more</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-950 via-maroon-900/50 to-maroon-950" />
        <div className="section-container relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-cormorant text-gold-500/40 text-7xl leading-none">&ldquo;</span>
            <p className="font-cormorant italic text-3xl md:text-4xl text-parchment-200 leading-relaxed -mt-8">
              Swasthasya swasthya rakshanam, aturasya vikara prashamanam cha
            </p>
            <p className="font-cormorant text-parchment-400 text-lg">
              Protecting the health of the healthy, and curing the diseases of the sick.
            </p>
            <p className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-500">
              Charaka Samhita — The Foundational Principle of Ayurveda
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="section-container">
          <div className="bg-glass rounded-3xl p-12 border-gold-mid text-center relative overflow-hidden shadow-glass">
            <div className="absolute inset-0 mandala-bg opacity-50" />
            <div className="relative z-10 space-y-6">
              <h2 className="font-cinzel font-black text-4xl md:text-5xl text-gold-gradient">
                Begin Your Healing Journey
              </h2>
              <p className="font-cormorant text-parchment-300 text-xl max-w-xl mx-auto leading-relaxed">
                Get a personalized Ayurvedic analysis in under 3 minutes.
                No signup required for your first analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/analyze" className="btn-primary">
                  Start Free Analysis
                </Link>
                <Link href="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
