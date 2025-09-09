// constants/index.js

import { meta, shopify, starbucks, tesla, brainlogo } from "../assets/images";
import {
    // --- Project Icons ---
    smartRecipi,
    farmisian,
    robovac,
    Lava,
    bugHive,
    fed,
    digitalLocker,
    
    // --- Skill Icons ---
    pythonlogo,
    springboot,
    javalogo,
    django,
    versel,
    postman,
    firebase,
    flasklogo,

    // --- Other Icons ---
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    docker
} from "../assets/icons";

export const skills = [
        { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: express, name: "Express", type: "Backend" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
    { imageUrl: pythonlogo, name: "Python", type: "Backend" },
    { imageUrl: springboot, name: "Spring Boot", type: "Backend" },
    { imageUrl: javalogo, name: "Java", type: "Backend" },
    { imageUrl: django, name: "Django", type: "Backend" },
    // --- ADDED NEW SKILLS ---
    { imageUrl: versel, name: "Vercel", type: "Deployment" },
    { imageUrl: postman, name: "Postman", type: "API Tool" },
    { imageUrl: firebase, name: "Firebase", type: "Backend" },
    { imageUrl: flasklogo, name: "Flask", type: "Backend" },
    { imageUrl: docker, name: "Docker", type: "Backend" },
    // ... (your existing skills array remains the same)
];

export const experiences = [
     {
        title: "Web Development Intern",
        company_name: "Brainwave Matrix Solutions",
        icon: brainlogo, 
        iconBg: "#accbe1",
        date: "April 2025 - June 2025",
        points: [
            "Contributed to full-stack web application development using modern frameworks and agile methodologies",
            "Built responsive, interactive web interfaces using HTML5, CSS3, and JavaScript",
            "Developed dynamic features using React.js, Node.js, and REST APIs",
            "Collaborated with cross-functional teams in Agile environment",
            "Gained hands-on experience with Git, debugging tools, and deployment",
        ],
    },
    // ... (your existing experiences array remains the same)
];

export const socialLinks = [
     {
        name: 'Contact',
        iconUrl: contact, // <-- This is the correct icon
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
    // ... (your existing socialLinks array remains the same)
];

export const projects = [
    {
        iconUrl: smartRecipi,
        theme: 'btn-back-red',
        name: 'Smart Recipe Generator',
        description: 'A full-stack web application that suggests recipes based on user-provided ingredients. Features AI-powered ingredient recognition from photos using the Clarifai API, a smart matching algorithm, and a dynamic frontend built with Next.js and React.',
        link: 'https://smart-recipe-generator-eight-delta.vercel.app/',
        github: 'https://github.com/Prabhat993/smart-recipe-generator', // Added GitHub link
    },
    {
        iconUrl: farmisian,
        theme: 'btn-back-green',
        name: 'Farmisian',
        description: 'Crop recommendation platform that increased yield prediction accuracy by 20%. Features efficient catalog, cart, and payment modules',
        link: 'https://your-farmisian-app.vercel.app/', // Updated live link
        github: 'https://github.com/Prabhat993/farmisian',
    },
    {
        iconUrl: robovac,
        theme: 'btn-back-blue',
        name: 'Smart Robo Vacuum Cleaner',
        description: 'A functional prototype with wireless smartphone control and sensor-based obstacle avoidance. Features dual-motor drive system and ultrasonic sensor navigation.',
        link: 'https://github.com/YourGitHubUsername/smart-robo-vacuum', // Using GitHub as live link for hardware projects
        github: 'https://github.com/Prabhat993/smart-robo-vaccum-cleaner',
    },
    {
        iconUrl: Lava,
        theme: 'btn-back-pink',
        name: 'LAVA Voice Assistant',
        description: 'AI-powered voice assistant with optimized speech recognition pipeline. Reduced Word Error Rate by 15% and increased task completion by 20%.',
        link: 'https://github.com/YourGitHubUsername/lava-voice-assistant',
        github: 'https://github.com/Naman477/L.A.V.A',
    },
    {
        iconUrl: bugHive,
        theme: 'btn-back-black',
        name: 'Bug Detection System',
        description: 'Full-stack bug tracking application with React frontend and Spring Boot backend. Helps teams log, manage, and resolve software defects efficiently.',
        link: 'https://bug-detection-system.vercel.app/',
        github: 'https://github.com/Prabhat993/bugdetection',
    },
    {
        iconUrl: fed,
        theme: 'btn-back-yellow',
        name: 'Pneumonia Detection using Federated Learning',
        description: 'Achieved 92% detection accuracy with federated learning while ensuring 100% data privacy. Accelerated diagnostics by 30% with efficient distributed AI.',
        link: 'https://github.com/YourGitHubUsername/federated-learning-pneumonia',
        github: 'https://github.com/Prabhat993/Pneumonia-detection-using-federated-learning',
    },
    {
        iconUrl: digitalLocker,
        theme: 'btn-back-purple', // Changed to purple for variety
        name: 'Digital Locker System',
        description: 'Secure document storage application with Spring Boot backend and Firebase integration. Features secure authentication and cloud storage.',
        link: 'https://digital-locker-system.vercel.app/',
        github: 'https://github.com/Prabhat993/Digital-Locker/tree/master',
    }
];