import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Building2, Award, ArrowRight, ShieldCheck, Users, Zap, UserCheck, Code, Sparkles, Binary } from 'lucide-react';
import { eligibilityCards } from '../data';

interface AboutProps {
  onRegisterClick: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // falls one by one (first, then next, then third)
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -250, // start far above
    transition: {
      duration: 0
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: [0.25, 1, 0.5, 1], // easeOutQuart (smooth deceleration)
      duration: 1.0 // slide down in 1.0s
    }
  },
  exit: {
    opacity: 0,
    y: 200, // continues moving downward before disappearing
    transition: {
      type: "tween",
      ease: [0.25, 1, 0.5, 1],
      duration: 1.0, // exit slide down in 1.0s
      delay: 0.1 // starts shortly after text begins to fade
    }
  }
};

const contentVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0
    }
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      delay: 0.35, // starts during the drop
      duration: 0.65 // fades in smoothly to finish exactly with the card settling
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.3 // text fades out first
    }
  }
};


export default function About({ onRegisterClick }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });
  const [animationState, setAnimationState] = useState<"hidden" | "visible" | "exit">("hidden");

  useEffect(() => {
    if (isInView) {
      setAnimationState("visible");
    } else {
      setAnimationState("exit");
    }
  }, [isInView]);

  const handleAnimationComplete = (definition: any) => {
    if (definition === "exit") {
      setAnimationState("hidden");
    }
  };

  return (
    <section id="about" className="py-28 bg-black border-t border-white/5 relative overflow-hidden">
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
            <span className="text-[10px] uppercase tracking-widest text-brand-pink font-extrabold font-mono">National Initiative</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
            Where <span className="text-gradient-pink font-bold">Women Innovators</span> Code the Future.
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl">
            SheBuilds Chennai is a prestigious initiative providing an ecosystem for women developers to collaborate, learn, and push the limits of real-world technology.
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
              <div className="h-12 w-12 rounded-2xl bg-brand-pink/15 flex items-center justify-center mb-6 border border-brand-pink/30 shadow-md">
                <Users className="h-6 w-6 text-brand-pink" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                SheBuilds Chennai Cohort
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                We are a community-driven organization bridging the gap between talent and real industrial opportunities. By offering advanced code sandboxes, continuous webinars, hackathons, and global mentorship chains, we support women software engineers, designers, and project managers in achieving real career impact.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-6">
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">12,000+</span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Members</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">500+</span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Events</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-white tracking-tight">70+</span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Mentors</span>
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

            {/* High-fidelity generated image with zoom hover transition */}
            <div className="relative w-full h-[280px] overflow-hidden">
              <img
                src="/src/assets/images/women_tech_3d_1779992842675.png"
                alt="3D India Female Developer representation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Caption Container */}
            <div className="p-6 bg-black/40 backdrop-blur-md border-t border-white/5 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Binary className="h-4.5 w-4.5 text-brand-pink animate-pulse" />
                  Shattering the Glass Ceiling
                </h4>
                <p className="text-xs text-white/60 leading-relaxed mt-2">
                  Fueling creative female minds globally. We don't just write code; we cultivate tomorrow's founders, patent creators, and tech innovators.
                </p>
              </div>

              <div className="text-[10px] uppercase font-mono tracking-widest text-brand-pink mt-4 font-bold flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-300">
                Join our supportive tech circle <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Co-Organizers Gratitude Frame (Intellexa REC and Rajalakshmi Engineering College) */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-8 md:p-10 bg-gradient-to-br from-brand-pink/15 via-black/90 to-black hover:border-brand-pink/40 border border-brand-pink/20 transition-all duration-300 relative overflow-hidden mb-20 neon-glow-pink"
        >
          <div className="absolute top-0 right-0 p-8 text-brand-pink/5 pointer-events-none">
            <Building2 className="w-56 h-56 transform translate-x-12 -translate-y-12" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-pink/20 border border-brand-pink/40 text-[9px] text-white uppercase font-extrabold tracking-widest font-mono mb-4">
              <Award className="h-3.5 w-3.5 text-brand-pink" />
              Official Hosting & Event Partners
            </span>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Organized with Gratitude alongside <span className="text-brand-pink">Intellexa REC</span>
            </h3>
            
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
              This landmark third edition is brought to life through a close partnership between SheBuilds Chennai and <strong>Intellexa REC</strong>, the supreme technical club of <strong>Rajalakshmi Engineering College (REC)</strong>. Rajalakshmi Engineering College acts proudly as our <strong>Official Hosting Partner</strong>, lending their campus, development labs, and support systems to give our hackers a dream in-person hacking venue.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-white/10 text-xs">
              <span className="text-white/40 font-mono">OFFICIAL CAMPUS HOSTS:</span>
              <span className="font-extrabold tracking-widest text-white uppercase bg-white/5 border border-white/10 rounded-lg py-1 px-3">
                Rajalakshmi Engineering College, Chennai
              </span>
            </div>
          </div>
        </motion.div>

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
            ref={containerRef}
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
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  style={{ boxShadow: `0 10px 30px -15px ${card.glow}` }}
                  className="liquid-glass rounded-2xl p-6 hover:border-brand-pink/40 transition-colors duration-300 relative group flex flex-col justify-between"
                >
                  <motion.div
                    variants={contentVariants}
                    className="w-full h-full flex flex-col justify-between"
                  >
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

                    <span className="text-[9px] font-mono tracking-widest font-extrabold text-brand-pink uppercase block pt-4 mt-6 border-t border-white/5">
                      Universal Admission Category
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
