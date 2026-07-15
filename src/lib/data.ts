import {
  type Project,
  type Experience,
  type Skill,
  type Education,
  type Certification,
  type TechCategory,
  type NavItem,
  type Activity,
  type BlogPost,
} from "@/types";

/* ═══════════════════════════════════════════
   Personal Information
   ═══════════════════════════════════════════ */

export const personalInfo = {
  name: "Lin Myat Oo",
  nickname: "Harry",
  title: "Software Engineer",
  subtitle: "Building intelligent systems & scalable solutions",
  email: "linmyatooa7@gmail.com",
  phone: "+66831037740",
  location: "Chiang Rai, Thailand",
  dob: "23 July, 1999",
  github: "https://github.com/linmyatoo",
  linkedin: "https://www.linkedin.com/in/lin-myat-oo-1364b6255",
  resumeUrl: "/pdf/lmocv.pdf",
  profileImage: "/images/profile.webp",
  bio: `I'm a passionate Software Engineer with a deep interest in Artificial Intelligence, 
Machine Learning, and building scalable backend systems. With a strong foundation in 
computer engineering and software development, I thrive on solving complex problems 
and transforming ideas into elegant, performant solutions. I'm driven by a continuous 
learning mindset and a desire to push the boundaries of what technology can achieve.`,
};

/* ═══════════════════════════════════════════
   Navigation
   ═══════════════════════════════════════════ */

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  // { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

/* ═══════════════════════════════════════════
   Hero Typing Roles
   ═══════════════════════════════════════════ */

export const typingRoles: string[] = [
  "Software Engineer",
  "AI & ML Enthusiast",
  // "Backend Developer",
  "DevOps Engineer",
  // "Cloud Architect",
  // "Cybersecurity Enthusiast",
];

/* ═══════════════════════════════════════════
   Education
   ═══════════════════════════════════════════ */

export const education: Education[] = [
  {
    institution: "Mae Fah Luang University",
    degree: "Bachelor of Engineering",
    program: "Software Engineering",
    period: "2023 — Present",
    current: true,
  },
  {
    institution: "University of Technology (Yatanarpon Cyber City)",
    degree: "Bachelor of Engineering",
    program: "Computer Engineering",
    period: "2015 — 2019",
  },
  {
    institution: "Basic Education High School No.1 Aunglan",
    degree: "High School Diploma",
    program: "Science",
    period: "Graduated 2014",
  },
];

/* ═══════════════════════════════════════════
   Tech Stack
   ═══════════════════════════════════════════ */

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
      { name: "C++" },
      { name: "C#" },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Flutter" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
  },
  {
    name: "AI / ML",
    items: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Scikit-learn" },
    ],
  },
  {
    name: "DevOps & Cloud",
    items: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Linux" },
      { name: "AWS" },
      { name: "Git" },
      { name: "GitHub Actions" },
    ],
  },
];

/* ═══════════════════════════════════════════
   Projects
   ═══════════════════════════════════════════ */

