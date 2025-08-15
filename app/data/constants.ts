// Static data constants for the portfolio application
import { Certificate, Project, TechSkill, Education, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Ali Cerafica",
  title: "Front End Developer",
  roles: [
    " Front End Developer",
    " UI and UX Designer", 
    " Graphic Designer"
  ] as string[],
  description: "I am a recent graduate of Bachelor of Science in Computer Science, specializing in Application Development, from The University.",
  resumeUrl: "https://www.canva.com/design/DAF7RgdPHrE/PGvijEWTdSWs60pCbt-IKQ/edit?utm_content=DAF7RgdPHrE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  email: "ceraficaalejandrojr@gmail.com",
  phone: "+639217488822",
  location: "Buting Pasig City Metro Manila"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/aliriocerafica",
    label: "GitHub",
    icon: "/gitCsvg.svg",
    ariaLabel: "Visit Ali's GitHub profile"
  },
  {
    href: "https://www.facebook.com/RioCer22/",
    label: "Facebook", 
    icon: "/fbCsvg.svg",
    ariaLabel: "Visit Ali's Facebook profile"
  },
  {
    href: "https://www.linkedin.com/in/alejandro-cerafica-jr-926a7a23b/",
    label: "LinkedIn",
    icon: "/inCsvg.svg", 
    ariaLabel: "Visit Ali's LinkedIn profile"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "umak-cs",
    institution: "University Of Makati",
    degree: "Bachelor of Science in Computer Science",
    major: "Application Development",
    startYear: 2022,
    endYear: 2024,
    image: "/umakEdu.png",
    location: "Makati City, Philippines"
  },
  {
    id: "umak-diploma",
    institution: "University Of Makati",
    degree: "Diploma in Application Development",
    major: "",
    startYear: 2019,
    endYear: 2022,
    image: "/umak2.png",
    location: "Makati City, Philippines"
  },
  {
    id: "bansud-shs",
    institution: "Bansud Institute",
    degree: "General Academic Strand - Senior High School",
    major: "",
    startYear: 2017,
    endYear: 2019,
    image: "/graduate.png",
    location: "Bansud, Oriental Mindoro"
  },
  {
    id: "bansud-jhs",
    institution: "Bansud Institute",
    degree: "Junior High School",
    major: "",
    startYear: 2013,
    endYear: 2017,
    image: "/graduate.png",
    location: "Bansud, Oriental Mindoro"
  },
  {
    id: "bansud-elem",
    institution: "Proper Bansud Elementary School",
    degree: "Basic Education",
    major: "",
    startYear: 2007,
    endYear: 2013,
    image: "/graduate.png",
    location: "Bansud, Oriental Mindoro"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Certificate 1",
    image: "/cert1.jpg",
    viewUrl: "https://drive.google.com/file/d/1FdOIIYFcbEE3Zb45ILss5IDmrcpW3cjI/view"
  },
  {
    id: "cert-2", 
    title: "Certificate 2",
    image: "/cert2.jpg",
    viewUrl: "https://drive.google.com/file/d/1uQnAHuTF0WTRi95G6B4orfdrNb6igVCj/view"
  },
  {
    id: "cert-3",
    title: "Certificate 3", 
    image: "/cert3.png",
    viewUrl: "https://drive.google.com/file/d/1DFTzWE5m_NeeM4vwednxHMReCp02_E6Z/view"
  },
  {
    id: "cert-4",
    title: "Certificate 4",
    image: "/cert4.jpg", 
    viewUrl: "https://drive.google.com/file/d/1tuBKxJntZr0mjLArUm4QzMeQRZl7KQAT/view"
  },
  {
    id: "cert-5",
    title: "Certificate 5",
    image: "/cert5.png",
    viewUrl: "https://drive.google.com/file/d/19jCo2glV2Si9in36uswi8a_DpjmrkZkC/view?usp=sharing"
  },
  {
    id: "cert-6",
    title: "Certificate 6", 
    image: "/cert6.jpg",
    viewUrl: "https://drive.google.com/file/d/1BIzMoMVQRdrAW4EZ5f1pQtm6ayNf1qIg/view?usp=sharing"
  },
  {
    id: "cert-7",
    title: "Certificate 7",
    image: "/cert7.png",
    viewUrl: "https://drive.google.com/file/d/1mDVnyou7b2rJc6cYhlICOKqDiBDxm_XM/view?usp=sharing"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ardi-ai-assistant",
    title: "Ardi AI Assistant",
    description: "Advanced AI-powered knowledge base and assistant platform with intelligent conversation capabilities and modern user interface",
    image: "/Pet.png", // You can update this with the actual image
    githubUrl: "https://github.com/aliriocerafica/Ardi.git",
    liveUrl: "https://ardiv2-knowledgebasecom.vercel.app",
    technologies: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS", "React"]
  },
  {
    id: "alma-villa",
    title: "Alma Villa Barangay Portal",
    description: "Full-stack barangay management system with resident registration, document requests, news announcements, and administrative services",
    image: "/Pet.png", // You can update this with the actual image
    githubUrl: "https://github.com/tnmtthw/alma-villa.git",
    liveUrl: "https://alma-villa.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "NextAuth.js", "PostgreSQL"]
  },
  {
    id: "b-dazzle-cafe",
    title: "B'Dazzle Cafe",
    description: "Modern cafe website with product showcase, online ordering system, location services, and responsive design",
    image: "/eB.png", // You can update this with the actual image
    githubUrl: "https://github.com/tnmtthw/b-dazzle-cafe.git", 
    liveUrl: "https://b-dazzle-cafe.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"]
  },
  {
    id: "pet-taxi",
    title: "Pet Taxi Mobile App",
    description: "Mobile application design for pet transportation services",
    image: "/Pet.png",
    figmaUrl: "https://www.figma.com/design/cmJrmeFFeHKCGYFaedkmY5/Pet-Taxi-Mobile-Alidev?node-id=0-1&t=VYwBzxbrfKRb9mxd-1",
    technologies: ["Figma", "UI/UX Design", "Mobile Design"]
  },
  {
    id: "ebarangay",
    title: "E-Barangay System", 
    description: "Digital barangay management system interface",
    image: "/eB.png",
    figmaUrl: "https://www.figma.com/design/t53wU5lvmslTRHLQb2HEAb/Ebarangay?node-id=0-1&t=4u7qiusbrmlF9T8Q-1",
    technologies: ["Figma", "UI/UX Design", "Web Design"]
  },
  {
    id: "watch-interface",
    title: "Watch Interface Design",
    description: "Smart watch interface design and user experience",
    image: "/Watch.png", 
    figmaUrl: "https://www.figma.com/design/Y3wrqCns3xbytwih42GlQs/Watch?t=4u7qiusbrmlF9T8Q-1",
    technologies: ["Figma", "UI/UX Design", "Wearable Design"]
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description: "Personal portfolio website showcasing projects and skills",
    image: "/displayP.png",
    figmaUrl: "https://www.figma.com/design/l8o1u26Tg3Xlqlq4uut0U6/Portfolio?node-id=0-1&t=ep6rADEtWEo21CAg-1",
    githubUrl: "https://github.com/aliriocerafica/alidev",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: "coffee-shop", 
    title: "Coffee Shop Application",
    description: "Coffee shop ordering and management system design",
    image: "/project5.png",
    figmaUrl: "https://www.figma.com/design/O1Utop0WQWW7AKnoqKxAyL/Coffee-Shop?node-id=0-1&t=6y5oP29Ybk4xVHtK-1",
    technologies: ["Figma", "UI/UX Design", "E-commerce Design"]
  }
];

