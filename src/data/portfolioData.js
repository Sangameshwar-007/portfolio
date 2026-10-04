export const PORTFOLIO_DATA = {
  personal: {
    name: "Sangameshwar Kama",
    title: "Python & Full-Stack Developer",
    subtitle: "FastAPI • REST APIs • ReactJS • MySQL • Database Design",
    location: "Hyderabad, India",
    availability: "Available for Full-time Roles & Internships",
    email: "sangameshwarkama@gmail.com",
    phone: "+91 76718 02537",
    github: "https://github.com/sangameshwarkama",
    linkedin: "https://linkedin.com/in/sangameshwarkama",
    resumeUrl: "#", // Add link to hosted PDF or static file
  },

  roles: [
    "Python Developer",
    "FastAPI & REST API Specialist",
    "ReactJS & Frontend Integrator",
    "SQL & Database Architect",
    "Full-Stack Software Engineer"
  ],

  about: {
    heading: "Crafting scalable backends and seamless web applications.",
    bio: "I am a dedicated Python & Full-Stack Developer with practical experience in designing high-performance RESTful APIs using FastAPI, SQLAlchemy, and MySQL. I specialize in building end-to-end solutions, implementing secure JWT authentication, Role-Based Access Control (RBAC), and connecting dynamic user interfaces built with ReactJS and modern Web technologies. Holding a B.Tech in Data Science, I combine data-driven insights with solid engineering principles to build robust software systems.",
    highlights: [
      { label: "Hands-on Experience", value: "6+ Months" },
      { label: "Production Projects", value: "3+ Built" },
      { label: "Core Focus", value: "FastAPI & React" },
      { label: "Degree", value: "B.Tech Data Science" }
    ]
  },

  skills: {
    "Languages": [
      { name: "Python", level: 90, icon: "Code2" },
      { name: "JavaScript (ES6+)", level: 85, icon: "FileCode" },
      { name: "SQL", level: 85, icon: "Database" },
      { name: "Java", level: 70, icon: "Coffee" },
      { name: "HTML5 & CSS3", level: 90, icon: "Layout" }
    ],
    "Backend Development": [
      { name: "FastAPI", level: 90, icon: "Zap" },
      { name: "RESTful APIs", level: 92, icon: "Server" },
      { name: "SQLAlchemy ORM", level: 85, icon: "Layers" },
      { name: "JWT Auth & RBAC", level: 88, icon: "ShieldCheck" },
      { name: "Spring Boot & JDBC", level: 65, icon: "Cpu" }
    ],
    "Frontend Frameworks": [
      { name: "ReactJS", level: 85, icon: "Atom" },
      { name: "Vue.js", level: 75, icon: "Flame" },
      { name: "Bootstrap 5", level: 80, icon: "Box" },
      { name: "Responsive Design", level: 90, icon: "Smartphone" }
    ],
    "Databases & Tools": [
      { name: "MySQL", level: 88, icon: "Database" },
      { name: "SQLite", level: 85, icon: "HardDrive" },
      { name: "Git & GitHub / GitLab", level: 88, icon: "GitBranch" },
      { name: "Vercel / Postman", level: 85, icon: "Send" },
      { name: "Swagger / OpenAPI", level: 90, icon: "BookOpen" }
    ]
  },

  experience: [
    {
      id: "exp-1",
      role: "Python Full Stack Intern",
      company: "Sirius Soft Sol",
      location: "Hyderabad, India",
      duration: "Oct 2025 – Mar 2026",
      type: "Internship",
      description: "Contributed to the core engineering team building high-concurrency web services and enterprise web platforms.",
      responsibilities: [
        "Architected and deployed high-performance REST APIs utilizing FastAPI and SQLAlchemy ORM, connecting seamlessly to a reactive frontend.",
        "Engineered normalized MySQL database schemas, write-optimized queries, and data migration scripts for enterprise modules.",
        "Implemented secure Authentication workflows featuring JWT tokens, password hashing, and granular Role-Based Access Control (RBAC).",
        "Participated in active Agile sprints, daily code reviews, bug troubleshooting, and Git/GitLab version control workflows."
      ],
      skillsUsed: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Vue.js", "JWT", "GitLab"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Fleet Management System",
      category: "Full Stack Web Application",
      featured: true,
      description: "Comprehensive enterprise portal designed to streamline fleet operations, vehicle assignments, driver records, maintenance schedules, and real-time operational status updates.",
      longDescription: "A full-scale vehicle and driver management system. Built with a FastAPI backend, MySQL database with SQLAlchemy ORM, JWT authentication, and interactive dashboard UI. Features automated scheduling alerts, vehicle performance metrics, and role-restricted actions for managers and drivers.",
      tags: ["Python", "FastAPI", "MySQL", "SQLAlchemy", "Vue.js / React", "JWT Auth", "GitLab"],
      liveUrl: "https://my-portfoli0-ecru.vercel.app/",
      githubUrl: "https://github.com/sangameshwarkama/fleet-management",
      metrics: "Reduced dispatch tracking time by 40%",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-2",
      title: "AI Hand Gesture Mouse Control",
      category: "Computer Vision & Automation",
      featured: true,
      description: "Real-time human-computer interaction system enabling touchless cursor movement, click triggers, and scrolling using hand gestures detected via webcam feed.",
      longDescription: "Utilized OpenCV and Google MediaPipe to track 21 hand keypoints in real time. Custom algorithms translate index finger positioning to cursor coordinates with smoothing filters, enabling seamless PC interaction without physical input devices.",
      tags: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI"],
      liveUrl: "#",
      githubUrl: "https://github.com/sangameshwarkama/gesture-mouse-control",
      metrics: "Achieved 30 FPS smooth real-time tracking",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "proj-3",
      title: "Modern Interactive Portfolio",
      category: "Frontend Development",
      featured: true,
      description: "Ultra-responsive, recruiter-focused portfolio site with dark/light dynamic theme switching, animated typing hero, interactive filterable project modals, and skill progress visuals.",
      longDescription: "Built with ReactJS and modern modular CSS architecture to showcase technical competencies, full-stack projects, work history, and direct recruiter contact channels.",
      tags: ["ReactJS", "JavaScript (ES6)", "CSS3", "HTML5", "Vercel"],
      liveUrl: "https://my-portfoli0-ecru.vercel.app/",
      githubUrl: "https://github.com/sangameshwarkama/portfolio",
      metrics: "100/100 Lighthouse Performance Score",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Data Science",
      institution: "Siddhartha Institute of Technology & Science",
      location: "Hyderabad, Telangana",
      period: "2020 – 2024",
      grade: "CGPA: 6.6",
      details: "Specialized in Data Structures, Database Systems, Python Programming, Machine Learning Fundamentals, and Software Engineering."
    },
    {
      id: "edu-2",
      degree: "Intermediate (MPC - Math, Physics, Chemistry)",
      institution: "Govt. Junior College",
      location: "Yellareddy, Telangana",
      period: "2018 – 2020",
      grade: "Passed with Distinction",
      details: "Strong foundational coursework in Mathematics and Analytical Reasoning."
    },
    {
      id: "edu-3",
      degree: "Secondary School Certificate (SSC)",
      institution: "Govt. High School",
      location: "Kamareddy, Telangana",
      period: "2018",
      grade: "First Class",
      details: "Completed secondary education with top honors in Mathematics and Science."
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Python Full-Stack Certification",
      issuer: "GUVI Geek Network",
      date: "2024",
      link: "#"
    },
    {
      id: "cert-2",
      title: "Generative AI Job Simulation",
      issuer: "Forage / Industry Credentials",
      date: "2024",
      link: "#"
    }
  ]
};