export const projects: Project[] = [
  // Open Source Software & AI GitHub Projects
  {
    title: "TripNest Admin Portal",
    description:
      "Comprehensive open-source travel and hotel booking administration platform built for real-time reservation tracking, management, and customer workflow orchestration.",
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/linmyatoo/TripNest_admin",
    category: "software",
    featured: true,
    stars: 1,
  },
  {
    title: "Enterprise Car Rental Service",
    description:
      "Full-stack car rental software platform featuring automated vehicle booking, fleet inventory management, billing workflows, and RESTful API endpoints.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API", "OOP"],
    github: "https://github.com/linmyatoo/car_rental_service",
    category: "software",
    featured: true,
    stars: 0,
  },
  {
    title: "AI Cats & Dogs Image Classifier",
    description:
      "Deep learning computer vision model trained to accurately classify and distinguish animal image datasets using Convolutional Neural Networks (CNNs).",
    technologies: ["Python", "PyTorch", "TensorFlow", "Jupyter Notebook", "Deep Learning"],
    github: "https://github.com/linmyatoo/Cats_and_Dogs_Classification",
    category: "ai",
    featured: true,
    stars: 0,
  },
  {
    title: "Clothing Retail POS System",
    description:
      "Modern Point of Sale (POS) management application tailored for retail stores, complete with live inventory tracking, receipt generation, and sales analytics.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/linmyatoo/clothingPos",
    category: "software",
    featured: true,
    stars: 0,
  },
  {
    title: "Leather Defect Quality AI Detector",
    description:
      "Industrial computer vision quality control pipeline designed to detect surface anomalies, scratches, and manufacturing defects on leather materials.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Deep Learning", "Image Processing"],
    github: "https://github.com/linmyatoo/leather_detection",
    category: "ai",
    featured: true,
    stars: 0,
  },
  {
    title: "ManageApp Workflow Suite",
    description:
      "Productivity dashboard and task management application enabling cross-functional project tracking and team collaboration workflows.",
    technologies: ["JavaScript", "React", "Full Stack", "REST API", "Tailwind CSS"],
    github: "https://github.com/linmyatoo/ManageApp",
    category: "software",
    featured: true,
    stars: 0,
  },
  {
    title: "Restaurant Management Portal",
    description:
      "Comprehensive web application for restaurant ordering, menu customization, table reservations, and kitchen order workflow management.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "Full Stack"],
    github: "https://github.com/linmyatoo1/restaurant-app",
    category: "software",
    featured: true,
    stars: 0,
  },

  // Mobile & Cross-Platform Applications (linmyatoo1)
  {
    title: "MatchForU Social & Dating App",
    description:
      "Cross-platform mobile application built with Flutter and Dart, featuring real-time user matching, social discovery, and interactive UI animations.",
    technologies: ["Dart", "Flutter", "Mobile App", "Cross-Platform", "UI/UX"],
    github: "https://github.com/linmyatoo1/MatchForU",
    category: "mobile",
    featured: true,
    stars: 0,
  },
  {
    title: "Clima Weather Forecast App",
    description:
      "Live weather tracking and forecast mobile app using geolocation API integration and custom responsive Flutter widgets for iOS and Android.",
    technologies: ["Flutter", "Dart", "REST API", "Geolocation", "C++"],
    github: "https://github.com/linmyatoo1/clima_weather",
    category: "mobile",
    featured: true,
    stars: 0,
  },

  // Robotics & Hardware Engineering Projects
  {
    title: "Camera Dolly Stabilizer",
    description:
      "An IoT-powered robot designed to hold and stabilize cameras for capturing video and photos in hazardous environments. Controlled via RC controller with gyroscope-based stabilization.",
    image: "/images/project4.webp",
    technologies: ["IoT", "Embedded Systems", "Gyroscope", "RC Control"],
    category: "hardware",
    featured: true,
  },
  {
    title: "Robotic Arm With Carrier",
    description:
      "Bluetooth-controlled robotic arm and carrier system using an Android application and embedded systems for precise manipulation and transport.",
    image: "/images/project1.webp",
    technologies: ["Embedded Systems", "Bluetooth", "Android", "Arduino"],
    category: "hardware",
    featured: true,
  },
  {
    title: "Guardian Sumo Robot",
    description:
      "A competition-grade sumo robot capable of picking objects, racing, and engaging in robot battles. First runner-up at Clash of Robot 2018.",
    image: "/images/project2.webp",
    technologies: ["Embedded Systems", "Robotics", "RF Control"],
    category: "hardware",
    featured: true,
  },
  {
    title: "Guardian Pickup Robot",
    description:
      "Precision robot arm system designed for automated object retrieval and storage operations.",
    image: "/images/project3.webp",
    technologies: ["Robotics", "Embedded Systems", "Automation"],
    category: "hardware",
    featured: true,
  },
];

/* ═══════════════════════════════════════════
   Activities
   ═══════════════════════════════════════════ */

export const activities: Activity[] = [
  {
    title: "Mentor at NOW Maker Space",
    image: "/images/nowmaker.webp",
    description: "Senior mentor guiding students in robotics and electronics",
  },
  {
    title: "Clash Of Robot 2018 — Competitor",
    image: "/images/cor1.webp",
    description: "Competed with Guardian Sumo Robot",
  },
  {
    title: "Clash Of Robot 2019 — Organizer",
    image: "/images/cor2.webp",
    description: "Junior organizer for the annual competition",
  },
  {
    title: "World Robot Game Myanmar 2020",
    image: "/images/wrg.webp",
    description: "Event organizer for international robotics competition",
  },
  {
    title: "Knowledge Sharing for Children",
    image: "/images/wrg1.webp",
    description: "Teaching robotics and STEM fundamentals to young students",
  },
  {
    title: "Myanmar Red Cross Brigade",
    image: "/images/rc.webp",
    description: "Platoon Commander at UT-YCC Branch",
  },
  {
    title: "Photography Club President",
    image: "/images/pc2.webp",
    description: "Led the university photography club",
  },
  {
    title: "SUIC Summer Programme 2018",
    image: "/images/suic.webp",
    description:
      "International Summer Programme hosted by Silpakorn University International College",
  },
];

