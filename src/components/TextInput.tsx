import React from 'react';
import { FileText } from 'lucide-react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor="text-input" 
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Text Entry
      </label>
      <textarea
        id="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your thoughts, a social media caption, or a diary entry..."
        className="w-full min-h-[120px] p-3 border border-gray-300 dark:border-gray-700 rounded-lg 
                 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 
                 dark:focus:border-purple-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 placeholder-gray-400 dark:placeholder-gray-600 transition-all"
        rows={5}
      />
      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 flex items-center">
        <FileText size={14} className="mr-1" />
        Text can include your current feelings, thoughts, or recent social media posts
      </p>
    </div>
  );
};

export default TextInput;