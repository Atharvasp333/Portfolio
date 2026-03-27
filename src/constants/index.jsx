import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiExpress,
  SiThreedotjs,
  SiPrisma,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostgresql,
  SiRedis,
  SiVercel,
  SiAdobeillustrator,
  SiDocker,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDesignServices,MdOutlineBolt } from "react-icons/md";

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];


const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  { name: "React Developer", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Python Developer", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Backend Developer", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "Interactive Developer", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Project Manager", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

const expCards = [
  {
    review: "Atharva demonstrated strong full-stack development skills and ownership while working on a complex, real-time system. His contributions were crucial in delivering a reliable and scalable cricket scoring platform.",
    imgPath: "/images/zemo.png",
    logoPath: "/images/logos/zemo-logo.png",
    title: "Full-Stack Developer Intern",
    date: "May 2025 - Jul 2025",
    responsibilities: [
      "Developed a MERN-based cricket scoring system with multiple roles including viewer, scorer, organiser, and player.",
      "Implemented real-time match updates, dashboards, and detailed cricket logic for accurate scoring and analytics.",
      "Collaborated in an Agile environment, integrating REST APIs and ensuring performance, scalability, and clean code practices.",
    ],
  },
  {
    review: "Atharva played a key role in developing a real-world, impact-driven application. His ability to translate requirements into clean, functional interfaces helped deliver a reliable and user-friendly platform.",
    imgPath: "/images/attoinfotech.png",
    logoPath: "/images/logos/atto-logo.jpeg",
    title: "Mobile App Developer Intern",
    date: "Nov 2024 - Apr 2025",
    responsibilities: [
      "Developed KindMeals, a food donation and waste management platform using Flutter and MERN stack.",
      "Built responsive UI screens and integrated REST APIs for real-time donor and NGO coordination.",
      "Implemented authentication, data handling, and collaborated with the team to ensure scalable and maintainable architecture.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const socialImgs = [
  { name: "instagram", imgPath: "/images/insta.png", url: "https://www.instagram.com/atharva_pingale45/" },
  { name: "github", imgPath: "/images/github.png", url: "https://github.com/Atharvasp333" },
  { name: "linkedin", imgPath: "/images/linkedin.png", url: "https://www.linkedin.com/in/atharva-pingale-25387432a/" },
  { name: "leetcode", imgPath: "/images/leetcode.png", url: "https://leetcode.com/u/Atharva_0506/" },
];


// Projects Data
const showcaseProjects = [
  {
    id: 1,
    title: "KisaanSetu",
    tagline: "An all-in-one digital companion empowering Indian farmers.",
    category: "Mobile Application",
    src: "/images/kisaansetu-app.jpg",
    bgColor: "bg-[#E8F5E9]",
    live: null,
    github: "https://github.com/Atharvasp333/KisaanSetu",
    skills: {
      frontend: ["Flutter", "Dart"],
      backend: ["REST APIs", "Firebase", "Node.js", "MongoDB"],
    },
    description: "KisaanSetu is a farmer-centric mobile application designed to simplify access to essential agricultural information and tools. It helps farmers make informed decisions through AI-driven insights and centralized resources.",
    features: [
      "AI-based crop disease identification",
      "Personalized crop recommendations",
      "Government scheme awareness and updates",
      "Weather insights and alerts",
      "Access to essential farming information and tools",
      "Simple and farmer-friendly UI for easy adoption",
    ],
    conclusion: "KisaanSetu demonstrates how technology and AI can be leveraged to empower farmers, improve agricultural decision-making, and bridge the information gap in rural communities.",
  },
  {
    id: 2,
    title: "Multiversal Rush",
    tagline: "Real-time 3D multiplayer web game featuring four immersive maps.",
    category: "3D Web Game",
    src: "/images/Multiversal Rush.png",
    bgColor: "bg-[#1e1b4b]",
    live: "https://stranger-strings-dev-hacks.vercel.app/",
    github: "https://github.com/Atharvasp333/Multiversal-Rush",
    skills: {
      frontend: ["React", "React Three Fiber", "Three.js", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Socket.io", "MongoDB", "JWT"],
    },
    description: "Multiversal Rush is an immersive 3D multiplayer web game that brings competitive, team-based matches directly to the browser. Built entirely with modern web technologies, it features low-latency real-time synchronization, distinct interactive environments, and a comprehensive social backend to connect players seamlessly.",
    features: [
      "Fast-paced multiplayer gameplay set across four uniquely designed interactive maps",
      "Low-latency, real-time game state synchronization powered by Socket.io",
      "Immersive 3D environments and player mechanics rendered with React Three Fiber",
      "Secure user authentication (JWT) with persistent player profiles",
      "Integrated social ecosystem including a friend system and global live chat",
      "Competitive leaderboard tracking to rank and showcase top players",
    ],
    conclusion: "Multiversal Rush demonstrates the power of the modern web stack, proving that complex, real-time 3D gaming experiences can be delivered directly in the browser without external game engines.",
  },
  {
    id: 3,
    title: "KindMeals",
    tagline: "Connecting surplus food to those who need it most.",
    category: "Social Impact Platform",
    src: "/images/kindmeals-app.jpg",
    bgColor: "bg-[#FFE7EB]",
    live: null,
    github: "https://github.com/Atharvasp333/KindMeals",
    skills: {
      frontend: ["Flutter", "React"],
      backend: ["Node.js", "Express", "MongoDB", "Firebase", "REST API"],
    },
    description: "KindMeals is a food donation and waste management platform designed to reduce food wastage by connecting donors with NGOs and recipients in real time. The platform streamlines donation coordination and ensures surplus food reaches the right people efficiently.",
    features: [
      "Real-time food donation listings",
      "NGO and volunteer coordination",
      "Secure authentication and role-based access",
      "Location-based donor–recipient matching",
      "Donation tracking and status updates",
      "Scalable backend for handling high-volume requests",
    ],
    conclusion: "KindMeals highlights how technology can drive social impact by minimizing food waste and improving access to food for communities in need through a reliable and user-friendly digital platform.",
  },
  {
    id: 4,
    title: "SafeSight",
    tagline: "AI-powered automated PPE detection and restricted zone auditing system.",
    category: "Computer Vision & AI",
    src: "/images/Safesight.png",
    bgColor: "bg-[#0f172a]", // A dark, industrial slate blue
    live: null, // Add your live link here
    github: "https://github.com/Hackverse-AIML/wiet-hackverse-2-0-hackathon-project-submission-aiml-701-wa04_stranger_strings", // Add your GitHub link here
    skills: {
      frontend: ["React", "Tailwind CSS", "Recharts"], // For the Safety Dashboard
      backend: ["Python", "OpenCV", "YOLOv8", "Node.js", "Socket.io"], // For the Real-time Processing Engine
    },
    description: "SafeSight is an intelligent computer vision platform designed to enhance safety in industrial environments. Acting as an automated safety auditor, it utilizes advanced object detection models to monitor workers in real-time. The system ensures strict compliance by immediately detecting missing Personal Protective Equipment (PPE) such as helmets and vests, while actively monitoring restricted zones for unauthorized access.",
    features: [
      "Real-time processing engine utilizing YOLO and OpenCV for high-accuracy object detection",
      "Automated monitoring of mandatory safety gear including hard hats and high-visibility vests",
      "Virtual geo-fencing to identify and track unauthorized entry into restricted industrial zones",
      "Instantaneous alert system triggered by compliance violations or boundary breaches",
      "Comprehensive Safety Dashboard providing visual feedback, analytics, and incident logging",
    ],
    conclusion: "SafeSight demonstrates the powerful application of AI and computer vision in solving critical industrial safety challenges, replacing manual monitoring with a highly scalable, automated solution.",
  },
  {
    id: 5,
    title: "Signalist",
    tagline: "AI-powered insights for smarter stock market decisions.",
    category: "Web Application",
    src: "/images/Signalist.png",
    bgColor: "bg-[#1a1a2e]",
    live: "https://signalist-stock-market-toolkit.vercel.app/",
    github: "https://github.com/Atharvasp333/Signalist-Stock-Market-Toolkit",
    skills: {
      frontend: ["Next.js", "React", "TypeScript", "Shadcn UI", "TailwindCSS"],
      backend: ["Node.js", "MongoDB", "Better Auth", "Inngest", "Finnhub API", "Nodemailer"],
    },
    description: "Signalist is an AI-powered stock market platform that helps users track real-time prices, analyze company performance, and receive intelligent alerts. Built with a modern full-stack architecture, it delivers personalized insights, automated workflows, and a seamless trading research experience.",
    features: [
      "Real-time stock price tracking with interactive charts",
      "Advanced search and personalized watchlists",
      "Price alerts, volume spike notifications, and email alerts",
      "Detailed company insights including financials, news, and sentiment",
      "AI-powered daily market digests and earnings notifications",
      "Admin dashboard for stock management, news publishing, and user monitoring",
      "Event-driven workflows using Inngest for automation and scalability",
    ],
    conclusion: "Signalist showcases how AI, event-driven systems, and modern web technologies can come together to build a scalable, real-time financial platform focused on data-driven decision making.",
  },
  {
    id: 6,
    title: "MediMeet",
    tagline: "Seamless doctor–patient consultations, anytime.",
    category: "Healthcare Web Platform",
    src: "/images/medimeet.png",
    bgColor: "bg-[#FFE7EB]",
    live: "https://medi-meet-zeta.vercel.app/",
    github: "https://github.com/Atharvasp333/MediMeet",
    skills: {
      frontend: ["Next.js", "React", "TailwindCSS", "Shadcn UI"],
      backend: ["NeonDB", "Clerk Auth", "REST API", "Vonage Video API"],
    },
    description: "MediMeet is a modern doctor appointment and telemedicine platform that enables patients to book appointments and consult doctors through secure video calls. The platform supports multiple doctor specialties and provides a smooth, role-based experience for admins, doctors, and patients.",
    features: [
      "Role-based access for admin, doctor, and patient",
      "Doctor discovery across multiple specialties",
      "Appointment scheduling and management",
      "Secure video consultations using Vonage",
      "Authentication and user management with Clerk",
      "Responsive and accessible UI built with modern design systems",
    ],
    conclusion: "MediMeet demonstrates how modern web technologies can be used to build scalable and secure healthcare platforms that improve accessibility and streamline doctor–patient interactions.",
  },
];


// Skills Data
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "React Native", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Three.js (R3F)", icon: SiThreedotjs, color: "#FFFFFF" }, 
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#FFFFFF" },
      { name: "Inngest", icon: MdOutlineBolt, color: "#E5945C" },
      { name: "REST APIs", icon: TbApi, color: "#FF6B6B" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Github", icon: FaGithub, color: "#FFFFFF"},
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Agile/Scrum", icon: TbApi, color: "#0052CC" },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
      { name: "UI/UX Design", icon: MdDesignServices, color: "#A855F7" },
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  showcaseProjects,
  skillCategories,
};
