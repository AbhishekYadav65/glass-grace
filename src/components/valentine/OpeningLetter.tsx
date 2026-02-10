import { motion } from "framer-motion";
import WrittenText from "./WrittenText";
import AmbientBackground from "./AmbientBackground";
import FloatingHearts from "./FloatingHearts";
import FloatingParticles from "./FloatingParticles";

interface OpeningLetterProps {
  onNext: () => void;
}

const OpeningLetter = ({ onNext }: OpeningLetterProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      <AmbientBackground variant="warm" />
      <FloatingHearts count={20} />
      <FloatingParticles color="rose" count={15} />

      {/* Valentine glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(340, 70%, 60%, 0.25), hsla(5, 70%, 55%, 0.1), transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-2xl text-center space-y-6">
        <WrittenText
          text="Happy Valentine's Day 💖"
          size="2xl"
          delay={0.5}
          className="text-blush-light"
        />

        <div className="h-4" />

        <WrittenText
          text="This is just for you."
          size="lg"
          delay={2.5}
          className="text-muted-foreground"
        />

        {/* Gradient underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 4.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto w-56 h-[2px] origin-center"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(340, 65%, 65%), hsl(5, 70%, 55%), transparent)",
            boxShadow: "0 0 15px hsla(340, 65%, 65%, 0.4)",
          }}
        />

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 6 }}
          onClick={onNext}
          className="glass-strong rounded-full px-8 py-4 handwritten text-xl heartbeat cursor-pointer mt-8"
          style={{
            background: "linear-gradient(135deg, hsla(340, 65%, 65%, 0.25), hsla(5, 70%, 55%, 0.2))",
            color: "hsl(340, 75%, 78%)",
            border: "1px solid hsla(340, 65%, 65%, 0.35)",
            boxShadow: "0 0 30px hsla(340, 65%, 65%, 0.2), 0 0 60px hsla(5, 70%, 55%, 0.1)",
          }}
          whileHover={{ scale: 1.05 }}
        >
          Open your Valentine 💌
        </motion.button>
      </div>
    </div>
  );
};

export default OpeningLetter;
