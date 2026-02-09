import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
}

interface FloatingParticlesProps {
  color?: "rose" | "gold" | "warm";
  count?: number;
  className?: string;
}

const FloatingParticles = ({ color = "rose", count = 30, className = "" }: FloatingParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const colorMap = {
      rose: { h: 348, s: 35, l: 60 },
      gold: { h: 38, s: 55, l: 65 },
      warm: { h: 30, s: 30, l: 80 },
    };
    const c = colorMap[color];

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.4 + 0.1,
      hue: c.h + (Math.random() - 0.5) * 10,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += (Math.random() - 0.5) * 0.01;
        p.opacity = Math.max(0.05, Math.min(0.5, p.opacity));

        if (p.y < -10) p.y = canvas.offsetHeight + 10;
        if (p.x < -10) p.x = canvas.offsetWidth + 10;
        if (p.x > canvas.offsetWidth + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${c.s}%, ${c.l}%, ${p.opacity})`;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [color, count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default FloatingParticles;
