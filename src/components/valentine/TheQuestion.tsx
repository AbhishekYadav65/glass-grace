import { motion } from "framer-motion";

interface TheQuestionProps {
  onYes: () => void;
}

const TheQuestion = ({ onYes }: TheQuestionProps) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 paper-grain overflow-hidden">
      {/* Stillness, then text */}
      <div className="relative z-10 max-w-2xl text-center space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="handwritten text-xl md:text-3xl text-muted-foreground leading-relaxed"
        >
          So this isn't a grand gesture…
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 4 }}
          className="handwritten text-xl md:text-3xl text-muted-foreground leading-relaxed"
        >
          It's just something honest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 7 }}
          className="pt-8"
        >
          <p className="handwritten text-3xl md:text-5xl text-rose leading-relaxed">
            Will you be my Valentine?
          </p>

          {/* Ink underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 8.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-4 w-64 h-[2px] origin-left"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(348, 35%, 48%), transparent)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 10 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <motion.button
            onClick={onYes}
            className="glass-strong rounded-full px-10 py-4 handwritten text-xl heartbeat cursor-pointer"
            style={{
              color: "hsl(38, 55%, 55%)",
              boxShadow: "0 0 30px hsla(38, 55%, 65%, 0.2)",
              border: "1px solid hsla(38, 55%, 65%, 0.3)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            Yes
          </motion.button>

          <motion.button
            onClick={onYes}
            className="glass-strong rounded-full px-10 py-4 handwritten text-xl heartbeat cursor-pointer"
            style={{
              color: "hsl(348, 35%, 48%)",
              boxShadow: "0 0 30px hsla(348, 35%, 48%, 0.15)",
              border: "1px solid hsla(348, 35%, 48%, 0.25)",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            I'd love that
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TheQuestion;
