import { motion } from "motion/react";
import { FC } from "react";

export const LoadingText: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 text-center px-4"
    >
      <motion.div
        animate={{
          width: "100%",
          transition: { duration: 3, ease: "linear" },
        }}
        className="h-2 bg-blue-500 rounded-full mb-4 w-64 mx-auto"
      />
      <h2 className="text-2xl font-bold text-white mb-2">
        Initializing System
      </h2>
      <p className="text-blue-400">
        Please wait while we prepare your experience
      </p>
    </motion.div>
  );
};
