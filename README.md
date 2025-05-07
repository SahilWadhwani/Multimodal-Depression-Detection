# Multimodal Depression Detection System

## 📑 Project Description

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

##  Project Architecture

1. **Data Preprocessing:** Text cleaning and image transformation
2. **Model Training:** Fine-tuned BERT for text and ResNet for images
3. **API Integration:** Flask serves the trained model for prediction
4. **Frontend Display:** React visualizes prediction results in real-time

##  Screenshots

![image](https://github.com/user-attachments/assets/d9d83da2-69ef-4aa6-859b-bfe5f8fd72b0)

![image](https://github.com/user-attachments/assets/f27b0d46-9a39-41fd-b54f-8c7dee302ab0)



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
* **Integrate HRV Modality:** Enhance the multimodal approach by including physiological data from Heart Rate Variability (HRV) to improve depression prediction accuracy. Use wearable devices (like Polar H10) to gather HRV data, preprocess using `neurokit2` for feature extraction (time-domain, frequency-domain), and integrate the output with the current BERT and ResNet model architecture. This extension will enable deeper insights by combining textual, visual, and physiological data.

###  Why HRV Modality?

* **Heart Rate Variability (HRV)** has been linked to mental health conditions, including depression and anxiety.
* Integrating HRV data alongside text and image inputs would make the model **multimodal + physiological**, providing deeper insights.

###  Proposed Tech Stack for HRV Integration:

#### 1. Data Acquisition:

* **Device:** Use wearable devices like **Polar H10, Garmin, or any HRV tracking device**.
* **Format:** Most devices store data in **CSV or JSON** format.
* **Frequency:** Typically, HRV data is sampled at **1Hz to 1000Hz**.

#### 2. Datasets:

* **Existing Datasets:**

  * **WESAD (Wearable Stress and Affect Detection):** Provides HRV data in CSV format.
  * **DREAMER:** Contains physiological signals, including HRV.
* **Data Format:** Usually, the HRV data comes as a time series with columns like `timestamp`, `HR`, `RR_interval`.

#### 3. Preprocessing:

* **Libraries:**

  * `neurokit2` for HRV extraction and feature calculation.
  * `pandas` and `numpy` for data cleaning and formatting.
* **Steps:**

  * **Data Cleaning:** Remove noise and outliers.
  * **Feature Extraction:**

    * **Time-Domain Features:** RMSSD, SDNN
    * **Frequency-Domain Features:** LF, HF, LF/HF ratio
    * **Nonlinear Features:** Poincaré plot metrics

#### 4. Model Architecture:

* **Feature Fusion:** Concatenate **text, image, and HRV features** into a unified feature vector.
* **Network Design:**

  * **Text:** BERT model output
  * **Image:** ResNet output
  * **HRV:** LSTM or GRU to handle time-series data
* **Fusion Layer:** Combine the outputs from all three modalities before the final classification layer.

#### 5. Visualization and Prediction:

* **HRV Metrics:** Display time-domain and frequency-domain features in the UI.

* **Prediction UI:** Update the React frontend to support HRV input via file upload or direct input.

* Deploy on cloud (AWS/Heroku)

* Enhance accuracy with fine-tuning on larger datasets

* Add more interactive visualizations for predictions

##  Contributing

Contributions are welcome! Please open an issue or submit a pull request.


