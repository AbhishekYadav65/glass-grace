import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const promises = [
  "I'll be gentle with your feelings.",
  "I'll respect the depth you carry.",
  "I won't rush what deserves care.",
];

const GentlePromise = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(20, 15%, 15%), hsl(20, 12%, 18%))",
      }}
    >
      <FloatingParticles color="gold" count={40} />

      <div className="relative z-10 max-w-2xl text-center space-y-12">
        {promises.map((promise, i) => (
          <div key={i} className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8 + i * 1.2 }}
              className="handwritten text-2xl md:text-4xl leading-relaxed"
              style={{ color: "hsl(35, 40%, 90%)" }}
            >
              {promise}
            </motion.p>
            
            {/* Gold stroke */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 + i * 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mx-auto w-32 h-[2px] origin-left"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(38, 55%, 65%), hsl(40, 60%, 75%), hsl(38, 55%, 65%), transparent)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GentlePromise;
