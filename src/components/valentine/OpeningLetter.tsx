import { motion } from "framer-motion";
import WrittenText from "./WrittenText";
import FloatingParticles from "./FloatingParticles";

interface OpeningLetterProps {
  onNext: () => void;
}

const OpeningLetter = ({ onNext }: OpeningLetterProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 paper-grain overflow-hidden">
      <FloatingParticles color="warm" count={20} />
      
      {/* Soft moving light */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsla(348, 35%, 60%, 0.3), transparent 70%)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <WrittenText
          text="Some hearts feel the world more deeply."
          size="xl"
          delay={0.5}
        />
        
        <WrittenText
          text="I noticed yours."
          size="2xl"
          delay={2}
          className="text-rose"
        />

        {/* Ink underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 3.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto w-48 h-[2px] origin-left"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(348, 35%, 48%), transparent)",
          }}
        />

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 4 }}
          onClick={onNext}
          className="glass-strong rounded-full px-8 py-4 handwritten text-xl text-rose hover:text-rose-deep transition-colors duration-700 heartbeat cursor-pointer"
        >
          Come a little closer
        </motion.button>
      </div>
    </div>
  );
};

export default OpeningLetter;
