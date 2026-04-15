import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Clouduxe",
    duration: "Jul 2024 – Present",
    description:
      "Developed responsive UIs, dynamic pricing features, and user dashboards using modern frontend practices.",
    accent: "#818cf8",
  },
  {
    role: "Research Intern",
    company: "IIIT Hyderabad",
    duration: "Dec 2022 – Feb 2023",
    description:
      "Worked on analytical modeling of Age of Information and contributed to simulations for research outcomes.",
    accent: "#34d399",
  },
  {
    role: "IoT Intern (Part-time)",
    company: "Internship Studio, Pune",
    duration: "Dec 2021 – Feb 2022",
    description:
      "Assisted in IoT automation tool development with sensor integration and basic logic prototyping.",
    accent: "#fbbf24",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden py-20 sm:py-28"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-600/15 to-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-emerald-600/10 to-teal-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]">
            Experience
          </h2>
          <p className="mt-3 text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical line */}
          <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <div className="flex flex-col gap-8 sm:gap-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 mt-1.5">
                  <div
                    className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full"
                    style={{
                      backgroundColor: exp.accent,
                      boxShadow: `0 0 12px ${exp.accent}60`,
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] rounded-full"
                    style={{
                      border: `2px solid ${exp.accent}30`,
                    }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 group">
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <span
                        className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full self-start sm:self-auto"
                        style={{
                          color: exp.accent,
                          backgroundColor: `${exp.accent}15`,
                          border: `1px solid ${exp.accent}30`,
                        }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: exp.accent }}
                    >
                      {exp.company}
                    </p>
                    <p className="text-gray-400 leading-relaxed text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
