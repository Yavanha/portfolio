import { motion } from "motion/react";
import { FC } from "react";

export const MatrixRainingCodeEffect: FC = () => {
  return [...Array(20)].map((_, i) => (
    <motion.div
      key={`rain-${i}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: Math.random() * 2 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
        ease: "linear",
      }}
      className="absolute text-blue-500/30 font-mono text-xs"
      style={{
        left: `${(i / 20) * 100}%`,
        writingMode: "vertical-rl",
      }}
    >
      {[...Array(10)]
        .map(() => String.fromCharCode(Math.random() * 128))
        .join("")}
    </motion.div>
  ));
};
