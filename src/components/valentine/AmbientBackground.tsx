import { motion } from "framer-motion";

interface AmbientBackgroundProps {
  variant?: "default" | "warm" | "cool" | "golden";
}

const AmbientBackground = ({ variant = "default" }: AmbientBackgroundProps) => {
  const orbConfigs = {
    default: [
      { color: "hsla(340, 65%, 65%, 0.3)", size: 400, x: "20%", y: "30%", duration: 20 },
      { color: "hsla(220, 45%, 35%, 0.25)", size: 350, x: "70%", y: "60%", duration: 25 },
      { color: "hsla(25, 80%, 55%, 0.2)", size: 300, x: "80%", y: "20%", duration: 22 },
    ],
    warm: [
      { color: "hsla(340, 65%, 65%, 0.35)", size: 450, x: "30%", y: "40%", duration: 22 },
      { color: "hsla(25, 80%, 55%, 0.3)", size: 380, x: "65%", y: "25%", duration: 18 },
      { color: "hsla(45, 70%, 60%, 0.25)", size: 320, x: "75%", y: "70%", duration: 24 },
    ],
    cool: [
      { color: "hsla(220, 50%, 40%, 0.35)", size: 420, x: "25%", y: "35%", duration: 20 },
      { color: "hsla(340, 55%, 55%, 0.25)", size: 360, x: "70%", y: "55%", duration: 23 },
      { color: "hsla(220, 45%, 25%, 0.3)", size: 300, x: "50%", y: "80%", duration: 26 },
    ],
    golden: [
      { color: "hsla(45, 70%, 60%, 0.35)", size: 400, x: "35%", y: "30%", duration: 21 },
      { color: "hsla(30, 85%, 65%, 0.3)", size: 350, x: "60%", y: "60%", duration: 19 },
      { color: "hsla(340, 60%, 60%, 0.2)", size: 280, x: "20%", y: "70%", duration: 24 },
    ],
  };

  const orbs = orbConfigs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: variant === "golden" 
            ? "linear-gradient(180deg, hsl(220, 20%, 8%) 0%, hsl(30, 15%, 12%) 100%)"
            : variant === "warm"
            ? "linear-gradient(180deg, hsl(220, 20%, 8%) 0%, hsl(340, 20%, 10%) 100%)"
            : "linear-gradient(180deg, hsl(220, 25%, 6%) 0%, hsl(220, 20%, 10%) 100%)"
        }}
      />

      {/* Ambient orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -30, 20, -20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
