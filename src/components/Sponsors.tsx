import React from 'react';
import { motion } from 'motion/react';
import { Heart, Landmark, Award, Shield, Sparkles, Star, Mail, ArrowUpRight, Code2, Cpu, MessageSquare, Compass, Send } from 'lucide-react';
import { communityPartners } from '../data';

export default function Sponsors() {
  // Duplicating partners for perfect continuous horizontal scroll representation
  const duplicatedPartners = [...communityPartners, ...communityPartners, ...communityPartners, ...communityPartners];

  const handleSponsorEmail = () => {
    window.location.href = "mailto:shebuildsch@gmail.com?subject=Sponsorship Request for SheBuilds Chennai Hack 3.0";
  };

  return (
    <section id="sponsors" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background neon blurs */}
      <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] bg-brand-pink/5 rounded-full filter blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fadeIn">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-pink font-extrabold border border-brand-pink/20 bg-brand-pink/5 rounded-full px-4 py-1.5 inline-block mb-3 animate-pulse">
            Valued Support
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Elite <span className="text-gradient-pink font-extrabold text-shadow">Partners & Sponsors</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Grateful for the outstanding companies and communities empowering women in technology.
          </p>
        </div>

        {/* Major Grid combining Prominent Partners & Become a Sponsor CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Prominent Host Partners displaying majestic custom SVG visual logos (Spans 8 columns) */}
          <div className="lg:col-span-8 space-y-8 h-full">
            <h3 className="text-xs tracking-widest text-white/50 uppercase font-mono font-bold pl-4 border-l-2 border-brand-pink">
              Invaluable Host & Technical Partners
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Rajalakshmi Engineering College (REC) Shield Emblem card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="liquid-glass rounded-2xl p-6 hover:border-brand-pink/30 transition-all border border-white/5 flex flex-col justify-between h-52 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Custom SVG logo representing REC university emblem shield */}
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 100 100" className="h-8 w-8 text-white fill-none stroke-current" strokeWidth="6">
                      <polygon points="50,15 85,25 80,70 50,90 20,70 15,25" />
                      <line x1="50" y1="15" x2="50" y2="90" />
                      <circle cx="50" cy="50" r="10" className="fill-brand-pink" />
                    </svg>
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-white/40">Title host</span>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
                    RAJALAKSHMI
                  </h4>
                  <p className="text-xs text-white/50 font-mono mt-1 font-bold">
                    Engineering College, Chennai
                  </p>
                </div>
              </motion.div>

              {/* Intellexa REC Tech Circuit Board card */}
              <motion.div 
                whileHover={{ y: -4 }}
                className="liquid-glass rounded-2xl p-6 hover:border-brand-pink/40 transition-all border border-brand-pink/20 neon-glow-pink flex flex-col justify-between h-52 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {/* Custom SVG logo representing Integrated micro circuit for Intellexa REC tech club */}
                  <div className="h-12 w-12 rounded-xl bg-brand-pink/20 border border-brand-pink/40 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 100 100" className="h-8 w-8 text-brand-pink fill-none stroke-current" strokeWidth="6">
                      <rect x="25" y="25" width="50" height="50" rx="10" />
                      <circle cx="50" cy="50" r="12" className="stroke-white" />
                      <line x1="50" y1="10" x2="50" y2="25" />
                      <line x1="50" y1="75" x2="50" y2="90" />
                      <line x1="10" y1="50" x2="25" y2="50" />
                      <line x1="75" y1="50" x2="90" y2="50" />
                    </svg>
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-brand-pink font-extrabold animate-pulse">Special event partner</span>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
                    INTELLEXA REC
                  </h4>
                  <p className="text-xs text-brand-pink font-mono mt-1 font-extrabold uppercase">
                    Technical Club of REC
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Become a Sponsor CTA Box (Spans 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 relative overflow-hidden rounded-3xl border border-brand-pink/30 hover:border-brand-pink/50 transition-all bg-gradient-to-br from-brand-pink/15 via-black to-black p-8 flex flex-col justify-between neon-glow-pink h-full"
          >
            <div>
              <div className="h-10 w-10 bg-brand-pink/20 border border-brand-pink/40 rounded-full flex items-center justify-center mb-6 text-brand-pink">
                <Sparkles className="h-5 w-5 animate-pulse" />
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                Become a Sponsor
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Position your enterprise brand alongside India's fastest-growing female tech builders cohort. Gain early talent recruiting pipelines and corporate diversity visibility during our live showcase.
              </p>
            </div>

            <button
              onClick={handleSponsorEmail}
              className="mt-8 overflow-hidden rounded-xl bg-white hover:bg-brand-pink text-black hover:text-white py-3 text-xs uppercase tracking-widest font-extrabold transition-all duration-300 relative group flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-pink cursor-pointer"
            >
              Request Pitch Deck
              <Send className="h-3.5 w-3.5" />
            </button>
          </motion.div>
          
        </div>

        {/* Tier 2 Sponsors and Perks Providers with Custom Hand-Crafted Mocks */}
        <div className="border-t border-white/5 pt-16 mb-20">
          <h4 className="text-center text-[10px] uppercase font-mono tracking-widest text-white/40 mb-12">
            Elite Platform & Tech Sponsors
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            
            {/* HappyFox */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 hover:border-brand-pink/30 transition-all">
              <svg viewBox="0 0 100 100" className="h-8 w-8 text-brand-pink fill-none stroke-current mb-2" strokeWidth="6">
                <path d="M20,30 L40,15 L60,15 L80,30 L70,60 L50,85 L30,60 Z" />
                <path d="M40,45 L50,55 L60,45" />
                <circle cx="35" cy="35" r="4" className="fill-white" />
                <circle cx="65" cy="35" r="4" className="fill-white" />
              </svg>
              <span className="text-xs font-bold text-white tracking-widest uppercase">HAPPYFOX</span>
              <span className="text-[8px] text-white/30 font-mono mt-0.5">Gold Sponsor</span>
            </motion.div>

            {/* ElevenLabs */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 hover:border-brand-pink/30 transition-all">
              <svg viewBox="0 0 100 100" className="h-8 w-8 text-white fill-none stroke-current mb-2 animate-pulse" strokeWidth="6">
                <line x1="20" y1="50" x2="20" y2="50" />
                <line x1="32" y1="35" x2="32" y2="65" />
                <line x1="44" y1="20" x2="44" y2="80" className="stroke-brand-pink" />
                <line x1="56" y1="30" x2="56" y2="70" />
                <line x1="68" y1="40" x2="68" y2="60" />
                <line x1="80" y1="50" x2="80" y2="50" />
              </svg>
              <span className="text-xs font-bold text-white tracking-widest uppercase">ELEVENLABS</span>
              <span className="text-[8px] text-white/30 font-mono mt-0.5">AI Audio Sponsor</span>
            </motion.div>

            {/* Notion */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 hover:border-brand-pink/30 transition-all">
              <div className="h-8 w-8 bg-white text-black font-extrabold rounded-md flex items-center justify-center text-lg shadow-sm border border-white/20 mb-2">
                N
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">NOTION</span>
              <span className="text-[8px] text-white/30 font-mono mt-0.5">Workspace</span>
            </motion.div>

            {/* .xyz */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 hover:border-brand-pink/30 transition-all">
              <svg viewBox="0 0 100 100" className="h-8 w-8 text-white fill-none stroke-current mb-2" strokeWidth="6">
                <polyline points="20,20 80,80 50,50 80,20 20,80" />
              </svg>
              <span className="text-xs font-bold text-white tracking-widest uppercase">.XYZ</span>
              <span className="text-[8px] text-white/30 font-mono mt-0.5">Identity Partner</span>
            </motion.div>

            {/* Balsamiq */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 hover:border-brand-pink/30 transition-all">
              <svg viewBox="0 0 100 100" className="h-8 w-8 text-brand-pink fill-none stroke-current mb-2" strokeWidth="6">
                <circle cx="50" cy="50" r="30" />
                <line x1="30" y1="30" x2="70" y2="70" />
                <line x1="30" y1="70" x2="70" y2="30" />
              </svg>
              <span className="text-xs font-bold text-white tracking-widest uppercase">BALSAMIQ</span>
              <span className="text-[8px] text-white/30 font-mono mt-0.5">Wireframe Partner</span>
            </motion.div>

            {/* General (Interview Buddy / Cake / Mastra/ Navan combined fallback) */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-28 hover:border-brand-pink/30 transition-all">
              <MessageSquare className="h-7 w-7 text-brand-pink mb-2 animate-bounce" style={{ animationDuration: '3s' }} />
              <span className="text-[11px] font-bold text-white tracking-wider uppercase">INTERVIEW BUDDY</span>
              <span className="text-[8px] text-white/30 font-mono mt-0.5">Perks Provider</span>
            </motion.div>

          </div>
        </div>

        {/* Community Partners Double Infinite Horizontal Slider */}
        <div className="border-t border-white/5 pt-12 overflow-hidden relative">
          <h4 className="text-center text-[10px] uppercase font-mono tracking-widest text-white/50 mb-8">
            Collaborating Tech Communities
          </h4>

          {/* Masks for smooth gradient side-fades in slider */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/30 to-transparent z-10 pointer-events-none" />

          {/* Custom Horizontal Infinite Scrolling loop structure */}
          <div className="relative flex w-full">
            <div className="animate-infinite-scroll">
              {duplicatedPartners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="mx-4 bg-white/5 border border-white/10 hover:border-brand-pink/30 hover:bg-brand-pink/5 rounded-full px-6 py-3 flex items-center justify-center gap-2 text-white hover:text-brand-pink transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-pink animate-pulse shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
