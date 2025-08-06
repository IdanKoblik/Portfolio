import React from 'react';
import { Calendar, Users, Code, Server, Database, Settings } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      period: '2023–Present',
      title: 'Gaming & Web Industry Development',
      role: 'Backend Developer',
      icon: <Users size={20} />,
      description: 'Worked with development teams in gaming and web industries',
      achievements: [
        'Dockerized services and built scalable backends in Java/Kotlin/Python',
        'Worked with MongoDB/PostgreSQL databases',
        'Contributed to system architecture decisions',
        'Collaborated with international development teams'
      ],
      color: 'bg-blue-600'
    },
    {
      period: '2023–Present',
      title: 'Self-Maintained Projects',
      role: 'Independent Developer',
      icon: <Code size={20} />,
      description: 'Built and maintained personal backend projects with DevOps practices',
      achievements: [
        'Built personal backend projects with DevOps integration',
        'Implemented Docker containerization and Git workflows',
        'Configured Linux server environments',
        'Set up CI/CD pipelines and custom infrastructure'
      ],
      color: 'bg-green-600'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My journey in backend development and DevOps
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

            {timelineItems.map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  {/* Timeline Node */}
                  <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${item.color} rounded-full border-4 border-white dark:border-gray-900 z-10`}></div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-5/12`}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="flex items-center mb-4">
                        <div className={`${item.color} text-white p-2 rounded-lg mr-3`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                            <Calendar size={14} className="mr-1" />
                            {item.period}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Timeline;