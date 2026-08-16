import { useEffect, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu, FiArrowUpRight, FiFileText } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#080b11]/85 backdrop-blur-xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.5)] shadow-cyan-950/20"
              : "bg-[#080b11]/40 backdrop-blur-md border border-white/[0.06]"
          }`}
        >
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#00f5a0]/50 transition-colors">
              <img
                src={Logo}
                alt="Pratyaksh Kalsi"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#00f5a0] transition-colors">
                Pratyaksh
              </span>
              <span className="hidden sm:flex items-center gap-1 text-[10px] text-emerald-400 font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.1] shadow-inner shadow-white/5 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00f5a0]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/PratyakshKalsi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all"
            >
              <FiFileText className="w-3.5 h-3.5 text-[#00f5a0]" />
              Resume
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-black bg-gradient-to-r from-[#00f5a0] to-[#00d9f5] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] rounded-full transition-all shadow-[0_0_20px_rgba(0,245,160,0.3)]"
            >
              Let's Talk
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 text-white bg-white/[0.06] border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}

