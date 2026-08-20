import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./sections/Home";

// Code-split below-the-fold sections for instant initial paint
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

export default function App() {
  return (
    <motion.div
      className="relative min-h-screen bg-[#080b11] text-slate-100 selection:bg-[#00f5a0]/20 selection:text-[#00f5a0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <ScrollProgress />
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />

      <main className="relative z-10">
        <Home />
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </motion.div>
  );
}

