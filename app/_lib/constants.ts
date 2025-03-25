import { Heading } from "lucide-react";
import { describe } from "node:test";

export const techCardsItems = [
  {
    name: "Java",
    description: "Programming language",
    imageUrl: "/imgs/logos/java.svg",
    bgColor: "bg-[#FF7F00]/20",
  },
  {
    name: "Kotlin",
    description: "Programming language",
    imageUrl: "/imgs/logos/kotlin.svg",
    bgColor: "bg-[#945DFF]/20",
  },
  {
    name: "Python",
    description: "Programming language",
    imageUrl: "/imgs/logos/python.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Mongodb",
    description: "Database",
    imageUrl: "/imgs/logos/mongo.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    name: "Prometheus",
    description: "Database",
    imageUrl: "/imgs/logos/prometheus.svg",
    bgColor: "bg-[#E6521C]/20",
  },
  {
    name: "Graphite",
    description: "Database",
    imageUrl: "/imgs/logos/graphite.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    name: "Grafana",
    description: "Monitoring system",
    imageUrl: "/imgs/logos/grafana.svg",
    bgColor: "bg-[#F26729]/20",
  },
  {
    name: "Linux",
    description: "Operating system",
    imageUrl: "/imgs/logos/linux.svg",
    bgColor: "bg-[#ECB61A]/20",
  },
  {
    name: "Docker",
    description: "Dev env",
    imageUrl: "/imgs/logos/docker.svg",
    bgColor: "bg-[#0091E2]/20",
  },
];

export const portfolioProjects = [
  {
    id: "cocoa-beans",
    heading: "Cocoa-beans",
    subheading: "General purpose library for Java & Spigot",
    description:
      "This library aims to be a very well-made and thought-out toolkit for developers to save the hassle of copying common code between projects.",
    imageUrl: "/imgs/projects/portfolio-mockup1.png",
    techStack: [
      "Java",
      "Gradle",
      "Spigot api",
      "GitOps",
      "Git",
    ],
    sourceCodeUrl: "https://github.com/PoweredByApartium/cocoa-beans",
  },
  {
    id: "R2D2",
    heading: "R2D2",
    subheading: "Intellij plugin for handling todos",
    description: "R2D2 is an IntelliJ-based plugin that enhances the way you handle TODO comments in your codebase.",
    imageUrl: "/imgs/projects/portfolio-mockup1.png",
    techStack: [
      "Java",
      "Kotlin",
      "Gradle",
      "GitOps",
      "Git",
    ],
    sourceCodeUrl: "https://github.com/IdanKoblik/R2D2",
  },
  {
    id: "jukebox",
    heading: "Jukebox",
    subheading: "Minecraft nbs file player library",
    description:
      "Jukebox is a powerful Java library specifically designed for handling NBS (Note Block Studio) files, primarily for use in Minecraft.",
    imageUrl: "/imgs/projects/portfolio-mockup2.png",
    techStack: [
      "Java",
      "Git",
      "Spigot api",
      "Gradle",
      "GitOps",
    ],
    sourceCodeUrl: "https://github.com/IdanKoblik/Jukebox",
  },
  {
    id: "diffrewind",
    heading: "DiffRewind",
    subheading: "CLI tool for restoring stacked diff",
    description:
      "DiffRewind is a Python tool that restores stacked diffs in a GitLab project, allowing for efficient version control management.",
    imageUrl: "/imgs/projects/portfolio-mockup3.jpg",
    techStack: [
      "Python",
      "Git",
      "GitOps",
      "Gitlab api",
      "Advanced forms",
    ],
    sourceCodeUrl: "https://github.com/IdanKoblik/DiffRewind",
  },
  {
    id: "gitlab-monitor",
    heading: "Gitlab monitor",
    subheading: "Discord webhook that notifies about GitLab project actions",
    description:
      "GitLab Monitor is a Discord webhook that notifies about GitLab project actions. It listens for GitLab webhook events and forwards them to a specified Discord channel.",
    imageUrl: "/imgs/projects/portfolio-mockup3.jpg",
    techStack: [
      "Javascript",
      "Git",
      "GitOps",
      "Gitlab api",
      "Docker",
      "Rest api",
    ],
    sourceCodeUrl: "https://github.com/IdanKoblik/Gitlab-monitor",
  },
];

export const tooltipItems = [
  {
    id: 1,
    name: "Bogdan Aleksic",
    designation: "Great job!",
    image: "/imgs/avatars/bogdan.svg",
  },
  {
    id: 2,
    name: "Djordje Djurovic",
    designation: "Incredibly responsible",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    name: "Anthony Sean",
    designation: "Highly recommended!",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    name: "Alex Finn",
    designation: "Enjoyable experience.",
    image: "/imgs/avatars/Alex.jpg",
  },
];

export const testimonialItems = [
  {
    id: 1,
    stars: 5,
    name: "Alex Finn",
    proffesion: "Lead Web Designer at knots.io",
    description:
      "“Working with Andrija was a very smooth experience from start to finish.  He not only brings strong technical skills to front-end development, but his attention to detail and commitment to delivering pixel-perfect  designs made a huge difference in our project. He is enthusiastic in  suggesting improvements. Always ready to answer questions or provide  updates. If you're looking for a reliable developer who brings  creativity and efficiency to the table, Andrija is the right person!”",
    image: "/imgs/avatars/Alex.jpg",
  },
  {
    id: 2,
    stars: 5,
    name: "Djordje Djurovic",
    proffesion: "CEO at DigitalityLab",
    description:
      "“Andrija is an outstanding frontend specialist and presents consistently high level of work. During our work together, he has demonstrated extraordinary skills in simplifying complex ideas into clean, functional, and visually appealing designs. His communication is to the point and time management is perfect, even for the most pressing deadlines. I would highly recommend him to any company looking to bring on a frontend developer with strong technical skills and an keen eye for design.”",
    image: "/imgs/avatars/djordje.jpeg",
  },
  {
    id: 3,
    stars: 5,
    name: "Anthony Sean",
    proffesion: "Chief Technology Officer at DealJet",
    description:
      "“On several occasions, I have had the privilege to work with Andrija, and he has never failed to impress. While he possesses a great level of knowledge in frontend development, what I find most remarkable about him is his obsession with getting every detail right in order to achieve perfection in the end-user experience. He always pays attention to the project requirements, raises up some pertinent issues, and most importantly delivers beyond the call of duty. Andrija is the kind of person who adds value to the team he's in!”",
    image: "/imgs/avatars/Anthony.jpg",
  },
  {
    id: 4,
    stars: 5,
    name: "Bogdan Aleksic",
    proffesion: "Investment Educator and Crypto Expert",
    description:
      "“I got on board Andrija from Upwork to help me develop a website for my course on blockchain, cryptocurrency, and investment techniques. Because of his effort, I was able to generate considerable sales from my course after launching it, and I have received good reviews about the design and functionality of the website. Andrija is someone I would highly recommend!”",
    image: "/imgs/avatars/bogdan.svg",
  },
];
