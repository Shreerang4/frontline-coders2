import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TopBanner() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=150"
          alt="Satyameva Jayate"
          className="h-12 w-auto"
        />
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            {currentLanguage === 'hi' ? 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल' : 'National Cyber Crime Reporting Portal'}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {currentLanguage === 'hi' ? 'भारत सरकार' : 'Government of India'}
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=150"
          alt="75 Years of Azadi"
          className="h-12 w-auto"
        />
      </div>
    </div>
  );
}