import { useEffect, useRef } from "react";

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

const FloatingHearts = ({ count = 15, className = "" }: FloatingHeartsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    const hearts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      size: Math.random() * 14 + 6,
      speedY: -Math.random() * 0.3 - 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.2 + 0.05,
      hue: 340 + (Math.random() - 0.5) * 30,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.01 + 0.005,
    }));

    const drawHeart = (x: number, y: number, size: number, color: string) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      const s = size / 2;
      ctx.moveTo(0, s * 0.4);
      ctx.bezierCurveTo(-s, -s * 0.5, -s * 2, s * 0.3, 0, s * 1.5);
      ctx.bezierCurveTo(s * 2, s * 0.3, s, -s * 0.5, 0, s * 0.4);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = size * 0.8;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      hearts.forEach((h) => {
        h.y += h.speedY;
        h.wobble += h.wobbleSpeed;
        h.x += h.speedX + Math.sin(h.wobble) * 0.3;
        h.opacity += (Math.random() - 0.5) * 0.005;
        h.opacity = Math.max(0.03, Math.min(0.25, h.opacity));

        if (h.y < -20) {
          h.y = canvas.offsetHeight + 20;
          h.x = Math.random() * canvas.offsetWidth;
        }
        if (h.x < -20) h.x = canvas.offsetWidth + 20;
        if (h.x > canvas.offsetWidth + 20) h.x = -20;

        drawHeart(h.x, h.y, h.size, `hsla(${h.hue}, 65%, 65%, ${h.opacity})`);
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default FloatingHearts;
