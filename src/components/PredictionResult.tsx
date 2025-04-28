import React from 'react';
import { AnalysisResult } from '../types';
import { AlertCircle, BarChart3, Brain, FileText, Image } from 'lucide-react';
import FeatureVisualization from './FeatureVisualization';

interface PredictionResultProps {
  result: AnalysisResult;
  text: string;
  imageUrl: string | null;
  onReset: () => void;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ 
  result, 
  text, 
  imageUrl, 
  onReset 
}) => {
  const getScoreColor = (score: number) => {
    if (score < 0.3) return 'text-green-500 dark:text-green-400';
    if (score < 0.5) return 'text-yellow-500 dark:text-yellow-400';
    if (score < 0.7) return 'text-orange-500 dark:text-orange-400';
    return 'text-red-500 dark:text-red-400';
  };
  
  const getScoreBackground = (score: number) => {
    if (score < 0.3) return 'bg-green-100 dark:bg-green-900/20';
    if (score < 0.5) return 'bg-yellow-100 dark:bg-yellow-900/20';
    if (score < 0.7) return 'bg-orange-100 dark:bg-orange-900/20';
    return 'bg-red-100 dark:bg-red-900/20';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Analysis Results
          </h2>
          <span 
            className={`text-xs font-medium px-2 py-1 rounded-full ${getScoreBackground(result.score)}`}
          >
            Confidence: {Math.round(result.confidence * 100)}%
          </span>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Depression Probability
            </span>
            <span className={`text-sm font-bold ${getScoreColor(result.score)}`}>
              {Math.round(result.score * 100)}%
            </span>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="h-2.5 rounded-full transition-all"
              style={{ 
                width: `${Math.round(result.score * 100)}%`,
                background: `linear-gradient(90deg, 
                             rgba(34, 197, 94, 1) 0%, 
                             rgba(234, 179, 8, 1) 50%, 
                             rgba(239, 68, 68, 1) 100%)`
              }}
            ></div>
          </div>
          
          <div className="mt-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start">
              <Brain className={`w-5 h-5 mr-2 mt-0.5 ${getScoreColor(result.score)}`} />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {result.label} Depression Indicators
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {result.score < 0.3 && "Analysis shows minimal signs of depression. Continue monitoring for any changes in patterns."}
                  {result.score >= 0.3 && result.score < 0.5 && "Some indicators of mild depression detected. Consider consulting a mental health professional if symptoms persist."}
                  {result.score >= 0.5 && result.score < 0.7 && "Moderate depression indicators detected. We recommend speaking with a healthcare provider for proper evaluation."}
                  {result.score >= 0.7 && "Strong indicators of depression detected. Please consult with a mental health professional as soon as possible."}
                </p>
              </div>
            </div>
            
            {result.score >= 0.5 && (
              <div className="mt-4 flex items-start bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5 mr-2 text-amber-500 dark:text-amber-400" />
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  This is not a diagnosis. Results should be reviewed by a healthcare professional. 
                  If you're experiencing a crisis, please call 988 (Suicide & Crisis Lifeline) immediately.
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <FileText className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">Text Analysis</h3>
            </div>
            <FeatureVisualization features={result.textFeatures} />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Image className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">Image Analysis</h3>
            </div>
            <FeatureVisualization features={result.imageFeatures} />
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Analyzed using multimodal deep learning model
            </span>
          </div>
          
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                    hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
          >
            Analyze New Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;