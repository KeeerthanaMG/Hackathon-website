import React from "react";
import { motion } from "motion/react";
import {
  Award,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Coins,
  Target,
} from "lucide-react";
import { perksData } from "../data";

interface PrizesProps {
  onRegisterClick: () => void;
}

export default function Prizes({ onRegisterClick }: PrizesProps) {
  return (
    <section
      id="prizes"
      className="pt-3 pb-12 bg-black border-t border-white/5 relative overflow-hidden"
    >
      {/* Background glow of vivid neon pink */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-brand-pink/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-extrabold border border-brand-pink/20 bg-brand-pink/5 rounded-full px-4 py-1.5 inline-block mb-3">
            Grand Rewards
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Comprehensive{" "}
            <span className="text-gradient-pink font-extrabold text-shadow">
              ₹50,000+
            </span>{" "}
            Prize Pool & Complete Support.
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-2">
            In addition to high-value rewards, we support winning creations way
            beyond standard hackathon timelines.
          </p>
        </motion.div>

        {/* Big Spotlight Prize Box containing total sum and ecosystem badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16 font-sans">
          {/* Main Giant Glowing Card reflecting 30k+ rewards and perks (Spans 5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group overflow-hidden rounded-3xl border-2 border-brand-pink/30 bg-gradient-to-br from-brand-pink/20 via-black to-black p-8 flex flex-col justify-between neon-glow-pink h-full"
          >
            {/* Ambient animated particle glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 bg-brand-pink/25 rounded-full filter blur-2xl animate-pulse" />

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Coins className="h-5 w-5 text-brand-pink animate-pulse" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 font-bold">
                  Hackathon Pool
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-3">
                ₹50,000+
              </h3>
              <p className="text-white/80 text-sm font-semibold mb-6">
                Total Cash Pool & Ecosystem Perks
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-[10px] tracking-widest text-white/50 block font-mono uppercase">
                    Ecosystem Advantage
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed mt-1">
                    Every participant gets access to mentor sessions, guidance
                    from industry experts and jury members, and a certificate of
                    participation.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-white/40 uppercase font-mono tracking-wider">
                Certified by shebuilds
              </span>
              <button
                onClick={onRegisterClick}
                className="bg-white hover:bg-brand-pink text-black hover:text-white text-xs uppercase tracking-widest font-extrabold py-2 px-5 rounded-full transition-all duration-300 active:scale-95 focus:outline-none focus:ring-1 focus:ring-brand-pink flex items-center gap-1 cursor-pointer"
              >
                Register
                <ArrowUpRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </motion.div>

          {/* Combined Post-Hackathon Perks Cards (Spans 7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* Title representing after-match support */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold tracking-widest uppercase text-white pl-4 border-l-2 border-brand-pink mt-1">
                Ecosystem Support Pipelines (Your Perks)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {perksData.map((perk, idx) => {
                  const IconComp = perk.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, duration: 0.6 }}
                      className="liquid-glass rounded-2xl p-6 flex flex-col justify-between hover:border-brand-pink/20 transition-all border border-white/5 group"
                    >
                      <div>
                        {/* Glowing badge */}
                        <div className="inline-block px-2.5 py-1 bg-brand-pink/10 border border-brand-pink/30 rounded-md text-[9px] uppercase font-mono font-bold text-purple-400 mb-4">
                          {perk.badge}
                        </div>

                        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-105 transition-transform">
                          <IconComp className="h-5 w-5" />
                        </div>

                        <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                          {perk.title}
                        </h4>

                        <p className="text-[11px] text-white/50 leading-relaxed mb-4">
                          {perk.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 text-[9px] font-mono uppercase tracking-widest text-purple-400 font-extrabold mt-3">
                        {perk.incentive}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
