import { motion } from "motion/react";
import { FC } from "react";

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
];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const AnimatedCodeBackground: FC = () => {
  return (
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
  );
};
