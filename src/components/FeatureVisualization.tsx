import React from 'react';

interface FeatureVisualizationProps {
  features: {
    name: string;
    value: number;
  }[];
}

const FeatureVisualization: React.FC<FeatureVisualizationProps> = ({ features }) => {
  // Sort features by value in descending order
  const sortedFeatures = [...features].sort((a, b) => b.value - a.value);
  
  return (
    <div className="space-y-3">
      {sortedFeatures.map((feature, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-700 dark:text-gray-300">{feature.name}</span>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {Math.round(feature.value * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div 
              className="h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 transition-all"
              style={{ width: `${feature.value * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureVisualization;