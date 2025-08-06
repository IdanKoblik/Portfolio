import React from 'react';
import { Server, Database, Globe, Terminal, GitBranch, Cloud } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: <Server size={24} />, name: 'Backend Development', color: 'text-blue-600' },
    { icon: <Database size={24} />, name: 'Database Design', color: 'text-green-600' },
    { icon: <Cloud size={24} />, name: 'DevOps & CI/CD', color: 'text-purple-600' },
    { icon: <Terminal size={24} />, name: 'Linux Systems', color: 'text-orange-600' },
    { icon: <Globe size={24} />, name: 'System Architecture', color: 'text-red-600' },
    { icon: <GitBranch size={24} />, name: 'Version Control', color: 'text-indigo-600' },
  ];

  const technologies = [
    'Java', 'Kotlin', 'Go', 'Python', 'Docker', 'MongoDB', 
    'PostgreSQL', 'Linux', 'Git', 'Prometheus', 'GraphiteDB', 'VyOS'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Passionate about building robust backend systems and infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  High school student and dedicated Backend Developer with <strong>3 years of experience</strong> in software development, 
                  specializing in <strong>Java</strong>, <strong>Kotlin</strong>, <strong>Go</strong>, <strong>Python</strong>, <strong>Linux</strong>, and <strong>System Architecture</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Proven expertise in developing and maintaining backend systems for gaming and web applications using 
                  <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>GraphiteDB</strong>, and <strong>Prometheus</strong>. Strong focus on building scalable systems and 
                  implementing <strong>CI/CD pipelines</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Experienced in collaborating with international development teams and using <strong>Git</strong> for <strong>version control</strong>. 
                  Also experienced in network configuration and virtualization, including setting up <strong>VyOS router</strong> in a <strong>Proxmox cluster</strong>.
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`${skill.color} mb-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;