import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, FastForward, Timer } from "lucide-react";
import { VirtualKeyboard } from "@/features/loading/components/VirtualKeyboard";
import { useLoadingScreen } from "@/features/loading/hooks/useLoadingScreen";

interface LoadingScreenProps {
  onComplete: () => void;
}

const codeLines = [
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
  "function initSystem() {",
  "  const access = await authenticate();",
  "  if (access.granted) {",
  "    return startSequence();",
  "  }",
  '  throw new Error("Access Denied");',
  "}",
  "class SecuritySystem {",
  "  private key: string;",
  "  constructor() {",
  "    this.key = generateKey();",
  "  }",
  "}",
  "interface AccessToken {",
  "  id: string;",
  "  exp: number;",
  "}",
];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/90 to-gray-900" />
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-100, 0, 0, 100],
              y: [0, -20, -20, -40],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "linear",
            }}
            className="absolute text-blue-500/20 font-mono text-sm whitespace-nowrap"
            style={{
              top: `${(index * 40) % window.innerHeight}px`,
              left: `${(index * 100) % window.innerWidth}px`,
              color: getRandomColor(),
              opacity: "0.1",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showLoadingScreen ? (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Matrix-like raining code effect */}
            {[...Array(20)].map((_, i) => (
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
            ))}

            {/* Loading Progress Bar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="w-32 h-32 bg-blue-500/30 flex items-center justify-center"
              />
            </div>

            {/* Particle Effects */}
            {[...Array(30)].map((_, i) => (
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
            ))}

            {/* Loading Text */}
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
          </motion.div>
        ) : (
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
                                x: [
                                  0,
                                  (i % 2 === 0 ? 1 : -1) * Math.random() * 50,
                                ],
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
                  <div className="text-gray-400 mb-2">
                    {steps[step - 1].prompt}
                  </div>
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
                    <span className="text-blue-400">Hint:</span>{" "}
                    {steps[step - 1].hint}
                  </motion.div>
                )}
                <div className="text-gray-400 text-xs sm:text-sm flex items-center justify-between">
                  <span>
                    Press Enter to submit.{" "}
                    {attempts > 0 && `Attempts: ${attempts}`}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
