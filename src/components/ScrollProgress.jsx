import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left shadow-[0_0_12px_rgba(0,245,160,0.6)]"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00f5a0 0%, #00d9f5 50%, #38bdf8 100%)",
      }}
    />
  );
}

