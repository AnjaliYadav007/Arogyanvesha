import { type ClassValue, clsx } from 'clsx';
import type { AnalysisResult, Dosha } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getDoshaColor(dosha: Dosha): string {
  const colors: Record<Dosha, string> = {
    Vata: 'text-sky-300',
    Pitta: 'text-orange-300',
    Kapha: 'text-emerald-300',
  };
  return colors[dosha];
}

export function getDoshaBg(dosha: Dosha): string {
  const colors: Record<Dosha, string> = {
    Vata: 'from-sky-900/40 to-blue-900/20 border-sky-700/30',
    Pitta: 'from-orange-900/40 to-red-900/20 border-orange-700/30',
    Kapha: 'from-emerald-900/40 to-teal-900/20 border-emerald-700/30',
  };
  return colors[dosha];
}

// TODO: Connect FastAPI backend — replace this with real API call
export async function analyzeSymptoms(formData: any): Promise<AnalysisResult> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/analyze`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptoms: formData.symptoms || [],
        }),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend error:", errorText);
      throw new Error('API request failed');
    }

    return await res.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Dummy result for UI demonstration
export const DUMMY_RESULT: AnalysisResult = {
  id: 'demo-001',
  condition: 'Vata Imbalance with Digestive Weakness',
  dosha: 'Vata',
  confidence: 87,
  description:
    'Based on your symptoms, our AI has identified a primary Vata dosha imbalance manifesting as irregular digestion, fatigue, and nervous tension. This pattern, known as Vata Vriddhi, is commonly triggered by irregular sleep, excessive travel, cold/dry foods, and mental stress. The ancient texts prescribe a warm, grounding approach to restore balance.',
  herbs: [
    { name: 'Ashwagandha', sanskrit: 'Withania somnifera', dosage: '500mg twice daily with warm milk', benefit: 'Adaptogen — reduces stress and builds Ojas (vital energy)' },
    { name: 'Triphala', sanskrit: 'Terminalia chebula + T. bellerica + Emblica officinalis', dosage: '1 tsp in warm water before bed', benefit: 'Tridoshic digestive tonic and gentle detoxifier' },
    { name: 'Brahmi', sanskrit: 'Bacopa monnieri', dosage: '300mg with morning meal', benefit: 'Medhya Rasayana — cognitive enhancer and neural calmer' },
    { name: 'Trikatu', sanskrit: 'Piper longum + P. nigrum + Zingiber officinale', dosage: '¼ tsp with honey before meals', benefit: 'Kindles digestive fire (Agni), reduces Ama (toxins)' },
  ],
  diet: {
    pathya: [
      'Warm, freshly cooked meals — soups, stews, khichdi',
      'Ghee and sesame oil for cooking',
      'Sweet, sour, salty tastes',
      'Warm spiced milk at bedtime',
      'Root vegetables: sweet potato, carrot, beet',
      'Dates, figs, raisins, avocado',
    ],
    apathya: [
      'Raw, cold, and dry foods',
      'Carbonated beverages and caffeine',
      'Irregular meal timings',
      'Excessive fasting',
      'Beans and legumes in excess',
      'Processed and packaged foods',
    ],
  },
  yoga: [
    'Surya Namaskar (slow, grounded pace) — 5 rounds at sunrise',
    'Balasana (Child\'s Pose) — 3 minutes, focus on deep breathing',
    'Paschimottanasana (Seated Forward Bend) — grounding and calming',
    'Viparita Karani (Legs-up-the-wall) — 10 minutes before sleep',
    'Nadi Shodhana Pranayama (Alternate Nostril Breathing) — 10 minutes daily',
  ],
  panchakarma: [
    'Abhyanga (Warm sesame oil massage) — daily self-massage',
    'Shirodhara (Warm oil on forehead) — recommended 7-day course',
    'Basti (Medicated enema) — consult qualified Vaidya for full protocol',
  ],
  lifestyle: [
    'Establish a fixed sleep schedule — sleep before 10 PM, rise before 6 AM',
    'Practice Dinacharya: tongue scraping, oil pulling, warm water intake at dawn',
    'Limit screen time 1 hour before sleep',
    'Apply warm sesame oil to feet and scalp nightly',
    'Maintain warm body temperature — avoid cold environments',
    'Eat in a calm, seated position without distractions',
  ],
  timestamp: new Date().toISOString(),
};
