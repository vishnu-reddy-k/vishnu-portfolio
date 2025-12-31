"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Server, Cloud, Terminal, ArrowRight, ExternalLink, Briefcase } from "lucide-react";
import { CardStack } from "../components/ui/card-stack";

// --- VISHNU'S DATA ---
const personalInfo = {
  name: "Vishnu Reddy",
  role: "Backend Engineer (Java & Microservices)",
  about: "I architect scalable distributed systems. With 4 years of experience at Comcast, I specialize in transforming legacy monoliths into efficient, event-driven microservices using Java, Spring Boot, and AWS.",
  email: "vishnuvrkarnati@gmail.com",
};

// SKILL CARDS DATA
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
    name: "System Design",
    designation: "Advanced",
    icon: <Cloud className="text-yellow-400" size={24} />,
    content: "Expertise in Distributed Transactions (SAGA Pattern), Event-Driven Architecture, and resilience patterns (Circuit Breaker).",
  },
  {
    id: 4,
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
    // FORCE DARK BACKGROUND HERE
    <main className="min-h-screen relative bg-slate-950 selection:bg-cyan-500 selection:text-white overflow-hidden text-slate-200">
      
      {/* BACKGROUND GLOW BLOBS */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="initial" animate="animate" variants={stagger}
          className="flex flex-col justify-center min-h-[80vh] text-center md:text-left"
        >
          <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">Open to Work</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl text-slate-300 font-light mb-8 max-w-2xl">
            {personalInfo.role}
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
            {personalInfo.about}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
            <a href={`mailto:${personalInfo.email}`} className="group relative px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition-all flex items-center gap-2">
              Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <div className="flex gap-4">
              <SocialIcon icon={<Github size={20}/>} href="https://github.com" />
              <SocialIcon icon={<Linkedin size={20}/>} href="https://www.linkedin.com/in/reddykv/" />
              <SocialIcon icon={<Mail size={20}/>} href={`mailto:${personalInfo.email}`} />
            </div>
          </motion.div>
        </motion.section>

        {/* SKILLS SECTION (DRAGGABLE CARDS) */}
        <SectionHeader title="Technical Arsenal" />
        <div className="h-[25rem] flex items-center justify-center w-full mb-24">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24 w-full">
            <div className="max-w-md text-center md:text-left flex-1">
               <h3 className="text-2xl font-bold text-white mb-4">
                 My Core <span className="text-cyan-400">Competencies</span>
               </h3>
               <p className="text-slate-400 leading-relaxed mb-6">
                 I don't just use frameworks; I understand their internals. 
                 Swipe through the cards to see my expertise in Java, Cloud, and System Design.
               </p>
               <div className="flex items-center gap-2 text-sm text-slate-500 justify-center md:justify-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  Cards auto-rotate or drag to swipe
               </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-start">
                <CardStack items={skillCards} />
            </div>
          </div>
        </div>

        {/* EXPERIENCE SECTION */}
        <SectionHeader title="Professional Experience" />
        <div className="space-y-8 mb-32 relative pl-8 border-l border-slate-800 ml-4">
          {experience.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
              <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {job.role} <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Full Time</span>
                  </h3>
                  <span className="text-slate-400 font-mono text-sm">{job.date}</span>
                </div>
                <p className="text-cyan-400 font-medium text-sm mb-3 flex items-center gap-2">
                  <Briefcase size={14}/> {job.company}
                </p>
                <p className="text-slate-300 leading-relaxed">{job.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROJECTS SECTION */}
        <SectionHeader title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                <ExternalLink className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-cyan-400 text-sm font-mono mb-4">{project.tech}</p>
              <p className="text-slate-300 leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 pt-10 text-center text-slate-500">
          <p>© {new Date().getFullYear()} Vishnu Reddy. Crafted with Next.js & Tailwind.</p>
        </footer>

      </div>
    </main>
  );
}

// HELPER COMPONENTS
function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
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
