'use client';

import Link from 'next/link';
import { DUMMY_RESULT } from '@/lib/utils';
import ResultCard from '@/components/ResultCard';

// TODO: Fetch AI result from API or session storage
// TODO: Integrate Supabase for result persistence

export default function ResultPage() {
  // In production, result would come from:
  // 1. URL query param / session
  // 2. Supabase database fetch
  // 3. Server-side props from FastAPI backend
  const result = DUMMY_RESULT;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="section-container">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 font-josefin text-xs tracking-widest uppercase text-parchment-500">
          <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
          <span className="text-parchment-700">/</span>
          <Link href="/analyze" className="hover:text-gold-400 transition-colors">Analyze</Link>
          <span className="text-parchment-700">/</span>
          <span className="text-gold-400">Result</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-4">
            <span className="text-gold-400 text-sm">✓</span>
            <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">
              Analysis Complete
            </span>
          </div>
          <h1 className="font-cinzel font-black text-4xl md:text-5xl text-gold-gradient">
            Your Ayurvedic Report
          </h1>
          <p className="font-cormorant text-parchment-400 text-xl max-w-xl mx-auto leading-relaxed">
            A complete, personalised healing plan grounded in classical Ayurvedic medicine and modern AI.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ResultCard result={result} />
        </div>

        {/* Additional info */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: '📜',
              title: 'Ancient Wisdom Vault',
              desc: 'This analysis references Charaka Samhita and Sushruta Samhita via our RAG pipeline.',
            },
            {
              icon: '🔒',
              title: 'Your Data is Safe',
              desc: 'Results are stored securely. We do not share your health data with third parties.',
            },
            {
              icon: '👨‍⚕️',
              title: 'Consult a Vaidya',
              desc: 'For complex conditions, we recommend consulting a qualified Ayurvedic practitioner.',
            },
          ].map((card) => (
            <div key={card.title} className="card-base text-center">
              <div className="text-3xl mb-3">{card.icon}</div>
              <h4 className="font-cinzel font-semibold text-gold-400 text-sm mb-2">{card.title}</h4>
              <p className="font-cormorant text-parchment-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
