import React, { useState, useRef } from 'react';
import { Image, UploadCloud, X } from 'lucide-react';

interface ImageUploaderProps {
  onImageChange: (file: File | null) => void;
  currentImage: string | null;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange, currentImage }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        onImageChange(file);
      }
    }
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      onImageChange(file);
    }
  };
  
  const removeImage = () => {
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Upload Image
      </label>
      
      {!currentImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 transition-colors ${
            isDragging 
              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
              : 'border-gray-300 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center">
            <UploadCloud 
              className="w-12 h-12 text-gray-400 dark:text-gray-600 mb-3" 
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Drag and drop your image here, or 
              <button 
                type="button"
                className="text-purple-600 dark:text-purple-400 font-medium ml-1 focus:outline-none"
                onClick={() => fileInputRef.current?.click()}
              >
                browse
              </button>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              PNG, JPG, GIF up to 5MB
            </p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileSelect}
          />
        </div>
      ) : (
        <div className="relative mt-2 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
          <img 
            src={currentImage} 
            alt="Uploaded preview" 
            className="w-full h-48 object-cover"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-white/80 dark:bg-black/60 rounded-full p-1 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-black transition-colors"
            aria-label="Remove image"
          >
            <X size={16} />
          </button>
        </div>
      )}
      
      <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 flex items-center">
        <Image size={14} className="mr-1" />
        Images can include facial expressions, living environment, or personal photos
      </p>
    </div>
  );
};

export default ImageUploader;