'use client';

import Link from 'next/link';
import type { AnalysisResult } from '@/types';
import { getDoshaColor, getDoshaBg, formatDate } from '@/lib/utils';
import Button from './Button';

interface ResultCardProps {
  result: AnalysisResult;
  onReset?: () => void;
}

export default function ResultCard({ result, onReset }: ResultCardProps) {
  const doshaColor = getDoshaColor(result.dosha);
  const doshaBg = getDoshaBg(result.dosha);

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Header Card */}
      <div className={`bg-gradient-to-br ${doshaBg} rounded-3xl p-8 border`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-josefin text-[10px] tracking-[0.3em] uppercase text-parchment-500">AI Analysis Complete</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            </div>
            <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-gold-gradient leading-tight">
              {result.condition}
            </h2>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className={`font-cinzel font-bold text-4xl ${doshaColor}`}>
              {result.confidence}%
            </div>
            <div className="font-josefin text-[9px] tracking-widest uppercase text-parchment-500">Confidence</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <div className={`px-4 py-2 rounded-full bg-glass border border-current/20 font-josefin text-xs tracking-widest uppercase ${doshaColor}`}>
            {result.dosha} Dosha Imbalance
          </div>
          <div className="px-4 py-2 rounded-full bg-glass border-gold-subtle font-josefin text-xs tracking-widest uppercase text-parchment-400">
            {formatDate(result.timestamp)}
          </div>
        </div>

        <p className="font-cormorant text-parchment-300 text-lg leading-relaxed">
          {result.description}
        </p>
      </div>

      {/* Treatment Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Herb Prescription */}
        <div className="card-base">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">🌿</span>
            <div>
              <h3 className="font-cinzel font-semibold text-gold-300 text-base">Herb Prescription</h3>
              <p className="font-josefin text-[9px] tracking-widest uppercase text-parchment-500">Aushadhi Chikitsa</p>
            </div>
          </div>
          <div className="space-y-4">
            {result.herbs.map((herb) => (
              <div key={herb.name} className="bg-maroon-900/50 rounded-xl p-4 border border-maroon-700/40 hover:border-gold-500/20 transition-colors">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-cinzel font-semibold text-gold-400 text-sm">{herb.name}</span>
                  <span className="font-cormorant italic text-parchment-500 text-xs text-right flex-shrink-0">{herb.sanskrit}</span>
                </div>
                <p className="font-josefin text-[10px] tracking-wider uppercase text-gold-600/70 mb-1.5">
                  {herb.dosage}
                </p>
                <p className="font-cormorant text-parchment-400 text-sm leading-relaxed">
                  {herb.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diet Guidance */}
        <div className="card-base">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">🍛</span>
            <div>
              <h3 className="font-cinzel font-semibold text-gold-300 text-base">Pathya-Apathya Diet</h3>
              <p className="font-josefin text-[9px] tracking-widest uppercase text-parchment-500">Dietary Guidelines</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-josefin text-[10px] tracking-widest uppercase text-emerald-400">Pathya — Beneficial Foods</span>
              </div>
              <ul className="space-y-1.5">
                {result.diet.pathya.map((item) => (
                  <li key={item} className="font-cormorant text-parchment-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="font-josefin text-[10px] tracking-widest uppercase text-red-400">Apathya — Avoid These</span>
              </div>
              <ul className="space-y-1.5">
                {result.diet.apathya.map((item) => (
                  <li key={item} className="font-cormorant text-parchment-400 text-sm flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Yoga */}
        <div className="card-base">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">🧘</span>
            <div>
              <h3 className="font-cinzel font-semibold text-gold-300 text-base">Yoga & Pranayama</h3>
              <p className="font-josefin text-[9px] tracking-widest uppercase text-parchment-500">Disease-Targeted Asanas</p>
            </div>
          </div>
          <ul className="space-y-3">
            {result.yoga.map((pose, i) => (
              <li key={i} className="flex items-start gap-3 bg-maroon-900/40 rounded-xl p-3 border border-maroon-700/30">
                <span className="font-cinzel text-gold-500/60 text-sm font-bold mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-cormorant text-parchment-300 text-sm leading-relaxed">{pose}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-3 rounded-xl bg-gold-500/5 border border-gold-500/15">
            <p className="font-josefin text-[10px] tracking-wider uppercase text-gold-600 mb-1">Coming Soon</p>
            <p className="font-cormorant text-parchment-500 text-sm">Real-time AI pose detection via Yog-Shala module (MediaPipe)</p>
          </div>
        </div>

        {/* Panchakarma & Lifestyle */}
        <div className="card-base">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💆</span>
                <div>
                  <h3 className="font-cinzel font-semibold text-gold-300 text-base">Panchakarma Therapies</h3>
                  <p className="font-josefin text-[9px] tracking-widest uppercase text-parchment-500">Detox & Rejuvenation</p>
                </div>
              </div>
              <ul className="space-y-2">
                {result.panchakarma.map((therapy, i) => (
                  <li key={i} className="font-cormorant text-parchment-300 text-sm flex items-start gap-2">
                    <span className="text-gold-500 mt-0.5 flex-shrink-0">◈</span>
                    {therapy}
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">☀️</span>
                <div>
                  <h3 className="font-cinzel font-semibold text-gold-300 text-base">Lifestyle Modifications</h3>
                  <p className="font-josefin text-[9px] tracking-widest uppercase text-parchment-500">Dinacharya & Ritucharya</p>
                </div>
              </div>
              <ul className="space-y-2">
                {result.lifestyle.map((item, i) => (
                  <li key={i} className="font-cormorant text-parchment-300 text-sm flex items-start gap-2">
                    <span className="text-gold-500 mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        {onReset && (
          <Button variant="outline" onClick={onReset}>
            New Analysis
          </Button>
        )}
        <Link href="/dashboard">
          <Button variant="primary">
            Save to Dashboard
          </Button>
        </Link>
        <button
          onClick={() => window.print()}
          className="btn-ghost font-josefin text-sm tracking-widest uppercase"
        >
          Print / Save PDF
        </button>
      </div>

      {/* Disclaimer */}
      <div className="bg-maroon-900/40 rounded-2xl p-5 border border-maroon-700/30">
        <p className="font-josefin text-[10px] tracking-widest uppercase text-gold-600 mb-2">Medical Disclaimer</p>
        <p className="font-cormorant text-parchment-500 text-sm leading-relaxed">
          This AI analysis is for educational purposes only and is grounded in classical Ayurvedic literature.
          It does not constitute medical advice. Please consult a qualified Ayurvedic Vaidya or healthcare professional
          before starting any treatment protocol. Emergency conditions require immediate medical attention.
        </p>
      </div>
    </div>
  );
}
