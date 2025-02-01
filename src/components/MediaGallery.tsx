import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const socialMedia = [
  {
    platform: "Facebook",
    icon: <Facebook className="h-8 w-8" />,
    url: "#",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700"
  },
  {
    platform: "Twitter",
    icon: <Twitter className="h-8 w-8" />,
    url: "#",
    bgColor: "bg-sky-500",
    hoverColor: "hover:bg-sky-600"
  },
  {
    platform: "YouTube",
    icon: <Youtube className="h-8 w-8" />,
    url: "#",
    bgColor: "bg-red-600",
    hoverColor: "hover:bg-red-700"
  }
];

export default function MediaGallery() {
  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Media Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${media.bgColor} ${media.hoverColor} rounded-xl p-6 shadow-md transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center text-center text-white">
                {media.icon}
                <h3 className="mt-4 text-xl font-semibold">
                  Follow us on {media.platform}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}