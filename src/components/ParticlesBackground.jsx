import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationId = null;
    let particles = [];
    let isRunning = true;
    const particleCount = 36;
    const colors = [
      "rgba(255, 255, 255, 0.35)",
      "rgba(0, 245, 160, 0.45)",
      "rgba(0, 217, 245, 0.4)",
      "rgba(147, 197, 253, 0.3)",
    ];

    function setCanvasSize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.x = initial ? Math.random() * w : Math.random() * w;
        this.y = initial ? Math.random() * h : Math.random() > 0.5 ? 0 : h;
        this.radius = Math.random() * 1.3 + 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.alphaSpeed = (Math.random() - 0.5) * 0.006;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0.08, Math.min(0.75, this.alpha));
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha += this.alphaSpeed;

        if (this.alpha <= 0.08 || this.alpha >= 0.75) {
          this.alphaSpeed = -this.alphaSpeed;
        }

        const w = window.innerWidth;
        const h = window.innerHeight;
        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
        if (this.y < -10) this.y = h + 10;
        if (this.y > h + 10) this.y = -10;

        this.draw();
      }
    }

    function init() {
      setCanvasSize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    init();

    function animate() {
      if (!isRunning) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationId = requestAnimationFrame(animate);
    }

    animate();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
      }, 150);
    };

    // Pause animation when tab is inactive to save battery and CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
        if (animationId) cancelAnimationFrame(animationId);
      } else {
        if (!isRunning) {
          isRunning = true;
          animationId = requestAnimationFrame(animate);
        }
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isRunning = false;
      if (animationId) cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}

