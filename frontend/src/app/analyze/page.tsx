'use client';

import { useRouter } from 'next/navigation';
import SymptomForm from '@/components/SymptomForm';
import Loader from '@/components/Loader';
import ResultCard from '@/components/ResultCard';
import { useAnalysis } from '@/hooks/useAnalysis';
import type { AnalysisFormData } from '@/types';
import type { LoadingState } from '@/types';

export default function AnalyzePage() {
  const router = useRouter();
  const { result, loadingState, error, analyze, reset } = useAnalysis();
   const currentState: LoadingState = loadingState;
  const handleSubmit = async (data: AnalysisFormData) => {
    await analyze(data);
    // TODO: Store result in session/state for /result page
    // router.push('/result'); // Optional: navigate to dedicated result page
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="section-container">
        {/* Header */}
        {loadingState !== 'loading' && loadingState !== 'success' && (
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border-gold-subtle mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">
                AI Ayurvedic Analysis
              </span>
            </div>
            <h1 className="font-cinzel font-black text-4xl md:text-5xl text-gold-gradient">
              Symptom Analysis
            </h1>
            <p className="font-cormorant text-parchment-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Describe your symptoms and receive a personalised, Dosha-specific Ayurvedic
              treatment plan — grounded in 5,000 years of classical medical wisdom.
            </p>
          </div>
        )}

        {/* Loading state */}
        {loadingState === 'loading' && (
          <Loader
            message="Performing AI Analysis"
            subMessage="Our AI is consulting classical Ayurvedic texts and identifying your Dosha imbalance. Please hold..."
          />
        )}

        {/* Error state */}
        {loadingState === 'error' && (
          <div className="max-w-lg mx-auto text-center space-y-6 py-16">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto text-3xl">
              ⚠️
            </div>
            <h3 className="font-cinzel font-semibold text-gold-300 text-xl">Analysis Failed</h3>
            <p className="font-cormorant text-parchment-400 text-lg">
              {error || 'Something went wrong. Please try again.'}
            </p>
            <button onClick={reset} className="btn-outline">
              Try Again
            </button>
          </div>
        )}

        {/* Result */}
        {loadingState === 'success' && result && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-4">
                <span className="text-gold-400">✓</span>
                <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">
                  Analysis Complete
                </span>
              </div>
              <h2 className="font-cinzel font-bold text-3xl text-gold-gradient">
                Your Ayurvedic Report
              </h2>
            </div>
            <ResultCard result={result} onReset={reset} />
          </div>
        )}

        {/* Form */}
        {(loadingState === 'idle') && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-glass rounded-3xl p-8 md:p-12 border-gold-subtle shadow-glass">
              <SymptomForm
                onSubmit={handleSubmit}
                loading={currentState === 'loading'}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
