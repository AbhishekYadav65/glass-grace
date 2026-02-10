import { motion } from "framer-motion";
import AmbientBackground from "./AmbientBackground";
import FloatingHearts from "./FloatingHearts";
import FloatingParticles from "./FloatingParticles";

const lines = [
  { text: "You make me smile without trying.", pause: false },
  { text: "You make calm feel easy.", pause: true },
  { text: "You make love feel gentle.", pause: true },
];

const HowYouMakeMe = () => {
  let cumulativeDelay = 0.5;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <AmbientBackground variant="warm" />
      <FloatingHearts count={18} />
      <FloatingParticles color="rose" count={12} />

      <div className="relative z-10 max-w-2xl text-center space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="handwritten text-3xl md:text-5xl text-blush-light mb-10"
        >
          How you make me feel 💗
        </motion.h2>

        {lines.map((line, i) => {
          const delay = cumulativeDelay;
          cumulativeDelay += line.pause ? 2 : 1.4;

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
                  color: `hsl(340, ${65 + i * 5}%, ${70 + i * 3}%)`,
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
              {line.pause && <div className="h-6" />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HowYouMakeMe;
