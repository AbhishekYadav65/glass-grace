import { motion } from "framer-motion";
import WrittenText from "./WrittenText";
import AmbientBackground from "./AmbientBackground";
import FloatingParticles from "./FloatingParticles";

interface OpeningLetterProps {
  onNext: () => void;
}

const OpeningLetter = ({ onNext }: OpeningLetterProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      <AmbientBackground variant="cool" />
      <FloatingParticles color="warm" count={25} />

      <div className="relative z-10 max-w-2xl text-center space-y-6">
        <WrittenText
          text="Some people feel more."
          size="xl"
          delay={0.5}
        />
        
        <WrittenText
          text="And that's something I respect deeply."
          size="lg"
          delay={2}
          className="text-muted-foreground"
        />

        <div className="h-8" />

        <WrittenText
          text="This is something I wanted to say—"
          size="lg"
          delay={4}
        />
        
        <WrittenText
          text="without rushing it."
          size="xl"
          delay={5.5}
          className="text-blush-light"
        />

        {/* Gradient underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto w-56 h-[2px] origin-center"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(340, 65%, 65%), hsl(220, 45%, 45%), transparent)",
          }}
        />

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 8.5 }}
          onClick={onNext}
          className="glass-strong rounded-full px-8 py-4 handwritten text-xl heartbeat cursor-pointer mt-8"
          style={{
            background: "linear-gradient(135deg, hsla(340, 65%, 65%, 0.2), hsla(220, 45%, 45%, 0.2))",
            color: "hsl(340, 75%, 78%)",
            border: "1px solid hsla(340, 65%, 65%, 0.3)",
            boxShadow: "0 0 30px hsla(340, 65%, 65%, 0.15), 0 0 60px hsla(220, 45%, 45%, 0.1)",
          }}
          whileHover={{ scale: 1.05 }}
        >
          Stay with me for a moment
        </motion.button>
      </div>
    </div>
  );
};

export default OpeningLetter;
