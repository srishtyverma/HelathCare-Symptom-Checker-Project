# 🩺 AI-Based Healthcare Symptom Checker (ICD Prediction)

An AI-powered backend service that analyzes user-reported symptoms in natural language and predicts possible medical conditions using ICD-9 codes. The system uses **Google Gemini (LLM)** for symptom understanding and medical inference, exposed through a lightweight **Flask REST API**.

> ⚠️ **Disclaimer:** This project is for educational purposes only and is **not** a certified medical diagnostic tool. Always consult a qualified healthcare professional for medical advice.

---

## 🚀 Features

- 🧠 AI-powered symptom understanding using Google Gemini
- 🩹 Predicts possible medical conditions (ICD-9 based)
- 🌐 REST API built with Flask
- 🔗 CORS enabled for seamless frontend integration
- 📦 Modular, easy-to-extend backend structure
- 🧪 Simple to test via Postman or any frontend client
- 🎙️ Voice-based symptom input for improved accessibility

> **Note:** The Gemini model version originally used in this project has since been deprecated. See [Known Issues](#-known-issues--roadmap) below.

---

<img width="527" height="250" alt="image" src="https://github.com/user-attachments/assets/a7a032ee-63a2-42ab-b27e-e0043911e974" />

---


## 🛠️ Tech Stack

| Category      | Technology                     |
|---------------|---------------------------------|
| Backend       | Python, Flask                  |
| AI / NLP      | Google Gemini API               |
| Frontend      | HTML, CSS, JavaScript           |
| Environment   | dotenv                          |
| API Style     | REST                            |
| Security      | CORS                            |
| Data          | ICD-9 Codes                     |

---

## 📁 Project Structure

```
├── backend/
│   ├── app.py              # Flask app entry point & API routes
│   ├── icd9.txt             # ICD-9 code reference data
│   ├── requirements.txt     # Python dependencies
│   └── .gitignore
├── frontend/                # Client-side interface
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Python 3.9+
- A Google Gemini API key ([get one here](https://ai.google.dev/))

### 1. Clone the repository
```bash
git clone https://github.com/srishtyverma/<repo-name>.git
cd <repo-name>/backend
```

### 2. Install dependencies
```bash
pip install -r requirements.txt
```

### 3. Set up environment variables
Create a `.env` file in the `backend/` directory:
```
GEMINI_API_KEY=your_api_key_here
```

### 4. Run the server
```bash
python app.py
```
The API will be available at `http://localhost:5000` by default.

---

## 📡 API Usage

**Endpoint:** `POST /predict`

**Request body:**
```json
{
  "symptoms": "I have a headache, fever, and sore throat"
}
```

**Response:**
```json
{
  "predicted_conditions": [
    { "icd9_code": "462", "condition": "Acute Pharyngitis" },
    { "icd9_code": "780.60", "condition": "Fever, unspecified" }
  ]
}
```

*(Adjust the request/response schema above to match your actual `app.py` implementation.)*

---

## 🧭 Known Issues & Roadmap

- [ ] Migrate to the latest supported Gemini model (current model version is deprecated)
- [ ] Add input validation and error handling for malformed symptom text

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or submit an issue.

---
