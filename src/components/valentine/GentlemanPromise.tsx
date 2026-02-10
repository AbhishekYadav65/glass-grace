import { motion } from "framer-motion";
import AmbientBackground from "./AmbientBackground";
import FloatingParticles from "./FloatingParticles";

const promises = [
  "I listen.",
  "I respect your feelings.",
  "I protect what's soft.",
  "I care in quiet ways.",
];

const GentlemanPromise = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <AmbientBackground variant="default" />
      <FloatingParticles color="warm" count={12} />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="handwritten text-3xl md:text-5xl text-foreground mb-12 md:mb-16 relative z-10"
      >
        The way I care about you
      </motion.h2>

      <div className="relative z-10 max-w-2xl w-full space-y-8">
        {promises.map((promise, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.8 + i * 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative"
          >
            <p className="handwritten text-xl md:text-3xl text-foreground leading-relaxed pl-4">
              {promise}
            </p>
            
            {/* Glowing underline - warm red/orange */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.2 + i * 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute -bottom-2 left-4 right-0 h-[2px] origin-left"
              style={{
                background: `linear-gradient(90deg, 
                  hsla(5, 70%, 55%, 0.8),
                  hsla(25, 80%, 55%, 0.6),
                  transparent 80%
                )`,
                boxShadow: "0 0 10px hsla(25, 80%, 55%, 0.4)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GentlemanPromise;
