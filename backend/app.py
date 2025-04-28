from flask import Flask, request, jsonify
from model.depression_model import DepressionDetectionModel
from model.utils import preprocess_text, preprocess_image
import torch
import os
import torch.serialization
import sys
from flask_cors import CORS
sys.path.append(os.path.join(os.path.dirname(__file__), 'model'))

app = Flask(__name__)
CORS(app)
# Load model
torch.serialization.add_safe_globals([DepressionDetectionModel])
model = torch.load("backend/saved_model/full_model.pt", map_location=torch.device('cpu'), weights_only=False)
model.eval()

@app.route("/predict", methods=["POST"])
def predict():
    
    print("📩 Incoming request:", request.content_type)
    print("📦 Form keys:", request.form)
    print("📎 File keys:", request.files)
    try:
        text = request.form["text"]
        image = request.files["image"]

        # Preprocess inputs
        input_ids, attention_mask = preprocess_text(text)
        image_tensor = preprocess_image(image)

        input_ids = input_ids.squeeze(0).unsqueeze(0)
        attention_mask = attention_mask.squeeze(0).unsqueeze(0)

        with torch.no_grad():
            output = model(input_ids, attention_mask, image_tensor)
            score = output.item()

        return jsonify({
            "depression_score": score,
            "status": "likely depressed" if score > 0.5 else "not depressed"
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
