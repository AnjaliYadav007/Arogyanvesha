# Backend — Arogyanvesha

## Placeholder — Not Implemented

This directory is a placeholder for the FastAPI backend.

### Planned Stack
- **Framework**: Python FastAPI
- **AI Orchestration**: Google Gemini API (1.5 Flash/Pro)
- **Pose Detection**: MediaPipe
- **Skin CNN**: TensorFlow / ResNet / EfficientNet
- **Database**: Supabase

### Planned Endpoints
```
POST /api/analyze          — Symptom analysis → Ayurvedic treatment card
POST /api/skin/analyze     — Skin image → Dosha classification + herbs
GET  /api/herbs            — Herb intelligence database
GET  /api/herbs/{id}       — Single herb profile
POST /api/yoga/feedback    — Pose frame → Real-time correction
GET  /api/wisdom/query     — RAG query against classical texts
POST /api/auth/signup      — User registration (Supabase)
POST /api/auth/login       — User login
GET  /api/user/history     — Past analyses for authenticated user
```

### TODO
- [ ] Initialize FastAPI project
- [ ] Set up Supabase connection
- [ ] Implement Gemini RAG pipeline
- [ ] Train / fine-tune CNN skin model
- [ ] Integrate MediaPipe pose estimation
- [ ] Add authentication middleware
- [ ] Write API documentation
