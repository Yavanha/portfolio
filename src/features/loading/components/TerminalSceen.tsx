import { Lock, Unlock, FastForward, Timer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FC } from "react";
import { Step } from "../types";

type TerminalScreenProps = {
  onComplete: () => void;
  input: string;
  setInput: (input: string) => void;
  showHint: boolean;
  attempts: number;
  step: number;
  steps: Step[];
  isUnlocked: boolean;
  showSkipButton: boolean;
  countdown: number;
  handleKeyPress: (e: React.KeyboardEvent) => void;
};

export const TerminalScreen: FC<TerminalScreenProps> = ({
  isUnlocked,
  step,
  steps,
  input,
  setInput,
  handleKeyPress,
  attempts,
  showHint,
  showSkipButton,
  countdown,
  onComplete,
}) => {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between px-2 sm:px-4 py-4 ">
      <motion.div
        animate={{
          scale: isUnlocked ? [1, 0] : 1,
          opacity: isUnlocked ? [1, 0] : 1,
          rotate: isUnlocked ? [0, 180] : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="bg-gray-800/40 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-blue-500/20  shadow-zinc-300  shadow-inner mb-4 relative flex-1"
      >
        <div className="flex items-center mb-4">
          <AnimatePresence>
            {isUnlocked ? (
              <motion.div
                key="unlocked"
                initial={{ scale: 1, rotate: 0 }}
                animate={{
                  scale: [1.5, 1.2, 1.3, 1],
                  rotate: [0, 15, -15, 0],
                  transition: {
                    duration: 0.7,
                    times: [0, 0.2857, 0.5714, 1],
                  },
                }}
                exit={{ scale: 0, rotate: 45 }}
                className="relative mr-3"
              >
                <motion.div
                  animate={{
                    y: [-20, 0],
                    opacity: [0, 1],
                  }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 0],
                        opacity: [1, 0],
                        x: [0, (i % 2 === 0 ? 1 : -1) * Math.random() * 50],
                        y: [0, -Math.random() * 50],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + i * 0.1,
                      }}
                      className="absolute w-1 h-1 bg-green-400 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${i * 45}deg)`,
                      }}
                    />
                  ))}
                </motion.div>
                <Unlock className="w-6 h-6 text-green-400" />
                <motion.div
                  initial={{ opacity: 0, scale: 2 }}
                  animate={{ opacity: [0, 1, 0], scale: [2, 1.5, 3] }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-green-400 rounded-full filter blur-lg"
                />
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                initial={{ scale: 1 }}
                exit={{ scale: 0, rotate: 45 }}
                className="mr-3"
              >
                <Lock className="w-6 h-6 text-blue-400" />
              </motion.div>
            )}
            {countdown > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-3 right-3 px-4 py-2 bg-gray-800/90 text-gray-400 rounded-lg border border-gray-700/50 flex items-center space-x-2"
              >
                <Timer className="w-4 h-4 text-blue-400" />
                <span>Skip available in {countdown}s</span>
              </motion.div>
            ) : (
              showSkipButton && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-3 right-3 px-4 py-2 bg-gray-800/90 text-gray-400 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 flex items-center space-x-2 group"
                  onClick={onComplete}
                >
                  <FastForward className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:text-blue-400 transition-colors">
                    Skip Intro
                  </span>
                </motion.button>
              )
            )}
          </AnimatePresence>
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Security Terminal {step}/{steps.length}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={step}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 font-mono text-sm border border-gray-700/30"
        >
          <div className="text-gray-400 mb-2">{steps[step - 1].prompt}</div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">→</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your solution..."
              className="bg-transparent border-none outline-none text-white flex-1 font-mono"
              spellCheck="false"
              disabled={isUnlocked}
            />
          </div>
        </motion.div>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-sm mb-4"
          >
            <span className="text-blue-400">Hint:</span> {steps[step - 1].hint}
          </motion.div>
        )}
        <div className="text-gray-400 text-xs sm:text-sm flex items-center justify-between">
          <span>
            Press Enter to submit. {attempts > 0 && `Attempts: ${attempts}`}
          </span>
          {isUnlocked && (
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-green-400 flex items-center"
            >
              <Unlock className="w-4 h-4 mr-2" />
              Access Granted
            </motion.span>
          )}
        </div>
      </motion.div>
    </div>
  );
};
