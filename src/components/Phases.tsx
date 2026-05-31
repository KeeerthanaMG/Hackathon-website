import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Layers, Sparkles, CheckSquare, Search, Lightbulb, CheckCircle2, Users, ArrowUpRight } from 'lucide-react';
import { phasesData, evaluationCriteria } from '../data';

interface PhasesProps {
  onRegisterClick: () => void;
}

export default function Phases({ onRegisterClick }: PhasesProps) {
  return (
    <section id="phases" className="py-24 bg-black relative">
      {/* Dynamic neon pink radial glows */}
      <div className="absolute left-0 top-1/2 w-[300px] h-[300px] bg-brand-pink/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-extrabold border border-brand-pink/20 bg-brand-pink/5 rounded-full px-4 py-1.5 inline-block mb-3">
            Roadmap & Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Journey of <span className="text-gradient-pink font-extrabold text-shadow">Code & Challenge 3.O</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Phases and key dates merged into an integrated timeline. Follow the roadmap from online registration to the intense physical finale in Chennai.
          </p>
        </div>

        {/* Master Timeline Flow: Aligns Phases & Dates together */}
        <div className="relative border-l-2 border-brand-pink/25 max-w-5xl mx-auto pl-6 md:pl-10 space-y-16 py-4 mb-24">
          
          {/* Phase 1 Master Node */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline interactive dot marker */}
            <div className="absolute -left-[35px] md:-left-[55px] top-1.5 bg-black h-8 w-8 rounded-full border-2 border-brand-pink flex items-center justify-center text-brand-pink font-mono text-xs font-bold shadow-lg shadow-brand-pink/20 animate-pulse">
              1
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Phase description and dates (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 bg-brand-pink/10 border border-brand-pink/30 rounded-md px-3 py-1 text-white">
                  <Calendar className="h-3.5 w-3.5 text-brand-pink" />
                  <span className="text-xs font-extrabold font-mono tracking-widest text-purple-400 uppercase">
                    June 1 – June 30, 2026
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Online Innovation Challenge
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Teams will select an SDG theme, formulate a specific problem statement, map solutions, and submit their digital concept wireframes on Unstop before June 30.
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/50 inline-block font-mono">
                  📢 TOP 50 SHORTLIST ANNOUNCEMENT: <span className="text-purple-400 font-bold">July 15, 2026</span>
                </div>
              </div>

              {/* Right Column: Execution steps checklist inside a liquid glass bento block (6 cols) */}
              <div className="lg:col-span-6 liquid-glass rounded-2xl p-6 border border-white/5 hover:border-brand-pink/20 transition-all duration-300">
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 font-bold block mb-4">Phase 1 Checklist</span>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-purple-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-white/80"><strong>Choose an SDG Theme:</strong> Select from Climate, Quality Education, or Gender Equality.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-purple-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-white/80"><strong>Validate Solution Approach:</strong> Lay out clear database schemas, wireframes, and workflows.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-purple-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-white/80"><strong>Official Unstop submission:</strong> Upload concept pitches before the registrations deadline closes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 2 Master Node */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timeline interactive dot marker */}
            <div className="absolute -left-[35px] md:-left-[55px] top-1.5 bg-black h-8 w-8 rounded-full border-2 border-brand-pink flex items-center justify-center text-brand-pink font-mono text-xs font-bold shadow-lg shadow-brand-pink/20-animate-pulse bg-brand-pink/20">
              2
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Phase description and dates (6 cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 bg-brand-pink/30 border border-brand-pink/50 rounded-md px-3 py-1 text-white">
                  <Calendar className="h-3.5 w-3.5 text-white" />
                  <span className="text-xs font-extrabold font-mono tracking-widest text-white uppercase animate-pulse">
                    August 1 – August 2, 2026
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  24-Hour Offline Grand Finale
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  The Top 50 shortlisted teams gather at Rajalakshmi Engineering College campus, Chennai, to build in-person under code-intensive, high-adrenaline conditions.
                </p>

                <div className="p-4 rounded-xl bg-brand-pink/10 border border-brand-pink/20 text-xs text-white/80 inline-block font-mono">
                  🏫 VENUE HOST: <span className="text-white font-extrabold">Rajalakshmi Engineering College, Chennai</span>
                </div>
              </div>

              {/* Right Column: Execution steps checklist inside a neon visual card (6 cols) */}
              <div className="lg:col-span-6 liquid-glass rounded-2xl p-6 border-2 border-brand-pink/30 bg-gradient-to-br from-brand-pink/10 to-black neon-glow-pink hover:border-brand-pink/50 transition-all duration-300">
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 font-bold block mb-4">Phase 2 Checklist</span>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full bg-brand-pink/20 border border-brand-pink/40 text-purple-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-white/80"><strong>On-Spot Problems:</strong> Receive exclusive real-time challenge briefs at kickoff!</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full bg-brand-pink/20 border border-brand-pink/40 text-brand-pink text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-white/80"><strong>Mentorship:</strong> Complete prototype coding with face-to-face assistance.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full bg-brand-pink/20 border border-brand-pink/40 text-brand-pink text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                    <p className="text-xs text-white/80"><strong>Pitch to Jury:</strong> Present functional software on stage to earn rewards.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
