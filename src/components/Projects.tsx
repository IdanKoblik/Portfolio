import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const username = 'IdanKoblik'; 
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const allRepos = await response.json();
        
        const portfolioRepos = allRepos.filter((repo: GitHubRepo) => 
          repo.topics && repo.topics.includes('portfolio')
        );

        setRepos(portfolioRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-600',
      'Python': 'bg-green-600',
      'Java': 'bg-red-600',
      'Go': 'bg-cyan-600',
      'Kotlin': 'bg-purple-600',
      'Shell': 'bg-gray-600',
    };
    return colors[language || ''] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Showcasing my backend development and DevOps expertise
            </p>
          </div>

          {error && repos.length === 0 ? (
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>Unable to fetch GitHub repositories. Please check back later.</p>
            </div>
          ) : (
            <>
              {repos.length === 0 && !loading && (
                <div className="text-center text-gray-600 dark:text-gray-400">
                  <p>No portfolio projects found. Add the 'portfolio' topic to your GitHub repositories to display them here.</p>
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo, index) => (
                  <div
                    key={repo.id}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                          {repo.name}
                        </h3>
                        <div className="flex space-x-2 ml-2">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {repo.description || 'No description available'}
                      </p>

                      {/* Language */}
                      {repo.language && (
                        <div className="flex items-center mb-4">
                          <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} mr-2`}></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{repo.language}</span>
                        </div>
                      )}

                      {/* Topics */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                            >
                              {topic}
                            </span>
                          ))}
                          {repo.topics.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                              +{repo.topics.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Star size={14} className="mr-1" />
                            {repo.stargazers_count}
                          </div>
                          <div className="flex items-center">
                            <GitFork size={14} className="mr-1" />
                            {repo.forks_count}
                          </div>
                        </div>
                        <span className="text-xs">
                          Updated {formatDate(repo.updated_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* GitHub Profile Link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/IdanKoblik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;