import project1 from "../assets/projects/safe-mom.webp";
import project2 from "../assets/projects/duka.webp";

export const HERO_CONTENT = `
I’m a passionate Software Engineer specializing in scalable backend systems and robust full-stack solutions. 
With deep expertise in Java, Spring Boot, and microservices, and front-end experience using React.js and TypeScript, I build secure, high-performance web applications. 
I’ve worked on real-time systems with WebSocket, designed multi-tenant architectures, and implemented secure authentication flows using Spring Security, OAuth2, and JWT. 
I also bring experience in PostgreSQL, Docker, Kubernetes, and CI/CD workflows. 
Whether it’s system design or hands-on coding, I strive to create clean, efficient, and impactful software that drives innovation and delivers value.
`;

export const ABOUT_TEXT = `Hey, I’m Bercilin — a builder at heart, coder by craft. 
From architecting secure backend systems to building real-time applications, 
I thrive on turning complex problems into elegant, scalable solutions. 
I’m fluent in Java and Spring Boot, speak React on the front end, and understand what it takes to ship robust features in production. 
I’m also passionate about system design — creating resilient, maintainable architectures that power high-performance applications. 
Whether it’s optimizing a database query or leading a project sprint, I’m all about impact, collaboration, and staying ahead in tech that matters.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: ["Trainee Software Engineer, Software Engineer"],
    company: "Eoxys System",
    description: `
  Contributed to the design and development of scalable web applications and microservices using Java and Spring Boot. 
  Built secure RESTful APIs with Spring Security, implemented OAuth2 and JWT for authentication. 
  Worked with PostgreSQL for complex queries, optimized database performance, and handled multi-tenant architectures. 
  Integrated WebSocket for real-time communication and contributed to CI/CD pipelines and Docker-based deployments.
    `,
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "Microservices",
      "Spring Security",
      "OAuth2",
      "JWT",
      "PostgreSQL",
      "WebSocket",
      "Redis",
      "Kafka",
      "Nginx",
      "Docker",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Hospital Management System (HIMS)",
    image: project1,
    link: "https://safe-mom-1.onrender.com",
    description: `
    Contributed to the development of a robust Hospital Management System (HIMS) using Spring Boot and PostgreSQL. 
    Led a small team of 2 developers, guiding them through module implementations and code reviews. 
    Implemented secure login functionality using OAuth 2.0 and managed critical modules such as Patient, Warehouse, 
    Inventory, Pharmacy, Billing, Cashdesk, Laundry, and Operation Theatre. 
    Ensured seamless integration, optimized performance, and maintained clean, scalable code.
    `,
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "Microservices",
      "Spring Security",
      "OAuth2",
      "JWT",
      "PostgreSQL",
      "WebSocket",
      "Redis",
      "Kafka",
      "Distributed Scheduling"
    ],
  },
  {
    title: "Real-Time Chat & Video Call Platform",
    image: project2, // Replace with your actual image reference
    link: "https://github.com/your-org/webrtc-chat-platform", // Adjust to your actual repo
    description: `
  Built a scalable microservices architecture for real-time chat and video calls. Integrated 
  Spring Cloud Gateway, Eureka (HA setup), secure WebSocket signaling, and Mediasoup SFU 
  for media relay. Used Coturn for NAT traversal and secure ICE negotiation. Horizontally 
  scalable design with centralized OAuth2 authentication and secure JWT flow via cookies.
    `,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Eureka",
      "OAuth2",
      "WebSocket",
      "Mediasoup",
      "Coturn",
      "Docker",
      "Nginx",
      "React"
    ],
  }
];

export const CONTACT = {
  address: "6/178, CSI Church South Street, Sadayal Puthoor, Kanniyakumari - 629801",
  phoneNo: "+91 7708715856",
  email: "bercilinjose07@gmail.com",
};
