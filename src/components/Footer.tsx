import React from 'react';
import { AlertCircle, BookOpen, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-8 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <AlertCircle size={20} className="mr-2 text-purple-600 dark:text-purple-400" />
              Disclaimer
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This tool is for educational purposes only and is not a substitute for professional medical advice, 
              diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <BookOpen size={20} className="mr-2 text-purple-600 dark:text-purple-400" />
              Resources
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Mental Health Resources</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Crisis Support Lines</a></li>
              <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-400">Research Publications</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Heart size={20} className="mr-2 text-purple-600 dark:text-purple-400" />
              Support
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              If you or someone you know is experiencing a mental health crisis,
              please contact a healthcare professional or call a crisis hotline immediately.
            </p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Emergency: 911
            </p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              National Suicide Prevention Lifeline: 988
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Multimodal Depression Detection System | For Research Purposes Only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;