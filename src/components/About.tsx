import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Award,
  ArrowRight,
  ShieldCheck,
  Users,
  Zap,
  UserCheck,
  Code,
  Sparkles,
  Binary,
} from "lucide-react";
import { eligibilityCards } from "../data";

interface AboutProps {
  onRegisterClick: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      // No staggering so all cards animate together when the section becomes visible
      staggerChildren: 0,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.45,
    },
  },
};

export default function About({ onRegisterClick }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState<
    "hidden" | "visible" | "exit"
  >("hidden");
  const [hasCountAnimated, setHasCountAnimated] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);

  const [membersCount, setMembersCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [mentorsCount, setMentorsCount] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const eventPhotos = [
    "/assets/images/photo_1.jpeg",
    "/assets/images/photo_2.jpeg",
    "/assets/images/photo_3.jpeg",
    "/assets/images/photo_4.jpeg",
    "/assets/images/photo_5.jpeg",
    "/assets/images/photo_6.jpeg",
    "/assets/images/photo_7.jpeg",
    "/assets/images/photo_8.jpeg",
    "/assets/images/photo_9.jpeg",
    "/assets/images/photo_10.jpeg",
    "/assets/images/photo_11.jpeg",
    "/assets/images/photo_12.jpeg",
  ];

  // Observe the section and toggle visibility; do not disconnect so we can
  // animate both on enter and on leave (reveal-and-dismiss behavior).
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Drive the motion animation state from section visibility
  useEffect(() => {
    setAnimationState(sectionVisible ? "visible" : "exit");
  }, [sectionVisible]);

  useEffect(() => {
    if (!sectionVisible || hasCountAnimated) return;

    const animateValue = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      duration = 1400,
    ) => {
      const start = 0;
      const interval = 30;
      const steps = Math.ceil(duration / interval);
      const increment = Math.max(1, Math.ceil((target - start) / steps));
      let current = start;

      const timer = window.setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          window.clearInterval(timer);
          return;
        }
        setter(current);
      }, interval);

      return () => window.clearInterval(timer);
    };

    const clearMembers = animateValue(1200, setMembersCount);
    const clearEvents = animateValue(500, setEventsCount);
    const clearMentors = animateValue(70, setMentorsCount);
    setHasCountAnimated(true);

    return () => {
      clearMembers();
      clearEvents();
      clearMentors();
    };
  }, [sectionVisible, hasCountAnimated]);

  useEffect(() => {
    if (eventPhotos.length < 2) return;

    const slideDurationMs = 4000;
    const slideTimer = window.setInterval(() => {
      setPhotoIndex((current) => (current + 1) % eventPhotos.length);
    }, slideDurationMs);

    return () => window.clearInterval(slideTimer);
  }, [eventPhotos.length]);

  const handleAnimationComplete = (definition: any) => {
    if (definition === "exit") {
      setAnimationState("hidden");
    }
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-20 bg-black border-t border-white/5 relative overflow-hidden"
    >
      {/* Background glow of vivid neon pink */}
      <div className="absolute right-0 top-1/4 w-[450px] h-[450px] bg-brand-pink/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-[350px] h-[350px] bg-brand-pink/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with nice fadeInUp animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/10 border border-brand-pink/30 rounded-full mb-3">
            <span className="h-1.5 w-1.5 bg-brand-pink rounded-full animate-ping"></span>
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-extrabold font-mono">
              National Initiative
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
            Where{" "}
            <span className="text-gradient-pink font-bold">
              Women Innovators
            </span>{" "}
            Code the Future.
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl">
            SheBuilds Chennai is a prestigious initiative providing an ecosystem
            for women developers to collaborate, learn, and push the limits of
            real-world technology.
          </p>
        </motion.div>

        {/* Bento Grid Row 1: SheBuilds Community Definition & 3D Interactive Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Bento Item 1: Community overview (Spans 7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 liquid-glass rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-brand-pink/30 transition-all duration-300 group neon-glow-pink border border-white/5"
          >
            <div>
              <div></div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                About SheBuilds
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                We are a community-driven organization bridging the gap between
                talent and real industrial opportunities. By offering advanced
                code sandboxes, continuous webinars, hackathons, and global
                mentorship chains, we support women software engineers,
                designers, and project managers in achieving real career impact.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-6">
              <div className="group">
                <span className="block text-2xl md:text-3xl font-extrabold tracking-tight transition-transform duration-300 transform group-hover:scale-105 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-600">
                  12000+
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">
                  Members
                </span>
              </div>
              <div className="group">
                <span className="block text-2xl md:text-3xl font-extrabold tracking-tight transition-transform duration-300 transform group-hover:scale-105 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-600">
                  500+
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">
                  Events
                </span>
              </div>
              <div className="group">
                <span className="block text-2xl md:text-3xl font-extrabold tracking-tight transition-transform duration-300 transform group-hover:scale-105 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-600">
                  70+
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">
                  Mentors
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 2: Spectacular 3D Women-In-Tech Asset Card (Spans 5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-brand-pink/30 hover:border-brand-pink/60 transition-all duration-500 bg-black/60 shadow-xl flex flex-col justify-between"
          >
            {/* Absolute element overlays */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[9px] uppercase tracking-widest font-extrabold font-mono text-white bg-black/80 backdrop-blur-md border border-brand-pink/40 rounded-full px-3 py-1.5 flex items-center gap-1.5 animate-pulse">
                <span className="h-1.5 w-1.5 bg-brand-pink rounded-full" />
                Empowering Her
              </span>
            </div>

            {/* Glowing ring borders behind the picture */}
            <div className="absolute -inset-1 bg-gradient-to-t from-brand-pink to-transparent opacity-10 blur-xl group-hover:opacity-30 transition-all duration-500" />

            {/* Shattering the Glass Ceiling image slideshow */}
            <div className="relative w-full h-[280px] overflow-hidden">
              {eventPhotos.map((photo, index) => (
                <img
                  key={`${photo}-${index}`}
                  src={photo}
                  alt={`SheBuilds Chennai event ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === photoIndex ? "opacity-100" : "opacity-0"}`}
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Caption Container */}
            <div className="p-6 bg-black/40 backdrop-blur-md border-t border-white/5 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Binary className="h-4.5 w-4.5 text-brand-pink animate-pulse" />
                  Our Past Events
                </h4>
                <p className="text-xs text-white/60 leading-relaxed mt-2">
                  A glimpse into our vibrant community — highlights from past
                  editions, workshops, and meetups.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-20">
          {/* Title Sponsor */}

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <span className="text-gradient-pink">Hackathon Partner</span>
            </h2>
          </div>

          {/* Symmetrical Layout */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* CCCL Logo */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
      lg:col-span-5
      liquid-glass
      rounded-3xl
      border
      border-brand-pink/20
      p-8

      flex
      items-center
      justify-center

      min-h-[450px]
      "
            >
              <a href="https://cccl.ai/" target="_blank" rel="noreferrer">
                <img
                  src="/assets/images/cccl-social-512.png"
                  alt="CCCL"
                  className="
          w-72
          md:w-80
          object-contain
          hover:scale-105
          transition-all
          duration-300
          "
                />
              </a>
            </motion.div>

            {/* About CCCL */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
      lg:col-span-7
      liquid-glass
      rounded-3xl
      p-8
      md:p-8

      border
      border-brand-pink/20

      hover:border-brand-pink/40

      transition-all

      duration-300

      flex

      flex-col

      justify-between

      min-h-[450px]
      "
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/10 border border-brand-pink/30 rounded-full mb-4">
                  <span className="h-1.5 w-1.5 bg-brand-pink rounded-full animate-ping" />

                  <span className="text-[10px] uppercase tracking-widest text-purple-400 font-extrabold font-mono">
                    AI Developer Community
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                  About CCCL
                </h3>

                <p className="text-white/70 leading-relaxed mb-8">
                  CCCL is a global community where developers, creators and AI
                  enthusiasts come together to explore the future of AI-assisted
                  software development. Through in-person meetups, lightning
                  talks, live demos and open discussions, builders share ideas,
                  showcase projects and learn from one another.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-white font-bold mb-1">Lightning Talks</h4>

                  <p className="text-white/60 text-sm">
                    Short sessions from builders.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-white font-bold mb-1">Live Demos</h4>

                  <p className="text-white/60 text-sm">
                    AI-assisted development in action.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h4 className="text-white font-bold mb-1">
                    Open Discussions
                  </h4>

                  <p className="text-white/60 text-sm">
                    Exchange ideas with fellow builders.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-mono">
                  London • Bangalore • Hyderabad • Pune
                </span>
              </div>
            </motion.div>
          </div>

          {/* Co-Organizers Gratitude Frame (Intellexa REC and Rajalakshmi Engineering College) */}
          <div>
            {/* Decorative overlay removed per request to reduce background blur */}

            <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeIn ">
              <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-extrabold border border-brand-pink/20 bg-brand-pink/5 rounded-full px-4 py-3 inline-block mb-3 animate-pulse">
                Official Hosting & Event Partners
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Our{" "}
                <span className="text-gradient-pink font-extrabold text-shadow">
                  Official Partners
                </span>
              </h2>

              <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.05,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="liquid-glass rounded-3xl p-6 border border-white/10 bg-black/40 flex flex-col items-center justify-center aspect-square w-full max-w-[340px] md:max-w-[380px] mx-auto transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_32px_rgba(167,139,250,0.35)] hover:border-purple-400/50"
                >
                  <a
                    href="https://www.linkedin.com/school/rajalakshmi-engineering-college/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center w-full h-full text-inherit"
                  >
                    <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase font-mono text-center">
                      Official Hosting Partner
                    </h4>
                    <div className="flex-1 w-full flex items-center justify-center p-4">
                      <img
                        src="/assets/images/rec_logo.png"
                        alt="REC logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.12,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="liquid-glass rounded-3xl p-6 border border-white/10 bg-black/40 flex flex-col items-center justify-center aspect-square w-full max-w-[340px] md:max-w-[380px] mx-auto transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_0_32px_rgba(167,139,250,0.35)] hover:border-purple-400/50"
                >
                  <a
                    href="https://www.linkedin.com/company/intellexa-rec/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center w-full h-full text-inherit"
                  >
                    <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase font-mono text-center">
                      Event & Technology Partner
                    </h4>
                    <div className="flex-1 w-full flex items-center justify-center p-4">
                      <img
                        src="/assets/images/intellexa_logo.png"
                        alt="Intellexa logo"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* Restructured Who Can Participate Section - Elevated and Highly Visual */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold border-b border-brand-pink/40 pb-2">
              Who is Eligible to Apply?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 tracking-tight">
              An Empowering Workspace for All Females
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            animate={animationState}
            initial="hidden"
            onAnimationComplete={handleAnimationComplete}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {eligibilityCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.12,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  style={{ boxShadow: `0 10px 30px -15px ${card.glow}` }}
                  className="liquid-glass rounded-2xl p-6 hover:border-brand-pink/40 transition-colors duration-300 relative group flex flex-col justify-between"
                >
                  <div className="w-full h-full flex flex-col justify-between">
                    <div>
                      {/* Glowing neon background inside card */}
                      <div className="h-10 w-10 rounded-xl bg-brand-pink/10 border border-brand-pink/30 flex items-center justify-center mb-5 text-brand-pink group-hover:scale-110 transition-transform duration-300">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-2 uppercase tracking-wide">
                        {card.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <span className="text-[9px] font-mono tracking-widest font-extrabold text-purple-400 uppercase block pt-4 mt-6 border-t border-white/5">
                      Universal Admission Category
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
