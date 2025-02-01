import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import CrimeCategories from './components/CrimeCategories';
import Resources from './components/Resources';
import MediaGallery from './components/MediaGallery';
import UsefulLinks from './components/UsefulLinks';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    title: "Report Cybercrime",
    description: "Help us make the internet safer for everyone"
  },
  {
    url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    title: "Stay Protected Online",
    description: "Learn about cyber safety and best practices"
  },
  {
    url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
    title: "Cyber Awareness",
    description: "Join our mission to create a safer digital India"
  }
];

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <TopBanner />
          <Navbar />
          <main>
            <Carousel slides={slides} />
            <CrimeCategories />
            <Resources />
            <MediaGallery />
            <UsefulLinks />
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p>© 2024 CyberSafe India. All rights reserved.</p>
              <p className="mt-2 text-gray-400">
                A Government of India Initiative to make cyberspace safer
              </p>
            </div>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;