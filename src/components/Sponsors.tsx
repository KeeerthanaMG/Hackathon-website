import React from "react";
import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
// import { communityPartners } from '../data';

export default function Sponsors() {
  const collegePartners = [
    {
      name: "GDG PEC",
      logo: "/assets/images/gdg-pec.webp",
    },
    {
      name: "GDG IARE",
      logo: "/assets/images/gdgc_iare.jpg",
    },
    {
      name: "GDG IAE",
      logo: "/assets/images/gdg_iae.png",
    },
    {
      name: "GDG MCET",
      logo: "/assets/images/gdg_mcet.png",
    },
    {
      name: "GDG TMSL",
      logo: "/assets/images/gdgc_tmsl.jpg",
    },
    {
      name: "IEEE DDS-Sairam",
      logo: "/assets/images/deis-sairam.jpeg",
    },
    {
      name: "ACM - Prathyusha",
      logo: "/assets/images/pec-acm.jpeg",
    },
    {
      name: "Tech Vayuna- SRM",
      logo: "/assets/images/srm.png",
    },
    {
      name: "Cyborg SRM",
      logo: "/assets/images/cyborg.jpeg",
    },
    {
      name: "Aurix Simats",
      logo: "/assets/images/aurix-simats.jpeg",
    },
    {
      name: "Microsoft Club - Sathiyabama Institute of Technology",
      logo: "/assets/images/microsot-sist.jpeg",
    },
  ];
  // Duplicating partners for perfect continuous horizontal scroll representation
  const communityPartners = [
    {
      name: "Namma Flutter Chennai",
      logo: "/assets/images/NAMMAFLUTTER.jpeg",
    },
    {
      name: "Indian data club ",
      logo: "/assets/images/indiandataclub.jpg",
    },
    {
      name: "Nous",
      logo: "/assets/images/nous.jpg",
    },
    {
      name: "Codesapiens",
      logo: "/assets/images/CODESAPIENS.jpeg",
    },
    {
      name: "DevRel Squad",
      logo: "/assets/images/DEVRELSQUAD.jpeg",
    },
    {
      name: "Chennai React",
      logo: "/assets/images/CHENNAIREACT.jpeg",
    },
    {
      name: "FOF Chennai",
      logo: "/assets/images/fof-logo.jpg",
    },
    {
      name: "Code on jvm",
      logo: "/assets/images/CODEONJVM.jpeg",
    },
    {
      name: "AI geeks",
      logo: "/assets/images/AIGEEKS.png",
    },
    {
      name: "WomenTech Network Team",
      logo: "/assets/images/WOMENTECHNETWORK.png",
    },
    {
      name: "D3 Community",
      logo: "/assets/images/D3.png",
    },
    {
      name: "Nexora",
      logo: "/assets/images/NEXORA.jpeg",
    },
    {
      name: "Cybrian",
      logo: "/assets/images/cybrian.jpeg",
    },
  ];

  const handleSponsorEmail = () => {
    window.location.href =
      "mailto:connect@shebuildschennai.in?subject=Sponsorship Request for SheBuilds Chennai Hack 3.0";
  };

  return (
    <section
      id="sponsors"
      className="pt-12 pb-20 bg-black border-t border-white/5 relative overflow-hidden"
    >
      {/* Background neon blurs */}
      <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] bg-brand-pink/5 rounded-full filter blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header (Commented out for now) */}
        {/*
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
        */}

        {/* Elite Platform & Tech Sponsors (Commented out for now) */}
        {/*
        <div className="border-t border-white/5 pt-12 mb-16">
          <h4 className="text-center text-[10px] uppercase font-mono tracking-widest text-white-500/70 mb-12">
            Elite Platform & Tech Sponsors
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            ...
          </div>
        </div>
        */}
        {/* College Partners Infinite Carousel */}

        <div className="border-t border-white/5 pt-12 mt-16 overflow-hidden relative">
          <h4 className="text-center text-[28px] md:text-[32px] uppercase font-mono tracking-widest text-white/50 mb-14">
            College Partners
          </h4>

          <div className="relative overflow-hidden">
            {/* Edge fade */}

            <div className="absolute left-0 top-0 z-10 h-full w-15 bg-gradient-to-r from-black to-transparent pointer-events-none" />

            <div className="absolute right-0 top-0 z-10 h-full w-15 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-12"
            >
              {[...collegePartners, ...collegePartners].map(
                (college, index) => (
                  <div
                    key={`${college.name}-${index}`}
                    className="
              w-72 h-44
              bg-white
              rounded-2xl
              border border-brand-pink/20
              flex items-center justify-center
              p-3 shrink-0
              transition-all duration-300
              hover:scale-105
              hover:border-brand-pink/50
              hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
            "
                  >
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="max-w-full max-h-28 object-contain"
                    />
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </div>
        {/* Community Partners Infinite Carousel */}
        <div className="border-t border-white/5 pt-8 overflow-hidden relative">
          <h4 className="text-center text-[28px] md:text-[32px] uppercase font-mono tracking-widest text-white/50 mb-14">
            Collaborating Tech Communities
          </h4>

          <div className="relative overflow-hidden">
            {/* Edge fade */}
            <div className="absolute left-0 top-0 z-10 h-full w-15 bg-gradient-to-r from-black to-transparent pointer-events-none" />

            <div className="absolute right-0 top-0 z-10 h-full w-15 bg-gradient-to-l from-black to-transparent pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-12"
            >
              {[...communityPartners, ...communityPartners].map(
                (community, index) => (
                  <div
                    key={`${community.name}-${index}`}
                    className="
              w-72 h-44 md:w-72 md:h-44
              bg-white
              rounded-2xl
              border
              border-brand-pink/20
              flex
              items-center
              justify-center
              p-3
              shrink-0
              transition-all
              duration-300
              hover:scale-105
              hover:border-brand-pink/50
              hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
              max-w-[90%]
  
            "
                  >
                    <img
                      src={community.logo}
                      alt={community.name}
                      className="
                max-w-full
                max-h-28
                object-contain
              "
                    />
                  </div>
                ),
              )}
            </motion.div>
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
              Partner with SheBuilds Chennai to showcase your brand, access top
              female tech talent, and support impactful community-driven
              innovation.
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