/* ═══════════════════════════════════════════
   Experience
   ═══════════════════════════════════════════ */

export const experiences: Experience[] = [
  {
    title: "Software Engineering Student",
    company: "Mae Fah Luang University",
    period: "2023 — Present",
    description:
      "Pursuing Bachelor of Engineering in Software Engineering, focusing on AI/ML, cloud computing, and modern software development practices.",
    type: "education",
  },
  {
    title: "Software Engineer",
    company: "iyi Robot Co., Ltd.",
    period: "2019 — 2020",
    description:
      "Worked as a web developer building software solutions for robotics applications and internal tools.",
    achievements: [
      "Developed web applications for robotics systems",
      "Collaborated with cross-functional engineering teams",
    ],
    type: "work",
  },
  {
    title: "Senior Mentor",
    company: "NOW Maker Space",
    period: "2017 — 2019",
    description:
      "Guided students in robotics, embedded systems, and electronics, fostering hands-on learning and innovation.",
    achievements: [
      "Mentored students in building competition-grade robots",
      "Organized workshops on embedded systems and IoT",
    ],
    type: "work",
  },
  {
    title: "Event Organizer",
    company: "Clash of Robots & World Robot Game Myanmar",
    period: "2018 — 2020",
    description:
      "Organized and coordinated national and international robotics competitions.",
    achievements: [
      "Junior Organizer — Clash of Robots 2019",
      "Organizer — World Robot Game Myanmar 2020",
    ],
    type: "volunteer",
  },
  {
    title: "Computer Engineering Student",
    company: "University of Technology (Yatanarpon Cyber City)",
    period: "2015 — 2019",
    description:
      "Completed Bachelor of Engineering in Computer Engineering with a strong focus on embedded systems and robotics.",
    achievements: [
      "Winner — University Project Show 2017 (Camera Dolly)",
      "First Runner-up — University Project Show 2016 (Robotic Arm)",
      "First Runner-up — Clash of Robot 2018 (Sumo Robot)",
      "Selection Team — University Project Show 2015 (UTYCC FYI Website)",
    ],
    type: "education",
  },
];

/* ═══════════════════════════════════════════
   Skills
   ═══════════════════════════════════════════ */

export const skills: Skill[] = [
  // Programming
  { name: "Python", level: 90, category: "Programming" },
  { name: "JavaScript / TypeScript", level: 85, category: "Programming" },
  { name: "Java", level: 80, category: "Programming" },
  { name: "C / C++", level: 75, category: "Programming" },
  { name: "SQL", level: 80, category: "Programming" },

  // Frameworks
  { name: "React / Next.js", level: 80, category: "Frameworks" },
  { name: "FastAPI", level: 85, category: "Frameworks" },
  { name: "Node.js / Express", level: 75, category: "Frameworks" },
  { name: "Flutter", level: 70, category: "Frameworks" },

  // AI / ML
  { name: "PyTorch", level: 75, category: "AI & ML" },
  { name: "TensorFlow", level: 70, category: "AI & ML" },
  { name: "Scikit-learn", level: 80, category: "AI & ML" },

  // DevOps
  { name: "Docker & Kubernetes", level: 75, category: "DevOps" },
  { name: "Linux / Unix", level: 85, category: "DevOps" },
  { name: "AWS", level: 70, category: "DevOps" },
  { name: "Git & CI/CD", level: 85, category: "DevOps" },
];

/* ═══════════════════════════════════════════
   Certifications
   ═══════════════════════════════════════════ */

