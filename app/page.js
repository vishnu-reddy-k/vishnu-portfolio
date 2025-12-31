"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Server, Cloud, Terminal, ArrowRight, ExternalLink, Briefcase, Database } from "lucide-react";

// --- VISHNU'S DATA ---
const personalInfo = {
  name: "Vishnu Reddy",
  role: "Backend Engineer (Java & Microservices)",
  about: "I architect scalable distributed systems. With 4 years of experience at Comcast, I specialize in transforming legacy monoliths into efficient, event-driven microservices using Java, Spring Boot, and AWS.",
  email: "vishnuvrkarnati@gmail.com",
};

// SKILL CARDS DATA (Added AWS Card)
const skillCards = [
  {
    id: 1,
    name: "Java 17 & Core",
    designation: "Expert",
    icon: <Code2 className="text-cyan-400" size={24} />,
    content: "Deep understanding of JVM internals, Garbage Collection (G1GC), and Multithreading. Proficient in Java 8+ features like Streams and Lambdas.",
  },
  {
    id: 2,
    name: "Spring Boot Ecosystem",
    designation: "Expert",
    icon: <Server className="text-green-400" size={24} />,
    content: "Building production-ready Microservices. Experience with Spring Cloud, Spring Security, Actuator, and custom starters.",
  },
  {
    id: 3,
    name: "AWS & Cloud Native",
    designation: "Advanced",
    icon: <Cloud className="text-orange-400" size={24} />,
    content: "Designing Serverless architectures with Lambda & API Gateway. Infrastructure as Code (IaC) using CloudFormation and deploying to ECS/Fargate.",
  },
  {
    id: 4,
    name: "System Design",
    designation: "Advanced",
    icon: <Database className="text-yellow-400" size={24} />,
    content: "Expertise in Distributed Transactions (SAGA Pattern), Event-Driven Architecture, and resilience patterns (Circuit Breaker).",
  },
  {
    id: 5,
    name: "Kafka & Messaging",
    designation: "Advanced",
    icon: <Terminal className="text-purple-400" size={24} />,
    content: "Handling high-throughput event streaming. Implemented async workflows using AWS SQS and Kafka with zero data loss.",
  },
];

const experience = [
  {
    company: "Comcast",
    role: "Development Engineer 2 (Team Lead)",
    date: "Apr 2024 - Present",
    desc: "Leading the 'OrderReviewV2' initiative. Refactoring a monolithic BPMN workflow into a modular, flow-based microservice architecture. Reduced system complexity by 75% and improved fault tolerance."
  },
  {
    company: "Comcast",
    role: "Development Engineer 1",
    date: "Jun 2022 - Mar 2024",
    desc: "Key developer for 'Critical Service Promotions' feature, driving 30% customer acquisition. Optimized high-volume database queries and resolved critical production incidents."
  }
];

const projects = [
  {
    title: "Ordering Microservices System",
    tech: "Java • Spring Boot • SAGA Pattern",
    desc: "Designed a high-throughput ordering system handling inter-service communication. Implemented the SAGA orchestration pattern to ensure data consistency across distributed databases."
  },
  {
    title: "Legacy Monolith Refactor",
    tech: "Java 17 • AWS • Event-Driven",
    desc: "Spearheaded the migration of the 'start' API workflow from a legacy monolith to a modern, containerized microservice, improving API response times by 40%."
  }
];

// --- ANIMATIONS CONFIG ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Portfolio() {
  return (
    <main className="min-h-screen relative bg-slate-950 selection:bg-cyan-500 selection:text-white overflow-x-hidden text-slate-200 font-sans">
      
      {/* BACKGROUND GLOW BLOBS */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="initial" animate="animate" variants={stagger}
          className="flex flex-col justify-center min-h-[70vh] md:min-h-[80vh] text-center md:text-left mb-16 md:mb-0"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">Open to Work</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block mt-2 md:inline md:mt-0">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light mb-8 max-w-2xl mx-auto md:mx-0">
            {personalInfo.role}
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0">
            {personalInfo.about}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <a href={`mailto:${personalInfo.email}`} className="group relative w-full sm:w-auto px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition-all flex items-center justify-center gap-2">
              Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <div className="flex gap-4">
              <SocialIcon icon={<Github size={20}/>} href="https://github.com" />
              <SocialIcon icon={<Linkedin size={20}/>} href="https://linkedin.com" />
              <SocialIcon icon={<Mail size={20}/>} href={`mailto:${personalInfo.email}`} />
            </div>
          </motion.div>
        </motion.section>

        {/* SKILLS SECTION - NEON GLASS GRID */}
        <SectionHeader title="Technical Arsenal" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-24 md:mb-32">
          {skillCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-colors">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                       {card.icon}
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
                    {card.designation}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors">
                  {card.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPERIENCE SECTION */}
        <SectionHeader title="Professional Experience" />
        <div className="space-y-8 mb-24 md:mb-32 relative pl-6 md:pl-8 border-l border-slate-800 ml-2 md:ml-4">
          {experience.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[33px] md:-left-[41px] top-1 h-4 w-4 md:h-5 md:w-5 rounded-full border-4 border-slate-900 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
              
              <div className="glass-card p-5 md:p-6 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex flex-col md:flex-row justify-between mb-2 gap-1">
                  <h3 className="text-lg md:text-xl font-bold text-white flex flex-wrap items-center gap-2">
                    {job.role} 
                    <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 whitespace-nowrap">
                      Full Time
                    </span>
                  </h3>
                  <span className="text-slate-400 font-mono text-sm">{job.date}</span>
                </div>
                <p className="text-cyan-400 font-medium text-sm mb-3 flex items-center gap-2">
                  <Briefcase size={14}/> {job.company}
                </p>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {job.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROJECTS SECTION */}
        <SectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 hidden md:block">
                <ExternalLink className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-cyan-400 text-sm font-mono mb-4">{project.tech}</p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 pt-10 pb-10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Vishnu Reddy. Crafted with Next.js & Tailwind.</p>
        </footer>

      </div>
    </main>
  );
}

// HELPER COMPONENTS
function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-4 mb-10 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white shrink-0">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
    </div>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
      {icon}
    </a>
  );
}
