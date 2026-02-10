import { motion } from "framer-motion";
import AmbientBackground from "./AmbientBackground";
import FloatingHearts from "./FloatingHearts";
import FloatingParticles from "./FloatingParticles";
import WrittenText from "./WrittenText";

const AfterYes = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <AmbientBackground variant="golden" />
      <FloatingHearts count={25} />
      <FloatingParticles color="gold" count={20} />
      <FloatingParticles color="rose" count={15} />

      {/* Warm valentine glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(340, 70%, 60%, 0.2), hsla(45, 70%, 60%, 0.15), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <WrittenText
          text="I'm really happy it's you."
          size="lg"
          delay={0.5}
        />

        <WrittenText
          text="Happy Valentine's Day ❤️"
          size="2xl"
          delay={2.5}
          className="text-blush-light"
        />

        {/* Signed closing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 5 }}
          className="pt-12"
        >
          <p
            className="handwritten text-3xl md:text-5xl"
            style={{
              background: "linear-gradient(135deg, hsl(340, 70%, 70%), hsl(5, 70%, 60%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            — With all my love 💞
          </p>
        </motion.div>

        {/* Gradient flourish */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 6.5 }}
          className="mx-auto w-48 h-[2px] origin-center"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(340, 65%, 65%), hsl(5, 70%, 55%), transparent)",
            boxShadow: "0 0 15px hsla(340, 65%, 65%, 0.5)",
          }}
        />
      </div>
    </div>
  );
};

export default AfterYes;
