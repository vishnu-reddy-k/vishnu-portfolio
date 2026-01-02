"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Mail, Code2, Server, Cloud, Terminal, 
  ArrowRight, ExternalLink, Database, X, 
  Film, Plane, MapPin, Camera 
} from "lucide-react";

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

// EXPERIENCE DATA
const experience = [
  {
    id: "exp-1",
    company: "Comcast",
    role: "Development Engineer 2 (Team Lead)",
    date: "Apr 2024 - Present",
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

// --- HOBBIES & INTERESTS DATA ---
const movies = [
  { 
    id: 1, 
    title: "The Maze Runner", 
    genre: "English • Sci-Fi Thriller", 
    desc: "A gripping dystopian saga. What keeps me glued to the screen is the intense story progression and the mystery of the plot that unfolds with every scene." 
  },
  { 
    id: 2, 
    title: "Queen (Mr. Queen)", 
    genre: "Korean • Historical Comedy", 
    desc: "A K-Drama masterpiece with next-level humor. I love how it balances the story with comedy that keeps me laughing throughout the entire series." 
  },
  { 
    id: 3, 
    title: "Suits", 
    genre: "English • Legal Drama", 
    desc: "A sharp and witty series. I enjoy how every episode brings a new complex case and a fresh twist, keeping the narrative engaging and dynamic." 
  },
  { 
    id: 4, 
    title: "Happy Days", 
    genre: "Telugu • Coming-of-Age", 
    desc: "A nostalgic journey through college life. It beautifully captures how deep friendships are formed and how we learn life's most important lessons through those bonds." 
  },
  { 
    id: 5, 
    title: "Home", 
    genre: "Malayalam • Family Drama", 
    desc: "A heartwarming and relatable tale. It touches on the subtle emotional gap between a caring father and a son caught up in modern life, reminding us to prioritize family." 
  },
  { 
    id: 6, 
    title: "Tourist Family", 
    genre: "Tamil • Dramedy", 
    desc: "A story of a family migrated from Sri Lanka. Despite the serious context, I love how the film uses humor to show their pure-hearted nature and how they effortlessly mingle with their neighbors." 
  },
];

const travelSpots = [
  { 
    id: 1, 
    place: "Manali, India", 
    desc: "Snow-capped peaks and serenity.", 
    // Replace with your actual image path e.g. "/travel/manali.jpg"
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    place: "Kerala Backwaters", 
    desc: "Nature's own therapy.", 
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    place: "Rishikesh", 
    desc: "Adventure meets spirituality.", 
    image: "https://images.unsplash.com/photo-1592652431792-71c19b062963?q=80&w=600&auto=format&fit=crop" 
  },
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
  
  // State for Interests Section (default to movies)
  const [interestTab, setInterestTab] = useState("movies"); 

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
                <SocialIcon icon={<Github size={20}/>} href="https://github.com/vishnu-reddy-k" />
                <SocialIcon icon={<Linkedin size={20}/>} href="https://www.linkedin.com/in/reddykv/" />
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

        {/* --- NEW SECTION: BEYOND THE CODE (Hobbies) --- */}
        <SectionHeader title="Beyond the Code" />
        <div className="mb-24">
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            I believe in keeping a healthy balance between work and life. 
            When I'm not deploying microservices, you can find me exploring new narratives in cinema or new locations on the map.
          </p>

          {/* Toggle Buttons */}
          <div className="flex gap-6 mb-8 border-b border-slate-800 pb-2">
            <button 
              onClick={() => setInterestTab("movies")}
              className={`flex items-center gap-2 pb-2 text-lg font-medium transition-colors relative ${interestTab === 'movies' ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Film size={20} /> Cinema
              {interestTab === 'movies' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400" />}
            </button>
            <button 
              onClick={() => setInterestTab("travel")}
              className={`flex items-center gap-2 pb-2 text-lg font-medium transition-colors relative ${interestTab === 'travel' ? 'text-green-400' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <Plane size={20} /> Travel
              {interestTab === 'travel' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400" />}
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {interestTab === "movies" ? (
                <motion.div 
                  key="movies"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="travel"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {travelSpots.map((spot) => (
                    <motion.div 
                      key={spot.id}
                      className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Placeholder Image */}
                      <img 
                        src={spot.image} 
                        alt={spot.place}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                      
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-1">
                          <MapPin size={16} /> {spot.place}
                        </div>
                        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          {spot.desc}
                        </p>
                      </div>
                      
                      {/* Hover Overlay Icon */}
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                         <Camera size={18} />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Click support for mobile
      className={`relative p-5 rounded-2xl border transition-all duration-300 ease-out cursor-default overflow-hidden ${
        isHovered 
          ? "bg-slate-800/90 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] z-10" 
          : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
      }`}
    >
      <motion.div layout="position" className="flex items-start gap-4">
        {/* Icon Container */}
        <div 
          className={`p-3 rounded-xl transition-colors duration-300 shrink-0 ${
            isHovered ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-500"
          }`}
        >
          <Film size={22} />
        </div>

        {/* Text Info */}
        <div className="flex-1 pt-1">
          <motion.h4 
            layout="position" 
            className={`font-bold text-lg leading-tight transition-colors duration-300 ${
              isHovered ? "text-white" : "text-slate-200"
            }`}
          >
            {movie.title}
          </motion.h4>
          <motion.span 
            layout="position" 
            className="text-xs font-mono text-cyan-500 block mt-1"
          >
            {movie.genre}
          </motion.span>
        </div>
      </motion.div>

      {/* Expandable Description */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
             <div className="pt-4 mt-4 border-t border-slate-700/50">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {movie.desc}
                </p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
