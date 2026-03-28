'use client';

import { useState } from 'react';
import type { AnalysisFormData, LoadingState } from '@/types';
import Button from '@/components/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '', email: '', subject: '', message: '',
  });
  const [state, setState] = useState<LoadingState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
            }}
          >
            <span className="font-display text-xs tracking-widest" style={{ color: '#D4AF37' }}>
              SUPPORT & FEEDBACK
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl gold-text-gradient">Contact Us</h1>
          <p className="font-lora text-amber-100/60 text-xl max-w-xl mx-auto leading-relaxed">
            We&apos;re here to help. Whether you&apos;ve hit a bug, have an idea, or simply want
            to share feedback — reach out and we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left panel */}
          <div className="lg:col-span-2 space-y-6">

            {/* About the project */}
            <div
              className="rounded-xl p-6 space-y-4"
              style={{
                background: 'rgba(107, 26, 42, 0.25)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🌿</span>
                <h3 className="font-display text-base tracking-wider" style={{ color: '#E8CC6A' }}>
                  About Arogyanvesha
                </h3>
              </div>
              <p className="font-lora text-amber-100/60 text-sm leading-relaxed">
                Arogyanvesha is an AI-powered Ayurvedic health platform that analyses your symptoms
                and delivers personalised treatment plans — covering herbal remedies, diet, yoga,
                and lifestyle guidance — rooted in classical Ayurvedic texts.
              </p>
              <p className="font-lora text-amber-100/45 text-sm leading-relaxed">
                Our goal is to make authentic, Prakriti-personalised Ayurvedic care accessible to
                everyone, anywhere, at any time.
              </p>
            </div>

            {/* Contact reasons */}
            <div
              className="rounded-xl p-6"
              style={{
                background: 'rgba(107, 26, 42, 0.25)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
              }}
            >
              <h3
                className="font-display text-sm tracking-wider mb-5"
                style={{ color: '#E8CC6A' }}
              >
                CONTACT US IF YOU&apos;RE
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: '⚠️', text: 'Facing an issue while using the platform' },
                  { icon: '🐛', text: 'Reporting a bug or unexpected error' },
                  { icon: '💡', text: 'Requesting a feature or improvement' },
                  { icon: '📝', text: 'Sharing feedback on your experience' },
                  { icon: '🤝', text: 'Interested in partnering or collaborating' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                    <span className="font-lora text-amber-100/60 text-sm leading-snug">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response time note */}
            <div
              className="rounded-xl px-5 py-4 flex items-start gap-3"
              style={{
                background: 'rgba(212, 175, 55, 0.06)',
                border: '1px solid rgba(212, 175, 55, 0.12)',
              }}
            >
              <span className="text-base mt-0.5">⏱</span>
              <p className="font-lora text-amber-100/50 text-sm leading-relaxed">
                We typically respond within <span style={{ color: '#D4AF37' }}>24–48 hours</span>.
                For urgent issues, please describe the problem in detail so we can assist faster.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {state === 'success' ? (
              <div
                className="rounded-xl text-center space-y-6 py-16 px-8"
                style={{
                  background: 'rgba(107, 26, 42, 0.25)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl"
                  style={{
                    background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                  }}
                >
                  ✓
                </div>
                <h3 className="font-display text-2xl" style={{ color: '#E8CC6A' }}>
                  Message Received
                </h3>
                <p className="font-lora text-amber-100/55 text-lg max-w-sm mx-auto leading-relaxed">
                  Thank you for writing in. Our team will review your message and respond within 24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setState('idle');
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded font-display text-sm tracking-wider transition-all duration-300"
                  style={{
                    color: '#D4AF37',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    background: 'transparent',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl p-8 space-y-6"
                style={{
                  background: 'rgba(58, 10, 21, 0.5)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      className="font-display text-xs tracking-widest block"
                      style={{ color: 'rgba(245, 240, 232, 0.5)' }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      className="w-full px-4 py-3 rounded text-sm font-sans outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(58, 10, 21, 0.6)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        color: 'rgba(245, 240, 232, 0.85)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(212,175,55,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(212,175,55,0.2)')}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      className="font-display text-xs tracking-widest block"
                      style={{ color: 'rgba(245, 240, 232, 0.5)' }}
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded text-sm font-sans outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(58, 10, 21, 0.6)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        color: 'rgba(245, 240, 232, 0.85)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(212,175,55,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(212,175,55,0.2)')}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    className="font-display text-xs tracking-widest block"
                    style={{ color: 'rgba(245, 240, 232, 0.5)' }}
                  >
                    SUBJECT *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded text-sm font-sans outline-none transition-all duration-200 cursor-pointer"
                    style={{
                      background: 'rgba(58, 10, 21, 0.6)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      color: form.subject ? 'rgba(245, 240, 232, 0.85)' : 'rgba(245, 240, 232, 0.35)',
                    }}
                  >
                    <option value="" disabled>Select a reason for contacting</option>
                    <option value="issue">I&apos;m facing an issue on the platform</option>
                    <option value="bug">Bug report or error</option>
                    <option value="feature">Feature request</option>
                    <option value="feedback">General feedback</option>
                    <option value="partnership">Partnership or collaboration</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    className="font-display text-xs tracking-widest block"
                    style={{ color: 'rgba(245, 240, 232, 0.5)' }}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your issue, idea, or feedback in as much detail as possible..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded text-sm font-sans outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(58, 10, 21, 0.6)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      color: 'rgba(245, 240, 232, 0.85)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(212,175,55,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(212,175,55,0.2)')}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Button
                    type="submit"
                    size="lg"
                    loading={state === 'loading'}
                    disabled={!isValid || state === 'loading'}
                  >
                    Send Message
                  </Button>
                  <p className="font-sans text-xs" style={{ color: 'rgba(245, 240, 232, 0.3)' }}>
                    We respond within 24–48 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Closing quote */}
        <div className="mt-20 text-center">
          <div className="section-divider mb-8" />
          <p className="font-serif-body italic text-2xl" style={{ color: 'rgba(245, 240, 232, 0.45)' }}>
            &ldquo;Hitahitam sukham dukham, ayustasya hitahitam&rdquo;
          </p>
          <p
            className="font-display text-xs tracking-widest mt-2"
            style={{ color: 'rgba(245, 240, 232, 0.25)' }}
          >
            Charaka Samhita — The Definition of Ayurveda
          </p>
        </div>
      </div>
    </div>
  );
}