import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiCheckCircle, FiLayers } from "react-icons/fi";
import horizonStayHero from "../assets/horizon-stay-hero.png";
import artisanCafeHero from "../assets/artisan-cafe-hero.png";
import portfolioHero from "../assets/portfolio-hero.png";

const projects = [
  {
    id: "horizon-stay",
    title: "Horizon Stay",
    tagline: "Hotel Management SaaS & Operations Dashboard",
    category: "Full-Stack SaaS",
    image: horizonStayHero,
    description:
      "A production-grade hotel management web application featuring end-to-end booking workflows, real-time cabin management, revenue analytics, and authenticated administrative operations.",
    features: [
      "Real-time booking CRUD & cabin availability tracking",
      "Interactive sales & occupancy charts powered by Recharts",
      "Secure Supabase authentication and Row Level Security (RLS)",
      "Optimized remote state caching using React Query",
    ],
    tech: ["React 19", "Supabase", "React Query", "Styled Components", "Recharts", "Vite"],
    liveUrl: "https://horizon-stay.vercel.app",
    githubUrl: "https://github.com/Pratyaksh1507/horizon-stay",
    badge: "Featured SaaS",
    accentColor: "#00d9f5",
  },
  {
    id: "artisan-cafe",
    title: "Artisan Cafe",
    tagline: "Modern Specialty Cafe & E-Commerce Platform",
    category: "Frontend & Next.js",
    image: artisanCafeHero,
    description:
      "A sleek, responsive digital ordering platform for a specialty cafe. Offers an interactive menu, cart and order checkout flow, admin catalog management, and automated newsletter onboarding.",
    features: [
      "Next.js 14 App Router with Server-Side Rendering (SSR)",
      "Supabase backend for dynamic menu items and orders",
      "Mobile-first responsive UX with fluid micro-interactions",
      "Admin portal for product catalog updates and inventory",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Supabase", "React", "Vercel"],
    liveUrl: "https://cafe-site-five.vercel.app",
    githubUrl: "https://github.com/Pratyaksh1507/cafe-site",
    badge: "E-Commerce",
    accentColor: "#00f5a0",
  },
  {
    id: "portfolio-v2",
    title: "Developer Portfolio (v2)",
    tagline: "High-Performance Personal Showcase",
    category: "Creative Web",
    image: portfolioHero,
    description:
      "An engineered personal website featuring custom spring-interpolated physics cursor, ambient canvas particle stardust, accessible colorways, and integrated EmailJS client gateway.",
    features: [
      "Tailwind CSS v4 and Framer Motion spring physics",
      "Lightweight canvas particle simulation with high-DPR scaling",
      "Client-side verified EmailJS contact pipeline",
      "100/100 Lighthouse performance and SEO best practices",
    ],
    tech: ["React 19", "Tailwind CSS v4", "Framer Motion", "EmailJS", "Vite"],
    liveUrl: "#home",
    githubUrl: "https://github.com/Pratyaksh1507",
    badge: "Personal Brand",
    accentColor: "#38bdf8",
  },
];


const categories = ["All", "Full-Stack SaaS", "Frontend & Next.js", "Creative Web"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative w-full py-24 bg-[#080b11] text-white overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-28 w-[500px] h-[500px] rounded-full bg-[#00d9f5]/8 blur-[160px]" />
        <div className="absolute bottom-1/4 -right-28 w-[500px] h-[500px] rounded-full bg-[#00f5a0]/8 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#00f5a0] tracking-widest uppercase mb-3">
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">
              Projects.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            A showcase of production-ready applications, SaaS dashboards, and creative web engineering.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-[1.02]"
                  : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                  className="group relative rounded-3xl overflow-hidden glass-card border border-white/[0.08] p-4 sm:p-6 lg:p-8"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    {/* Browser Mockup Preview */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "" : "lg:col-start-7"
                      }`}
                    >
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="block group/mockup relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c1017] shadow-2xl transition-all duration-300 hover:border-[#00f5a0]/40"
                      >
                        {/* Browser Top Window Bar */}
                        <div className="h-8 px-3.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono px-3 py-0.5 rounded-md bg-white/[0.04] max-w-[200px] truncate">
                            {project.liveUrl.replace("https://", "")}
                          </div>
                          <FiExternalLink className="w-3 h-3 text-slate-400 group-hover/mockup:text-[#00f5a0] transition-colors" />
                        </div>

                        {/* Project Screenshot / Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#07090e] flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/mockup:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080b11]/80 via-transparent to-transparent opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                            <span className="text-xs font-semibold text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-md">
                              Click to launch live app
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Content / Details */}
                    <div
                      className={`lg:col-span-6 flex flex-col justify-center ${
                        isEven ? "" : "lg:col-start-1"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                          style={{
                            color: project.accentColor,
                            backgroundColor: `${project.accentColor}15`,
                            border: `1px solid ${project.accentColor}30`,
                          }}
                        >
                          {project.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm font-medium text-slate-300 mb-4">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-slate-400 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Key features bullets */}
                      <div className="space-y-2 mb-6">
                        {project.features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <FiCheckCircle className="w-3.5 h-3.5 text-[#00f5a0] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target={project.liveUrl.startsWith("http") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(0,245,160,0.25)]"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <FiGithub className="w-3.5 h-3.5 text-slate-300" />
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* GitHub link banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center text-white text-2xl">
              <FiGithub />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Want to see more code?</h4>
              <p className="text-xs text-slate-400">
                Explore open source repositories, algorithms, and experiments on GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/Pratyaksh1507"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-all"
          >
            Visit GitHub Profile
            <FiExternalLink className="w-3.5 h-3.5 text-[#00f5a0]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

