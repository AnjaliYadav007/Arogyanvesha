import Link from 'next/link';

const TEAM_MEMBERS = [
  { name: 'Harshvardhan Singh', role: 'System Architecture & Backend' },
  { name: 'Ankita Kumari Singh', role: 'Frontend Development & UI/UX' },
  { name: 'Gaurav Mishra', role: 'AI/ML Engineering' },
  { name: 'Anjali Yadav', role: 'Data Engineering & QA' },
];

const MODULES = [
  {
    icon: '🌿',
    title: 'Ayur-Health Engine',
    desc: 'Describe your symptoms and get a complete, Dosha-personalised treatment plan — covering the right herbs, diet adjustments, yoga, and daily routine changes. Covers 100+ conditions across all major body systems.',
    status: true,
  },
  {
    icon: '🧘',
    title: 'Yog-Shala',
    desc: 'Get disease-targeted yoga recommendations with real-time AI pose correction through your camera. No generic routines — every asana is mapped to your specific condition.',
    status: false,
  },
  {
    icon: '✨',
    title: 'Tvacha — Skin Analysis',
    desc: 'Upload a photo of your skin concern and receive an Ayurvedic diagnosis with natural, herb-based remedies. No pharmaceutical suggestions — only what nature provides.',
    status: false,
  },
  {
    icon: '📜',
    title: 'Ancient Wisdom Vault',
    desc: 'Ask any health question in plain language and get answers grounded in classical Ayurvedic texts — Charaka Samhita, Sushruta Samhita, and Ashtanga Hridayam. AI-powered, hallucination-minimised.',
    status: true,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Hero ── */}
        <div className="text-center mb-20 space-y-5">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2"
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
            }}
          >
            <span className="font-display text-xs tracking-widest" style={{ color: '#D4AF37' }}>
              OUR STORY
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl gold-text-gradient leading-none">
            About Arogyanvesha
          </h1>

          <p
            className="font-serif-body italic text-2xl md:text-3xl"
            style={{ color: 'rgba(245, 240, 232, 0.7)' }}
          >
            आरोग्यान्वेषा — The Quest for True Wellbeing
          </p>

          <p
            className="font-lora text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(245, 240, 232, 0.55)' }}
          >
            We built Arogyanvesha because personalised Ayurvedic guidance shouldn&apos;t require
            access to a specialist. Our platform puts 5,000 years of healing knowledge — made
            intelligent by AI — directly in your hands.
          </p>
        </div>

        {/* ── What We Do ── */}
        <div className="mb-20">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(107,26,42,0.35) 0%, rgba(58,10,21,0.5) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <span
                  className="font-display text-xs tracking-widest"
                  style={{ color: 'rgba(212,175,55,0.6)' }}
                >
                  THE PROBLEM
                </span>
                <h2
                  className="font-display text-2xl md:text-3xl leading-snug"
                  style={{ color: 'rgba(245,240,232,0.85)' }}
                >
                  Ayurveda is powerful.<br />
                  <span className="gold-text-gradient">Access to it isn&apos;t.</span>
                </h2>
                <p
                  className="font-lora leading-relaxed"
                  style={{ color: 'rgba(245,240,232,0.5)' }}
                >
                  Qualified Ayurvedic practitioners are scarce and expensive.
                  Online information is generic, unreliable, and rarely personalised to your
                  body type. The result: most people either ignore Ayurveda entirely or
                  follow advice that wasn&apos;t meant for them.
                </p>
              </div>

              <div className="space-y-5">
                <span
                  className="font-display text-xs tracking-widest"
                  style={{ color: 'rgba(212,175,55,0.6)' }}
                >
                  OUR SOLUTION
                </span>
                <h2
                  className="font-display text-2xl md:text-3xl leading-snug"
                  style={{ color: 'rgba(245,240,232,0.85)' }}
                >
                  AI that understands<br />
                  <span className="gold-text-gradient">your unique constitution.</span>
                </h2>
                <p
                  className="font-lora leading-relaxed"
                  style={{ color: 'rgba(245,240,232,0.5)' }}
                >
                  Arogyanvesha analyses your symptoms against your Prakriti — your individual
                  Ayurvedic body type — and generates a complete, personalised treatment plan.
                  Herbs, diet, yoga, lifestyle. All in one place. Available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mission & Vision ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            {
              icon: '🎯',
              label: 'Our Mission',
              text: 'Make authentic, personalised Ayurvedic healthcare accessible to everyone — not just those with access to an expert. We combine classical knowledge with modern AI so that quality guidance is never more than a few clicks away.',
            },
            {
              icon: '🔭',
              label: 'Our Vision',
              text: 'A world where your health decisions are informed by 5,000 years of proven wisdom, personalised to who you are. Arogyanvesha aims to be the global standard for AI-powered Ayurvedic care.',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-7 space-y-4"
              style={{
                background: 'rgba(107, 26, 42, 0.25)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
              }}
            >
              <span className="text-3xl block">{item.icon}</span>
              <h2
                className="font-display text-xl"
                style={{ color: '#E8CC6A' }}
              >
                {item.label}
              </h2>
              <p
                className="font-lora leading-relaxed"
                style={{ color: 'rgba(245, 240, 232, 0.55)' }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Modules ── */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl gold-text-gradient">
              What&apos;s Inside
            </h2>
            <p
              className="font-lora text-lg"
              style={{ color: 'rgba(245, 240, 232, 0.45)' }}
            >
              Four specialised modules. One unified platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MODULES.map((module) => (
              <div
                key={module.title}
                className="rounded-xl p-6 group transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(107, 26, 42, 0.22)',
                  border: '1px solid rgba(212, 175, 55, 0.13)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.18)',
                    }}
                  >
                    {module.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className="font-display text-base"
                        style={{ color: '#E8CC6A' }}
                      >
                        {module.title}
                      </h3>
                      <span
                        className="flex-shrink-0 font-display text-xs px-2.5 py-0.5 rounded-full"
                        style={{
                          color: module.status ? '#D4AF37' : 'rgba(245,240,232,0.35)',
                          background: module.status
                            ? 'rgba(212,175,55,0.1)'
                            : 'rgba(245,240,232,0.05)',
                          border: `1px solid ${module.status ? 'rgba(212,175,55,0.3)' : 'rgba(245,240,232,0.1)'}`,
                        }}
                      >
                        {module.status ? 'Live' : 'Soon'}
                      </span>
                    </div>
                    <p
                      className="font-lora text-sm leading-relaxed"
                      style={{ color: 'rgba(245, 240, 232, 0.5)' }}
                    >
                      {module.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Team ── */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-display text-3xl md:text-4xl gold-text-gradient">The Team</h2>
            <p
              className="font-lora text-lg"
              style={{ color: 'rgba(245, 240, 232, 0.45)' }}
            >
              Built by people who care about what they&apos;re making.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="rounded-xl p-5 text-center group transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(107, 26, 42, 0.22)',
                  border: '1px solid rgba(212, 175, 55, 0.13)',
                }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 font-display text-lg"
                  style={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    color: '#D4AF37',
                  }}
                >
                  {member.name.charAt(0)}
                </div>
                <h4
                  className="font-display text-sm mb-1.5"
                  style={{ color: '#E8CC6A' }}
                >
                  {member.name.split(' ')[0]}
                  <br />
                  {member.name.split(' ').slice(1).join(' ')}
                </h4>
                <p
                  className="font-sans text-xs leading-snug"
                  style={{ color: 'rgba(245, 240, 232, 0.4)' }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center space-y-6">
          <div className="section-divider mb-8" />
          <p
            className="font-serif-body italic text-2xl"
            style={{ color: 'rgba(245, 240, 232, 0.4)' }}
          >
            &ldquo;Swasthya is not merely the absence of disease — it is the harmony of body, mind, and spirit.&rdquo;
          </p>
          <div className="pt-4">
            <Link
              href="/analyze"
              className="inline-flex items-center gap-3 px-8 py-4 rounded font-display text-sm tracking-wider font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #E8CC6A, #B8942A)',
                color: '#3A0A15',
                boxShadow: '0 8px 32px rgba(212, 175, 55, 0.3)',
              }}
            >
              Experience the Platform →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}