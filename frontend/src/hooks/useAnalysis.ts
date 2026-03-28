'use client';

import { useState, useCallback } from 'react';
import type { AnalysisResult, AnalysisFormData, LoadingState } from '@/types';
import { analyzeSymptoms } from '@/lib/utils';

interface UseAnalysisReturn {
  result: AnalysisResult | null;
  loadingState: LoadingState;
  error: string | null;
  analyze: (data: AnalysisFormData) => Promise<void>;
  reset: () => void;
}

export function useAnalysis(): UseAnalysisReturn {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const analyze = useCallback(async (data: AnalysisFormData) => {
    setLoadingState('loading');
    setError(null);

    try {
      // TODO: Connect FastAPI backend
      // TODO: Send symptoms to API
      const analysisResult = await analyzeSymptoms(data);
      setResult(analysisResult);
      setLoadingState('success');
    } catch (err) {
      setError('Analysis failed. Please try again.');
      setLoadingState('error');
      console.error('Analysis error:', err);
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setLoadingState('idle');
    setError(null);
  }, []);

  return { result, loadingState, error, analyze, reset };
}
