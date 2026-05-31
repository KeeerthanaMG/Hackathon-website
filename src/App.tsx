import { useState } from 'react';
import { motion } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Phases from './components/Phases';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import {
  X,
  ArrowUpRight,
  Mail,
  Globe,
  Linkedin,
  Instagram,
  ChevronUp,
  Check,
  Info,
  Calendar,
  Users,
  Sparkles,
  Rocket,
  Shield,
  BookOpen,
} from 'lucide-react';

export default function App() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleUnstopRedirect = () => {
    window.open('https://unstop.com', '_blank', 'noopener,noreferrer');
    setShowRegisterModal(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white selection:bg-brand-pink/30 selection:text-white font-sans overflow-x-hidden">
      {/* 1. Hero Landing - Cinematic Background video & custom fade system */}
      <Hero onExploreClick={handleExploreClick} onRegisterClick={openRegisterModal} />

      {/* 2. About SheBuilds, Intellexa REC, & Who Can Participate cards */}
      <About onRegisterClick={openRegisterModal} />

      {/* 3. Phases Structure & Integrated Master Timeline */}
      <Phases onRegisterClick={openRegisterModal} />

      {/* 4. Grand ₹30,000+ Prize Details and Core Perks (Patent, Research Paper, Startups) */}
      <Prizes onRegisterClick={openRegisterModal} />

      {/* 5. Sponsors grid & custom SVG visual logos with sliding partner carousel */}
      <Sponsors />

      {/* 6. High-Conversion Closure Section */}
      <section className="py-28 bg-black border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-brand-pink/10 rounded-full filter blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-pink/10 border border-brand-pink/30 rounded-full text-[10px] text-purple-300 font-extrabold font-mono uppercase tracking-widest animate-pulse">
              <Sparkles className="h-3.5 w-3.5" />
              Final Registrations closing June 30, 2026
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to{' '}
              <span className="text-gradient-pink font-extrabold text-shadow">Rewrite the Narrative</span>?
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
              Don’t let your groundbreaking ideas gather dust. Secure your invitation to the supreme 24-Hour Offline
              Grand Finale at Rajalakshmi Engineering College Chennai and build alongside the tech leaders of tomorrow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left"
          >
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-400/15 border border-brand-pink/30 text-purple-400">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider font-mono">
                  1. Patent Creation
                </span>
                <span className="block text-[10px] text-white/50 leading-relaxed">Turn code into IP</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-pink/15 border border-brand-pink/30 text-purple-400">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider font-mono">
                  2. Academic Research
                </span>
                <span className="block text-[10px] text-white/50 leading-relaxed">Publish peer-reviewed papers</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-pink/15 border border-brand-pink/30 text-purple-400">
                <Rocket className="h-4 w-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wider font-mono">
                  3. Incubation Support
                </span>
                <span className="block text-[10px] text-white/50 leading-relaxed">Convert code into startups</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="pt-4"
          >
            <button
              onClick={openRegisterModal}
              className="relative px-10 py-4 bg-white text-black hover:bg-brand-pink hover:text-white rounded-full text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-pink cursor-pointer active:scale-95 neon-glow-pink border border-transparent hover:border-brand-pink/40"
            >
              Secure Your Team Slot on Unstop
            </button>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer Section */}
      <footer className="relative bg-black py-8 border-t border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/src/assets/images/design2.png"
            alt=""
            className="absolute left-1/2 top-0 h-[550px] max-w-none -translate-x-1/2 opacity-30 md:opacity-75"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-12 lg:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4 relative z-10">
            <span className="text-xl font-bold tracking-widest text-white flex items-center gap-2 uppercase">
              SheBuilds <span className="text-purple-400 font-mono">Chennai</span>
            </span>
            <p className="text-white/50 text-xs leading-relaxed max-w-sm">
              Supporting non-profitable initiatives to host national-level women-in-tech hackathons, empowering
              builders to create patents, research publications, and startups.
            </p>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="mailto:shebuildsch@gmail.com"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink/15 hover:text-brand-pink border border-white/10 transition-all text-white/70"
                aria-label="Email Host"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/shebuilds"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink/15 hover:text-brand-pink border border-white/10 transition-all text-white/70"
                aria-label="LinkedIn Account"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/shebuilds_chennai"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink/15 hover:text-brand-pink border border-white/10 transition-all text-white/70"
                aria-label="Instagram Account"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://shebuildsecosystem.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink/15 hover:text-brand-pink border border-white/10 transition-all text-white/70"
                aria-label="Official Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-[0.15em] font-mono">
                Events Overview
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                SheBuilds Chennai powers code sprints, workshops, and mentorship sessions designed for women in tech. Discover past event momentum and current hackathon highlights.
              </p>
              <a href="#phases" className="inline-block text-[11px] uppercase tracking-[0.2em] text-brand-pink hover:text-white transition-colors">
                Explore Events
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 space-y-4 flex flex-col items-end lg:items-end relative z-10">
            <div className="w-full max-w-md ml-auto p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-xs text-white/70 leading-relaxed">
                SheBuilds Chennai Hack 3.0 is a high-energy, women-led tech sprint built to help participants build meaningful prototypes, get mentorship, and launch ideas faster.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Expect inclusive collaboration, live judging, and a powerful showcase of skill, research, and startup-ready thinking.
              </p>
            </div>
            <div className="w-full max-w-md ml-auto p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-xs text-purple-300 uppercase tracking-widest font-mono font-bold animate-pulse">
                Registrations Deadline:
              </span>
              <span className="text-xs font-bold text-white uppercase font-mono">June 30, 2026</span>
            </div>
            <div className="w-full max-w-md ml-auto p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-amber-700 font-bold">
                Web Development Team
              </h4>
              <div className="space-y-1 text-xs leading-relaxed">
                <a
                  href="https://www.linkedin.com/in/keerthana-m-g-12ba59256/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 hover:text-brand-pink transition-colors"
                >
                  Keerthana MG
                </a>
                <a
                  href="https://www.linkedin.com/in/sherin-katherina-d/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 hover:text-brand-pink transition-colors"
                >
                  Sherin Katherina D
                </a>
                <a
                  href="https://www.linkedin.com/in/darsshini-punniakotti-050172316/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 hover:text-brand-pink transition-colors"
                >
                  Darsshini P
                </a>
                <a
                  href="https://www.linkedin.com/in/gurunethra-k-a407a8394/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 hover:text-brand-pink transition-colors"
                >
                  Gurunethra K
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full relative z-30 text-center max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 flex flex-col items-center gap-4 text-xs text-white/80 bg-black/60 backdrop-blur-sm">
          <span className="w-full">
            © 2026 SheBuilds Chennai. Crafted in collaboration with Intellexa REC. All Rights Reserved.
          </span>
          <button
            onClick={handleScrollToTop}
            className="h-8 pr-3 pl-3 rounded-full bg-white/5 flex items-center gap-1 hover:bg-brand-pink/15 hover:text-brand-pink transition-all border border-white/10 focus:outline-none"
            title="Scroll to Top"
          >
            Back to Top
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </footer>

      {/* 8. Registration Modal for Unstop Redirect */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="liquid-glass border border-brand-pink/30 rounded-3xl max-w-lg w-full p-8 md:p-10 relative shadow-2xl overflow-hidden neon-glow-pink bg-black/95">
            <button
              onClick={() => setShowRegisterModal(false)}
              className="absolute top-6 right-6 text-white/60 hover:text-white hover:bg-white/5 rounded-full p-2 transition-colors focus:outline-none"
              aria-label="Close dialogue"
              id="modal-close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-[9px] font-mono tracking-widest uppercase text-brand-pink bg-brand-pink/10 px-3 py-1.5 border border-brand-pink/30 rounded-full inline-block mb-3">
                Unstop Registration Gateway
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">SheBuilds Chennai Hack 3.0</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <Users className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h4 className="font-semibold text-white mb-0.5">Participation Requirements</h4>
                  <p className="text-white/60 leading-relaxed">
                    Exclusively open to female tech innovators, developers, students, and professionals aged 18+. Standard
                    team compositions of 2 to 3 members.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <Calendar className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h4 className="font-semibold text-white mb-0.5 font-sans">Offline Venue Location</h4>
                  <p className="text-white/60 leading-relaxed">
                    The Grand Finale occurs in-person at Rajalakshmi Engineering College campus, Highway 4, Valarpuram,
                    Chennai on August 1-2, 2026.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                <Info className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h4 className="font-semibold text-white mb-0.5 font-sans">Redirecting to Unstop</h4>
                  <p className="text-white/60 leading-relaxed font-sans">
                    By clicking continue, you will be redirected to the official Unstop portal to complete the registration,
                    team locking, and problem theme choices.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowRegisterModal(false)}
                className="flex-1 liquid-glass rounded-xl py-3 text-sm text-center font-medium text-white hover:bg-white/5 transition-all text-white/80"
                id="modal-cancel-btn"
              >
                Go Back
              </button>
              <button
                onClick={handleUnstopRedirect}
                className="flex-1 bg-white hover:bg-brand-pink text-black hover:text-white py-3 rounded-xl text-xs uppercase tracking-widest font-extrabold text-center flex items-center justify-center gap-1.5 transition-all outline-none focus:ring-2 focus:ring-brand-pink active:scale-95 cursor-pointer"
                id="modal-proceed-btn"
              >
                Proceed to Unstop
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

