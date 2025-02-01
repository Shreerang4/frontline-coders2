import React from 'react';
import { Shield, CreditCard, Users2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const categories = {
  en: [
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Women/Children Related Crime",
      description: "Report crimes against women and children",
      buttons: ["Register Anonymously", "Register & Track"],
      bgColor: "bg-pink-100"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Financial Fraud",
      description: "Report financial cybercrime and online fraud",
      buttons: ["Register a Complaint"],
      bgColor: "bg-green-100"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Other Cyber Crime",
      description: "Report other types of cybercrime",
      buttons: ["Register a Complaint"],
      bgColor: "bg-blue-100"
    }
  ],
  hi: [
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "महिला/बाल संबंधित अपराध",
      description: "महिलाओं और बच्चों के खिलाफ अपराधों की रिपोर्ट करें",
      buttons: ["गुमनाम रूप से पंजीकरण करें", "पंजीकरण करें और ट्रैक करें"],
      bgColor: "bg-pink-100"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "वित्तीय धोखाधड़ी",
      description: "साइबर वित्तीय धोखाधड़ी की रिपोर्ट करें",
      buttons: ["शिकायत दर्ज करें"],
      bgColor: "bg-green-100"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "अन्य साइबर अपराध",
      description: "अन्य प्रकार के साइबर अपराधों की रिपोर्ट करें",
      buttons: ["शिकायत दर्ज करें"],
      bgColor: "bg-blue-100"
    }
  ]
};

export default function CrimeCategories() {
  const { currentLanguage } = useLanguage();
  const currentCategories = categories[currentLanguage as keyof typeof categories] || categories.en;

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {currentLanguage === 'hi' ? 'श्रेणी के अनुसार रिपोर्ट करें' : 'Report by Category'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {currentCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{category.description}</p>
                <div className="mt-4 space-y-2">
                  {category.buttons.map((button, buttonIndex) => (
                    <button
                      key={buttonIndex}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}