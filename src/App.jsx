import React, { useEffect, useMemo, useState } from "react";
// All necessary icons imported
import { Home, Layers, Code, Sun, Moon, Menu, X, Mail, Download, Github, Linkedin, GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import {
  FaNodeJs,
  FaReact,
  FaJava,
  FaServer,
  FaDatabase,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress, SiCplusplus } from "react-icons/si";

// Assuming the image is located here relative to this component file
import auroraBackground from '../public/images/aurora2.jpg'; 

/* Project Data (unchanged) */
const projects = [
  {
    id: 1,
    title: "EduTrack — Student Performance Tracker",
    description:
      "React + Firebase app for teachers to manage student records, marks entry and reports with realtime auth.",
    tags: ["React", "Firebase", "Tailwind"],
    repo: "https://github.com/rehan5723/EduTrack",
    demo: "https://tracker-67d81.web.app",
  },
  {
    id: 2,
    title: "Excellytics — Excel Analytics Platform",
    description:
      "MERN app to upload and analyse Excel files and generate interactive charts and dashboards.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    repo: "https://github.com/rehan5723/Excellytics",
    demo: "https://excelanalytics-seven.vercel.app",
  },
  {
    id: 3,
    title: "Resume Builder — Resume Creator (Frontend + Firebase)",
    description:
      "Frontend-first React app that uses Firebase for auth and storing user resume data. Users can create, preview and download resumes. Live demo available and repository provided.",
    tags: ["React", "Firebase", "Frontend"],
    repo: "https://github.com/rehan5723/resume-builder",
    demo: "https://resume-builder-eta-tan.vercel.app/login",
  },
];

/* Education Data for Timeline (unchanged) */
const educationData = [
  {
      title: "BE — Electronics & Telecommunication",
      institution: "Pune Institute of Computer Technology (PICT), Pune",
      duration: "Expected 2027",
      location: "Pune, India",
      details: "CGPA: 9.44 (4th Semester)",
      color: "text-indigo-500", // Tailwind color class for the dot
  },
  {
      title: "XII (CBSE) - Science",
      institution: "Sinhgad Spring Dale High School",
      duration: "2021 — 2023",
      location: "Pune, India",
      details: "Percentage: 92.40%",
      color: "text-green-500",
  },
  {
      title: "X (CBSE)",
      institution: "Sinhgad Spring Dale School",
      duration: "Completed 2021",
      location: "Pune, India",
      details: "Percentage: 95.00%",
      color: "text-yellow-500",
  },
];

/**
 * SkillsMarquee (inner component) — made more visible & faster
 *
 * Props:
 *  - speed: animation duration in seconds (smaller = faster). Default 18s (faster)
 *  - items: optional custom items
 */
function SkillsMarquee({ speed = 18, items = null }) {
  const [paused, setPaused] = useState(false);

  const defaultItems = useMemo(
    () => [
      { label: "Java", Icon: FaJava },
      { label: "Node.js", Icon: FaNodeJs },
      { label: "Express.js", Icon: SiExpress },
      { label: "MongoDB", Icon: SiMongodb },
      { label: "SQL", Icon: FaDatabase },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "Python", Icon: FaPython },
      { label: "React.js", Icon: FaReact },
      { label: "C++", Icon: SiCplusplus },
      { label: "Server / APIs", Icon: FaServer },
    ],
    []
  );

  const list = items ?? defaultItems;
  // Repeat items 3x so track fills wider viewports and avoids gaps
  const tripleList = [...list, ...list, ...list];

  const trackStyle = {
    animation: `marqueeScroll ${speed}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
    width: '300vw',
    minWidth: '300%',
    willChange: 'transform',
  };

  return (
    <section aria-hidden="false" className="py-6 md:py-8 bg-transparent overflow-hidden">
      <div
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        aria-label="Scrolling list of technical skills"
      >
        <div
          className="skills-marquee-track flex items-center gap-8 px-6 md:px-10 whitespace-nowrap"
          style={trackStyle}
        >
          {tripleList.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <span
                key={`${item.label}-${idx}`}
                className="chip-float inline-flex items-center gap-3 select-none px-6 py-4 md:px-7 md:py-5 bg-neutral-900/70 backdrop-blur-sm border border-neutral-700/70 rounded-full text-slate-100 text-sm md:text-base shadow-sm"
                style={{ animation: `chipFloat ${4 + (idx % 3)}s ease-in-out infinite` }}
                aria-hidden={idx >= list.length ? "true" : "false"}
                role="presentation"
              >
                <Icon className="text-lg md:text-2xl" aria-hidden="true" />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden text-sm">{item.label}</span>
              </span>
            );
          })}
        </div>

        {/* subtle fades to help visibility */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0))" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24" style={{ background: "linear-gradient(270deg, rgba(0,0,0,0.85), rgba(0,0,0,0))" }} />
      </div>

      {/* Small inline styles for marquee keyframes — include once per component */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.3333%); } /* shift by 1/3 (because list repeated 3x) */
        }

        /* subtle floating for chips */
        @keyframes chipFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}


// --------------------------------------------------------
// Custom Neon Cursor Component 
// (unchanged from your last update — kept here for completeness)
// --------------------------------------------------------
const NeonCursor = ({ x, y, size = 8, glow = 8 }) => {
    // Render the cursor only if coordinates are valid (i.e., mouse has moved)
    if (x === null || y === null) return null;

    return (
        <div 
            style={{ 
                // Set position based on mouse coordinates, offset by half the size
                transform: `translate3d(calc(${x}px - ${size/2}px), calc(${y}px - ${size/2}px), 0)`,
                // Fixed position to follow scrolling
                position: 'fixed',
                pointerEvents: 'none', // Essential: ensures clicks pass through the cursor
                zIndex: 9999,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: '#ffffff', // Small white dot center
                // Stronger neon glow (layered)
                boxShadow: `
                  0 0 ${glow * 0.8}px rgba(196,181,253,0.95),
                  0 0 ${glow * 1.6}px rgba(167,139,250,0.9),
                  0 0 ${glow * 3}px rgba(147,51,234,0.75),
                  0 0 ${glow * 6}px rgba(99,102,241,0.55)
                `,
                transition: 'transform 0.04s ease-out, width 0.15s ease-out, height 0.15s ease-out, box-shadow 0.22s ease-out',
                willChange: 'transform, width, height, box-shadow'
            }}
            aria-hidden="true"
        />
    );
};

export default function Portfolio({ bgImage = auroraBackground }) {
    // 1. ADD MOUSE POSITION STATE
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    
    // Cursor size & glow state
    const [cursorSize, setCursorSize] = useState(8);
    const [cursorGlow, setCursorGlow] = useState(8);

    // 2. ADD useEffect to LISTEN FOR MOUSE MOVEMENT
    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        // Add event listener to the entire window/document
        window.addEventListener("mousemove", updateMousePosition);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    // Grow/shrink on hover of .hover-target elements
    useEffect(() => {
      const grow = () => {
        setCursorSize(15);   // visible big size
        setCursorGlow(15);   // bigger glow
      };
      const shrink = () => {
        setCursorSize(8);
        setCursorGlow(8);
      };

      // select elements with hover-target class
      const attachTargets = () => {
        const targets = Array.from(document.querySelectorAll('.hover-target'));
        targets.forEach(el => {
          el.addEventListener('mouseenter', grow);
          el.addEventListener('mouseleave', shrink);
          // also support touch interactions
          el.addEventListener('touchstart', grow);
          el.addEventListener('touchend', shrink);
        });
        return targets;
      };

      const targets = attachTargets();

      // If your UI mounts things later (dynamic lists), you can re-run attachTargets manually or use MutationObserver.
      return () => {
        targets.forEach(el => {
          el.removeEventListener('mouseenter', grow);
          el.removeEventListener('mouseleave', shrink);
          el.removeEventListener('touchstart', grow);
          el.removeEventListener('touchend', shrink);
        });
      };
    }, []); // run once at mount

    // ... (rest of the state and logic remains the same)
    const [isDark, setIsDark] = useState(() => {
        try {
            return (
                localStorage.theme === "dark" ||
                (!localStorage.theme &&
                    window.matchMedia &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            );
        } catch (e) {
            return true;
        }
    });

    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        // 3. APPLY CURSOR HIDING CLASS to root
        root.classList.add('hide-cursor');
        
        if (isDark) {
            root.classList.add("dark");
            try { localStorage.theme = "dark"; } catch (e) {}
        } else {
            root.classList.remove("dark");
            try { localStorage.theme = "light"; } catch (e) {}
        }

        // Cleanup: remove the cursor hiding class when component unmounts/updates
        return () => {
             root.classList.remove('hide-cursor');
        };
    }, [isDark]);


    useEffect(() => {
        function onResize() {
            if (window.innerWidth > 768) setNavOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    function scrollToId(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setNavOpen(false);
    }

    return (
        <div className="relative min-h-screen w-full text-white">
            {/* RENDER CUSTOM CURSOR */}
            <NeonCursor x={mousePosition.x} y={mousePosition.y} size={cursorSize} glow={cursorGlow} />

            {/* Background image and overlay - Includes Aurora Background */}
            <div
                className="fixed inset-0 -z-30 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    filter: "brightness(0.9) contrast(1.1)",
                }}
                aria-hidden="true"
            />
            {/* Increased overlay opacity for better text readability */}
            <div className="fixed inset-0 -z-20" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} aria-hidden="true" />

            

            {/* Header / Nav (unchanged) */}
            <header className="fixed w-full z-40 backdrop-blur-xl bg-black/30 border-b border-white/10">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
                    <div onClick={() => scrollToId("home")} className="flex items-center gap-3 cursor-pointer hover-target">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold tracking-tight">
                            RM
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-slate-200">Rehan Maniyar</div>
                            <div className="text-xs text-slate-400 hidden sm:block">Full-stack Developer · ENTC (Pre-Final Year)</div>
                        </div>

                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <button onClick={() => scrollToId("home")} className="text-slate-300 hover:text-indigo-400 flex items-center gap-2 hover-target"><Home size={14} />Home</button>
                        <button onClick={() => scrollToId("about")} className="text-slate-300 hover:text-indigo-400 flex items-center gap-2 hover-target"><Layers size={14} />About</button>
                        <button onClick={() => scrollToId("projects")} className="text-slate-300 hover:text-indigo-400 flex items-center gap-2 hover-target"><Code size={14} />Projects</button>
                        <button onClick={() => scrollToId("contact")} className="text-slate-300 hover:text-indigo-400 flex items-center gap-2 hover-target"><Mail size={14} />Contact</button>

                        <a href="https://github.com/rehan5723" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-transparent hover:border-indigo-500/30 text-slate-300 hover-target">
                            <Github size={16} /> GitHub
                        </a>
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setNavOpen((s) => !s)} className="p-2 rounded-md text-slate-200 hover-target">
                            {navOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {navOpen && (
                    <div className="md:hidden border-t border-white/10 bg-black/80 px-6 py-4">
                        <div className="flex flex-col gap-3 max-w-7xl mx-auto">
                            <button onClick={() => scrollToId("home")} className="text-left text-slate-200 hover-target">Home</button>
                            <button onClick={() => scrollToId("about")} className="text-left text-slate-300 hover-target">About</button>
                            <button onClick={() => scrollToId("projects")} className="text-left text-slate-300 hover-target">Projects</button>
                            <button onClick={() => scrollToId("contact")} className="text-left text-slate-300 hover-target">Contact</button>
                            <a href="https://github.com/rehan5723" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover-target"><Github size={16} /> GitHub</a>
                        </div>
                    </div>
                )}
            </header>

            {/* Main content - Includes top and bottom padding */}
            <main className="pt-28 pb-16 relative z-10">
                {/* HERO */}
                <section id="home" className="min-h-[65vh] lg:min-h-[80vh] flex items-center">
                    <div className="max-w-7xl mx-auto px-6 w-full relative">
                        {/* spotlight (absolute behind heading) */}
                        <div className="absolute left-1/2 top-24 -translate-x-1/2 -z-10 pointer-events-none">
                            <div style={{
                                width: 420, height: 220,
                                background: "radial-gradient(ellipse at center, rgba(138,115,255,0.18) 0%, rgba(0,0,0,0) 55%)",
                                filter: "blur(40px)"
                            }} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-xs font-semibold tracking-wide uppercase mb-6">
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                                    Available for work
                                </div>

                                <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
                                    <span className="text-gradient block">Rehan Maniyar</span>
                                    <span className="text-gradient-accent block">Full-Stack Developer · MERN · Java · Firebase</span>
                                </motion.h1>

                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-6">
                                    I build modern, scalable web applications using React, Node.js, Express, MongoDB & Firebase. I love turning ideas into polished products — open to internships & freelance work.
                                </motion.p>

                                <div className="flex flex-wrap gap-4">
                                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToId("projects"); }} className="inline-flex items-center gap-2 border border-neutral-700 px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-colors hover-target">
                                        View Projects
                                    </a>
                                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }} className="inline-flex items-center gap-2 border border-neutral-700 px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-colors hover-target">
                                        <Mail size={16} /> Contact
                                    </a>
                                </div>

                                <div className="mt-8 flex gap-6 text-slate-400">
                                    <a href="https://github.com/rehan5723" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors hover-target"><FaGithub size={20} /></a>
                                    <a href="https://www.linkedin.com/in/rehan-maniyar" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors hover-target"><FaLinkedin size={20} /></a>
                                    <a href="mailto:rehanmaniyar0205@gmail.com" className="hover:text-green-400 transition-colors hover-target"><FaEnvelope size={20} /></a>
                                </div>
                            </div>


                            <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4 hover-target">
                                <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm">
                                    <h3 className="text-sm text-slate-300">Featured Project</h3>
                                    <h4 className="mt-2 font-semibold">Excellytics — Excel Analytics Platform</h4>
                                    <p className="mt-2 text-sm text-slate-300/90">Upload and analyze Excel files and generate interactive visual dashboards.</p>
                                    <div className="mt-4 flex gap-3 items-center">
                                        <a href="https://github.com/rehan5723/Excellytics" target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2 text-slate-300/90 hover:text-indigo-400 hover-target"><Github size={14} /> Code</a>
                                        <a href="https://excelanalytics-seven.vercel.app" target="_blank" rel="noreferrer" className="text-sm inline-flex items-center gap-2 text-slate-300/90 hover:text-indigo-400 hover-target"><Download size={14} /> Demo</a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* hero marquee */}
                        <div className="mt-8">
                            {/* NOTE: speed prop here lowered so marquee is faster & more visible */}
                            <SkillsMarquee speed={14} />
                        </div>
                    </div>
                </section>

                {/* ABOUT - Education Timeline Integrated */}
                <section id="about" className="w-full py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-3">
                                <h2 className="text-3xl font-bold border-b border-indigo-500/30 pb-2">About Me</h2>
                                <p className="mt-4 text-slate-300/90 max-w-2xl text-lg">
                                    I am <strong className="text-white">Rehan Maniyar</strong>, a prefinal-year Electronics & Telecommunication student studying in Pune Institute of Computer Technology preparing for a career as a Software Developer.
                                    I focus on building maintainable, production-ready full-stack apps using the MERN stack, Java, and Firebase for scalable data solutions.
                                </p>

                                <div className="mt-10">
                                    <h3 className="font-semibold text-2xl mb-6">Education Timeline</h3>

                                    <div className="space-y-8 relative before:absolute before:inset-y-0 before:w-0.5 before:bg-neutral-800 before:left-2 sm:before:left-6">
                                        {educationData.map((edu, index) => (
                                            <div key={index} className="relative pl-8 sm:pl-10 group hover-target">
                                                <div className={`absolute w-4 h-4 rounded-full mt-1.5 -left-2 sm:-left-6 ${edu.color} bg-current ring-8 ring-neutral-900/50 group-hover:ring-indigo-500/50 transition-all shadow-lg flex items-center justify-center`}>
                                                    <GraduationCap size={10} className="text-black" />
                                                </div>

                                                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-indigo-600 transition-colors">
                                                    <div className="text-lg font-semibold text-white">{edu.title}</div>
                                                    <div className="mt-1 text-sm font-medium text-slate-300">{edu.institution}</div>

                                                    <div className="mt-2 text-xs text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
                                                        <span className="flex items-center gap-1"><Calendar size={12} /> {edu.duration}</span>
                                                        <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                                                        <span>{edu.details}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* PROJECTS - Enhanced Projects Section Integrated */}
                <section id="projects" className="w-full py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold border-b border-indigo-500/30 pb-2">Selected Projects ({projects.length})</h2>
                        <p className="mt-2 text-lg text-slate-300/90">A handful of projects showing different parts of my stack. Click a card for details.</p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((p) => (
                                <motion.article
                                    key={p.id}
                                    whileHover={{ y: -6 }}
                                    className="hover-target p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl transition-transform duration-300"
                                >
                                    <h3 className="font-semibold text-white text-xl">{p.title}</h3>
                                    <p className="mt-2 text-slate-300/90">{p.description}</p>
                                    <div className="mt-3 flex gap-2 flex-wrap">
                                        {p.tags.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 bg-indigo-900/40 rounded-full border border-indigo-700/50 text-indigo-300/90">{t}</span>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex items-center gap-3">
                                        <a href={p.repo} className="text-sm inline-flex items-center gap-2 text-slate-300/90 hover:text-indigo-400 hover-target" target="_blank" rel="noreferrer">
                                            <Github size={14} /> Code
                                        </a>
                                        <a href={p.demo} className="text-sm inline-flex items-center gap-2 text-slate-300/90 hover:text-indigo-400 hover-target" target="_blank" rel="noreferrer">
                                            Demo
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT - NEW ENHANCED SECTION */}
                <section id="contact" className="w-full py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                            className="hover-target p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-sm"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                                <div>
                                    <h2 className="text-3xl font-bold">Let's get in touch</h2>

                                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="mailto:rehanmaniyar0205@gmail.com"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-black font-medium shadow hover:bg-indigo-700 transition-colors hover-target"
                                        >
                                            <Mail size={18} /> Email Me
                                        </a>

                                        <a
                                            href="https://drive.google.com/file/d/1pIFFevHC-ZyVE0kwTDO1_RNC35ee2-ch/view?usp=drive_link"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 inline-flex items-center justify-center px-4 py-3 rounded-lg border border-neutral-800 text-slate-300/90 font-medium hover:bg-neutral-800/50 transition-colors hover-target"
                                        >
                                            <Download size={18} className="mr-2" /> View Resume
                                        </a>
                                    </div>

                                    <div className="mt-6 flex items-center gap-6">
                                        <a href="https://github.com/rehan5723" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300/90 hover:text-indigo-400 transition-colors hover-target">
                                            <Github size={18} /> GitHub
                                        </a>
                                        <a href="https://www.linkedin.com/in/rehan-maniyar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300/90 hover:text-indigo-400 transition-colors hover-target">
                                            <Linkedin size={18} /> LinkedIn
                                        </a>
                                    </div>
                                </div>

                                {/* Optional contact details / mini-card on the right to match other 'card' layouts */}
                                <aside className="p-4 rounded-lg bg-neutral-800 border border-neutral-800/60">
                                    <div className="text-sm font-semibold text-slate-200">Contact Info</div>
                                    <div className="mt-3 text-sm text-slate-300/90 space-y-2">
                                        <div><span className="font-medium text-slate-200">Email:</span> <a className="text-indigo-300" href="mailto:rehanmaniyar0205@gmail.com">rehanmaniyar0205@gmail.com</a></div>
                                        <div><span className="font-medium text-slate-200">Location:</span> Pune, India</div>
                                        <div><span className="font-medium text-slate-200">Availability:</span> Open to internships & freelance</div>
                                    </div>
                                </aside>
                            </div>
                        </motion.div>

                        <footer className="mt-10 text-sm text-slate-300/70 flex items-center justify-between">
                            <div>© {new Date().getFullYear()} Rehan Maniyar — Built with React + Tailwind</div>
                        </footer>
                    </div>
                </section>
            </main>
        </div>
    );
}
