import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Twitter, Globe, Sparkles, Code2, Cpu } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onRegisterClick: () => void;
}

export default function Hero({ onExploreClick, onRegisterClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);


  // Custom JS interpolation based animation for loop fading
  const animateOpacity = (targetOpacity: number, duration: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    const video = videoRef.current;
    if (!video) return;

    const currentOpacity = parseFloat(video.style.opacity || "0");
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * progress;
      video.style.opacity = newOpacity.toString();

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const timeLeft = video.duration - video.currentTime;

    // Trigger 500ms fade-out when 0.55s remain before video ends
    if (timeLeft <= 0.55 && !fadingOutRef.current && video.duration > 0) {
      fadingOutRef.current = true;
      animateOpacity(0, 500);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = "0";
    setTimeout(() => {
      video.currentTime = 0;
      video.play()
        .then(() => {
          fadingOutRef.current = false;
          animateOpacity(1, 500); // 500ms fade-in
        })
        .catch((err) => console.log("Video replay prevented:", err));
    }, 100);
  };

  const handleCanPlay = () => {
    if (!fadingOutRef.current) {
      animateOpacity(1, 500);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set initial state
      video.style.opacity = "0";
      // Try play immediately
      video.play()
        .then(() => {
          animateOpacity(1, 500);
        })
        .catch((err) => {
          console.log("Autoplay blocked or waiting for user interaction:", err);
        });
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between select-none">
      {/* Background Video exactly as specified with -17% translate shift */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] pointer-events-none select-none z-0"
        muted
        autoPlay
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
      />

      {/* Extreme Dark Vignette in the background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black pointer-events-none z-1" />

      {/* Header with Navigation Bar */}
      <header className="relative z-20 px-6 py-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          id="nav-container"
          className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto backdrop-blur-xl border border-white/5"
        >
          {/* Logo Area: SheBuilds Chennai Custom Vector Badge */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-3 focus:outline-none" id="nav-logo">
              <img
                src="/src/assets/images/shebuilds_chennai_logo.png"
                alt="SheBuilds Chennai logo"
                className="h-[60px] w-auto rounded-2xl border border-white/10 object-contain shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div className="hidden md:flex flex-col text-left">
                <span className="text-sm font-extrabold uppercase tracking-widest text-white">
                  SheBuilds
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-purple-400 font-bold">
                  Chennai
                </span>
              </div>
            </a>

            {/* Nav Links based strictly on custom sections */}
            <nav className="hidden md:flex items-center gap-8 ml-4 self-center">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white/70 hover:text-white hover:text-brand-pink transition-colors text-xs uppercase tracking-widest font-bold leading-none focus:outline-none"
                id="nav-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('phases')}
                className="text-white/70 hover:text-white hover:text-brand-pink transition-colors text-xs uppercase tracking-widest font-bold leading-none focus:outline-none"
                id="nav-link-roadmap"
              >
                Phases & Dates
              </button>
              <button
                onClick={() => scrollToSection('prizes')}
                className="text-white/70 hover:text-white hover:text-brand-pink transition-colors text-xs uppercase tracking-widest font-bold leading-none focus:outline-none"
                id="nav-link-perks"
              >
                Perks & Prizes
              </button>
              <button
                onClick={() => scrollToSection('sponsors')}
                className="text-white/70 hover:text-white hover:text-brand-pink transition-colors text-xs uppercase tracking-widest font-bold leading-none focus:outline-none"
                id="nav-link-partners"
              >
                Partners
              </button>
            </nav>
          </div>

          {/* Right Side button */}
          <div className="flex items-center">
            <motion.button
              onClick={onRegisterClick}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="liquid-glass border border-white/10 bg-brand-pink/80 hover:bg-brand-pink/100 transition-all text-white rounded-full px-10 py-3 text-sm uppercase tracking-[0.25em] font-extrabold min-w-[220px] text-center focus:outline-none focus:ring-2 focus:ring-brand-pink shadow-xl shadow-brand-pink/20"
              id="btn-nav-register"
            >
              Register
            </motion.button>
          </div>
        </motion.div>
      </header>

      {/* Hero Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center mt-[-30px] md:mt-[-60px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Neon Pink Glowing Badge */}
          <span className="text-xs uppercase tracking-[0.30em] text-purple-400 font-extrabold neon-text-pink px-4 py-2 border border-brand-pink/30 rounded-full bg-brand-pink/10 inline-block mb-6 shadow-md backdrop-blur-md">
            Shebuilds Chennai Presents
          </span>

          {/* Majestic Heading built with Instrument Serif */}
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl md:text-7xl lg:text-8xl text-white mb-2 tracking-tight select-none italic font-serif leading-none"
            id="hero-heading"
          >
             SheBuilds Chennai Hack
          </h1>

          {/* Localized descriptor lines */}
          <p className="text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold mb-10 max-w-2xl px-4 font-mono">
            Empowering Female Developers • 24-Hour Offline Grand Finale • Chennai • 1st and 2nd August 2026 
          </p>
        </motion.div>

        {/* Input & Subtitle container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="max-w-xl w-full space-y-6 flex flex-col items-center"
        >


          {/* Subtitle text */}
          <p className="text-white/60 text-xs md:text-sm leading-relaxed px-4 text-center max-w-md font-sans">
            Connect with like-minded developers, transform your code into protected patents, publish research, and launch startups.
          </p>

          {/* Action buttons with subtle glows */}
          <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
            <button
              onClick={onRegisterClick}
              className="relative px-8 py-3 bg-white text-black hover:bg-brand-pink hover:text-white rounded-full text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-pink cursor-pointer active:scale-95"
            >
              Register 
            </button>
            <button
              onClick={onExploreClick}
              className="liquid-glass border border-white/10 rounded-full px-8 py-3 text-white text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-all focus:outline-none focus:ring-1 focus:ring-brand-pink flex items-center gap-2 group cursor-pointer"
              id="btn-manifesto"
            >
              Explore Sectors
              <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </main>

      {/* Hero Footer */}
      <footer className="relative z-10 flex flex-col items-center gap-2 pb-6">
        <div className="flex justify-center gap-2">
          <a
            href="https://instagram.com/shebuilds_chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full text-white/70 hover:text-brand-pink hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-pink flex items-center justify-center h-12 w-12 border border-white/5"
            aria-label="Instagram Page"
            id="social-link-instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/company/shebuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-full text-white/70 hover:text-brand-pink hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-pink flex items-center justify-center h-12 w-12 border border-white/5"
            aria-label="LinkedIn Page"
            id="social-link-linkedin"
          >
            <Globe className="h-4 w-4" />
          </a>
        </div>

      </footer>
    </div>
  );
}
