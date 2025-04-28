import torch
from model.depression_model import DepressionDetectionModel
from model.utils import preprocess_text, preprocess_image

# Load model
model = DepressionDetectionModel()
model.load_state_dict(torch.load("saved_model/model.pt", map_location=torch.device('cpu')))
model.eval()

# --- TEST INPUTS ---
sample_text = "I've been feeling really down and unmotivated lately."
sample_image_path = "sample.jpg" 

# Preprocess inputs
input_ids, attention_mask = preprocess_text(sample_text)
image_tensor = preprocess_image(sample_image_path)

# Remove batch warning
input_ids = input_ids.squeeze(0).unsqueeze(0)
attention_mask = attention_mask.squeeze(0).unsqueeze(0)

# Predict
with torch.no_grad():
    prediction = model(input_ids, attention_mask, image_tensor)
    depression_score = prediction.item()

print(f"🧠 Depression Score: {depression_score:.4f}")
if depression_score > 0.5:
    print("⚠️  Likely signs of depression")
else:
    print("✅ No signs of depression")
