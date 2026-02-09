import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const lines = [
  "With you,",
  "I don't rush my words.",
  "",
  "I don't hide softness.",
  "",
  "I feel allowed to be real.",
];

const HowYouMakeMe = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(30, 30%, 95%), hsl(30, 25%, 88%))",
      }}
    >
      <FloatingParticles color="warm" count={12} />
      
      <div className="relative z-10 max-w-2xl text-center space-y-2">
        {lines.map((line, i) => {
          if (line === "") {
            return <div key={i} className="h-6" />;
          }
          return (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.5 + i * 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="handwritten text-2xl md:text-4xl text-foreground leading-relaxed"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 5,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {line}
              </motion.span>
            </motion.p>
          );
        })}
      </div>
    </div>
  );
};

export default HowYouMakeMe;
