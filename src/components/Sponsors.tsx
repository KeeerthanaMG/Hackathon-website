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
    <section id="sponsors" className="pt-12 pb-20 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background neon blurs */}
      <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] bg-brand-pink/5 rounded-full filter blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fadeIn">
          <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-extrabold border border-brand-pink/20 bg-brand-pink/5 rounded-full px-4 py-1.5 inline-block mb-3 animate-pulse">
            Valued Support
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Elite <span className="text-gradient-pink font-extrabold text-shadow">Partners & Sponsors</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base">
            Grateful for the outstanding companies and communities empowering women in technology.
          </p>
        </div>

        {/* Tier 2 Sponsors and Perks Providers with Custom Hand-Crafted Mocks */}
        <div className="border-t border-white/5 pt-12 mb-16">
          <h4 className="text-center text-[10px] uppercase font-mono tracking-widest text-white-500/70 mb-12">
            Elite Platform & Tech Sponsors
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* HappyFox */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/happyfox-inc-/"><img src="/src/assets/images/happyfox_logo.png" alt="HappyFox logo" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">HAPPYFOX</span>
            </motion.div>

            {/* ElevenLabs */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/elevenlabsio/"><img src="/src/assets/images/Eleven_labs.jpg" alt="ElevenLabs logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">ELEVENLABS</span>
            </motion.div>

            {/* Notion */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/notionhq/"><img src="/src/assets/images/notion_logo.png" alt="Notion logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">NOTION</span>
            </motion.div>

            {/* .xyz */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/xyz/"><img src="/src/assets/images/.xyz.jpg" alt="XYZ logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">.XYZ</span>
            </motion.div>

            {/* Balsamiq */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/balsamiq/"><img src="/src/assets/images/Balsamiq.png" alt="Balsamiq logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">BALSAMIQ</span>
            </motion.div>

            {/* Interview Buddy */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href="https://interviewbuddy.net/?srsltid=AfmBOooxjVt7qJZ69sM4Qb7UaBUN3YXt4HdPuyu494JfCxME0nTslYjU"><img src="/src/assets/images/interviewbuddy.png" alt="Interview Buddy logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-[11px] font-bold text-white tracking-wider uppercase">INTERVIEW BUDDY</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
            {/* Mastra */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href="https://www.linkedin.com/company/mastra-ai/"><img src="/src/assets/images/mastra.png" alt="Mastra logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">MASTRA</span>
            </motion.div>

            {/* Mako IT Lab */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href="https://www.linkedin.com/company/mako-it-lab/"><img src="/src/assets/images/mako.webp" alt="Mako IT logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">MAKO IT</span>
            </motion.div>

            {/* Interview Cake */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href="https://www.linkedin.com/company/interview-cake/"><img src="/src/assets/images/interviewcake.png" alt="Interview Cake logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">INTERVIEW CAKE</span>
            </motion.div>

            {/* Wyntrix */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/wyntrix/"><img src="/src/assets/images/wyntrixlogo.jpeg" alt="Wyntrix logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">WYNTRIX</span>
            </motion.div>

            {/* Navan */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/navan-ai/"><img src="/src/assets/images/navan_ai_logo.jpeg" alt="Navan logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">NAVAN</span>
            </motion.div>

            {/* Yuniq */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href="https://www.linkedin.com/company/yuniq-yq/"><img src="/src/assets/images/yuniqlogo.jpeg" alt="Yuniq logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">YUNIQ</span>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {/* Central Elite Sponsor 1 */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 w-[200px] hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/oostudioai/"><img src="/src/assets/images/oostudios.jpeg" alt="Elite sponsor logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">OO STUDIOS</span>
            </motion.div>

            {/* Central Elite Sponsor 2 */}
            <motion.div whileHover={{ y: -4 }} className="liquid-glass rounded-xl p-4 flex flex-col items-center justify-center text-center h-36 w-[200px] hover:border-brand-pink/30 transition-all">
              <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/10 bg-black/30 flex items-center justify-center mb-4">
                <a href = "https://www.linkedin.com/company/grogroot-india/"><img src="/src/assets/images/grogoot.jpg" alt="Elite sponsor logo placeholder" className="h-full w-full object-contain" /></a>
              </div>
              <span className="text-xs font-bold text-white tracking-widest uppercase">GROGROOT INDIA</span>
            </motion.div>
          </div>
        </div>

        {/* Community Partners Double Infinite Horizontal Slider */}
        <div className="border-t border-white/5 pt-12 overflow-hidden relative">
          <h4 className="text-center text-[13px] uppercase font-mono tracking-widest text-white/50 mb-8">
            Collaborating Tech Communities
          </h4>

          {/* Masks for smooth gradient side-fades in slider */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/30 to-transparent z-10 pointer-events-none" />

          {/* Custom Horizontal Infinite Scrolling loop structure */}
          <div className="relative flex w-full overflow-hidden pb-6">
            <div className="animate-infinite-scroll flex items-center">
              {duplicatedPartners.map((partner, idx) => (
                <a
                  key={`top-${idx}`}
                  href={partner.link ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    `mx-4 block rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:border-brand-pink/30 hover:shadow-xl ` +
                    (partner.name === "Azure Developer Community"
                      ? "h-5 w-64 md:h-30 md:w-72"
                      : "h-5 w-44 md:h-30 md:w-52")
                  }
                >
                  <img
                    src={partner.logo ? `/src/assets/images/${partner.logo}` : "/src/assets/images/logo-placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-contain bg-white"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 rounded-3xl border border-brand-pink/30 bg-gradient-to-br from-brand-pink/10 via-black to-black p-8 flex flex-col gap-4 max-w-4xl mx-auto"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300 font-extrabold bg-white/5 border border-brand-pink/20 rounded-full px-3 py-1.5 inline-block mb-4">
              Become a Sponsor
            </span>
            <h3 className="text-3xl font-bold text-white tracking-tight mb-2">
              Want to Become a Sponsor?
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Partner with SheBuilds Chennai to showcase your brand, access top female tech talent, and support impactful community-driven innovation.
            </p>
          </div>

          <button
            onClick={handleSponsorEmail}
            className="w-full rounded-xl bg-white hover:bg-brand-pink text-black hover:text-white py-3 text-xs uppercase tracking-widest font-extrabold transition-all duration-300 relative group flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-pink cursor-pointer"
          >
            Want to Become a Sponsor
          </button>
        </motion.div>
      </div>
    </section>
  );
}
