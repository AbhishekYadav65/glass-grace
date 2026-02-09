import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";
import WrittenText from "./WrittenText";

const AfterYes = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 paper-grain overflow-hidden">
      <FloatingParticles color="warm" count={35} />
      <FloatingParticles color="gold" count={15} />

      {/* Warm glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(38, 55%, 65%, 0.15), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <WrittenText
          text="Thank you for letting me feel close to you."
          size="lg"
          delay={0.5}
        />

        <WrittenText
          text="I promise to treat your heart gently."
          size="lg"
          delay={2}
          className="text-rose"
        />

        {/* Signed name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 4 }}
          className="pt-12"
        >
          <p
            className="handwritten text-3xl md:text-5xl"
            style={{ color: "hsl(38, 55%, 60%)" }}
          >
            — With all my heart
          </p>
        </motion.div>

        {/* Gold flourish */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 5.5 }}
          className="mx-auto w-40 h-[1.5px] origin-center"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(38, 55%, 65%), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default AfterYes;
