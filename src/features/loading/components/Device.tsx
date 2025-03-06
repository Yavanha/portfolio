import { motion } from "motion/react";
import { FC } from "react";
import { TerminalScreen } from "./TerminalSceen";
import { VirtualKeyboard } from "./VirtualKeyboard";
import { Step } from "../types";

type DeviceProps = {
  onComplete: () => void;
  input: string;
  setInput: (input: string) => void;
  showHint: boolean;
  attempts: number;
  step: number;
  steps: Step[];
  handleVirtualKeyPress: (char: string) => void;
  isUnlocked: boolean;
  showSkipButton: boolean;
  countdown: number;
  handleKeyPress: (e: React.KeyboardEvent) => void;
};

export const Device: FC<DeviceProps> = ({
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
  handleVirtualKeyPress,
}) => {
  return (
    <motion.div
      key="terminal"
      className="w-full h-full flex flex-col justify-between max-w-screen-sm"
      exit={{
        scale: 0,
        opacity: 0,
        transition: {
          duration: 1,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }}
    >
      {/* Terminal Content */}
      <TerminalScreen
        onComplete={onComplete}
        input={input}
        setInput={setInput}
        showHint={showHint}
        attempts={attempts}
        step={step}
        isUnlocked={isUnlocked}
        showSkipButton={showSkipButton}
        countdown={countdown}
        handleKeyPress={handleKeyPress}
        steps={steps}
      />
      {/* Virtual Keyboard */}
      <motion.div
        animate={{
          scale: isUnlocked ? [1, 0] : 1,
          opacity: isUnlocked ? [1, 0] : 1,
          rotate: isUnlocked ? [0, -180] : 0,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="mt-auto"
      >
        <VirtualKeyboard onKeyPress={handleVirtualKeyPress} />
      </motion.div>
    </motion.div>
  );
};
