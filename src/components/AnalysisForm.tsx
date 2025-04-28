import React, { useState } from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';
import SampleGallery from './SampleGallery';
import { SampleData } from '../types';

interface AnalysisFormProps {
  onSubmit: (text: string, imageUrl: string | null, result: any) => void;
  isLoading: boolean;
  sampleData: SampleData[];
  onSelectSample: (sample: SampleData) => void;
}

const AnalysisForm: React.FC<AnalysisFormProps> = ({ 
  onSubmit, 
  isLoading, 
  sampleData,
  onSelectSample
}) => {
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (file: File | null) => {
    setImageFile(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text && !imageFile) {
      setError('Please provide either text, an image, or both for analysis');
      return;
    }

    setError(null);

    const formData = new FormData();
    formData.append('text', text);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const res = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      console.log('✅ Flask API Result:', result);

      onSubmit(text, imageUrl, result); // pass prediction result
    } catch (err) {
      console.error('Prediction failed:', err);
      setError('Something went wrong while predicting. Please try again.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Input Data for Analysis
        </h2>

        <form onSubmit={handleSubmit}>
          <ImageUploader 
            onImageChange={handleImageChange} 
            currentImage={imageUrl} 
          />

          <TextInput 
            value={text} 
            onChange={setText} 
          />

          {error && (
            <div className="mb-4 p-3 rounded bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm flex items-start">
              <AlertTriangle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center py-2.5 px-4 rounded-lg font-medium transition-all 
                      ${isLoading 
                        ? 'bg-purple-400 dark:bg-purple-600 cursor-not-allowed' 
                        : 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400'
                      } text-white`}
          >
            {isLoading ? 'Analyzing...' : (
              <>
                Analyze Data
                <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
            Sample Data
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Not sure where to start? Try one of these samples:
          </p>

          <SampleGallery samples={sampleData} onSelect={onSelectSample} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisForm;