export const certifications: Certification[] = [
  // Honors & Competition Awards
  {
    name: "Winner — University Project Show 2017",
    issuer: "University of Technology (Yatanarpon Cyber City)",
    date: "2017",
    category: "award",
    status: "Honored",
    description: "Awarded 1st Place overall for the Camera Dolly IoT & RC stabilization robotics engineering project.",
    skills: ["Robotics", "IoT", "Embedded Systems", "RC Control"],
    placeholder: false,
  },
  {
    name: "First Runner-up — Clash of Robot 2018",
    issuer: "Clash of Robot National Championship",
    date: "2018",
    category: "award",
    status: "Honored",
    description: "Secured 2nd Place nationwide among top engineering universities with the competition-grade Guardian Sumo Robot.",
    skills: ["Sumo Robotics", "Embedded Systems", "RF Control", "Sensors"],
    placeholder: false,
  },
  {
    name: "First Runner-up — University Project Show 2016",
    issuer: "University of Technology (Yatanarpon Cyber City)",
    date: "2016",
    category: "award",
    status: "Honored",
    description: "Awarded 2nd Place for Bluetooth-controlled Robotic Arm with Carrier and accompanying Android mobile application.",
    skills: ["Android", "Bluetooth", "Robotics", "Arduino"],
    placeholder: false,
  },
  {
    name: "Selection Team — University Project Show 2015",
    issuer: "University of Technology (Yatanarpon Cyber City)",
    date: "2015",
    category: "award",
    status: "Honored",
    description: "Selected among top computer engineering projects for the official UTYCC FYI Student Web Portal.",
    skills: ["Web Development", "HTML5", "CSS3", "JavaScript"],
    placeholder: false,
  },

  // Professional Certifications
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2026 Target",
    category: "certification",
    status: "In Progress",
    description: "Foundational cloud architecture best practices, cloud security fundamentals, and core AWS cloud services.",
    skills: ["AWS Cloud", "IAM", "EC2", "S3", "Cloud Architecture"],
    placeholder: true,
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google / TensorFlow",
    date: "2026 Target",
    category: "certification",
    status: "In Progress",
    description: "Building deep neural networks, computer vision classification, NLP models, and time-series forecasting.",
    skills: ["Deep Learning", "TensorFlow", "Computer Vision", "Neural Networks"],
    placeholder: true,
  },
  {
    name: "Docker Certified Associate (DCA)",
    issuer: "Docker, Inc.",
    date: "2026 Target",
    category: "certification",
    status: "In Progress",
    description: "Containerization workflows, multi-stage builds, orchestration, networking, and microservices security.",
    skills: ["Docker", "Containerization", "Microservices", "Linux"],
    placeholder: true,
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    date: "2026 Target",
    category: "certification",
    status: "In Progress",
    description: "Designing, configuring, and deploying resilient cloud-native applications across Kubernetes clusters.",
    skills: ["Kubernetes", "Pod Design", "Cloud Native", "DevOps"],
    placeholder: true,
  },
];

/* ═══════════════════════════════════════════
   Languages (Spoken)
   ═══════════════════════════════════════════ */

export const spokenLanguages = [
  { name: "Burmese", level: "Native" },
  { name: "English", level: "Upper Intermediate (B1)" },
];

/* ═══════════════════════════════════════════
   Blog Articles & Technical Writings
   ═══════════════════════════════════════════ */

