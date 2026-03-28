'use client';

interface LoaderProps {
  message?: string;
  subMessage?: string;
}

const LOADING_MESSAGES = [
  'Consulting ancient Ayurvedic wisdom...',
  'Analyzing your Prakriti constitution...',
  'Cross-referencing Charaka Samhita...',
  'Identifying Dosha imbalances...',
  'Preparing your personalized healing plan...',
];

export default function Loader({ message, subMessage }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4">
      {/* Mandala Spinner */}
      <div className="relative w-32 h-32">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 animate-spin" style={{ animationDuration: '8s' }} />
        {/* Middle ring */}
        <div className="absolute inset-3 rounded-full border-2 border-gold-500/30 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
        {/* Inner ring */}
        <div className="absolute inset-6 rounded-full border-2 border-t-gold-500 border-gold-500/10 animate-spin" style={{ animationDuration: '2s' }} />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 animate-pulse-gold shadow-gold" />
        </div>
        {/* Decorative dots */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <div
            key={angle}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold-500/60"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${angle}deg) translateX(52px) translateY(-50%)`,
            }}
          />
        ))}
      </div>

      {/* Messages */}
      <div className="text-center space-y-3 max-w-sm">
        <p className="font-cinzel text-gold-400 text-lg font-semibold">
          {message || 'Performing AI Analysis'}
        </p>
        <p className="font-cormorant text-parchment-300 text-base leading-relaxed">
          {subMessage || 'Our AI is consulting thousands of years of Ayurvedic wisdom to craft your personalized healing plan.'}
        </p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gold-500 animate-bounce"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>

      {/* Rotating wisdom quote */}
      <div className="max-w-xs text-center">
        <p className="font-cormorant italic text-parchment-400 text-sm">
          &ldquo;Swasthasya swasthya rakshanam&rdquo;
        </p>
        <p className="font-josefin text-xs text-parchment-500 tracking-wider mt-1">
          CHARAKA SAMHITA
        </p>
      </div>
    </div>
  );
}
