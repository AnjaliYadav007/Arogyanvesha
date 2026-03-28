import { TEAM_MEMBERS } from '@/lib/constants';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="section-container">
        {/* Hero */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border-gold-subtle mb-4">
            <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">Our Story</span>
          </div>
          <h1 className="font-cinzel font-black text-5xl md:text-6xl text-gold-gradient leading-none">
            About Arogyanvesha
          </h1>
          <p className="font-cormorant italic text-2xl text-parchment-300 max-w-xl mx-auto">
            आरोग्यान्वेषा — The Quest for True Wellbeing
          </p>
          <p className="font-cormorant text-parchment-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Arogyanvesha is a comprehensive AI-powered health and wellness platform that bridges the gap between
            Ancient Indian Ayurvedic wisdom and modern artificial intelligence — making 5,000 years of healing
            knowledge accessible to every person on earth.
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="card-base space-y-4">
            <div className="text-4xl">🎯</div>
            <h2 className="font-cinzel font-bold text-2xl text-gold-300">Our Mission</h2>
            <p className="font-cormorant text-parchment-400 text-lg leading-relaxed">
              To democratise authentic Ayurvedic healthcare by combining the timeless intelligence of classical
              Vedic texts with modern AI — delivering personalised, holistic, and natural healing guidance to
              anyone, anywhere, at any time.
            </p>
            <p className="font-cormorant text-parchment-500 text-base leading-relaxed">
              We believe that the knowledge encoded in Charaka Samhita, Sushruta Samhita, and Ashtanga Hridayam
              belongs to all of humanity — and that AI is the perfect vehicle to unlock and deliver this ancient
              wisdom to the modern world.
            </p>
          </div>

          <div className="card-base space-y-4">
            <div className="text-4xl">🔭</div>
            <h2 className="font-cinzel font-bold text-2xl text-gold-300">Our Vision</h2>
            <p className="font-cormorant text-parchment-400 text-lg leading-relaxed">
              A world where every person — regardless of location, income, or access to qualified practitioners —
              can receive personalised, evidence-backed Ayurvedic guidance for a healthier, more balanced life.
            </p>
            <p className="font-cormorant text-parchment-500 text-base leading-relaxed">
              Arogyanvesha envisions being the global digital gateway to Ayurvedic intelligence — preserving
              India&apos;s greatest medical heritage while propelling it into the age of AI.
            </p>
          </div>
        </div>

        {/* The 4 Modules */}
        <div className="mb-20">
          <h2 className="section-heading mb-12">The Four Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🌿',
                title: 'Ayur-Health Customization Engine',
                subtitle: 'Phase 1 — Active',
                desc: 'Disease and symptom-based AI engine covering 10 major body systems and 100+ Ayurvedic-curable conditions. Generates a complete 5-part treatment card: herbs, diet, yoga, panchakarma, and lifestyle guidance — all Dosha-personalised.',
                status: true,
              },
              {
                icon: '🧘',
                title: 'Yog-Shala',
                subtitle: 'Phase 2 — In Development',
                desc: 'AI-powered yoga module with real-time MediaPipe pose detection and disease-targeted asana recommendations. Provides live corrective feedback for 20+ Ayurvedic postures mapped to specific medical conditions.',
                status: false,
              },
              {
                icon: '✨',
                title: 'Tvacha — Skin Module',
                subtitle: 'Phase 3 — In Development',
                desc: 'Computer vision-based skin condition analyser using fine-tuned ResNet/EfficientNet CNN. Maps skin classifications to Ayurvedic Dosha typologies and provides 100% natural, herb-based remedy recommendations.',
                status: false,
              },
              {
                icon: '📜',
                title: 'Ancient Wisdom Vault',
                subtitle: 'Phase 1 — Active',
                desc: 'RAG-powered searchable knowledge base built from authenticated translations of Charaka Samhita, Sushruta Samhita, and Ashtanga Hridayam. Powered by Gemini AI with hallucination-minimised, source-grounded responses.',
                status: true,
              },
            ].map((module) => (
              <div key={module.title} className="card-base card-hover group">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{module.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-cinzel font-semibold text-gold-300 text-base group-hover:text-gold-200 transition-colors">
                        {module.title}
                      </h3>
                      <span className={`flex-shrink-0 px-2 py-0.5 rounded-full font-josefin text-[9px] tracking-wider uppercase ${
                        module.status
                          ? 'bg-gold-500/15 text-gold-400 border border-gold-500/20'
                          : 'bg-parchment-500/10 text-parchment-500 border border-parchment-500/15'
                      }`}>
                        {module.status ? 'Active' : 'Soon'}
                      </span>
                    </div>
                    <p className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600 mb-2">
                      {module.subtitle}
                    </p>
                    <p className="font-cormorant text-parchment-400 text-base leading-relaxed">{module.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="section-heading mb-4">Technology Stack</h2>
          <p className="section-sub mb-12">Built on production-grade, modern technologies</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', role: 'Frontend Framework', icon: '▲' },
              { name: 'TypeScript', role: 'Type Safety', icon: 'TS' },
              { name: 'Tailwind CSS', role: 'Styling', icon: '🎨' },
              { name: 'FastAPI', role: 'Backend API', icon: '⚡' },
              { name: 'Google Gemini', role: 'Language AI', icon: '✦' },
              { name: 'MediaPipe', role: 'Pose Detection', icon: '🦾' },
              { name: 'ResNet/EfficientNet', role: 'Skin CNN', icon: '🔬' },
              { name: 'Supabase', role: 'Database', icon: '🗄️' },
            ].map((tech) => (
              <div key={tech.name} className="card-base hover:border-gold-mid transition-all duration-300 group text-center">
                <div className="font-cinzel font-bold text-xl text-gold-500 mb-2 group-hover:text-gold-300 transition-colors">
                  {tech.icon}
                </div>
                <div className="font-cinzel font-semibold text-gold-400 text-sm mb-1">{tech.name}</div>
                <div className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600">{tech.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="section-heading mb-4">The Team</h2>
          <p className="section-sub mb-4">
            B.Tech Data Science — Buddha Institute of Technology GIDA, Gorakhpur
          </p>
          <p className="font-cormorant text-parchment-500 text-center text-base mb-12">
            Under the supervision of <span className="text-gold-500">Mr. Anurag Tripathi</span> (Assistant Professor, CS-Allied DS AIML)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={member.rollNo} className="card-base card-hover text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-600/30 to-gold-800/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-4 text-2xl font-cinzel font-bold text-gold-400 group-hover:border-gold-500/50 transition-colors">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-cinzel font-semibold text-gold-300 text-sm mb-1 group-hover:text-gold-200 transition-colors">
                  {member.name}
                </h4>
                <p className="font-cormorant text-parchment-400 text-sm mb-2">{member.role}</p>
                <p className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600">
                  {member.rollNo}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* References */}
        <div className="mb-16">
          <h2 className="font-cinzel font-bold text-2xl text-gold-300 mb-8 text-center">Classical Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Charaka Samhita', author: 'Charaka (~300 BCE)', desc: 'The foundational text of Ayurvedic medicine covering internal medicine, diagnostics, and therapeutics across all body systems.' },
              { title: 'Sushruta Samhita', author: 'Sushruta (~600 BCE)', desc: 'The ancient treatise on surgery and external medicine, covering surgical procedures, anatomy, and pharmacology.' },
              { title: 'Ashtanga Hridayam', author: 'Vagbhata (~7th Century CE)', desc: 'A comprehensive synthesis of Ayurvedic knowledge covering all eight branches of classical medicine.' },
            ].map((text) => (
              <div key={text.title} className="card-base space-y-2">
                <div className="text-2xl">📜</div>
                <h4 className="font-cinzel font-semibold text-gold-400 text-base">{text.title}</h4>
                <p className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600">{text.author}</p>
                <p className="font-cormorant text-parchment-500 text-sm leading-relaxed">{text.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/analyze" className="btn-primary">
            Experience the Platform
          </Link>
        </div>
      </div>
    </div>
  );
}
