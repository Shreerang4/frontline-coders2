import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const links = {
  en: [
    { text: "Cyber Training NCRB", url: "https://cytrain.ncrb.gov.in/" },
    { text: "Information Security Education & Awareness (ISEA)", url: "https://isea.gov.in/" },
    { text: "CyberDost Official Twitter", url: "https://x.com/CyberDost?mx=2" },
    { text: "iGOT Karmayogi", url: "https://igotkarmayogi.gov.in/#/" },
    { text: "National Commission for Protection of Child Rights (NCPCR)", url: "https://ncpcr.gov.in/" },
    { text: "CERT-IN (Indian Computer Emergency Response Team)", url: "https://www.cert-in.org.in/" }
  ],
  hi: [
    { text: "साइबर प्रशिक्षण एनसीआरबी", url: "https://cytrain.ncrb.gov.in/" },
    { text: "सूचना सुरक्षा शिक्षा और जागरूकता (आईएसईए)", url: "https://isea.gov.in/" },
    { text: "साइबरदोस्त आधिकारिक ट्विटर", url: "https://x.com/CyberDost?mx=2" },
    { text: "आईगॉट कर्मयोगी", url: "https://igotkarmayogi.gov.in/#/" },
    { text: "राष्ट्रीय बाल अधिकार संरक्षण आयोग (एनसीपीसीआर)", url: "https://ncpcr.gov.in/" },
    { text: "सर्ट-इन (भारतीय कंप्यूटर आपातकालीन प्रतिक्रिया टीम)", url: "https://www.cert-in.org.in/" }
  ]
};

export default function UsefulLinks() {
  const { currentLanguage } = useLanguage();
  const currentLinks = links[currentLanguage as keyof typeof links] || links.en;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {currentLanguage === 'hi' ? 'उपयोगी लिंक' : 'Useful Links'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {link.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
