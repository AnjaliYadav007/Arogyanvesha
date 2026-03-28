import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Arogyanvesha — Where AI Meets Ayurvedic Healing',
  description:
    'AI-powered Ayurvedic healthcare platform. Get personalized Dosha-based treatment plans, herb prescriptions, yoga guidance, and ancient wisdom — powered by modern AI.',
  keywords: 'Ayurveda, AI, healthcare, Dosha, Prakriti, Vata, Pitta, Kapha, herbal medicine, yoga, wellness',
  authors: [{ name: 'Arogyanvesha Team' }],
  openGraph: {
    title: 'Arogyanvesha — Where AI Meets Ayurvedic Healing',
    description: 'Ancient Ayurvedic wisdom meets modern artificial intelligence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-maroon-950 text-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
