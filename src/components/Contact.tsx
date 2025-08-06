import React from 'react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
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
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/429212281914785793',
      icon: <DiscordIcon/>,
      description: 'Send me a message',
      color: 'hover:bg-purple-600 hover:text-white'
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

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <title>Discord</title>
    <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.8731.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

export default Contact;