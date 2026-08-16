import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiArrowDown, FiCopy, FiCheck, FiDownload, FiExternalLink } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTailwindcss, SiSupabase } from "react-icons/si";
import avator from "../assets/avator.png";

const socials = [
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Pratyaksh1507",
    color: "#ffffff",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pratyakshkalsi",
    color: "#00d9f5",
  },
  {
    Icon: FaXTwitter,
    label: "Twitter / X",
    href: "https://twitter.com/pratyaksh_kalsi",
    color: "#00f5a0",
  },
];

export default function Home() {
  const roles = useMemo(
    () => [
      "FRONTEND ENGINEER",
      "REACT & NEXT.JS SPECIALIST",
      "UI/UX CRAFTSMAN",
      "NITSRI GRADUATE",
    ],
    []
  );

  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles]);

  const copyEmail = () => {
    navigator.clipboard.writeText("kalsi.pratyaksh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#080b11] overflow-hidden pt-28 pb-16 px-6 sm:px-8 lg:px-12"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00f5a0]/15 via-[#00d9f5]/10 to-transparent blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#00d9f5]/15 via-[#38bdf8]/10 to-transparent blur-[160px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5a0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5a0]" />
            </span>
            <span className="text-xs font-medium text-slate-300">
              Available for Opportunities · Frontend & Full-Stack
            </span>
          </motion.div>

          {/* Rotating Subtitle */}
          <div className="h-7 mb-2 flex items-center justify-center lg:justify-start overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-xs sm:text-sm font-semibold tracking-wider text-[#00f5a0] uppercase"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Crafting fast, intuitive &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] via-[#00d9f5] to-[#38bdf8]">
              modern web apps.
            </span>
          </motion.h1>

          {/* Bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            Hi, I’m <strong className="text-white font-semibold">Pratyaksh Kalsi</strong>. A frontend engineer passionate about building responsive, accessible interfaces using React, Next.js, and modern AI integrations that deliver frictionless digital experiences.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-black bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] hover:opacity-95 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(0,245,160,0.35)]"
            >
              Explore Projects
              <FiArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <a
              href="/PratyakshKalsi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FiDownload className="w-4 h-4 text-[#00f5a0]" />
              Resume (PDF)
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <FiCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Socials Dock */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-4 text-xl sm:text-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mr-2 hidden sm:inline">
              Connect:
            </span>
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:bg-white/[0.1] hover:border-[#00f5a0]/40 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Visual / Avatar Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center"
          >
            {/* Ambient Aura */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#00f5a0]/20 via-[#00d9f5]/15 to-transparent blur-3xl" />

            {/* Glass Container */}
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.12] p-3 overflow-hidden backdrop-blur-md shadow-2xl flex items-end justify-center">
              <img
                src={avator}
                alt="Pratyaksh Kalsi"
                className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
              />

              {/* Bottom tag inside container */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#080b11]/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Pratyaksh Kalsi</p>
                  <p className="text-[11px] text-slate-400">Frontend Developer · NITSRI</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00f5a0] shadow-[0_0_8px_#00f5a0]" />
              </div>
            </div>

            {/* Floating Tech Stack Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-6 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/10"
            >
              <SiReact className="w-5 h-5 text-[#00d9f5]" />
              <span className="text-xs font-bold text-white">React 19</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/4 -right-4 sm:-right-6 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/10"
            >
              <SiNextdotjs className="w-5 h-5 text-white" />
              <span className="text-xs font-bold text-white">Next.js 14</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-5 sm:-left-7 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/10"
            >
              <SiTailwindcss className="w-5 h-5 text-[#38bdf8]" />
              <span className="text-xs font-bold text-white">Tailwind v4</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-3 -right-3 sm:-right-4 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/10"
            >
              <SiSupabase className="w-5 h-5 text-[#00f5a0]" />
              <span className="text-xs font-bold text-white">Supabase</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

