import { motion } from "motion/react";
import { FC } from "react";

export const ParticleEffect: FC = () => {
  return [...Array(30)].map((_, i) => (
    <motion.div
      key={i}
      initial={{
        x: "50%",
        y: "50%",
        scale: 0,
        opacity: 1,
      }}
      animate={{
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        scale: [0, 1, 0],
        opacity: [1, 0.5, 0.3],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
    />
  ));
};
