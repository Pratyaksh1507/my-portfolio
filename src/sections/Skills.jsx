import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiVite,
  SiStyledcomponents,
  SiReactrouter,
  SiVercel,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { TbBrandCpp, TbApi, TbDeviceLaptop, TbSpeedboat } from "react-icons/tb";

const allSkills = [
  // Frontend
  {
    name: "React 19",
    category: "Frontend",
    icon: FaReact,
    color: "#00d9f5",
    level: "Advanced",
  },
  {
    name: "Next.js 14",
    category: "Frontend",
    icon: SiNextdotjs,
    color: "#ffffff",
    level: "Proficient",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    icon: SiJavascript,
    color: "#f7df1e",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178c6",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS v4",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#38bdf8",
    level: "Advanced",
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: SiVite,
    color: "#bd34fe",
    level: "Advanced",
  },
  {
    name: "Redux Toolkit / Query",
    category: "Frontend",
    icon: SiRedux,
    color: "#764abc",
    level: "Proficient",
  },
  {
    name: "React Router",
    category: "Frontend",
    icon: SiReactrouter,
    color: "#f44250",
    level: "Advanced",
  },
  {
    name: "HTML5 / CSS3",
    category: "Frontend",
    icon: FaHtml5,
    color: "#e34f26",
    level: "Advanced",
  },

  // Backend & Cloud
  {
    name: "Supabase",
    category: "Backend & Cloud",
    icon: SiSupabase,
    color: "#3ecf8e",
    level: "Proficient",
  },
  {
    name: "Node.js",
    category: "Backend & Cloud",
    icon: FaNodeJs,
    color: "#68a063",
    level: "Intermediate",
  },
  {
    name: "PostgreSQL",
    category: "Backend & Cloud",
    icon: SiPostgresql,
    color: "#336791",
    level: "Intermediate",
  },
  {
    name: "Python",
    category: "Backend & Cloud",
    icon: FaPython,
    color: "#4584b6",
    level: "Proficient",
  },
  {
    name: "C++",
    category: "Backend & Cloud",
    icon: TbBrandCpp,
    color: "#00599c",
    level: "Intermediate",
  },
  {
    name: "RESTful APIs",
    category: "Backend & Cloud",
    icon: TbApi,
    color: "#00f5a0",
    level: "Advanced",
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    category: "Tools & DevOps",
    icon: FaGitAlt,
    color: "#f05032",
    level: "Advanced",
  },
  {
    name: "Vercel",
    category: "Tools & DevOps",
    icon: SiVercel,
    color: "#ffffff",
    level: "Advanced",
  },
  {
    name: "Postman",
    category: "Tools & DevOps",
    icon: SiPostman,
    color: "#ff6c37",
    level: "Proficient",
  },
  {
    name: "Figma",
    category: "Tools & DevOps",
    icon: FaFigma,
    color: "#f24e1e",
    level: "Intermediate",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend & Cloud",
  "Tools & DevOps",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <section
      id="skills"
      className="relative w-full py-24 bg-[#080b11] text-white overflow-hidden border-t border-white/[0.04]"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00f5a0]/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#00f5a0] tracking-widest uppercase mb-3">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">
              Technologies.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Modern tools and frameworks I use to bring ideas to life with high performance and clean code.
          </p>
        </motion.div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-[1.02]"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  className="glass-card group p-4 rounded-2xl border border-white/[0.07] flex flex-col items-center justify-center text-center gap-2.5 hover:scale-[1.03] transition-all cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                      boxShadow: `0 0 20px ${skill.color}10`,
                    }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00f5a0] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Infinite Horizontal Smooth Marquee */}
      <div className="relative mt-16 w-full overflow-hidden border-y border-white/[0.06] bg-white/[0.01] py-6">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#080b11] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#080b11] to-transparent" />

        <div className="flex gap-12 sm:gap-16 w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused] items-center">
          {marqueeSkills.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors select-none"
              >
                <span style={{ color: s.color }} className="text-2xl sm:text-3xl">
                  <Icon />
                </span>
                <span className="text-sm font-semibold tracking-wide text-slate-200">
                  {s.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

