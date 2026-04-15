import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let x = 0,
      y = 0;
    let rafId;

    const moveHandler = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      if (cursor) {
        cursor.style.transform = `translate(${x - 40}px, ${y - 40}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveHandler);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-2xl opacity-50" />
    </div>
  );
}
