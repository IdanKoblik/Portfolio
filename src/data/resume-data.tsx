import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { DiscordIcon } from "@/components/icons/DiscordIcon";

export const RESUME_DATA = {
  name: "Idan Koblik",
  initials: "IK",
  location: "Haifa, Israel",
  locationLink: "",
  about:
    "Highschool backend developer.",
  summary:
    "Hey my name is Idan and I am a 16 years old enthusiastic high school student with a passion for Java backend development. Actively learning and using MongoDB and Spigot, I am dedicated to creating efficient and innovative solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/78589468?s=400&u=eb173d05f165c45d7db5991a0452c812a7d41ffe&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "idankob@gmail.com",
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
  education: [
    {
      school: "TKH (Thikon kiryat hayim)",
      degree: "No degree yet",
      start: "2024",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Apartium",
      link: "https://github.com/PoweredByApartium",
      badges: ["Remote"],
      title: "Backend devloper & DevOps",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Actively contributing to Apartium projects and collaborating with peers doing a backend developing and CICD.",
    },
    {
      company: "Edvin studios",
      link: "https://discord.gg/GHWj7G8p",
      badges: ["Remote"],
      title: "Backend developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Involved in the development of a mmo-rpg minecraft server, focusing on innovative gameplay experiences. (Cannot tell about related projects because they are under NDA)",
    },
    {
      company: "ProjectZero network",
      link: "https://discord.gg/ZmRsGf5M",
      badges: ["Remote"],
      title: "Backend developer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Involved in the development of a Minecraft network, focusing on innovative gameplay experiences.",
    },
  ],
  skills: [
    "Java",
    "Golang",
    "Mongodb",
    "Gradle",
    "Docker",
    "Git",
    "Github actions",
    "Spigot",
    "JDA",
    "Spring boot",
  ],
  projects: [
    {
      title: "CocoaBeans",
      techStack: [
        "Java",
        "Spigot",
        "Docker",
        "Github actions",
      ],
      description:
        "General purpose library for Java & Spigot ",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://github.com/PoweredByApartium/cocoa-beans",
      },
    },
    {
      title: "Gitlab monitor",
      techStack: [
        "Spring boot",
        "JDA",
        "Java",
        "Gradle",
        "Docker",
        "Mongodb"
      ],
      description:
        "Open source discord gitlab project monitor providing option to monitor you gitlab projects events",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/IdanKoblik/Gitlab-monitor",
      },
    },
    {
      title: "Parties microservice",
      techStack: [
        "Java",
        "Gradle",
        "Mongodb",
        "Spigot"
      ],
      description: "[Close source] Standalone microservice for using and creating player based parties",
      logo: ConsultlyLogo,
      link: {
        label: "Apartium",
        href: "",
      },
    },
    {
      title: "Duels & Sheepwars minigame",
      techStack: ["Java", "Spigot", "Gradle", "Mongodb"],
      description:
        "[Close source] Minigame for Project Zero Minecraft network. Creating a unique and engaging duels minigame for Minecraft version 1.8. Collaborating with a team to design and implement game mechanics.",
      logo: MonitoLogo,
      link: {
        label: "ProjectZero network",
        href: "",
      },
    },
    {
      title: "Tailscaler",
      techStack: ["Golang", "Tailscale", "Mongodb"],
      description:
        "A Tailscale CLI application that allows organizing in a sorted table Taiscale nodes data.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/IdanKoblik/Tailscaler",
      },
    },
    {
      title: "Luckperms-notifier",
      techStack: ["Go", "Discord webhook", "Mongodb"],
      description:
        "Listens for events that come from a Minecraft LuckPerms plugin and sends them as a notification via a Discord webhook.",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/IdanKoblik/Luckperms-notifier",
      },
    },
    {
      title: "Ping-Pong",
      techStack: ["C", "Raylib"],
      description: "Simple implementation of the classic Ping Pong game",
      logo: YearProgressLogo,
      link: {
        label: "github.com",
        href: "https://github.com/IdanKoblik/ping-pong",
      },
    },
    {
      title: "Breakout",
      techStack: ["C", "Raylib"],
      description: "https://github.com/IdanKoblik/breakout",
      logo: Howdy,
      link: {
        label: "github.com",
        href: "https://github.com/IdanKoblik/breakout",
      },
    },
  ],
} as const;
