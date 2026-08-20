import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices with motion enabled
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFine || prefersReducedMotion) return;
    setIsPointerDevice(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, select, .interactive-hover");
      setIsHovered(!!target);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.body.addEventListener("mouseenter", handleMouseEnter, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Outer subtle glow aura */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          backgroundColor: isHovered ? "rgba(0, 245, 160, 0.15)" : "rgba(0, 217, 245, 0.12)",
          borderColor: isHovered ? "rgba(0, 245, 160, 0.5)" : "rgba(0, 217, 245, 0.3)",
          borderWidth: "1px",
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Center sharp dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-[#00f5a0]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.9 : 0,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}

