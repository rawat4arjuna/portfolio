import luxCartApp from "../../public/assets/projects/luxcartApp.webp";
import Netowrked from "../../public/assets/projects/networked.png";
import waveBible from "../../public/assets/projects/waveBibleApp.png";
import speedApp from "../../public/assets/projects/speedApp.webp";
import scrapyT from "../../public/assets/projects/scrapyT.png";
import basilWholesale from "../../public/assets/projects/basilMerchant.png";

export const projectData = [
  {
    image: scrapyT, // You can replace with actual Duvall project image
    title: "Duvall IoT Coffee Machine",
    description:
      "An IoT-based smart coffee machine project built during my internship at Acroknacks. Developed using Electron.js and React.js with hardware communication capabilities for PLC integration. Implemented touch keyboard interfaces, real-time data parsing and graphing, and seamless USB-to-database data exchange using bash scripts. This project showcased my early expertise in hardware-software integration.",
    technologies: [
      "Electron.js",
      "React.js", 
      "PLC Communication",
      "IoT Integration",
      "Hardware APIs",
      "Bash Scripts",
      "Touch Interface",
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    category: "IoT & Hardware",
    highlights: [
      "Real-time Hardware Communication",
      "PLC Data Processing", 
      "Touch Interface Development",
      "IoT System Architecture"
    ]
  },
  {
    image: waveBible, // You can replace with Tutree project image
    title: "Tutree Educational Platform",
    description:
      "A comprehensive educational platform developed during my time as React.js Developer at Tutree Inc. Built high-performance web applications with React.js, Redux, and Material UI. Developed an AMP project integrated with GO GIN that significantly boosted mobile traffic. Implemented server-side rendered website using Node.js, Express, and EJS for enhanced SEO and user engagement.",
    technologies: [
      "React.js",
      "Redux", 
      "Material UI",
      "AMP",
      "GO GIN",
      "Node.js",
      "Express.js",
      "EJS",
      "SSR",
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    category: "Educational Platform",
    highlights: [
      "High-Performance Web Application",
      "Mobile Traffic Optimization",
      "Server-Side Rendering",
      "SEO Enhancement"
    ]
  },
  {
    image: basilWholesale,
    title: "DSIM - Digital Stock Inventory Management",
    description:
      "A comprehensive location-based warehouse system developed during my tenure at Pericius Technology/Tecnotree-Flex. Streamlined creation, requisition, and stock transfers with advanced inventory ticketing and barcode-scanned uploads. Innovated SIM starter kit workflows and enabled seamless multi-warehouse sales reporting. Applied my hardware integration expertise with barcode scanners and real-time data processing.",
    technologies: [
      "React.js",
      "Redux",
      "REST APIs",
      "Barcode Integration", 
      "Hardware Communication",
      "Real-time Updates",
      "Inventory Management",
      "Multi-warehouse Systems",
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    category: "Enterprise System",
    highlights: [
      "Barcode Scanner Integration",
      "Multi-warehouse Management", 
      "Real-time Inventory Tracking",
      "SIM Starter Kit Innovation"
    ]
  },
  {
    image: speedApp, // You can replace with UI Kit image
    title: "TT-UIKit Component Library (NPM Package)",
    description:
      "A sophisticated Vite-powered component library housing intricate, reusable components for universal use across all products. Published as an NPM package to significantly accelerate development speed and foster efficient development environments. Implemented monorepo architecture with TypeScript for type safety and utilized modern build tools for optimal performance.",
    technologies: [
      "Vite",
      "React.js",
      "TypeScript", 
      "NPM Package",
      "Monorepo Architecture",
      "Storybook",
      "Component Design System",
      "Build Optimization",
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed", 
    category: "Component Library",
    highlights: [
      "NPM Package Publication",
      "Reusable Component Architecture",
      "Monorepo Implementation", 
      "Developer Experience Optimization"
    ]
  },
  {
    image: luxCartApp,
    title: "DSM - Dynamic System Management Platform",
    description:
      "A cutting-edge no-code platform currently being developed at GEDU Services, enabling users to create forms, dashboards, reports, and menus with real-time data views. Features customizable email templates, multi-level permissions, and comprehensive user management. Built using my expertise in workflow builders, Slate.js rich text editing, and advanced UI systems with Material-UI. Offers enterprise-level flexibility similar to tools like Thesis.",
    technologies: [
      "React.js",
      "Next.js",
      "Material-UI",
      "Slate.js",
      "Workflow Builder",
      "Dynamic Forms (Formik)",
      "TypeScript",
      "No-Code Platform",
      "Real-time Data",
    ],
    liveUrl: "#", 
    githubUrl: "#",
    status: "In Progress",
    category: "No-Code Platform",
    highlights: [
      "No-Code Platform Development",
      "Dynamic Workflow Builder",
      "Rich Text Editor Integration",
      "Enterprise-Grade Architecture"
    ]
  },
  {
    image: Netowrked,
    title: "Advanced Calendar System",
    description:
      "A sophisticated multi-range calendar system with color-coded intervals and shaded week-offs, developed as part of my current work at GEDU Services. Improved visual planning for enterprise scheduling applications using React.js and Material-UI. Implemented advanced form-level logic with custom input components and conditional field rendering.",
    technologies: [
      "React.js",
      "Material-UI",
      "Calendar APIs",
      "Custom Hooks", 
      "Advanced State Management",
      "Visual Planning Tools",
    ],
    liveUrl: "#",
    githubUrl: "#", 
    status: "Completed",
    category: "Enterprise UI",
    highlights: [
      "Multi-range Calendar Implementation",
      "Color-coded Visual System",
      "Advanced Scheduling Logic",
      "Enterprise Integration"
    ]
  }
];

// Additional metadata
export const projectCategories = [
  "All Projects",
  "IoT & Hardware",
  "Educational Platform", 
  "Enterprise System",
  "Component Library",
  "No-Code Platform",
  "Enterprise UI"
];

export const projectStats = {
  totalProjects: projectData.length,
  completedProjects: projectData.filter(p => p.status === "Completed").length,
  inProgressProjects: projectData.filter(p => p.status === "In Progress").length,
  technologies: [...new Set(projectData.flatMap(p => p.technologies))].length
};

// Project timeline based on your career progression
export const projectTimeline = [
  { 
    period: "2019-2020", 
    project: "Duvall IoT Coffee Machine",
    company: "Acroknacks (Internship)" 
  },
  { 
    period: "2020-2021", 
    project: "Tutree Educational Platform", 
    company: "Tutree Inc." 
  },
  { 
    period: "2022-2024", 
    project: "DSIM Inventory Management", 
    company: "Pericius Technology" 
  },
  { 
    period: "2023-2024", 
    project: "TT-UIKit Component Library",
    company: "Pericius Technology" 
  },
  { 
    period: "2024-Present", 
    project: "DSM Platform & Calendar System", 
    company: "GEDU Services" 
  }
];
