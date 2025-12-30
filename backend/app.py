from flask import Flask, request, jsonify
from flask_cors import CORS  # ✅ CORS import
from ai_model.predict_icd import extract_symptoms, predict_icd
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS for all origins

# Load environment variables from .env inside ai_model
load_dotenv(os.path.join(os.path.dirname(__file__), 'ai_model', '.env'))

@app.route('/check_symptoms', methods=['POST'])
def check_symptoms():
    try:
        data = request.get_json()
        print("✅ Received JSON:", data)  # DEBUG PRINT

        if not data:
            return jsonify({'error': 'Invalid or empty JSON received'}), 400

        user_input = data.get('symptoms', '')
        print("📝 Extracted user_input:", user_input)  # DEBUG PRINT

        if not user_input:
            return jsonify({'error': 'No symptoms provided'}), 400

        # Processing
        cleaned = extract_symptoms(user_input)
        print("🧹 Cleaned symptoms:", cleaned)  # DEBUG PRINT

        results = predict_icd(cleaned)
        print("📊 Prediction results:", results)  # DEBUG PRINT

        return jsonify({
            'cleaned_symptoms': cleaned,
            'conditions': [desc for _, desc, _ in results],
            'advice': "This is a preliminary AI-based check. Please consult a doctor."
        })

    except Exception as e:
        print("❌ Exception occurred:", str(e))  # DEBUG PRINT
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
