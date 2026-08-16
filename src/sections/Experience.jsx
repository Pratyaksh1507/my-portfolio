import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiCheck } from "react-icons/fi";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Flickerlink Technologies (OPC) Private Limited",
    duration: "Nov '25 – Apr '26",
    type: "Internship",
    location: "Remote",
    accent: "#00f5a0",
    bullets: [
      "Developed responsive frontend features and optimized application performance, reducing load times through efficient rendering techniques.",
      "Built interactive user interfaces with API integrations and created real-time analytics dashboards featuring live data updates for enterprise users.",
    ],
    tech: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Dashboards", "Performance"],
  },
  {
    role: "Research Intern",
    company: "IIIT Hyderabad",
    duration: "Dec 2022 – Feb 2023",
    type: "Internship",
    location: "Hyderabad, India",
    accent: "#00d9f5",
    bullets: [
      "Conducted analytical modeling on Age of Information (AoI) metrics to quantify information freshness in wireless networks.",
      "Developed Python simulation pipelines to evaluate network queueing latency and optimize packet transmission schedules.",
      "Collaborated with faculty researchers on data analysis and formal simulation outcomes.",
    ],
    tech: ["Python", "Mathematical Modeling", "Simulation", "Data Analysis"],
  },
  {
    role: "IoT Engineer Intern",
    company: "Internship Studio",
    duration: "Dec 2021 – Feb 2022",
    type: "Internship",
    location: "Pune, India",
    accent: "#38bdf8",
    bullets: [
      "Prototyped IoT automation tools with hardware sensor integrations and custom control logic.",
      "Implemented communication protocols between embedded devices and local data logging dashboards.",
    ],
    tech: ["C++", "Sensors", "IoT Hardware", "Microcontrollers"],
  },
];

const education = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "National Institute of Technology Srinagar (NITSRI)",
  duration: "2019 – 2023",
  location: "Srinagar, India",
  description:
    "Completed comprehensive engineering coursework covering Data Structures & Algorithms, Computer Networks, Operating Systems, and Object-Oriented Software Engineering.",
  accent: "#a78bfa",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-24 bg-[#080b11] text-white overflow-hidden border-t border-white/[0.04]"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] rounded-full bg-[#00f5a0]/5 blur-[160px]" />
        <div className="absolute bottom-10 -left-32 w-[450px] h-[450px] rounded-full bg-[#00d9f5]/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-[#00f5a0] tracking-widest uppercase mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Experience &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]">
              Education.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            My professional path, research contributions, and engineering foundation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#00f5a0] via-[#00d9f5] to-[#a78bfa]/40 opacity-40" />

          <div className="flex flex-col gap-10 sm:gap-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Luminous Node */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: `${exp.accent}12`,
                      borderColor: `${exp.accent}40`,
                      boxShadow: `0 0 15px ${exp.accent}20`,
                      color: exp.accent,
                    }}
                  >
                    <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 glass-card p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-white/[0.15] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: exp.accent }}
                        >
                          {exp.company}
                        </span>
                        <span className="text-slate-400 text-xs">•</span>
                        <span className="text-xs text-slate-400 font-medium">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <span
                      className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full self-start sm:self-auto"
                      style={{
                        color: exp.accent,
                        backgroundColor: `${exp.accent}15`,
                        border: `1px solid ${exp.accent}30`,
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 my-4 text-xs sm:text-sm text-slate-300">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FiCheck className="w-3.5 h-3.5 text-[#00f5a0] flex-shrink-0 mt-1" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex gap-6 sm:gap-8"
            >
              {/* Education Node */}
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center border shadow-lg backdrop-blur-md"
                  style={{
                    backgroundColor: `${education.accent}12`,
                    borderColor: `${education.accent}40`,
                    boxShadow: `0 0 15px ${education.accent}20`,
                    color: education.accent,
                  }}
                >
                  <FiAward className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Education Content */}
              <div className="flex-1 glass-card p-6 sm:p-7 rounded-3xl border border-white/[0.08] hover:border-[#a78bfa]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {education.degree}
                    </h3>
                    <p
                      className="text-sm font-semibold mt-0.5"
                      style={{ color: education.accent }}
                    >
                      {education.institution}
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full self-start sm:self-auto"
                    style={{
                      color: education.accent,
                      backgroundColor: `${education.accent}15`,
                      border: `1px solid ${education.accent}30`,
                    }}
                  >
                    {education.duration}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {education.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

