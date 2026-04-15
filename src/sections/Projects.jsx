import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Horizon Stay",
    tagline: "Hotel Management SaaS Dashboard",
    description:
      "A production-grade hotel management system with booking CRUD, cabin management, revenue analytics, and guest tracking. Features a dark-mode dashboard with real-time data, interactive charts, and full authentication.",
    tech: ["React 18", "Supabase", "React Query", "Styled Components", "Recharts", "Vite"],
    liveUrl: "https://horizon-stay.vercel.app",
    githubUrl: "https://github.com/Pratyaksh1507/horizon-stay",
    gradient: "from-indigo-600 via-purple-600 to-indigo-800",
    accentColor: "#818cf8",
  },
  {
    title: "Artisan Cafe",
    tagline: "Modern Specialty Cafe Platform",
    description:
      "A sleek, responsive cafe website with an interactive menu, real-time order system, admin dashboard, and newsletter signup. Built with a mobile-first approach and integrated with Supabase for backend operations.",
    tech: ["Next.js 14", "Tailwind CSS", "Supabase", "Vercel", "React"],
    liveUrl: "https://cafe-site-five.vercel.app",
    githubUrl: "https://github.com/Pratyaksh1507/cafe-site",
    gradient: "from-amber-700 via-orange-700 to-amber-900",
    accentColor: "#fbbf24",
  },
  {
    title: "Developer Portfolio",
    tagline: "Personal Website & Showcase",
    description:
      "This very site — a high-performance portfolio with particle effects, scroll-driven animations, an infinite skills carousel, and a typewriter hero. Built for speed with compressed assets and semantic HTML.",
    tech: ["React 19", "Framer Motion", "Tailwind CSS", "EmailJS", "Vite"],
    liveUrl: "#home",
    githubUrl: "https://github.com/Pratyaksh1507",
    gradient: "from-emerald-600 via-teal-600 to-cyan-800",
    accentColor: "#34d399",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full relative bg-black text-white overflow-hidden py-20 sm:py-28"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-amber-600/15 to-orange-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
            My Work
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            Production-ready projects built with modern technologies
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          className="flex flex-col gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
            >
              <div
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Preview area */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative lg:w-1/2 min-h-[280px] sm:min-h-[320px] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Project name overlay */}
                  <div className="relative z-10 text-center px-8">
                    <div
                      className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white/90 tracking-tight leading-none"
                      style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
                    >
                      {project.title.split(" ")[0]}
                      <br />
                      <span className="text-white/60">
                        {project.title.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-white/70 text-sm font-medium bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                      <FiExternalLink className="w-4 h-4" />
                      View Live
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </a>

                {/* Content area */}
                <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
                  <p
                    className="text-sm font-semibold uppercase tracking-widest mb-2"
                    style={{ color: project.accentColor }}
                  >
                    {project.tagline}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base sm:text-lg mb-6">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-gray-300 bg-white/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] hover:scale-[1.03] transition-transform shadow-lg"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
