"""
Arogyanvesha — FastAPI Backend
RAG Pipeline with Gemini API
"""

import json as json_module
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import google.generativeai as genai
import os

app = FastAPI(title="Arogyanvesha API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

class AnalyzeRequest(BaseModel):
    symptoms: List[str]
    age: Optional[str] = ""
    gender: Optional[str] = ""
    duration: Optional[str] = ""
    description: Optional[str] = ""
    prakriti: Optional[str] = ""

class TreatmentCard(BaseModel):
    disease_name: str
    ayurvedic_name: str
    dosha_imbalance: str
    herb_prescription: List[str]
    diet_plan: dict
    yoga_asanas: List[str]
    panchakarma: List[str]
    lifestyle: List[str]
    disclaimer: str

class AnalyzeResponse(BaseModel):
    success: bool
    treatment_card: Optional[TreatmentCard] = None
    raw_analysis: Optional[str] = None
    error: Optional[str] = None

class VaultRequest(BaseModel):
    query: str

class VaultResponse(BaseModel):
    success: bool
    answer: str
    sources: List[str]

AYURVEDIC_CONTEXT = """
You are an expert Ayurvedic physician AI for Arogyanvesha.
You have deep knowledge of Charaka Samhita, Sushruta Samhita, and Ashtanga Hridayam.

Tridosha: Vata (air+space), Pitta (fire+water), Kapha (earth+water)

Disease-Dosha Mappings:
- Diabetes (Madhumeha): Kapha + Vata
- Heart Disease (Hridroga): Vata + Pitta
- Arthritis (Amavata): Vata + Ama
- Fever (Jwara): Pitta
- Anxiety/Insomnia: Vata
- Skin diseases (Kushtha): Pitta + Kapha
- Digestive issues (Ajirna): Vata + Pitta
- Respiratory (Shwasa): Kapha + Vata
- Liver disease: Pitta
- Kidney disease: Vata + Pitta

Key Herbs:
- Ashwagandha: stress, weakness, Vata
- Brahmi: memory, anxiety
- Triphala: digestion, detox
- Neem: skin, diabetes
- Turmeric: inflammation, liver
- Ginger: digestion, respiratory
- Tulsi: respiratory, immunity, fever
- Giloy: immunity, fever, liver
- Arjuna: heart, cardiovascular
- Jamun: diabetes
- Punarnava: kidney, urinary
"""

def build_analysis_prompt(req: AnalyzeRequest) -> str:
    prakriti_text = f"Prakriti: {req.prakriti.capitalize()}" if req.prakriti else "Prakriti: Unknown"
    symptoms_text = ", ".join(req.symptoms) if req.symptoms else "Not specified"
    return f"""{AYURVEDIC_CONTEXT}

PATIENT:
- Age: {req.age or 'Not specified'}
- Gender: {req.gender or 'Not specified'}
- Duration: {req.duration or 'Not specified'}
- {prakriti_text}
- Symptoms: {symptoms_text}
- Description: {req.description or 'None'}

Respond ONLY in this exact JSON format with absolutely no markdown or extra text:
{{
  "disease_name": "Primary condition in English",
  "ayurvedic_name": "Sanskrit name",
  "dosha_imbalance": "Which Doshas are imbalanced and why",
  "herb_prescription": ["Herb 1 - dosage", "Herb 2 - dosage", "Herb 3 - dosage"],
  "diet_plan": {{"include": ["Food 1", "Food 2", "Food 3"], "avoid": ["Food 1", "Food 2"]}},
  "yoga_asanas": ["Asana 1 - benefit", "Asana 2 - benefit", "Asana 3 - benefit"],
  "panchakarma": ["Therapy 1 - description", "Therapy 2 - description"],
  "lifestyle": ["Guideline 1", "Guideline 2", "Guideline 3"],
  "disclaimer": "Educational Ayurvedic information only. Consult a qualified Vaidya."
}}"""

def build_vault_prompt(query: str) -> str:
    return f"""{AYURVEDIC_CONTEXT}

USER QUERY: {query}

Answer based on classical Ayurvedic texts.
ANSWER: [2-3 paragraph answer]
SOURCES: [texts referenced]"""

@app.get("/")
def root():
    return {"message": "Arogyanvesha API is running!", "version": "1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "Arogyanvesha Backend"}

@app.post("/api/analyze", response_model=AnalyzeResponse)
async def analyze_symptoms(req: AnalyzeRequest):
    if not req.symptoms and not req.description:
        raise HTTPException(status_code=400, detail="At least one symptom required")
    if not GEMINI_API_KEY:
        raise HTTPException(status_code=500, detail="Gemini API key not configured")
    try:
        prompt = build_analysis_prompt(req)
        response = model.generate_content(prompt)
        raw_text = response.text.strip()

        # Remove markdown if present
        if "```" in raw_text:
            parts = raw_text.split("```")
            for part in parts:
                if "{" in part:
                    raw_text = part.lstrip("json").strip()
                    break
        raw_text = raw_text.strip()

        data = json_module.loads(raw_text)
        treatment_card = TreatmentCard(
            disease_name=data.get("disease_name", ""),
            ayurvedic_name=data.get("ayurvedic_name", ""),
            dosha_imbalance=data.get("dosha_imbalance", ""),
            herb_prescription=data.get("herb_prescription", []),
            diet_plan=data.get("diet_plan", {"include": [], "avoid": []}),
            yoga_asanas=data.get("yoga_asanas", []),
            panchakarma=data.get("panchakarma", []),
            lifestyle=data.get("lifestyle", []),
            disclaimer=data.get("disclaimer", "Consult a qualified Vaidya.")
        )
        return AnalyzeResponse(success=True, treatment_card=treatment_card)

    except json_module.JSONDecodeError:
        return AnalyzeResponse(success=True, raw_analysis=response.text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/vault", response_model=VaultResponse)
async def ancient_wisdom_vault(req: VaultRequest):
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")
    if not GEMINI_API_KEY:
        raise HTTPException(status_code=500, detail="Gemini API key not configured")
    try:
        prompt = build_vault_prompt(req.query)
        response = model.generate_content(prompt)
        raw_text = response.text.strip()
        answer = raw_text
        sources = ["Charaka Samhita", "Sushruta Samhita", "Ashtanga Hridayam"]
        if "ANSWER:" in raw_text:
            parts = raw_text.split("SOURCES:")
            answer = parts[0].replace("ANSWER:", "").strip()
            if len(parts) > 1:
                sources = [s.strip() for s in parts[1].strip().split(",") if s.strip()]
        return VaultResponse(success=True, answer=answer, sources=sources)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
