import { motion } from "framer-motion";
import { FiCheckCircle, FiZap, FiLayout, FiCpu, FiCode, FiArrowUpRight } from "react-icons/fi";
import p from "../assets/p.jpg";

const stats = [
  { value: "3+", label: "Live SaaS & Web Projects" },
  { value: "12+", label: "Modern Technologies" },
  { value: "NITSRI", label: "National Institute of Tech" },
  { value: "100%", label: "Focus on UX & Speed" },
];

const pillars = [
  {
    icon: FiLayout,
    title: "Pixel-Perfect UI/UX",
    description:
      "Translating designs into responsive, accessible, and fluid user interfaces with micro-interactions.",
  },
  {
    icon: FiZap,
    title: "High Performance",
    description:
      "Optimized assets, fast render cycles, minimal layout shift, and exceptional Core Web Vitals.",
  },
  {
    icon: FiCode,
    title: "Clean React Architecture",
    description:
      "Modular components, reusable hooks, and scalable state management built for production.",
  },
  {
    icon: FiCpu,
    title: "AI-Augmented Dev",
    description:
      "Integrating cutting-edge AI tools and APIs to create smarter, highly effective digital products.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#080b11] text-white py-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] rounded-full bg-[#00f5a0]/10 blur-[150px]" />
        <div className="absolute bottom-10 -left-32 w-[450px] h-[450px] rounded-full bg-[#00d9f5]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#00f5a0] tracking-widest uppercase mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Engineering with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">
              Passion & Precision.
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Alma Mater */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-[320px] sm:max-w-[340px]">
              {/* Outer frame glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00f5a0]/30 to-[#00d9f5]/30 blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />

              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/[0.12] aspect-square shadow-2xl">
                <img
                  src={p}
                  alt="Pratyaksh Kalsi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent opacity-60" />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#080b11]/85 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Pratyaksh Kalsi</p>
                    <p className="text-[11px] text-emerald-400">NIT Srinagar Graduate</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-300 font-medium">
                    🇮🇳 India
                  </span>
                </div>
              </div>
            </div>

            {/* Quick availability pill */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
              Open for remote roles worldwide & relocation
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am a frontend engineer who loves building smooth, intuitive, and performant web products. Having graduated with an engineering background from <strong className="text-white font-semibold">National Institute of Technology Srinagar (NITSRI)</strong>, I pair structured problem-solving with modern frontend craft.
              </p>
              <p>
                Whether developing interactive SaaS dashboards with <span className="text-[#00f5a0] font-medium">React 19 & Supabase</span>, deploying SSR platforms with <span className="text-[#00d9f5] font-medium">Next.js 14</span>, or experimenting with AI-assisted software interfaces, I focus on shipping clean, resilient, and accessible code.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="glass-card p-4 rounded-2xl border border-white/[0.07] hover:border-[#00f5a0]/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/[0.06] text-[#00f5a0]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 text-center"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-tight font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] hover:opacity-90 transition-all"
              >
                View Featured Work
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

