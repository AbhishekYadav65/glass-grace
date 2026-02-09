import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const memories = [
  {
    caption: "This moment stayed with me.",
    color: "hsla(348, 35%, 60%, 0.15)",
  },
  {
    caption: "I smile every time I remember this.",
    color: "hsla(38, 55%, 65%, 0.12)",
  },
  {
    caption: "You made this ordinary day feel extraordinary.",
    color: "hsla(348, 40%, 50%, 0.12)",
  },
  {
    caption: "I keep this close to my heart.",
    color: "hsla(30, 30%, 70%, 0.15)",
  },
];

const Moments = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 paper-grain overflow-hidden">
      <FloatingParticles color="gold" count={18} />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="handwritten text-3xl md:text-5xl text-rose mb-12 md:mb-16 relative z-10"
      >
        Moments I hold close
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {memories.map((mem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.3 }}
            className="float"
            style={{ animationDelay: `${i * 1.5}s` }}
          >
            <div
              className="glass-strong rounded-2xl overflow-hidden"
              style={{ boxShadow: `0 15px 50px ${mem.color}` }}
            >
              {/* Glass frame placeholder */}
              <div
                className="w-full h-48 md:h-56 relative"
                style={{
                  background: `linear-gradient(135deg, ${mem.color}, hsla(30, 30%, 90%, 0.3))`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-16 h-16 rounded-full"
                    style={{
                      background: "radial-gradient(circle, hsla(348, 35%, 60%, 0.3), transparent)",
                    }}
                  />
                </div>
                {/* Frosted edge */}
                <div
                  className="absolute inset-0 border-[3px] rounded-2xl pointer-events-none"
                  style={{
                    borderColor: "hsla(30, 30%, 95%, 0.4)",
                    boxShadow: "inset 0 0 30px hsla(30, 30%, 95%, 0.1)",
                  }}
                />
              </div>
              <div className="p-5">
                <p className="handwritten text-lg md:text-xl text-foreground opacity-80">
                  {mem.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Moments;
