'use client';

import { useState } from 'react';
import { COMMON_SYMPTOMS, DOSHAS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { AnalysisFormData, Dosha } from '@/types';
import Button from './Button';

interface SymptomFormProps {
  onSubmit: (data: AnalysisFormData) => void;
  loading?: boolean;
}

export default function SymptomForm({ onSubmit, loading = false }: SymptomFormProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [duration, setDuration] = useState('');
  const [prakriti, setPrakriti] = useState<Dosha | ''>('');

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSymptoms.length === 0 && !description.trim()) return;

    // TODO: Send symptoms to API
    // TODO: Connect FastAPI backend
    onSubmit({
      symptoms: selectedSymptoms,
      description,
      age,
      gender,
      duration,
      prakriti: prakriti || undefined,
    });
  };

  const canSubmit = selectedSymptoms.length > 0 || description.trim().length > 10;

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Step 1: Personal Info */}
      <div className="space-y-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
            <span className="font-cinzel font-bold text-gold-400 text-sm">1</span>
          </div>
          <h3 className="font-cinzel font-semibold text-gold-300 text-lg">Basic Information</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="font-josefin text-xs tracking-widest uppercase text-parchment-400">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 28"
              className="input-base"
              min={1}
              max={120}
            />
          </div>
          <div className="space-y-2">
            <label className="font-josefin text-xs tracking-widest uppercase text-parchment-400">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input-base"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-josefin text-xs tracking-widest uppercase text-parchment-400">Symptom Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="input-base"
            >
              <option value="">Select</option>
              <option value="acute">Less than 1 week</option>
              <option value="subacute">1–4 weeks</option>
              <option value="chronic">1–3 months</option>
              <option value="long-chronic">3+ months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      {/* Step 2: Symptom Selection */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
            <span className="font-cinzel font-bold text-gold-400 text-sm">2</span>
          </div>
          <h3 className="font-cinzel font-semibold text-gold-300 text-lg">Select Your Symptoms</h3>
          {selectedSymptoms.length > 0 && (
            <span className="ml-auto px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/25 font-josefin text-xs text-gold-400">
              {selectedSymptoms.length} selected
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {COMMON_SYMPTOMS.map((symptom) => (
            <button
              key={symptom.id}
              type="button"
              onClick={() => toggleSymptom(symptom.id)}
              className={cn(
                'px-3 py-3 rounded-xl text-left transition-all duration-200 border group',
                'font-cormorant text-sm leading-snug',
                selectedSymptoms.includes(symptom.id)
                  ? 'bg-gold-500/20 border-gold-500/50 text-gold-300 shadow-gold-sm'
                  : 'bg-maroon-900/40 border-maroon-700/50 text-parchment-400 hover:border-gold-500/30 hover:text-parchment-300 hover:bg-maroon-800/60'
              )}
            >
              <span className="block">{symptom.label}</span>
              <span className={cn(
                'font-josefin text-[9px] tracking-wider uppercase mt-0.5 block',
                selectedSymptoms.includes(symptom.id) ? 'text-gold-500/70' : 'text-parchment-600'
              )}>
                {symptom.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      {/* Step 3: Describe in detail */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
            <span className="font-cinzel font-bold text-gold-400 text-sm">3</span>
          </div>
          <h3 className="font-cinzel font-semibold text-gold-300 text-lg">Describe Your Condition</h3>
          <span className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600 ml-1">(Optional)</span>
        </div>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your symptoms in detail — when they occur, what worsens or improves them, any patterns you've noticed, medications you're taking..."
          rows={4}
          className="input-base resize-none"
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

      {/* Step 4: Prakriti */}
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
            <span className="font-cinzel font-bold text-gold-400 text-sm">4</span>
          </div>
          <h3 className="font-cinzel font-semibold text-gold-300 text-lg">Know Your Prakriti?</h3>
          <span className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600 ml-1">(Optional)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DOSHAS.map((dosha) => (
            <button
              key={dosha.id}
              type="button"
              onClick={() => setPrakriti(prakriti === dosha.id ? '' : dosha.id as Dosha)}
              className={cn(
                'p-4 rounded-xl border text-left transition-all duration-200 group',
                `bg-gradient-to-br ${dosha.color}`,
                prakriti === dosha.id
                  ? 'border-gold-500/50 shadow-gold-sm'
                  : 'border-maroon-700/40 hover:border-gold-500/25'
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{dosha.icon}</span>
                <span className="font-cinzel font-semibold text-gold-300 text-sm">{dosha.name}</span>
              </div>
              <div className="font-josefin text-[9px] tracking-wider uppercase text-parchment-500 mb-2">{dosha.element}</div>
              <div className="space-y-0.5">
                {dosha.traits.map((trait) => (
                  <div key={trait} className="font-cormorant text-xs text-parchment-500">• {trait}</div>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          loading={loading}
          disabled={!canSubmit || loading}
          className="w-full sm:w-auto"
        >
          Analyze with Ayurvedic AI
        </Button>

        {!canSubmit && (
          <p className="font-cormorant text-parchment-500 text-sm mt-3 italic">
            Please select at least one symptom or describe your condition to proceed.
          </p>
        )}
      </div>
    </form>
  );
}
