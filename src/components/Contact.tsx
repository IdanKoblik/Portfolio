import React from 'react';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/IdanKoblik', 
      icon: <Github size={24} />,
      description: 'Check out my code and projects',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/idan-k', 
      icon: <Linkedin size={24} />,
      description: 'Let\'s connect professionally',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Email',
      url: 'mailto:idankob@gmail.com',
      icon: <Mail size={24} />,
      description: 'Send me a message',
      color: 'hover:bg-red-600 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to collaborate on your next backend project?
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                className={`group bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${link.color}`}
              >
                <div className="mb-4 text-gray-600 group-hover:text-inherit transition-colors duration-300">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-inherit transition-colors duration-300 mb-2">
                  {link.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-inherit transition-colors duration-300">
                  {link.description}
                </p>
              </a>
            ))}
          </div>

          {/* Availability Notice */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
              <MessageCircle size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Open for Opportunities
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm currently available for freelance projects, internships, and collaborations.
                <br />
                Let's discuss how we can work together on your next backend project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                  Available for Projects
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  Open to Internships
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                  Remote-Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;