import torch
from PIL import Image
from transformers import BertTokenizer
from torchvision import transforms

# Load BERT tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# Image transforms (same size ResNet expects)
image_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],  # ImageNet stats
                         std=[0.229, 0.224, 0.225])
])

def preprocess_text(text, max_length=128):
    encoding = tokenizer.encode_plus(
        text,
        add_special_tokens=True,
        max_length=max_length,
        return_token_type_ids=False,
        return_attention_mask=True,
        return_tensors='pt',
        truncation=True,
        padding='max_length'
    )
    return encoding['input_ids'], encoding['attention_mask']

def preprocess_image(image_file):
    image = Image.open(image_file).convert("RGB")  # convert ensures 3 channels
    return image_transforms(image).unsqueeze(0)  # add batch dim
