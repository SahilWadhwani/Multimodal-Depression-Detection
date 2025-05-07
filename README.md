# Multimodal Depression Detection System

##  Project Description

This project aims to build a **Multimodal Depression Detection System** that leverages both textual and visual data to predict depressive tendencies. The system combines Natural Language Processing (NLP) techniques with image analysis to evaluate a user's mental state using text and face image inputs. It uses **BERT** for text analysis and **ResNet** for image feature extraction, achieving accurate predictions by integrating these modalities.

##  Features

* Predicts depression from both text and image inputs
* Real-time data input and analysis through a user-friendly interface
* Full-stack web application using **React (frontend)** and **Flask (backend)**
* Asynchronous API communication and smooth UX
* Deployed using local Flask server for backend processing

##  Tech Stack

* **Backend:** Python, Flask, PyTorch, BERT, ResNet
* **Frontend:** React, Tailwind CSS, TypeScript
* **Data Processing:** Pandas, Numpy, OpenCV
* **Deployment:** Local server with Flask API integration
* **Training Environment:** Kaggle Notebook (for GPU support)

##  Datasets Used

* **Text Data:** Depression-related Reddit posts (cleaned)
* **Image Data:** FER2013 (Facial Expression Recognition)
* Text data used to train BERT for sentiment analysis
* Image data used to train ResNet for emotion recognition

## 🏛 Project Architecture

1. **Data Preprocessing:** Text cleaning and image transformation
2. **Model Training:** Fine-tuned BERT for text and ResNet for images
3. **API Integration:** Flask serves the trained model for prediction
4. **Frontend Display:** React visualizes prediction results in real-time

##  Screenshots

![image](https://github.com/user-attachments/assets/db3aaccf-a64f-4af6-b1bd-5890c579c3f4)

![image](https://github.com/user-attachments/assets/ab4762d7-577a-4928-97f5-aa7ef428de0e)


##  Setup and Installation

### Prerequisites

* Python 3.10+
* Node.js and npm

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/SahilWadhwani/Multimodal-Depression-Detection.git
cd depression-detection/backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py
```

### Frontend Setup

```bash
# Go to the frontend directory
cd ../frontend

# Install dependencies
npm install

# Run the React app
npm start
```

### Access the application

* Open your browser and go to: `http://localhost:5173`

##  Usage

* Enter a textual input describing how you feel
* Upload an image showing your current facial expression
* Click on **Analyze Data**
* View the prediction result along with the confidence score

##  Folder Structure

```
├── backend
│   ├── app.py                # Flask server
│   ├── model
│   │   ├── depression_model.py
│   │   └── utils.py
│   └── saved_model
│       └── model.pt
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── App.tsx
│   │   └── index.tsx
├── README.md
└── requirements.txt
```

##  Future Improvements

* Deploy on cloud (AWS/Heroku)
* Enhance accuracy with fine-tuning on larger datasets
* Add more interactive visualizations for predictions

##  Contributing

Contributions are welcome! Please open an issue or submit a pull request.

