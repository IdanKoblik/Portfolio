import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { DiscordIcon } from "@/components/icons/DiscordIcon";

export const RESUME_DATA = {
  name: "Idan Koblik",
  initials: "IL",
  location: "Haifa, Israel",
  about:
    "Junior backend developer",
  summary: (
    <>
    High school student and dedicated Backend Developer with 3 years of experience in software development, specializing in Java, Kotlin, Go and Python, Linux, and System Architecture. Proven expertise in developing and maintaining backend systems for gaming and web applications using various databases including MongoDB and PostgreSQL, GraphiteDB, PrometheusDB. Demonstrated ability to work with multiple development teams while managing complex technical projects. Strong focus on creating scalable, efficient systems and implementing DevOps CI/CD pipelines best practices. Experienced in collaborating with international development teams and delivering high-quality software solutions using Git for version control.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/78589468?v=4",
  personalWebsiteUrl: "https://idank.dev",
  contact: {
    email: "me@idank.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/IdanKoblik",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/idan-k/",
        icon: LinkedInIcon,
      },
      {
        name: "Discord",
        url: "https://discord.com/users/429212281914785793",
        icon: DiscordIcon,
      },
    ],
  },
  work: [
    {
      company: "Gaming & Web Industry Development",
      link: "https://apartium.net",
      title: "Backend developer",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Collaborating with multiple development teams in the gaming industry, contributing to backend systems and architecture
            </li>
            <li>
            Containerizing applications and services using Docker for consistent development and deployment environments
            </li>
            <li>
            Implementing and maintaining Linux-based development environments for various gaming projects
            </li>
            <li>
            Designing and optimizing backend systems using Java, Kotlin, and Python for improved performance and scalability
            </li>
            <li>
            Managing and optimizing MongoDB and PostgreSQL databases for efficient data storage and retrieval
            </li>
            <li>
            Participating in code reviews, testing and technical discussions with international development teams
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Self-Maintained Projects",
      link: "https://idank.dev",
      title: "Independent Backend  Developer",
      logo: ParabolLogo,
      start: "2023",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
            Developing and maintaining personal backend projects using Java, Kotlin, and Python
            </li>
            <li>
            Implementing DevOps CI/CD pipelines and automated deployment systems
            </li>
            <li>
            Creating custom Linux server configurations and maintenance scripts
            </li>
            <li>
            Building scalable backend architectures for web applications
            </li>
            <li>
            Managing version control and collaborative development using Git
            </li>
            <li>
            Implementing Docker containerization for microservices and maintaining Docker registries
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Java",
    "Spring boot",
    "Golang",
    "C",
    "Python",
    "Kotlin",
    "MongoDB",
    "PostgreSQL",
    "GraphiteDB",
    "PrometheusDB",
    "Git",
    "Docker",
  ],
  projects: [
    {
      title: "Echo-ft",
      techStack: ["Golang", "Protobuff"],
      description:
        "Lightweight, peer-to-peer (P2P) file transfer system designed for reliability, speed, and simplicity.",
      link: {
        label: "echo-ft",
        href: "https://echo.idank.dev",
      },
    },
    {
      title: "Jukebox",
      techStack: [
        "Java",
        "Spigot",
        "Paper",
      ],
      description:
        "Minecraft nbs file player library",
      logo: ConsultlyLogo,
      link: {
        label: "Jukebox",
        href: "https://jukebox.idank.dev",
      },
    },
    {
      title: "R2D2",
      techStack: ["Java", "Kotlin", "IntellijSDK"],
      description:
        "R2D2 is an IntelliJ-based plugin that enhances the way you handle TODO comments in your codebase.",
      logo: MonitoLogo,
      link: {
        label: "R2D2",
        href: "https://github.com/IdanKoblik/R2D2",
      },
    },
    {
      title: "Cocoa Beans",
      techStack: ["Java", "Kotlin", "Paper", "Spigot"],
      description:
        "General purpose library for Java & Spigot.",
      logo: MonitoLogo,
      link: {
        label: "R2D2",
        href: "https://cocoa-beans.apartium.net/",
      },
    },
  ],
} as const;
