import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import FloatingParticles from "./FloatingParticles";

const reasons = [
  "You listen with your whole presence.",
  "Your empathy feels like warmth, not weight.",
  "You care in a way that makes people feel safe.",
  "You see beauty where others look away.",
  "Your gentleness is your greatest strength.",
];

const WhyYou = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 paper-grain overflow-hidden">
      <FloatingParticles color="rose" count={15} />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="handwritten text-3xl md:text-5xl text-rose mb-12 md:mb-16 relative z-10"
      >
        Why you...
      </motion.h2>

      <div className="relative z-10 grid gap-6 md:gap-8 max-w-3xl w-full">
        {reasons.map((reason, i) => (
          <GlassCard
            key={i}
            delay={0.5 + i * 0.3}
            rotate={(i % 2 === 0 ? 1 : -1) * (0.5 + Math.random() * 1)}
          >
            <p className="handwritten text-xl md:text-2xl text-foreground leading-relaxed">
              {reason}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default WhyYou;
