import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiArrowUp, FiMail, FiHeart } from "react-icons/fi";
import Logo from "../assets/Logo.png";

const socials = [
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Pratyaksh1507",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pratyakshkalsi",
  },
  {
    Icon: FaXTwitter,
    label: "Twitter / X",
    href: "https://twitter.com/pratyaksh_kalsi",
  },
  {
    Icon: FiMail,
    label: "Email",
    href: "mailto:kalsi.pratyaksh@gmail.com",
  },
];

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-white/[0.06] text-white pt-16 pb-12 overflow-hidden">
      {/* Subtle bottom ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00f5a0]/5 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src={Logo} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white tracking-tight">
                Pratyaksh Kalsi
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Frontend engineer dedicated to crafting intuitive, performant, and memorable digital experiences. NIT Srinagar graduate.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs font-semibold text-slate-300">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00f5a0] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-[#00f5a0] hover:border-[#00f5a0]/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:text-white transition-all group"
            >
              <span>Back to top</span>
              <FiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#00f5a0]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Pratyaksh Kalsi. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Built with React 19, Tailwind CSS v4 & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

