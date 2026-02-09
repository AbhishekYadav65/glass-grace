import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
  hover?: boolean;
  glowColor?: "pink" | "orange" | "yellow" | "blue";
}

const glowColors = {
  pink: { base: "340, 65%, 65%", light: "340, 75%, 75%" },
  orange: { base: "25, 80%, 55%", light: "30, 85%, 65%" },
  yellow: { base: "45, 70%, 60%", light: "48, 75%, 70%" },
  blue: { base: "220, 45%, 45%", light: "220, 55%, 55%" },
};

const GlassCard = ({ 
  children, 
  className = "", 
  delay = 0, 
  rotate = 0, 
  hover = true,
  glowColor = "pink" 
}: GlassCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = glowColors[glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate * 0.5 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={hover ? {
        rotate: rotate + (rotate > 0 ? 0.5 : -0.5),
        y: -4,
        transition: { duration: 0.6 },
      } : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: `radial-gradient(ellipse at center, hsla(${colors.light}, 0.15), transparent 70%)`,
          filter: "blur(20px)",
        }}
      />

      <div
        className="relative glass-strong rounded-2xl px-6 py-5 md:px-8 md:py-6 transition-all duration-500"
        style={{
          boxShadow: isHovered
            ? `0 0 40px hsla(${colors.base}, 0.2), inset 0 1px 0 hsla(220, 20%, 95%, 0.15)`
            : `0 8px 32px hsla(0, 0%, 0%, 0.3), inset 0 1px 0 hsla(220, 20%, 95%, 0.08)`,
          borderColor: isHovered
            ? `hsla(${colors.base}, 0.3)`
            : `hsla(220, 20%, 95%, 0.1)`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
