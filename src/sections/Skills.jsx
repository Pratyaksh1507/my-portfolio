import { FaPython, FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <SiReactrouter />, name: "React Router" },
    { icon: <TbBrandCpp />, name: "C++" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
  ];

  const repeated = [...skills, ...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  // measured loop width (half of track scrollWidth)
  const [loopWidth, setLoopWidth] = useState(0);

  // IntersectionObserver to mark active/inactive
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ResizeObserver to reliably read scrollWidth when layout/icons settle
  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    // initial set (in case it's ready)
    const compute = () => {
      const full = node.scrollWidth || 0;
      setLoopWidth(full > 0 ? full / 2 : 0);
    };
    compute();

    // observe size changes (fonts/icons loading, window resize, etc.)
    const ro = new ResizeObserver(() => compute());
    ro.observe(node);

    // observe parent as well in case duplication/layout changes
    if (node.parentElement) ro.observe(node.parentElement);

    return () => ro.disconnect();
  }, [trackRef]);

  // wheel & touch handlers (active only)
  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) => {
      if (touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  // main animation loop — only run meaningful wrapping when loopWidth > 0
  useEffect(() => {
    let id;
    let last = performance.now();
    const BASE_SPEED = 60; // px/sec

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      // if not active, keep speed 0 (pauses) — still keep RAF to keep smooth resume
      const speed = active ? BASE_SPEED * dir : 0;

      // read current x
      let next = x.get() + speed * dt;

      // only apply looping math when loopWidth is known and > 0
      if (loopWidth > 0) {
        // keep next in [-loopWidth, 0) range to avoid gaps
        // this wrapping logic is robust for negative/positive overflow
        if (next <= -loopWidth) {
          next += loopWidth;
          // micro-adjust so we don't land exactly at boundary (reduces visible seam)
          if (next > -loopWidth / 2) next -= 0.0001;
        }
        if (next >= 0) {
          next -= loopWidth;
          if (next < -loopWidth / 2) next += 0.0001;
        }
      }
      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x, active, loopWidth]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-10 text-6xl md:text-7xl lg:text-8xl text-[#1cd8d2] items-center"
          style={{
            x,
            whiteSpace: "nowrap",
            willChange: "transform",
            display: "inline-flex",
          }}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              aria-label={s.name}
              title={s.name}
            >
              <span className="hover:scale-110 transition-transform duration-300 text-5xl md:text-6xl">
                {s.icon}
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
