import { motion } from "framer-motion";

interface WrittenTextProps {
  text: string;
  delay?: number;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl",
  lg: "text-2xl md:text-4xl",
  xl: "text-3xl md:text-5xl",
  "2xl": "text-4xl md:text-6xl",
};

const WrittenText = ({ text, delay = 0, className = "", size = "lg" }: WrittenTextProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`handwritten ${sizeClasses[size]} leading-relaxed text-foreground ${className}`}
    >
      {text}
    </motion.p>
  );
};

export default WrittenText;
