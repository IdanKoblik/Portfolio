import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Code2 size={28} className="text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Idan<span className="text-blue-600">Koblik</span>
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Building scalable backend systems and infrastructure with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <nav className="space-y-2">
                <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  About Me
                </a>
                <a href="#timeline" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  Timeline
                </a>
                <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  Projects
                </a>
                <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="mailto:your-email@example.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    idankob@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="https://github.com/IdanKoblik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Idan Koblik Portfolio. All rights reserved.
              </p>

              {/* Made with Love */}
              <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <span>Built with</span>
                <Heart size={16} className="mx-2 text-red-500 fill-current" />
                <span>and Linux by</span>
                <span className="ml-1 font-semibold text-gray-900 dark:text-white">Idan Koblik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;