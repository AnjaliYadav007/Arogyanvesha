"""
Arogyanvesha — FastAPI Backend
RAG Pipeline with Gemini API
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import google.generativeai as genai
from google.generativeai import types
import os

# ── App Setup ──────────────────────────────────────────────
app = FastAPI(title="Arogyanvesha API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Gemini Setup ────────────────────────────────────────────
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

# ── Request/Response Models ─────────────────────────────────
class AnalyzeRequest(BaseModel):
    symptoms: List[str]
    age: Optional[str] = ""
    gender: Optional[str] = ""
    duration: Optional[str] = ""
    description: Optional[str] = ""
    prakriti: Optional[str] = ""  # "vata" | "pitta" | "kapha" | ""

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

# ── Ayurvedic Knowledge Context ─────────────────────────────
# Ye RAG ka base context hai — classical text se extracted key knowledge
AYURVEDIC_CONTEXT = """
You are an expert Ayurvedic physician AI assistant for Arogyanvesha platform.
You have deep knowledge of classical Ayurvedic texts:
- Charaka Samhita (disease management and internal medicine)
- Sushruta Samhita (surgical and external treatments)
- Ashtanga Hridayam (comprehensive Ayurvedic medicine)

Key Ayurvedic Principles you follow:
1. Tridosha theory: Vata (air+space), Pitta (fire+water), Kapha (earth+water)
2. Prakriti-based personalisation: treatments differ by body constitution
3. Panchakarma: five detoxification therapies (Vamana, Virechana, Basti, Nasya, Raktamokshana)
4. Pathya-Apathya: beneficial and harmful dietary guidelines per condition
5. Dinacharya: daily routine practices for health maintenance

Common Disease-Dosha Mappings:
- Diabetes (Madhumeha): Kapha + Vata imbalance
- Heart Disease (Hridroga): Vata + Pitta imbalance
- Arthritis (Amavata): Vata + Ama imbalance
- Fever (Jwara): Pitta imbalance
- Anxiety/Insomnia: Vata imbalance
- Skin diseases (Kushtha): Pitta + Kapha imbalance
- Digestive issues (Ajirna): Vata + Pitta imbalance
- Respiratory (Shwasa): Kapha + Vata imbalance
- Liver disease (Yakrit roga): Pitta imbalance
- Kidney disease (Mutravaha sroto dushti): Vata + Pitta imbalance

Common Ayurvedic Herbs:
- Ashwagandha: adaptogen, stress, weakness, Vata balancing
- Brahmi: memory, anxiety, nervous system
- Triphala: digestive, detox, rasayana
- Neem: skin, blood purifier, diabetes
- Turmeric (Haridra): anti-inflammatory, liver, skin
- Ginger (Sunthi): digestion, respiratory, Vata-Kapha
- Tulsi: respiratory, immunity, fever
- Giloy (Guduchi): immunity, fever, liver
- Shatavari: reproductive, female health, Pitta
- Arjuna: heart, cardiovascular
- Jamun: diabetes, blood sugar
- Gurmar: diabetes, weight
- Punarnava: kidney, urinary, diuretic
- Bhumiamalaki: liver, hepatitis
- Kutki: liver, bile, Pitta
"""

# ── Helper: Build Prompt ─────────────────────────────────────
def build_analysis_prompt(req: AnalyzeRequest) -> str:
    prakriti_text = f"Known Prakriti: {req.prakriti.capitalize()}" if req.prakriti else "Prakriti: Unknown"
    symptoms_text = ", ".join(req.symptoms) if req.symptoms else "Not specified"
    
    return f"""
{AYURVEDIC_CONTEXT}

---
PATIENT INFORMATION:
- Age: {req.age or 'Not specified'}
- Gender: {req.gender or 'Not specified'}
- Symptom Duration: {req.duration or 'Not specified'}
- {prakriti_text}
- Symptoms: {symptoms_text}
- Additional Description: {req.description or 'None'}

---
TASK:
Based on the above patient information and your Ayurvedic knowledge, provide a complete personalised treatment analysis.

