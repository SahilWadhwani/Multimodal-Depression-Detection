import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnalysisForm from './components/AnalysisForm';
import PredictionResult from './components/PredictionResult';
import LoadingState from './components/LoadingState';
import { AnalysisResult, SampleData } from './types';
import { sampleData } from './data/sampleData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [currentText, setCurrentText] = useState('');
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);
  const [samples] = useState<SampleData[]>(sampleData);

  useEffect(() => {
    // Check for user preference on dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Update document title
    document.title = 'Depression Detection System';
  }, []);

  useEffect(() => {
    // Apply the dark mode class to the document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAnalysis = async (text: string, imageUrl: string | null, result: any) => {
    setCurrentText(text);
    setCurrentImageUrl(imageUrl);
    setIsLoading(true);
  
    try {
      setAnalysisResult({
        score: result.depression_score,
        status: result.status,
        textFeatures: [],  
        imageFeatures: [],
        confidence: result.depression_score,
      });
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleReset = () => {
    setAnalysisResult(null);
    setCurrentText('');
    setCurrentImageUrl(null);
  };

  const handleSelectSample = (sample: SampleData) => {
    setCurrentText(sample.text);
    setCurrentImageUrl(sample.imageUrl);
  
    // If sample has a pre-defined result, show it directly
    if (sample.result) {
      setAnalysisResult(sample.result);
      return;
    }
  
    // Otherwise, simulate submitting this input through the actual form
    const formData = new FormData();
    formData.append('text', sample.text);
    if (sample.imageUrl) {
      fetch(sample.imageUrl)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "sample.jpg", { type: blob.type });
          formData.append('image', file);
  
          fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: formData,
          })
          .then(res => res.json())
          .then(result => {
            setAnalysisResult({
              score: result.depression_score,
              status: result.status,
              textFeatures: [],
              imageFeatures: [],
              confidence: result.depression_score
            });
          })
          .catch(err => {
            console.error('Prediction failed for sample:', err);
          });
        });
    } else {
      fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      })
      .then(res => res.json())
      .then(result => {
        setAnalysisResult({
          score: result.depression_score,
          status: result.status,
          textFeatures: [],
          imageFeatures: [],
          confidence: result.depression_score
        });
      })
      .catch(err => {
        console.error('Prediction failed for text-only sample:', err);
      });
    }
  };
  

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 transition-colors">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Multimodal Depression Detection
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This system analyzes both textual and visual data to detect patterns
            associated with depression, providing insights that may help in early identification.
          </p>
        </div>
        
        {isLoading ? (
          <LoadingState />
        ) : analysisResult ? (
          <PredictionResult 
            result={analysisResult} 
            text={currentText} 
            imageUrl={currentImageUrl} 
            onReset={handleReset} 
          />
        ) : (
          <AnalysisForm 
            onSubmit={(text, imageUrl, result) => handleAnalysis(text, imageUrl, result)} 
            isLoading={isLoading} 
            sampleData={samples}
            onSelectSample={handleSelectSample}
          />
        )}
        
        <div className="mt-10 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
            Important Disclaimer
          </h2>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            This application is a demonstration of how multimodal data could be used in depression screening.
            It does not provide medical diagnoses and should not replace professional medical advice,
            diagnosis, or treatment. Please consult qualified healthcare providers for any health concerns.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;