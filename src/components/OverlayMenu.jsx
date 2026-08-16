import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowUpRight, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function OverlayMenu({ isOpen, onClose, activeSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#080b11]/95 backdrop-blur-2xl p-6 sm:p-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#00f5a0]">
              Navigation
            </span>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.08] text-white hover:bg-white/[0.15] transition-colors"
              aria-label="Close menu"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto">
            <ul className="flex flex-col gap-5 text-center">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index + 0.1, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors inline-block ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00f5a0] to-[#00d9f5]"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Actions & Socials */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-4 text-slate-400 text-lg">
              <a
                href="https://github.com/Pratyaksh1507"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#00f5a0] transition-colors"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/pratyakshkalsi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#00d9f5] transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://twitter.com/pratyaksh_kalsi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="hover:text-[#00f5a0] transition-colors"
              >
                <FaXTwitter />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/PratyakshKalsi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/[0.06] border border-white/10 rounded-full"
              >
                <FiFileText className="w-3.5 h-3.5 text-[#00f5a0]" />
                Resume
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-black bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] rounded-full"
              >
                Get In Touch
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