Respond ONLY in this exact JSON format (no markdown, no extra text):
{{
  "disease_name": "Primary condition in English",
  "ayurvedic_name": "Sanskrit/Ayurvedic name of condition",
  "dosha_imbalance": "Which Dosha(s) are imbalanced and why",
  "herb_prescription": [
    "Herb 1 — dosage and timing",
    "Herb 2 — dosage and timing",
    "Herb 3 — dosage and timing",
    "Herb 4 — dosage and timing"
  ],
  "diet_plan": {{
    "include": ["Food 1", "Food 2", "Food 3", "Food 4"],
    "avoid": ["Food 1", "Food 2", "Food 3"]
  }},
  "yoga_asanas": [
    "Asana 1 — benefit",
    "Asana 2 — benefit",
    "Asana 3 — benefit"
  ],
  "panchakarma": [
    "Therapy 1 — description",
    "Therapy 2 — description"
  ],
  "lifestyle": [
    "Guideline 1",
    "Guideline 2",
    "Guideline 3",
    "Guideline 4"
  ],
  "disclaimer": "This is educational Ayurvedic information only. Please consult a qualified Vaidya for medical treatment."
}}
"""

def build_vault_prompt(query: str) -> str:
    return f"""
{AYURVEDIC_CONTEXT}

---
USER QUERY: {query}

Answer this question based on classical Ayurvedic knowledge from Charaka Samhita, 
Sushruta Samhita, and Ashtanga Hridayam. 

Format your response as:
ANSWER: [Your detailed answer in 2-3 paragraphs]
SOURCES: [List the classical texts referenced, e.g., "Charaka Samhita, Sutrasthana 1.42"]

Be specific, educational, and always reference classical sources.
"""

# ── Routes ──────────────────────────────────────────────────

@app.get("/")
def root():
    return {"message": "Arogyanvesha API is running 🌿", "version": "1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "Arogyanvesha Backend"}


@app.post("/api/analyze", response_model=AnalyzeResponse)
async def analyze_symptoms(req: AnalyzeRequest):
    """
    Main endpoint: symptoms leke 5-part Ayurvedic treatment card return karo
    Frontend ke /analyze page se call hoga
    """
    if not req.symptoms and not req.description:
        raise HTTPException(status_code=400, detail="At least one symptom or description required")

    if not GEMINI_API_KEY:
        raise HTTPException(status_code=500, detail="Gemini API key not configured")

    try:
        prompt = build_analysis_prompt(req)
        response = model.generate_content(prompt)
        raw_text = response.text.strip()

        # JSON parse karo
        import json as json_lib
# Remove markdown code blocks if present
if raw_text.startswith("```"):
    raw_text = raw_text.split("```")[1]
    if raw_text.startswith("json"):
        raw_text = raw_text[4:]
raw_text = raw_text.strip()

data = json_lib.loads(raw_text)

        treatment_card = TreatmentCard(
            disease_name=data.get("disease_name", ""),
            ayurvedic_name=data.get("ayurvedic_name", ""),
            dosha_imbalance=data.get("dosha_imbalance", ""),
            herb_prescription=data.get("herb_prescription", []),
            diet_plan=data.get("diet_plan", {"include": [], "avoid": []}),
            yoga_asanas=data.get("yoga_asanas", []),
            panchakarma=data.get("panchakarma", []),
            lifestyle=data.get("lifestyle", []),
            disclaimer=data.get("disclaimer", "Consult a qualified Vaidya for treatment.")
        )

        return AnalyzeResponse(success=True, treatment_card=treatment_card)

    except json.JSONDecodeError:
        # JSON parse fail ho toh raw text return karo
        return AnalyzeResponse(success=True, raw_analysis=response.text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/vault", response_model=VaultResponse)
async def ancient_wisdom_vault(req: VaultRequest):
    """
    Ancient Wisdom Vault endpoint
    Classical Ayurvedic texts se answer retrieve karo
    """
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    if not GEMINI_API_KEY:
        raise HTTPException(status_code=500, detail="Gemini API key not configured")

    try:
        prompt = build_vault_prompt(req.query)
        response = model.generate_content(prompt)
        raw_text = response.text.strip()

        # Parse ANSWER and SOURCES
        answer = raw_text
        sources = ["Charaka Samhita", "Sushruta Samhita", "Ashtanga Hridayam"]

        if "ANSWER:" in raw_text:
            parts = raw_text.split("SOURCES:")
            answer = parts[0].replace("ANSWER:", "").strip()
            if len(parts) > 1:
                sources_text = parts[1].strip()
                sources = [s.strip() for s in sources_text.split(",") if s.strip()]

        return VaultResponse(success=True, answer=answer, sources=sources)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
