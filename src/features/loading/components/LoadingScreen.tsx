import { useState, useEffect } from "react";
import { useLoadingScreen } from "@/features/loading/hooks/useLoadingScreen";
import { AnimatePresence, motion } from "motion/react";
import { AnimatedCodeBackground } from "./AnimatedCodeBackground";
import { Device } from "./Device";
import { LoadingProgressBar } from "./LoadingProgressBar";
import { LoadingText } from "./LoadingText";
import { MatrixRainingCodeEffect } from "./MatrixRainingCodeEffect";
import { ParticleEffect } from "./ParticleEffect";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const {
    input,
    setInput,
    showHint,
    attempts,
    step,
    isUnlocked,
    showSkipButton,
    countdown,
    handleKeyPress,
    handleVirtualKeyPress,
    steps,
  } = useLoadingScreen({ onComplete });

  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      setTimeout(() => {
        setShowLoadingScreen(true);
      }, 1000);
    }
  }, [isUnlocked]);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatedCodeBackground />
      <AnimatePresence>
        {showLoadingScreen ? (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <MatrixRainingCodeEffect />
            <LoadingProgressBar />
            <ParticleEffect />
            <LoadingText />
          </motion.div>
        ) : (
          <Device
            attempts={attempts}
            isUnlocked={isUnlocked}
            step={step}
            steps={steps}
            input={input}
            setInput={setInput}
            handleKeyPress={handleKeyPress}
            showHint={showHint}
            showSkipButton={showSkipButton}
            countdown={countdown}
            handleVirtualKeyPress={handleVirtualKeyPress}
            onComplete={onComplete}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
