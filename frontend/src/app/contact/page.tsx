'use client';

import { useState } from 'react';
import type { ContactFormData, LoadingState } from '@/types';
import Button from '@/components/Button';

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '', email: '', subject: '', message: '',
  });
  const [state, setState] = useState<LoadingState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    // TODO: Connect FastAPI backend
    // TODO: Integrate email service (e.g., Supabase functions / Resend)
    await new Promise((r) => setTimeout(r, 1500));
    setState('success');
  };

  const isValid = form.name && form.email && form.subject && form.message;

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border-gold-subtle mb-4">
            <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">Get in Touch</span>
          </div>
          <h1 className="font-cinzel font-black text-5xl md:text-6xl text-gold-gradient">Contact Us</h1>
          <p className="font-cormorant text-parchment-400 text-xl max-w-xl mx-auto leading-relaxed">
            Questions, feedback, collaboration enquiries — we would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-base space-y-5">
              <h3 className="font-cinzel font-semibold text-gold-300 text-lg">Project Information</h3>
              {[
                { icon: '🏛️', label: 'Institution', value: 'Buddha Institute of Technology GIDA, Gorakhpur' },
                { icon: '📚', label: 'Programme', value: 'B.Tech — Data Science (CS & Allied)' },
                { icon: '🎓', label: 'University', value: 'Dr. A.P.J. Abdul Kalam Technical University, UP' },
                { icon: '👨‍🏫', label: 'Supervisor', value: 'Mr. Anurag Tripathi, Assistant Professor' },
                { icon: '📅', label: 'Session', value: 'March 2026 — Major Project' },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <p className="font-josefin text-[9px] tracking-widest uppercase text-parchment-600 mb-0.5">{info.label}</p>
                    <p className="font-cormorant text-parchment-300 text-base">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-base">
              <h3 className="font-cinzel font-semibold text-gold-300 text-base mb-4">Reach Out For</h3>
              <ul className="space-y-2">
                {[
                  'Project collaboration & partnerships',
                  'Academic research enquiries',
                  'Bug reports & feedback',
                  'AI/ML technical discussions',
                  'Ayurvedic content contributions',
                ].map((item) => (
                  <li key={item} className="font-cormorant text-parchment-400 text-base flex items-start gap-2">
                    <span className="text-gold-500 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {state === 'success' ? (
              <div className="card-base text-center space-y-6 py-16">
                <div className="w-20 h-20 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mx-auto text-4xl">
                  ✓
                </div>
                <h3 className="font-cinzel font-bold text-2xl text-gold-300">Message Sent!</h3>
                <p className="font-cormorant text-parchment-400 text-lg max-w-sm mx-auto">
                  Thank you for reaching out. We will respond to your message shortly.
                </p>
                <button
                  onClick={() => { setState('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-outline"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-glass rounded-3xl p-8 border-gold-subtle shadow-glass space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-josefin text-xs tracking-widest uppercase text-parchment-400">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Arjun Sharma"
                      className="input-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-josefin text-xs tracking-widest uppercase text-parchment-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="input-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-josefin text-xs tracking-widest uppercase text-parchment-400">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="input-base"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Enquiry</option>
                    <option value="collaboration">Collaboration / Partnership</option>
                    <option value="research">Academic Research</option>
                    <option value="bug">Bug Report / Feedback</option>
                    <option value="ayurveda">Ayurvedic Content</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-josefin text-xs tracking-widest uppercase text-parchment-400">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts, questions, or feedback with us..."
                    rows={6}
                    className="input-base resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  loading={state === 'loading'}
                  disabled={!isValid || state === 'loading'}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <p className="font-cormorant italic text-2xl text-parchment-400">
            &ldquo;Hitahitam sukham dukham, ayustasya hitahitam&rdquo;
          </p>
          <p className="font-josefin text-xs tracking-[0.3em] uppercase text-parchment-600 mt-2">
            Charaka Samhita — The Definition of Ayurveda
          </p>
        </div>
      </div>
    </div>
  );
}
