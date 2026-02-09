import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  rotate?: number;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", delay = 0, rotate = 0, hover = true }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate * 0.5 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { rotate: 0, scale: 1.02, transition: { duration: 0.8 } } : undefined}
      className={`glass-strong rounded-2xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
