import React from 'react';
import { SampleData } from '../types';

interface SampleGalleryProps {
  samples: SampleData[];
  onSelect: (sample: SampleData) => void;
}

const SampleGallery: React.FC<SampleGalleryProps> = ({ samples, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {samples.map((sample) => (
        <div 
          key={sample.id}
          onClick={() => onSelect(sample)}
          className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer
                   hover:border-purple-400 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all"
        >
          <div 
            className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700"
            style={{ backgroundImage: `url(${sample.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="ml-3 flex-1">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              {sample.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
              {sample.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SampleGallery;