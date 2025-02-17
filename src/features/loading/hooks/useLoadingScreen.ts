import { useState, useEffect } from 'react';
import type { Step } from '@/features/loading/types';

interface UseLoadingScreenProps {
  onComplete: () => void;
}

export function useLoadingScreen({ onComplete }: UseLoadingScreenProps) {
  const [input, setInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [step, setStep] = useState(1);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const steps: Step[] = [
    {
      prompt: '// Access code required\n// Hint: What\'s 2 + 2 in hexadecimal?',
      answer: '0x4',
      hint: 'Try converting the decimal number 4 to hexadecimal format (0x...)'
    },
    {
      prompt: '// System breached. Final security layer...\n// Complete: ["Hello", "World"].join("_")',
      answer: 'Hello_World',
      hint: 'The join() method connects array elements using the specified separator'
    }
  ];

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setShowSkipButton(true);
    }
  }, [countdown]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input === steps[step - 1].answer) {
        if (step === steps.length) {
          setIsUnlocked(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Reduced from 1500ms for faster transition
        } else {
          setStep(prev => prev + 1);
          setInput('');
          setAttempts(0);
          setShowHint(false);
        }
      } else {
        setAttempts(prev => prev + 1);
        if (attempts >= 2) {
          setShowHint(true);
        }
      }
    }
  };

  const handleVirtualKeyPress = (char: string) => {
    if (char === 'Backspace') {
      setInput(prev => prev.slice(0, -1));
    } else if (char === 'Enter') {
      handleKeyPress({ key: 'Enter' } as React.KeyboardEvent);
    } else if (char === 'Space') {
      setInput(prev => prev + ' ');
    } else if (char.length === 1) {
      setInput(prev => prev + char);
    }
  };

  return {
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
    steps
  };
}