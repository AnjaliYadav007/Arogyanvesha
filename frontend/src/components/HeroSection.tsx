import Link from 'next/link';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-texture">
      {/* Background layers */}
      <div className="absolute inset-0 bg-maroon-gradient" />
      <div className="absolute inset-0 hero-pattern" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-500/3 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-maroon-600/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border-gold-subtle mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="font-josefin text-xs tracking-[0.3em] uppercase text-gold-400">
            AI-Powered Ayurvedic Platform
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-cinzel font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up animate-delay-100">
          <span className="text-gold-gradient block">Arogyanvesha</span>
        </h1>

        {/* Tagline */}
        <p className="font-cormorant italic text-2xl sm:text-3xl md:text-4xl text-parchment-200 mb-4 animate-fade-up animate-delay-200">
          Where AI Meets Ayurvedic Healing
        </p>

        {/* Sanskrit */}
        <p className="font-cormorant text-gold-600 text-lg mb-8 animate-fade-up animate-delay-300">
          आरोग्यान्वेषा — The Quest for True Wellbeing
        </p>

        {/* Description */}
        <p className="font-cormorant text-parchment-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up animate-delay-400">
          Ancient Ayurvedic wisdom meets modern artificial intelligence. Receive personalised,
          Dosha-specific healing plans grounded in 5,000 years of Vedic medical science.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up animate-delay-500">
          <Link href="/analyze">
            <Button size="lg" className="w-full sm:w-auto">
              Begin Your Analysis
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Discover Arogyanvesha
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up animate-delay-600">
          {[
            { value: '100+', label: 'Conditions Covered' },
            { value: '10', label: 'Body Systems' },
            { value: '50+', label: 'Ayurvedic Herbs' },
            { value: '3', label: 'Classical Texts' },
          ].map((stat) => (
            <div key={stat.label} className="bg-glass rounded-2xl px-4 py-5 border-gold-subtle hover:border-gold-mid transition-all duration-300">
              <div className="font-cinzel font-bold text-2xl md:text-3xl text-gold-400 mb-1">{stat.value}</div>
              <div className="font-josefin text-[10px] tracking-[0.2em] uppercase text-parchment-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
