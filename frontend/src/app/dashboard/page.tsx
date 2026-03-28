'use client';

import Link from 'next/link';
import { DUMMY_RESULT } from '@/lib/utils';
import { getDoshaColor, getDoshaBg, formatDate } from '@/lib/utils';

// TODO: Connect FastAPI backend
// TODO: Fetch real user data from Supabase
// TODO: Implement authentication (Supabase Auth)

const MOCK_STATS = [
  { label: 'Analyses Done', value: '3', icon: '🔍', sub: 'lifetime' },
  { label: 'Herbs Learned', value: '12', icon: '🌿', sub: 'from results' },
  { label: 'Streak', value: '5 days', icon: '🔥', sub: 'wellness streak' },
  { label: 'Body Systems', value: '4', icon: '💫', sub: 'explored' },
];

const RECENT_ANALYSES = [DUMMY_RESULT];

export default function DashboardPage() {
  const doshaColor = getDoshaColor(DUMMY_RESULT.dosha);
  const doshaBg = getDoshaBg(DUMMY_RESULT.dosha);

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-josefin text-xs tracking-[0.3em] uppercase text-parchment-500 mb-1">Welcome back</p>
            <h1 className="font-cinzel font-black text-4xl text-gold-gradient">My Dashboard</h1>
            <p className="font-cormorant text-parchment-400 text-lg mt-1">
              Your personal Ayurvedic wellness hub
            </p>
          </div>
          <Link href="/analyze" className="btn-primary self-start sm:self-auto">
            New Analysis
          </Link>
        </div>

        {/* Auth notice */}
        <div className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-5 mb-10 flex items-start gap-4">
          <span className="text-2xl flex-shrink-0">🔐</span>
          <div>
            <p className="font-cinzel text-gold-400 text-sm font-semibold mb-1">Sign In for Full Access</p>
            <p className="font-cormorant text-parchment-400 text-base">
              Currently viewing demo data. Sign in with your account to see your real analyses, track your wellness journey,
              and save your personalised treatment plans.
            </p>
            {/* TODO: Integrate Supabase Auth */}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {MOCK_STATS.map((stat) => (
            <div key={stat.label} className="card-base card-hover text-center group">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-cinzel font-bold text-3xl text-gold-400 mb-1 group-hover:text-gold-300 transition-colors">
                {stat.value}
              </div>
              <div className="font-cinzel text-xs font-semibold text-parchment-400 mb-0.5">{stat.label}</div>
              <div className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Recent Analyses */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-cinzel font-bold text-xl text-gold-300">Recent Analyses</h2>
            {RECENT_ANALYSES.map((analysis) => (
              <div key={analysis.id} className={`card-base bg-gradient-to-br ${doshaBg} card-hover group`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className={`font-josefin text-[10px] tracking-widest uppercase mb-1 ${doshaColor}`}>
                      {analysis.dosha} Dosha Imbalance
                    </div>
                    <h3 className="font-cinzel font-semibold text-gold-300 text-base group-hover:text-gold-200 transition-colors">
                      {analysis.condition}
                    </h3>
                    <p className="font-cormorant text-parchment-500 text-sm mt-1">
                      {formatDate(analysis.timestamp)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className={`font-cinzel font-bold text-2xl ${doshaColor}`}>{analysis.confidence}%</div>
                      <div className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600">confidence</div>
                    </div>
                    <Link href="/result" className="btn-outline text-xs px-4 py-2">
                      View
                    </Link>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent mb-4" />

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Herbs', value: `${analysis.herbs.length} prescribed`, icon: '🌿' },
                    { label: 'Yoga Poses', value: `${analysis.yoga.length} asanas`, icon: '🧘' },
                    { label: 'Diet Rules', value: `${analysis.diet.pathya.length + analysis.diet.apathya.length} items`, icon: '🍛' },
                  ].map((item) => (
                    <div key={item.label} className="bg-maroon-900/50 rounded-xl p-3 text-center border border-maroon-700/30">
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="font-cormorant text-parchment-300 text-sm font-medium">{item.value}</div>
                      <div className="font-josefin text-[8px] tracking-wider uppercase text-parchment-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="card-base text-center py-10 border-dashed border-maroon-700/50">
              <p className="font-cormorant text-parchment-500 text-lg mb-4">
                No more past analyses found
              </p>
              <Link href="/analyze" className="btn-primary text-sm">
                Start New Analysis
              </Link>
            </div>
          </div>

          {/* Right: Widgets */}
          <div className="space-y-6">
            {/* Dosha Profile */}
            <div className="card-base">
              <h3 className="font-cinzel font-semibold text-gold-300 text-sm mb-4">Your Dosha Profile</h3>
              <div className="space-y-3">
                {[
                  { dosha: 'Vata', pct: 45, color: 'bg-sky-500' },
                  { dosha: 'Pitta', pct: 32, color: 'bg-orange-500' },
                  { dosha: 'Kapha', pct: 23, color: 'bg-emerald-500' },
                ].map((d) => (
                  <div key={d.dosha}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-cinzel text-xs font-semibold text-parchment-300">{d.dosha}</span>
                      <span className="font-josefin text-xs text-parchment-500">{d.pct}%</span>
                    </div>
                    <div className="h-2 bg-maroon-900/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${d.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${d.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-cormorant text-parchment-600 text-xs mt-4 italic">
                Based on AI analysis • Demo data
              </p>
            </div>

            {/* Herb Quick Ref */}
            <div className="card-base">
              <h3 className="font-cinzel font-semibold text-gold-300 text-sm mb-4">Current Herbs</h3>
              <div className="space-y-2">
                {DUMMY_RESULT.herbs.map((herb) => (
                  <div key={herb.name} className="flex items-center gap-3 bg-maroon-900/40 rounded-xl p-3 border border-maroon-700/30">
                    <span className="text-lg">🌿</span>
                    <div>
                      <div className="font-cinzel text-xs font-semibold text-gold-400">{herb.name}</div>
                      <div className="font-josefin text-[9px] tracking-wider uppercase text-parchment-600">{herb.dosage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="card-base">
              <h3 className="font-cinzel font-semibold text-gold-300 text-sm mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { icon: '🔍', label: 'New Analysis', href: '/analyze' },
                  { icon: '📋', label: 'View Latest Report', href: '/result' },
                  { icon: '📚', label: 'About Platform', href: '/about' },
                  { icon: '✉️', label: 'Get Support', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gold-500/5 border border-transparent hover:border-gold-500/15 transition-all duration-200 group"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="font-cormorant text-parchment-300 text-base group-hover:text-gold-300 transition-colors">
                      {link.label}
                    </span>
                    <span className="ml-auto text-parchment-700 group-hover:text-gold-500 transition-colors text-sm">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Coming Soon Features */}
            <div className="card-base border-dashed border-gold-500/15">
              <h3 className="font-cinzel font-semibold text-gold-500/70 text-sm mb-4">Coming to Dashboard</h3>
              <ul className="space-y-2">
                {[
                  'Wellness streak tracker',
                  'Progress charts & trends',
                  'Herb reminder notifications',
                  'Yog-Shala session log',
                  'Skin analysis history',
                  'Saved wisdom quotes',
                ].map((item) => (
                  <li key={item} className="font-cormorant text-parchment-600 text-sm flex items-start gap-2">
                    <span className="text-gold-600/50 mt-0.5">◎</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
