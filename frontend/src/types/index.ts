// Types for Arogyanvesha platform

export type Dosha = 'Vata' | 'Pitta' | 'Kapha';

export interface Symptom {
  id: string;
  label: string;
  category: string;
}

export interface AnalysisFormData {
  symptoms: string[];
  description: string;
  age: string;
  gender: string;
  duration: string;
  prakriti?: Dosha;
}

export interface HerbRecommendation {
  name: string;
  sanskrit: string;
  dosage: string;
  benefit: string;
}

export interface AnalysisResult {
  id: string;
  condition: string;
  dosha: Dosha;
  confidence: number;
  description: string;
  herbs: HerbRecommendation[];
  diet: {
    pathya: string[];
    apathya: string[];
  };
  yoga: string[];
  panchakarma: string[];
  lifestyle: string[];
  timestamp: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'active' | 'coming-soon';
  color: string;
}

export interface BodySystem {
  id: string;
  name: string;
  conditions: string[];
  icon: string;
}

export interface DashboardStats {
  analyses: number;
  herbs: number;
  conditions: number;
  streak: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
