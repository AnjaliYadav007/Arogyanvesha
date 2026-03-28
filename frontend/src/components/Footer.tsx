import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative bg-maroon-950 border-t border-gold-500/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mandala-bg opacity-50 pointer-events-none" />

      <div className="section-container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-cinzel font-bold text-xl text-gold-gradient">Arogyanvesha</h3>
              <p className="font-josefin text-[10px] tracking-[0.3em] text-parchment-500 uppercase mt-0.5">
                Where AI Meets Ayurvedic Healing
              </p>
            </div>
            <p className="font-cormorant text-parchment-400 text-base leading-relaxed">
              Bridging the timeless wisdom of Ayurveda with modern artificial intelligence to deliver personalised, holistic healthcare for the modern world.
            </p>
            <div className="flex gap-3">
              {['🌿', '📜', '✨', '🧘'].map((emoji, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-glass flex items-center justify-center border-gold-subtle hover:border-gold-mid transition-colors cursor-pointer">
                  <span className="text-base">{emoji}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-gold-500 font-semibold tracking-wider text-sm uppercase">Navigation</h4>
            <nav className="space-y-2">
              {[...NAV_ITEMS, { label: 'Dashboard', href: '/dashboard' }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block font-cormorant text-parchment-400 hover:text-gold-400 transition-colors text-base"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-gold-500 font-semibold tracking-wider text-sm uppercase">About Project</h4>
            <div className="space-y-3 font-cormorant text-parchment-400 text-base">
              <p>Major Project — B.Tech Data Science</p>
              <p>Buddha Institute of Technology GIDA, Gorakhpur</p>
              <p>Dr. A.P.J. Abdul Kalam Technical University</p>
              <p className="text-parchment-500">Supervised by Mr. Anurag Tripathi</p>
            </div>
            <div className="bg-glass rounded-xl p-4 border-gold-subtle space-y-1">
              <p className="font-josefin text-[10px] tracking-widest uppercase text-gold-600">Disclaimer</p>
              <p className="font-cormorant text-parchment-500 text-sm leading-relaxed">
                This platform provides educational Ayurvedic information only. Always consult a qualified Vaidya for medical treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <span className="font-cinzel text-gold-500/60 text-lg">❖</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="font-cormorant text-parchment-500 text-sm">
            © {new Date().getFullYear()} Arogyanvesha. Built with care for ancient wisdom.
          </p>
          <p className="font-cormorant italic text-parchment-500 text-sm">
            &ldquo;Loka samasta sukhino bhavantu&rdquo; — May all beings be happy
          </p>
        </div>
      </div>
    </footer>
  );
}
