import { motion } from "framer-motion";
import AmbientBackground from "./AmbientBackground";
import FloatingParticles from "./FloatingParticles";

const lines = [
  { text: "With you,", pause: false },
  { text: "I don't feel pressure.", pause: true },
  { text: "I don't feel like I have to be anything else.", pause: true },
  { text: "I feel calm.", pause: false },
  { text: "I feel safe.", pause: false },
  { text: "I feel real.", pause: false },
];

const HowYouMakeMe = () => {
  let cumulativeDelay = 0.5;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <AmbientBackground variant="warm" />
      <FloatingParticles color="rose" count={15} />

      <div className="relative z-10 max-w-2xl text-center space-y-3">
        {lines.map((line, i) => {
          const delay = cumulativeDelay;
          cumulativeDelay += line.pause ? 1.8 : 1.2;

          return (
            <motion.div key={i}>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  delay,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="handwritten text-2xl md:text-4xl leading-relaxed"
                style={{
                  color: i >= 3 
                    ? `hsl(340, ${65 + (i - 3) * 5}%, ${70 + (i - 3) * 3}%)`
                    : "hsl(0, 0%, 92%)",
                }}
              >
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 6,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  {line.text}
                </motion.span>
              </motion.p>
              {line.pause && <div className="h-4" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HowYouMakeMe;
