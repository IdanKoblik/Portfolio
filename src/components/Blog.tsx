import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  readTime: number;
  tags?: string[];
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const mockPosts: BlogPost[] = [
          {
            slug: 'diffrewind-restoring',
            title: ' Restoring GitLab Stacked Diffs: A Deep Dive',
            date: '12-10-2024',
            content: `
# Restoring GitLab Stacked Diffs: A Deep Dive

## Before Starting

If you're reading this article, I assume you're already familiar with GitLab stacked diffs. If you don't care about how GitLab handles stacked diffs internally, jump to **"Let's dive in with DiffRewind"**.

However, if you're not well-versed in this topic, I highly recommend checking out this excellent article by Gergely Orosz: _Stacked Diffs_. It provides a comprehensive overview and is definitely worth your time.

## The Challenge of Local Storage

While stacked diffs offer numerous benefits, they come with a unique challenge: they're stored **locally** in your repository. This means they aren't automatically shared when you clone a GitLab repo, making restoration and sharing across environments potentially tricky.

## Why Restoration Matters

Understanding how to restore stacked diffs is crucial for:

- Recovering work after switching machines  
- Collaborating on complex features  
- Ensuring continuity in your development process  

In this guide, we'll explore effective strategies for restoring GitLab stacked diffs, empowering you to manage your incremental changes with confidence.

## Where Are Stacked Diffs Saved?

Stacked diffs are stored locally in your Git repository, specifically in:

\`\`\`
{repository_dir}/.git/stacked/{stacked_diff_name}/
\`\`\`

## Internal Branch Naming

To developers, it may appear you're working with a single branch, but GitLab internally creates a branch for each MR, using the following format:

\`\`\`
{author}-{stacked_diff_name}-{short_sha}
\`\`\`

Example:

\`\`\`
idan-feature-update-52d754b9
\`\`\`

This structure gives you:

- The author (\`idan\`)
- The name of the stacked diff (\`feature-update\`)
- A short SHA for identification (\`52d754b9\`)

## Branch Storage Format

Each branch in a stacked diff is saved as a JSON file in the stacked diff folder.

### Filename format:
\`\`\`
{short_sha}.json
\`\`\`

Example:  
For the branch \`idan-feature-update-52d754b9\`, the file would be:

\`\`\`
52d754b9.json
\`\`\`

### JSON structure:

\`\`\`json
{
  "prev": "previous_stacked_diff_sha",
  "branch": "author-stackedDiff-name-short_sha",
  "sha": "current_stacked_diff_sha",
  "next": "next_stacked_diff_sha",
  "mr": "merge_request_url",
  "description": "merge_request_description"
}
\`\`\`

## Stack Data Structure

It's important to note that these branches are organized in a stack data structure. Each branch (represented by a JSON file) points to the previous and next branches in the stack, allowing for efficient traversal and management of the stacked diffs.

Understanding this storage mechanism and naming convention is key to effectively restoring and managing your stacked diffs in GitLab.
Restoring Stacked Diffs

Restoring a stacked diff involves recreating the branch structure and updating Git's configuration. 

1. Initiate Stacked Diff Restoration
\`\`\`bash
glab stack create
\`\`\`

When prompted, enter the name of the stacked diff you want to restore.

2. Understanding Git's Branch Configuration

Git stores information about all branches (including remote and merge paths) in the git-project/.git/config file. Each branch entry in this file follows this format:
\`\`\`
[branch "branch-name"]
remote = remote-name
merge = refs/heads/branch-name
\`\`\`

For each branch in your stacked diff, you need to add an entry to the git-project.git/config file. Here's how to do it:

\`\`\`
[branch "author-stackedDiff-name-short-sha"]
remote = {remote-name}
merge = refs/heads/author-stackedDiff-name-short-sha
\`\`\`

3. Specifying the Current Stack

After adding all branch entries, you need to specify which stack you're currently working on. Add the following section to your git-project.git/config file:

\`\`\`
[glab]
currentstack = your-stack-name
\`\`\`

4. Recreating Branch References

For each branch in your stacked diff, you also need to create a file in the git-project.git/refs/heads/ directory:

Navigate to the git-project.git/refs/heads/ directory

Create a new file with the branch name, In this file, add the SHA of the branch.
Lets dive in with DiffRewind

While the manual process described above gives you a deep understanding of how stacked diffs are restored, it can be time-consuming and prone to errors. This is the reason I have created DiffRewind. DiffRewind is a CLI tool that was specifically created to simplify the restoration of stacked diffs. It automates all the steps we've discussed, making the process of restoring your stacked diffs quick and error-free.

Installation

1) Clone the repository:
\`\`\`bash
git clone https://github.com/IdanKoblik/DiffRewind.git
cd DiffRewind
\`\`\`

2) Install dependencies:
\`\`\`bash
pip3 install -r requirements.txt
\`\`\`

## Usage
To restore a stacked diff, use the following command:

\`\`\`bash
python3 main.py <path_to_repo>
\`\`\`

* Replace <path_to_repo> with the path to your GitLab project.

## example
\`\`\`
(.venv) [idan@idank DiffRewind]$ python3 main.py ~/testing/sheep-wars/

██████╗ ██╗███████╗███████╗██████╗ ███████╗██╗    ██╗██╗███╗   ██╗██████╗
██╔══██╗██║██╔════╝██╔════╝██╔══██╗██╔════╝██║    ██║██║████╗  ██║██╔══██╗
██║  ██║██║█████╗  █████╗  ██████╔╝█████╗  ██║ █╗ ██║██║██╔██╗ ██║██║  ██║
██║  ██║██║██╔══╝  ██╔══╝  ██╔══██╗██╔══╝  ██║███╗██║██║██║╚██╗██║██║  ██║
██████╔╝██║██║     ██║     ██║  ██║███████╗╚███╔███╔╝██║██║ ╚████║██████╔╝
╚═════╝ ╚═╝╚═╝     ╚═╝     ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═════╝

Stacked diffs:

[ 1 ] > origin/idan-changes (idan)
    - origin/idan-changes-eb64d1ac (MR IID: 31, Created at: 2024-08-25T11:48:54.159Z)
    - origin/idan-changes-970baf2b (MR IID: 32, Created at: 2024-08-25T12:08:49.314Z)
    - origin/idan-changes-52d754b9 (MR IID: 34, Created at: 2024-08-26T13:42:34.119Z)
    - origin/idan-changes-dbcf3953 (MR IID: 35, Created at: 2024-08-26T16:41:58.492Z)

Select which stacked diff to restore (1,2,3...) > 1

New stack created with title "changes".
\`\`\``,
            readTime: 10,
            tags: ['Gitlab', 'DiffRewind', 'Python']
          }
        ];

        setPosts(mockPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (selectedPost) {
    return (
      <section id="blog" className="py-20 bg-white dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBackToBlog}
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors duration-200"
            >
              <ArrowRight size={20} className="mr-2 rotate-180" />
              Back to Blog
            </button>

            {/* Post Header */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 white:text-white mb-4">
                {selectedPost.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 white:text-white-400 mb-6">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {formatDate(selectedPost.date)}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {selectedPost.readTime} min read
                </div>
              </div>
              {selectedPost.tags && (
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 white:text-white-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Post Content */}
            <article className="prose prose-lg dark:prose-invert dark:text-white max-w-none">
            <ReactMarkdown remarkPlugins={[[remarkGfm, { breaks: true }]]}>
               {selectedPost.content}
            </ReactMarkdown>
            </article>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Thoughts on backend development, DevOps, and system architecture
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center text-gray-600 dark:text-gray-400">
              <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
              <p>No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => handlePostClick(post)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="p-6">
                    {/* Post Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.date)}
                        <span className="mx-2">•</span>
                        <Clock size={14} className="mr-1" />
                        {post.readTime} min read
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Read More */}
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;