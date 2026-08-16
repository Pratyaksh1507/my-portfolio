import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let particles = [];
    const particleCount = 42;
    const colors = [
      "rgba(255, 255, 255, 0.4)",
      "rgba(0, 245, 160, 0.5)",
      "rgba(0, 217, 245, 0.45)",
      "rgba(147, 197, 253, 0.35)",
    ];

    function setCanvasSize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
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
        this.y = initial ? Math.random() * h : (Math.random() > 0.5 ? 0 : h);
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;
        this.alpha = Math.random() * 0.6 + 0.2;
        this.alphaSpeed = (Math.random() - 0.5) * 0.008;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.8, this.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha += this.alphaSpeed;

        if (this.alpha <= 0.1 || this.alpha >= 0.8) {
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
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}