export const blogPosts: BlogPost[] = [
  {
    title: "Architecting Autonomous Robotics Systems: From IoT Sensors to Edge AI",
    excerpt:
      "A deep dive into designing ultra-low-latency sensor fusion pipelines using C++, ESP32 embedded microcontrollers, and real-time telemetry over lightweight MQTT protocols for competition robotics.",
    category: "Robotics & IoT",
    readTime: "7 min read",
    date: "July 2026",
    tags: ["Robotics", "IoT", "C++", "Embedded Systems", "Edge AI"],
    featured: true,
    content:
      "When engineering autonomous systems like the Guardian Sumo Robot or the IoT Camera Dolly, the biggest bottleneck is rarely raw compute power—it is sensor latency and deterministic loop execution. In this article, we explore how to transition from basic Arduino polling loops to event-driven C++ FreeRTOS architectures on ESP32 chips, enabling precise 1000Hz motor control and real-time gyroscope stabilization while streaming diagnostic telemetry over MQTT.",
    takeaways: [
      "Why deterministic execution timing in C++ beats interpreted loop logic for precision robotics.",
      "Implementing FreeRTOS multi-core task separation: core 0 for Wi-Fi/MQTT and core 1 for 1kHz PID motor control.",
      "Optimizing battery life and RF controller packet handling in high-interference competition arenas.",
    ],
  },
  {
    title: "Real-Time Defect Detection in Manufacturing using PyTorch & OpenCV",
    excerpt:
      "A technical walkthrough on building and optimizing deep Convolutional Neural Networks (CNNs) for industrial quality assurance on edge devices.",
    category: "AI / ML",
    readTime: "10 min read",
    date: "June 2026",
    tags: ["PyTorch", "OpenCV", "Deep Learning", "Computer Vision"],
    featured: true,
    content:
      "Quality control in modern leather and textile manufacturing demands sub-second visual inspection capable of detecting hairline scuffs, irregular grain patterns, and discoloration. We breakdown the exact training pipeline used in our AI Leather Defect Detector: from data augmentation and bounding box annotation to quantizing a PyTorch ResNet model down to FP16 for real-time inference on edge cameras via OpenCV.",
    takeaways: [
      "Preprocessing raw industrial camera feeds using adaptive thresholding and morphological transformations in OpenCV.",
      "Transfer learning strategies with PyTorch to train high-accuracy defect models on small specialized datasets.",
      "Model quantization and ONNX runtime export techniques for 4x faster edge inference speeds.",
    ],
  },
  {
    title: "Building Enterprise Travel & Hotel Booking Platforms with Next.js 15 & TypeScript",
    excerpt:
      "Architectural patterns for managing complex reservation state, real-time availability sync, and secure authentication across distributed systems.",
    category: "Full Stack",
    readTime: "8 min read",
    date: "May 2026",
    tags: ["Next.js", "TypeScript", "React", "System Architecture"],
    featured: true,
    content:
      "Building TripNest required solving concurrency challenges inherent in hotel room reservations: double-booking prevention, dynamic pricing calculations, and multi-tenant admin dashboards. We explore why Next.js App Router, Server Actions, and strict TypeScript types create an unshakeable foundation for enterprise booking portals.",
    takeaways: [
      "Leveraging Next.js Server Actions for secure, optimistic UI reservation updates without boilerplate API routes.",
      "Designing resilient PostgreSQL database schemas with optimistic locking to prevent race conditions during checkout.",
      "Building modular, role-based admin dashboards with Tailwind CSS and Framer Motion micro-interactions.",
    ],
  },
  {
    title: "Cross-Platform Mobile Performance: Optimizing Flutter & Dart for 60 FPS",
    excerpt:
      "Proven techniques for eliminating jank, managing state cleanly, and writing custom native platform channels in Flutter for iOS and Android.",
    category: "Mobile",
    readTime: "6 min read",
    date: "April 2026",
    tags: ["Flutter", "Dart", "Mobile Performance", "iOS & Android"],
    featured: false,
    content:
      "Whether building dating apps like MatchForU or live weather trackers like Clima, achieving buttery-smooth 60 FPS animations on mid-range smartphones requires strict memory management and widget tree optimization. We share actionable debugging workflows and Riverpod state management patterns to keep your apps lightweight and blazing fast.",
    takeaways: [
      "Avoiding unnecessary widget rebuilds with const constructors, Riverpod select hooks, and RepaintBoundary.",
      "Writing efficient asynchronous Dart Futures and Streams for seamless geolocation and REST API fetching.",
      "Bridging native C++ algorithms into Flutter via Dart FFI for computation-heavy tasks.",
    ],
  },
  {
    title: "Deploying High-Throughput Microservices with Docker, Kubernetes & CI/CD",
    excerpt:
      "Containerization best practices, multi-stage Docker builds, zero-downtime rolling updates, and GitHub Actions automation pipelines.",
    category: "DevOps",
    readTime: "12 min read",
    date: "March 2026",
    tags: ["Docker", "Kubernetes", "DevOps", "CI/CD", "AWS"],
    featured: false,
    content:
      "Moving from monolithic applications to containerized microservices requires a robust container strategy. We dissect multi-stage Dockerfiles that shrink Node.js and Java Spring Boot images from 1GB+ down to under 150MB, and demonstrate how to configure Kubernetes deployment manifests for auto-scaling and zero-downtime rolling updates.",
    takeaways: [
      "Crafting multi-stage Docker builds using Alpine and distroless base images for maximum security and speed.",
      "Writing Kubernetes deployment, service, and ingress YAML files with proper liveness and readiness probes.",
      "Automating automated testing, Docker build pushes, and cluster deployments using GitHub Actions workflows.",
    ],
  },
  {
    title: "High-Performance Backend Design with FastAPI, AsyncIO & PostgreSQL",
    excerpt:
      "Why Python asynchronous execution models transform API throughput, connection pooling strategies, and SQLAlchemy 2.0 best practices.",
    category: "Backend",
    readTime: "9 min read",
    date: "February 2026",
    tags: ["Python", "FastAPI", "PostgreSQL", "AsyncIO", "Backend"],
    featured: false,
    content:
      "When building AI service wrappers and data-heavy REST APIs, traditional synchronous Python frameworks can struggle under high concurrent connection loads. We explore how FastAPI, Pydantic v2 data validation, and async SQLAlchemy connection pooling deliver Node-like concurrency while keeping Python's rich data science ecosystem right at your fingertips.",
    takeaways: [
      "Understanding Python event loops (`asyncio`) vs thread pooling for I/O bound database queries.",
      "Structuring FastAPI projects with dependency injection for clean separation of concerns and effortless unit testing.",
      "Configuring async PostgreSQL connection pools with asyncpg for maximum request throughput.",
    ],
  },
];
