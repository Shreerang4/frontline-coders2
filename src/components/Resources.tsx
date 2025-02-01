import React from 'react';
import { BookMarked, ShieldAlert, GraduationCap, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const resources = {
  en: [
    {
      icon: <BookMarked className="h-8 w-8" />,
      title: "Citizen Manual",
      description: "Complete guide for citizens on cybercrime reporting and prevention",
      link: "#"
    },
    {
      icon: <ShieldAlert className="h-8 w-8" />,
      title: "Cyber Safety Tips",
      description: "Essential tips to stay safe in the digital world",
      link: "#"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Cyber Awareness",
      description: "Educational resources to enhance your cyber awareness",
      link: "#"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Daily Digest",
      description: "Comprehensive document about cyber fraud modus operandi",
      link: "#"
    }
  ],
  hi: [
    {
      icon: <BookMarked className="h-8 w-8" />,
      title: "नागरिक मैनुअल",
      description: "साइबर अपराध की रिपोर्टिंग और रोकथाम पर नागरिकों के लिए पूर्ण गाइड",
      link: "#"
    },
    {
      icon: <ShieldAlert className="h-8 w-8" />,
      title: "साइबर सुरक्षा टिप्स",
      description: "डिजिटल दुनिया में सुरक्षित रहने के लिए आवश्यक टिप्स",
      link: "#"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "साइबर जागरूकता",
      description: "आपकी साइबर जागरूकता बढ़ाने के लिए शैक्षिक संसाधन",
      link: "#"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "दैनिक डाइजेस्ट",
      description: "साइबर धोखाधड़ी के तरीकों के बारे में व्यापक दस्तावेज",
      link: "#"
    }
  ]
};

export default function Resources() {
  const { currentLanguage } = useLanguage();
  const currentResources = resources[currentLanguage as keyof typeof resources] || resources.en;

  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {currentLanguage === 'hi' ? 'संसाधन' : 'Resources'}
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {currentResources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-blue-600 dark:text-blue-400">
                  {resource.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  {currentLanguage === 'hi' ? 'और पढ़ें' : 'Read More'} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}