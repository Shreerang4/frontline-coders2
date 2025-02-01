import React, { useState } from 'react';
import { 
  FileWarning, 
  Search, 
  UserCheck, 
  Users, 
  BookOpen, 
  ClipboardList, 
  PhoneCall,
  Shield,
  Sun,
  Moon,
  ChevronDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage, languageOptions } from '../context/LanguageContext';
import { NavDropdown } from '../types';

const dropdowns: NavDropdown[] = [
  {
    title: "Register Complaint",
    items: [
      { text: "Register a Complaint", href: "#" },
      { text: "Women/Children Related Crime", href: "#" },
      { text: "Financial Fraud", href: "#" },
      { text: "Other Cyber Crime", href: "#" }
    ]
  },
  {
    title: "Report & Check Suspect",
    items: [
      { text: "Suspect Repository", href: "#" },
      { text: "Report a Suspect", href: "#" },
      { text: "File an Appeal with GAC", href: "#" }
    ]
  },
  {
    title: "Cyber Volunteers",
    items: [
      { text: "Cyber Volunteer Concept", href: "#" },
      { text: "Terms & Conditions", href: "#" },
      { text: "Register as a Volunteer", href: "#" },
      { text: "What is Unlawful Content?", href: "#" },
      { text: "Login", href: "#" }
    ]
  },
  {
    title: "Learning Corner",
    items: [
      { text: "FAQ", href: "#" },
      { text: "Advisories", href: "#" },
      { text: "Cyber Safety Tips", href: "#" },
      { text: "Cyber Awareness", href: "#" },
      { text: "Media Gallery", href: "#" },
      { text: "Daily Digest", href: "#" },
      { text: "Training Resources", href: "#" },
      { text: "Screen Reader", href: "#" }
    ]
  },
  {
    title: "Citizen Survey",
    items: [
      { text: "Take Survey", href: "#" }
    ]
  },
  {
    title: "Contact Us",
    items: [
      { text: "Contact Information", href: "#" },
      { text: "Helpline", href: "#" }
    ]
  }
];

const NavigationDropdown = ({ title, items }: NavDropdown) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {title}
        <ChevronDown className="h-4 w-4 transition-transform duration-200" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
      </button>
      {isOpen && (
        <div 
          className="absolute z-10 w-48 py-2 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl animate-slide-down"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform" />
            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">CyberSafe India</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {dropdowns.map((dropdown, index) => (
              <NavigationDropdown key={index} {...dropdown} />
            ))}
            
            <div className="flex items-center ml-4 space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>

              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                >
                  {languageOptions.find(lang => lang.code === currentLanguage)?.nativeName}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200"
                    style={{ transform: isLangOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 animate-slide-down">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {lang.nativeName} ({lang.name})
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}