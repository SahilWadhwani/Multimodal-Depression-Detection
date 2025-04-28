import torch
import torch.nn as nn
from transformers import BertModel
from torchvision import models

class DepressionDetectionModel(nn.Module):
    def __init__(self, text_hidden_size=768, image_output_size=512, num_classes=1):
        super(DepressionDetectionModel, self).__init__()

        # Load pretrained BERT
        self.bert = BertModel.from_pretrained("bert-base-uncased")
        self.bert.requires_grad = False  # Freeze BERT if you don't want fine-tuning

        # Load pretrained ResNet (we remove the final classification layer)
        resnet = models.resnet18(pretrained=True)
        self.cnn = nn.Sequential(*list(resnet.children())[:-1])  # Remove final FC
        for param in self.cnn.parameters():
            param.requires_grad = False  # Freeze ResNet

        # Fusion + Classification
        self.classifier = nn.Sequential(
            nn.Linear(text_hidden_size + image_output_size, 128),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(128, num_classes),
            nn.Sigmoid()
        )

    def forward(self, input_ids, attention_mask, image):
        # Text encoding (BERT)
        text_output = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        text_feat = text_output.pooler_output  # [batch_size, 768]

        # Image encoding (ResNet)
        img_feat = self.cnn(image)  # [batch_size, 512, 1, 1]
        img_feat = img_feat.view(img_feat.size(0), -1)  # Flatten to [batch_size, 512]

        # Concatenate text + image features
        combined = torch.cat((text_feat, img_feat), dim=1)  # [batch_size, 1280]
        output = self.classifier(combined)  # [batch_size, 1]
        return output
