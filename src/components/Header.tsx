import React, { useState } from 'react';
import { Brain, Menu, Moon, Sun, X } from 'lucide-react';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <h1 className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              <span className="hidden sm:inline">Multimodal </span>
              Depression Detection
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Dashboard
            </button>
            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              Resources
            </button>
            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
              About
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="block px-3 py-2 rounded-md w-full text-left text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              Dashboard
            </button>
            <button className="block px-3 py-2 rounded-md w-full text-left text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              Resources
            </button>
            <button className="block px-3 py-2 rounded-md w-full text-left text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800">
              About
            </button>
            <button 
              onClick={toggleTheme}
              className="flex items-center px-3 py-2 rounded-md w-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;