"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Server, Cloud, Terminal, ArrowRight, ExternalLink, Briefcase, Database, X } from "lucide-react";

// --- PERSONAL DATA ---
const personalInfo = {
  name: "Vishnu Reddy",
  role: "Backend Engineer (Java & Microservices)",
  about: "For me, engineering is about leaving the codebase better than I found it. Whether it's refactoring a monolith or designing a new microservice, I aim for clarity and resilience. Outside of work, I apply that same mindset to my life—constantly learning, exploring, and looking for new experiences.",
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

// EXPERIENCE DATA (Updated for Expandable Cards)
const experience = [
  {
    id: "exp-1",
    company: "Comcast",
    role: "Development Engineer 2 (Team Lead)",
    date: "Apr 2024 - Present",
    // NOTE: Ensure you have a 'comcast.png' in your public folder, or this will use the fallback icon
    logo: "/comcast.png", 
    shortDesc: "Leading the 'OrderReviewV2' initiative and refactoring monoliths.",
    desc: [
      "Leading the 'OrderReviewV2' initiative. Refactoring a monolithic BPMN workflow into a modular, flow-based microservice architecture.",
      "Reduced system complexity by 75% and improved fault tolerance.",
      "Mentoring junior developers and defining coding standards for the team.",
      "Tech Stack: Java 17, Spring Boot, AWS Step Functions, SAGA Pattern."
    ]
  },
  {
    id: "exp-2",
    company: "Comcast",
    role: "Development Engineer 1",
    date: "Jun 2022 - Mar 2024",
    logo: "/comcast.png",
    shortDesc: "Key developer for 'Critical Service Promotions' feature.",
    desc: [
      "Key developer for 'Critical Service Promotions' feature, driving 30% customer acquisition.",
      "Optimized high-volume database queries and resolved critical production incidents.",
      "Collaborated with product owners to define API contracts.",
      "Tech Stack: Java, Oracle SQL, Splunk, Kibana."
    ]
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
  const [selectedId, setSelectedId] = useState(null);

  return (
    <main className="min-h-screen relative bg-slate-950 selection:bg-cyan-500 selection:text-white overflow-x-hidden text-slate-200 font-sans">
      
      {/* BACKGROUND GLOW BLOBS */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        
        {/* HERO SECTION WITH PHOTO */}
        <motion.section 
          initial="initial" animate="animate" variants={stagger}
          className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] md:min-h-[80vh] mb-16 md:mb-0 gap-10"
        >
          {/* LEFT SIDE: TEXT */}
          <div className="flex-1 text-center md:text-left">
            <motion.div variants={fadeInUp} className="mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">Open to Work</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block mt-2">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light mb-8 max-w-2xl mx-auto md:mx-0">
              {personalInfo.role}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg mb-10 mx-auto md:mx-0">
              {personalInfo.about}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <a href={`mailto:${personalInfo.email}`} className="group relative w-full sm:w-auto px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-50 transition-all flex items-center justify-center gap-2">
                Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </a>
              <div className="flex gap-4">
                <SocialIcon icon={<Github size={20}/>} href="https://github.com/vishnukarnati" />
                <SocialIcon icon={<Linkedin size={20}/>} href="https://www.linkedin.com/in/vishnu-reddy/" />
                <SocialIcon icon={<Mail size={20}/>} href={`mailto:${personalInfo.email}`} />
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PHOTO */}
          <motion.div variants={fadeInUp} className="relative w-64 h-64 md:w-96 md:h-96 shrink-0">
            {/* The Glowing Blur Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            
            {/* The Image Container */}
            <div className="relative w-full h-full rounded-full border-4 border-slate-800/50 overflow-hidden shadow-2xl group">
              <img 
                src="/me.png" 
                alt="Vishnu Reddy" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

        {/* EXPERIENCE SECTION - EXPANDABLE CARDS */}
        <SectionHeader title="Professional Experience" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {experience.map((job) => (
            <motion.div
              layoutId={`card-${job.id}`}
              key={job.id}
              onClick={() => setSelectedId(job.id)}
              className="cursor-pointer relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/50 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden shrink-0">
                  <img 
                    src={job.logo} 
                    onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/3686/3686926.png"} 
                    alt={job.company} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                  <p className="text-slate-400 text-sm">{job.company}</p>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {job.shortDesc}
              </p>
              
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs font-mono text-slate-500">{job.date}</span>
                <span className="text-cyan-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPANDED MODAL OVERLAY */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              />
              <motion.div
                layoutId={`card-${selectedId}`}
                className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden relative z-10 shadow-2xl m-4"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
                >
                  <X size={20} />
                </button>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-white p-2 overflow-hidden shrink-0">
                      <img 
                         src={experience.find(j => j.id === selectedId)?.logo}
                         onError={(e) => e.target.src = "https://cdn-icons-png.flaticon.com/512/3686/3686926.png"} 
                         className="w-full h-full object-contain" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {experience.find(j => j.id === selectedId)?.role}
                      </h3>
                      <p className="text-cyan-400 font-medium text-lg">
                        {experience.find(j => j.id === selectedId)?.company}
                      </p>
                      <p className="text-slate-500 text-sm font-mono mt-1">
                         {experience.find(j => j.id === selectedId)?.date}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-slate-300 leading-relaxed text-sm md:text-base">
                     {experience.find(j => j.id === selectedId)?.desc.map((point, i) => (
                       <div key={i} className="flex gap-3 items-start">
                         <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                         <p>{point}</p>
                       </div>
                     ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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

        {/* TESTIMONIALS SECTION */}
        <SectionHeader title="What People Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Testimonial 1 */}
          <div className="glass-card p-8 rounded-2xl relative">
            <div className="absolute -top-4 -left-4 bg-cyan-500 text-slate-900 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transform rotate-180"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.485 14.682 17.773 14.682V17C16.918 17 16.49 17.375 16.49 18.125V21H14.017ZM8.017 21L8.017 18C8.017 16.896 8.321 16.067 8.929 15.513C9.537 14.959 10.485 14.682 11.773 14.682V17C10.918 17 10.49 17.375 10.49 18.125V21H8.017ZM16.017 13H18.017C18.017 12 18.017 11 18.017 9C18.017 7.5 17.684 6.375 17.017 5.625C16.35 4.875 15.184 4.5 13.517 4.5V7C14.35 7 14.892 7.146 15.142 7.438C15.392 7.729 15.517 8.25 15.517 9V13H12.017V13ZM10.017 13H12.017C12.017 12 12.017 11 12.017 9C12.017 7.5 11.684 6.375 11.017 5.625C10.35 4.875 9.184 4.5 7.517 4.5V7C8.35 7 8.892 7.146 9.142 7.438C9.392 7.729 9.517 8.25 9.517 9V13H6.017V13Z"></path></svg>
            </div>
            <p className="text-slate-300 italic mb-6 leading-relaxed">
              "The OrderReviewV2 refactor was a beast of a project. Vishnu didn't just port the code; he completely redesigned the flow using the SAGA pattern. He turned a fragile legacy workflow into something that just works. The 75% complexity reduction speaks for itself."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white">EM</div>
              <div>
                <h4 className="font-bold text-white text-sm">Engineering Manager</h4>
                <p className="text-cyan-400 text-xs">Comcast (Order Management)</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="glass-card p-8 rounded-2xl relative">
            <div className="absolute -top-4 -left-4 bg-cyan-500 text-slate-900 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transform rotate-180"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.485 14.682 17.773 14.682V17C16.918 17 16.49 17.375 16.49 18.125V21H14.017ZM8.017 21L8.017 18C8.017 16.896 8.321 16.067 8.929 15.513C9.537 14.959 10.485 14.682 11.773 14.682V17C10.918 17 10.49 17.375 10.49 18.125V21H8.017ZM16.017 13H18.017C18.017 12 18.017 11 18.017 9C18.017 7.5 17.684 6.375 17.017 5.625C16.35 4.875 15.184 4.5 13.517 4.5V7C14.35 7 14.892 7.146 15.142 7.438C15.392 7.729 15.517 8.25 15.517 9V13H12.017V13ZM10.017 13H12.017C12.017 12 12.017 11 12.017 9C12.017 7.5 11.684 6.375 11.017 5.625C10.35 4.875 9.184 4.5 7.517 4.5V7C8.35 7 8.892 7.146 9.142 7.438C9.392 7.729 9.517 8.25 9.517 9V13H6.017V13Z"></path></svg>
            </div>
            <p className="text-slate-300 italic mb-6 leading-relaxed">
              "We needed the Critical Service Promotions engine to handle a massive spike in traffic without latency. Vishnu's database optimizations were spot on. He is the guy you want on the team when performance matters."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white">TL</div>
              <div>
                <h4 className="font-bold text-white text-sm">Tech Lead</h4>
                <p className="text-cyan-400 text-xs">Comcast (Promotions Team)</p>
              </div>
            </div>
          </div>
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
