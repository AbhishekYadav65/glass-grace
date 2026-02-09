import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import AmbientBackground from "./AmbientBackground";
import FloatingParticles from "./FloatingParticles";

const reasons = [
  "Your empathy isn't loud — it's steady.",
  "You notice what others overlook.",
  "You make space for feelings instead of judging them.",
  "That's rare. And it matters.",
];

const WhyYou = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <AmbientBackground variant="default" />
      <FloatingParticles color="rose" count={18} />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="handwritten text-3xl md:text-5xl text-blush-light mb-12 md:mb-16 relative z-10"
      >
        Why you feel different...
      </motion.h2>

      <div className="relative z-10 grid gap-6 md:gap-8 max-w-3xl w-full">
        {reasons.map((reason, i) => (
          <GlassCard
            key={i}
            delay={0.6 + i * 0.4}
            rotate={(i % 2 === 0 ? 1 : -1) * (0.3 + Math.random() * 0.8)}
            glowColor={i % 2 === 0 ? "orange" : "yellow"}
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
