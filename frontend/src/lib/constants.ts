import type { NavItem, Feature, BodySystem, Symptom } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Analyze', href: '/analyze' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 'ayur-health',
    title: 'Ayur-Health Engine',
    description: 'AI-powered symptom analysis covering 100+ conditions across all 10 major body systems with Dosha-personalised treatment cards.',
    icon: '🌿',
    status: 'active',
    color: 'from-gold-600/20 to-gold-800/10',
  },
  {
    id: 'yog-shala',
    title: 'Yog-Shala',
    description: 'Real-time AI yoga pose detection with disease-targeted asana recommendations using MediaPipe skeletal landmark analysis.',
    icon: '🧘',
    status: 'coming-soon',
    color: 'from-maroon-600/20 to-maroon-800/10',
  },
  {
    id: 'tvacha',
    title: 'Tvacha — Skin Analysis',
    description: 'CNN-powered skin condition classifier that maps results to Ayurvedic Dosha typologies and provides herb-based natural remedies.',
    icon: '✨',
    status: 'coming-soon',
    color: 'from-parchment-500/20 to-parchment-700/10',
  },
  {
    id: 'wisdom-vault',
    title: 'Ancient Wisdom Vault',
    description: 'RAG-powered knowledge retrieval from Charaka Samhita, Sushruta Samhita, and Ashtanga Hridayam via Gemini AI.',
    icon: '📜',
    status: 'active',
    color: 'from-gold-700/20 to-maroon-700/10',
  },
];

export const BODY_SYSTEMS: BodySystem[] = [
  { id: 'digestive', name: 'Digestive System', conditions: ['IBS', 'Gastritis', 'Constipation', 'Acidity'], icon: '🫁' },
  { id: 'respiratory', name: 'Respiratory System', conditions: ['Asthma', 'Bronchitis', 'Sinusitis', 'Cough'], icon: '💨' },
  { id: 'cardiovascular', name: 'Cardiovascular', conditions: ['Hypertension', 'Palpitations', 'Anaemia'], icon: '❤️' },
  { id: 'musculoskeletal', name: 'Musculoskeletal', conditions: ['Arthritis', 'Back Pain', 'Joint Pain'], icon: '🦴' },
  { id: 'nervous', name: 'Nervous System', conditions: ['Anxiety', 'Insomnia', 'Migraine', 'Stress'], icon: '🧠' },
  { id: 'skin', name: 'Skin & Derma', conditions: ['Eczema', 'Psoriasis', 'Acne', 'Rashes'], icon: '🌸' },
  { id: 'endocrine', name: 'Endocrine System', conditions: ['Diabetes', 'Thyroid', 'PCOS'], icon: '⚗️' },
  { id: 'urinary', name: 'Urinary System', conditions: ['UTI', 'Kidney Stones', 'Nephritis'], icon: '💧' },
  { id: 'reproductive', name: 'Reproductive Health', conditions: ['Menstrual Issues', 'Fertility', 'PCOS'], icon: '🌺' },
  { id: 'ent', name: 'ENT', conditions: ['Tinnitus', 'Tonsillitis', 'Ear Infections'], icon: '👂' },
];

export const COMMON_SYMPTOMS: Symptom[] = [
  { id: 's1', label: 'Fatigue / Low Energy', category: 'General' },
  { id: 's2', label: 'Digestive Issues', category: 'Digestive' },
  { id: 's3', label: 'Joint Pain', category: 'Musculoskeletal' },
  { id: 's4', label: 'Headache / Migraine', category: 'Nervous' },
  { id: 's5', label: 'Skin Irritation', category: 'Skin' },
  { id: 's6', label: 'Anxiety / Stress', category: 'Mental' },
  { id: 's7', label: 'Insomnia / Poor Sleep', category: 'Mental' },
  { id: 's8', label: 'Cough / Cold', category: 'Respiratory' },
  { id: 's9', label: 'Bloating', category: 'Digestive' },
  { id: 's10', label: 'Body Ache', category: 'Musculoskeletal' },
  { id: 's11', label: 'Acidity / Heartburn', category: 'Digestive' },
  { id: 's12', label: 'Hair Loss', category: 'General' },
  { id: 's13', label: 'Constipation', category: 'Digestive' },
  { id: 's14', label: 'Fever / Inflammation', category: 'General' },
  { id: 's15', label: 'Respiratory Congestion', category: 'Respiratory' },
  { id: 's16', label: 'Weight Gain', category: 'Metabolic' },
];

export const DOSHAS = [
  {
    id: 'Vata',
    name: 'Vata',
    element: 'Air & Space',
    traits: ['Creative', 'Quick-thinking', 'Thin frame', 'Cold hands'],
    color: 'from-sky-900/30 to-blue-900/20',
    icon: '🌬️',
  },
  {
    id: 'Pitta',
    name: 'Pitta',
    element: 'Fire & Water',
    traits: ['Intense', 'Focused', 'Medium build', 'Warm body'],
    color: 'from-orange-900/30 to-red-900/20',
    icon: '🔥',
  },
  {
    id: 'Kapha',
    name: 'Kapha',
    element: 'Earth & Water',
    traits: ['Calm', 'Nurturing', 'Heavier build', 'Cool & moist'],
    color: 'from-emerald-900/30 to-teal-900/20',
    icon: '🌊',
  },
];

export const TEAM_MEMBERS = [
  { name: 'Harshvardhan Singh', role: 'Project Lead & Backend', rollNo: '2305251540026' },
  { name: 'Ankita Kumari Singh', role: 'Frontend Development', rollNo: '2305251540016' },
  { name: 'Gaurav Mishra', role: 'AI/ML Engineering', rollNo: '2305251540024' },
  { name: 'Anjali Yadav', role: 'Data Engineering & QA', rollNo: '2305251540015' },
];
