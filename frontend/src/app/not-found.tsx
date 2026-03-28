import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="text-center space-y-8 px-4">
        <div className="font-cinzel font-black text-8xl text-gold-gradient opacity-40">404</div>
        <div className="space-y-3">
          <h1 className="font-cinzel font-bold text-3xl text-gold-300">Page Not Found</h1>
          <p className="font-cormorant text-parchment-400 text-xl max-w-md mx-auto leading-relaxed">
            The path you seek does not exist in our Ayurvedic wisdom vault.
            Perhaps it is time to return to the source.
          </p>
        </div>
        <p className="font-cormorant italic text-parchment-500 text-lg">
          &ldquo;Arogya param labham&rdquo; — Good health is the greatest wealth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/analyze" className="btn-outline">
            Start Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}
