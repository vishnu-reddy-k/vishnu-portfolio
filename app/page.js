"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Server, Database, Cloud, Code2, Terminal } from "lucide-react";
import Image from "next/image";

// --- YOUR DATA ---
const personalInfo = {
  name: "Vishnu Reddy",
  role: "Backend Engineer (Java & Microservices)",
  about: "I architect scalable distributed systems. With 4 years of experience at Comcast, I specialize in transforming legacy monoliths into efficient, event-driven microservices using Java, Spring Boot, and AWS.",
  location: "Chennai, India",
  email: "vishnuvrkarnati@gmail.com",
};

const skills = [
  { name: "Java 17", icon: <Code2 size={16} /> },
  { name: "Spring Boot", icon: <Server size={16} /> },
  { name: "Microservices", icon: <Database size={16} /> },
  { name: "AWS Lambda", icon: <Cloud size={16} /> },
  { name: "Kafka", icon: <Terminal size={16} /> },
  { name: "Docker & K8s", icon: <Server size={16} /> },
  { name: "System Design", icon: <Database size={16} /> },
  { name: "SAGA Pattern", icon: <Code2 size={16} /> },
];

const experience = [
  {
    company: "Comcast",
    role: "Development Engineer 2",
    date: "Apr 2024 - Present",
    desc: "Acting as Team Lead. Redesigned legacy 'orderReviewV2' workflow using the SAGA pattern, reducing system complexity by 75% and improving fault tolerance."
  },
  {
    company: "Comcast",
    role: "Development Engineer 1",
    date: "Jun 2022 - Mar 2024",
    desc: "Developed 'Critical Service Promotions' feature driving 20-30% customer acquisition. Optimized database queries for high-volume traffic."
  }
];

const projects = [
  {
    title: "Ordering Microservices System",
    tags: ["Java", "Spring Boot", "REST API"],
    desc: "Designed a high-throughput ordering system handling inter-service communication. Implemented resilience patterns using Resilience4j."
  },
  {
    title: "Event-Driven Inventory",
    tags: ["Kafka", "AWS SQS", "MongoDB"],
    desc: "Built an asynchronous inventory management service that processes 10k+ events/min with zero data loss using Dead Letter Queues."
  }
];

// --- COMPONENTS ---

// Animation Config
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      
      {/* HEADER SECTION */}
      <motion.section 
        initial="initial" animate="animate" variants={staggerContainer}
        className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20"
      >
        <div className="flex-1 space-y-6">
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
            Open to Work
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            {personalInfo.name}
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 font-medium">
            {personalInfo.role}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 leading-relaxed max-w-lg">
            {personalInfo.about}
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
            <SocialBtn icon={<Mail size={20} />} href={`mailto:${personalInfo.email}`} />
            <SocialBtn icon={<Github size={20} />} href="https://github.com" />
            <SocialBtn icon={<Linkedin size={20} />} href="https://linkedin.com" />
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <img 
            src="https://ui-avatars.com/api/?name=Vishnu+Reddy&background=2563eb&color=fff&size=256" 
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl relative z-10"
          />
        </motion.div>
      </motion.section>

      {/* SKILLS SECTION */}
      <Section title="Technical Arsenal">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05, backgroundColor: "#e0f2fe" }}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-700 font-medium cursor-default transition-colors"
            >
              {skill.icon}
              {skill.name}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section title="Experience">
        <div className="space-y-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
          {experience.map((job, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-md"></span>
              <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
              <div className="flex justify-between items-center text-sm text-slate-500 mb-2">
                <span>{job.company}</span>
                <span>{job.date}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 h-16">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-20 pt-10 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Vishnu Reddy. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}

// Helper Components
function Section({ title, children }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        {title}
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </h2>
      {children}
    </motion.section>
  );
}

function SocialBtn({ icon, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm"
    >
      {icon}
    </a>
  );
}
