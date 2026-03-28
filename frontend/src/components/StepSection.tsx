const STEPS = [
  {
    step: '01',
    title: 'Describe Your Symptoms',
    description: 'Select from our comprehensive symptom library or describe your condition in natural language. Include duration, severity, and lifestyle factors.',
    icon: '📋',
  },
  {
    step: '02',
    title: 'AI Prakriti Analysis',
    description: 'Our AI cross-references your symptoms with Dosha frameworks (Vata, Pitta, Kapha) and queries our RAG pipeline built from classical Ayurvedic texts.',
    icon: '🤖',
  },
  {
    step: '03',
    title: 'Disease Identification',
    description: 'The system identifies the primary condition and its Ayurvedic classification, mapping it against 100+ conditions across all 10 body systems.',
    icon: '🔍',
  },
  {
    step: '04',
    title: 'Receive Your 5-Part Plan',
    description: 'Get a personalised healing card: Herb Prescription, Pathya-Apathya Diet, Yoga Asanas, Panchakarma suggestions, and Lifestyle Modifications.',
    icon: '🌿',
  },
];

export default function StepSection() {
  return (
    <section className="py-24 relative">
      {/* Divider */}
      <div className="section-container mb-16">
        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <span className="font-cinzel text-gold-500/40 text-2xl">❖</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border-gold-subtle mb-4">
            <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">
              How It Works
            </span>
          </div>
          <h2 className="section-heading">Your Healing Journey in 4 Steps</h2>
          <p className="section-sub max-w-xl mx-auto mt-4">
            From symptoms to a complete Ayurvedic treatment plan — powered by AI, grounded in ancient wisdom.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, index) => (
              <div key={step.step} className="relative group">
                {/* Card */}
                <div className="bg-glass rounded-2xl p-6 border-gold-subtle hover:border-gold-mid transition-all duration-300 hover:-translate-y-1 hover:shadow-gold h-full">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600/30 to-gold-800/20 border border-gold-500/30 flex items-center justify-center">
                      <span className="font-cinzel font-bold text-gold-400 text-sm">{step.step}</span>
                    </div>
                    <span className="text-3xl">{step.icon}</span>
                  </div>

                  <h3 className="font-cinzel font-semibold text-base text-gold-300 mb-3 group-hover:text-gold-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-cormorant text-parchment-400 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (between steps) */}
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-16 z-10 w-6 h-6 items-center justify-center">
                    <span className="text-gold-500/40 text-xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5-Part Treatment Card Preview */}
        <div className="mt-16 bg-glass rounded-3xl p-8 border-gold-subtle">
          <div className="text-center mb-8">
            <h3 className="font-cinzel text-xl font-bold text-gold-gradient mb-2">
              Your Personalised 5-Part Treatment Card
            </h3>
            <p className="font-cormorant text-parchment-400 text-base">
              Every analysis generates a comprehensive, Dosha-specific healing plan
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { icon: '🌿', label: 'Herb Prescription', sub: 'With dosage & timing' },
              { icon: '🍛', label: 'Pathya-Apathya', sub: 'Diet do\'s & don\'ts' },
              { icon: '🧘', label: 'Yoga Asanas', sub: 'Condition-specific' },
              { icon: '💆', label: 'Panchakarma', sub: 'Detox therapies' },
              { icon: '☀️', label: 'Lifestyle Guide', sub: 'Daily routines' },
            ].map((card) => (
              <div key={card.label} className="bg-maroon-900/50 rounded-xl p-4 text-center border border-gold-500/10 hover:border-gold-500/25 transition-colors group">
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="font-cinzel text-xs font-semibold text-gold-400 mb-1 group-hover:text-gold-300 transition-colors">{card.label}</div>
                <div className="font-josefin text-[9px] tracking-wider uppercase text-parchment-500">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
