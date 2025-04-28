import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-40 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-24 animate-pulse"></div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-12 animate-pulse"></div>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 animate-pulse"></div>
          
          <div className="mt-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4 animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4 animate-pulse"></div>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-purple-500 transition ease-in-out duration-150 cursor-not-allowed">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Analyzing data... Please wait
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;