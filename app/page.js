"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Server, Database, Cloud, Code2, Terminal, ArrowRight, ExternalLink } from "lucide-react";

// --- DATA ---
const personalInfo = {
  name: "Vishnu Reddy",
  role: "Senior Backend Engineer",
  tagline: "Architecting Scalable Systems on the Cloud.",
  about: "I build the engines that power modern apps. Specializing in high-concurrency Microservices, Event-Driven Architecture, and transforming monolithic legacy systems into sleek, cloud-native solutions.",
  email: "vishnuvrkarnati@gmail.com",
};

const skills = [
  { name: "Java 17", level: "Expert" },
  { name: "Spring Boot", level: "Expert" },
  { name: "AWS Architecture", level: "Advanced" },
  { name: "Kafka & Event Streaming", level: "Advanced" },
  { name: "Microservices Patterns", level: "Advanced" },
  { name: "Docker & Kubernetes", level: "Intermediate" },
];

const projects = [
  {
    title: "Ordering System Refactor",
    tech: "Java • SAGA Pattern • AWS",
    desc: "Migrated a synchronous monolith to an event-driven architecture using the SAGA pattern, improving system resilience by 99.9%."
  },
  {
    title: "High-Scale Promo Engine",
    tech: "Spring Boot • Redis • MongoDB",
    desc: "Designed a promotion engine handling 50k requests/second during peak traffic with sub-20ms latency."
  }
];

// --- ANIMATIONS ---
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
    <main className="min-h-screen relative selection:bg-cyan-500 selection:text-white">
      
      {/* BACKGROUND GLOW BLOBS */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
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
            <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">Available for Hire</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl text-slate-400 font-light mb-8 max-w-2xl">
            {personalInfo.role}
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
            {personalInfo.about}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 items-center">
            <a href={`mailto:${personalInfo.email}`} className="group relative px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-cyan-50 transition-all flex items-center gap-2">
              Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <div className="flex gap-4">
              <SocialIcon icon={<Github size={20}/>} />
              <SocialIcon icon={<Linkedin size={20}/>} />
              <SocialIcon icon={<Mail size={20}/>} />
            </div>
          </motion.div>
        </motion.section>

        {/* SKILLS GRID */}
        <SectionHeader title="Tech Stack" />
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-32"
        >
          {skills.map((skill, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl flex items-center justify-between group cursor-default transition-all duration-300 hover:-translate-y-1">
              <span className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">{skill.name}</span>
              <div className="h-1.5 w-12 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 w-3/4"></div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* PROJECTS */}
        <SectionHeader title="Selected Works" />
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-cyan-400 text-sm font-mono mb-4">{project.tech}</p>
              <p className="text-slate-400 leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="border-t border-slate-800 pt-10 text-center text-slate-500">
          <p>© 2026 Vishnu Reddy. Crafted with Next.js & Tailwind.</p>
        </footer>

      </div>
    </main>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></div>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <button className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
      {icon}
    </button>
  );
}