export const TECH_SKILLS: TechSkill[] = [
  {
    id: "typescript",
    name: "TypeScript", 
    icon: "/dev/Group 4.svg",
    category: "frontend",
    proficiency: "advanced"
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/dev/Group 5.svg", 
    category: "frontend",
    proficiency: "advanced"
  },
  {
    id: "html",
    name: "HTML",
    icon: "/dev/Group 8.svg",
    category: "frontend", 
    proficiency: "expert"
  },
  {
    id: "html5",
    name: "HTML 5",
    icon: "/dev/Group 9.svg",
    category: "frontend",
    proficiency: "expert"
  },
  {
    id: "react", 
    name: "React",
    icon: "/dev/Group 10.svg",
    category: "frontend",
    proficiency: "advanced"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: "/dev/bootstrap.svg",
    category: "frontend",
    proficiency: "intermediate"
  },
  {
    id: "figma",
    name: "Figma", 
    icon: "/dev/Group 16.svg",
    category: "design",
    proficiency: "advanced"
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/dev/nodejs-icon.svg",
    category: "backend",
    proficiency: "intermediate"
  },
  {
    id: "laravel",
    name: "Laravel",
    icon: "/dev/laravel-2.svg",
    category: "backend", 
    proficiency: "intermediate"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "/svg/tailwind-css.svg",
    category: "frontend",
    proficiency: "advanced"
  }
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://Facebook.com",
    label: "Facebook",
    icon: "/footer/Facebook.svg"
  },
  {
    href: "https://instagram.com", 
    label: "Instagram",
    icon: "/footer/instagram.svg"
  },
  {
    href: "https://twitter.com",
    label: "Twitter", 
    icon: "/footer/twitter.svg"
  }
];

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -100 }, 
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
} as const;
