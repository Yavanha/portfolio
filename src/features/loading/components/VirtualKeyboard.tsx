import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useVirtualKeyboard } from '@/features/loading/hooks/useVirtualKeyboard';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
}

export function VirtualKeyboard({ onKeyPress }: VirtualKeyboardProps) {
  const { keys, activeKeys } = useVirtualKeyboard();

  return (
    <div className="w-full overflow-x-hidden px-2 sm:px-4">
      <div className="grid gap-1 sm:gap-1.5">
        {keys.map((row, i) => (
          <div 
            key={i} 
            className="grid grid-flow-col gap-1 sm:gap-1.5"
            style={{
              gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`,
            }}
          >
            {row.map((key, j) => {
              const isSpecialKey = key.length > 1;
              const isSpaceKey = key === 'Space';
              const isBackspace = key === 'Backspace';
              const keyWidth = isSpaceKey ? 'col-span-6' : isSpecialKey ? 'col-span-2' : 'col-span-1';

              return (
                <motion.button
                  key={`${i}-${j}`}
                  initial={{ scale: 1 }}
                  animate={{
                    scale: activeKeys.has(key.toLowerCase()) ? 0.95 : 1,
                    backgroundColor: activeKeys.has(key.toLowerCase()) 
                      ? 'rgba(59, 130, 246, 0.5)' 
                      : 'rgba(31, 41, 55, 0.8)',
                    y: activeKeys.has(key.toLowerCase()) ? 2 : 0,
                  }}
                  transition={{ duration: 0.1 }}
                  className={`
                    ${keyWidth}
                    h-12
                    rounded-lg 
                    backdrop-blur-sm 
                    border border-gray-700/50 
                    shadow-lg 
                    transform 
                    hover:border-blue-500/50 
                    active:scale-95
                    transition-all
                    duration-150
                    uppercase 
                    text-xs sm:text-sm
                    font-medium
                    relative
                    text-gray-300
                    select-none
                    touch-manipulation
                    flex
                    items-center
                    justify-center
                    px-1
                  `}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `perspective(1000px) rotateX(10deg)`,
                    boxShadow: activeKeys.has(key.toLowerCase())
                      ? '0 2px 4px rgba(0,0,0,0.2)' 
                      : '0 8px 0 rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.4)',
                  }}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    onKeyPress(key);
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    onKeyPress(key);
                  }}
                >
                  {isBackspace ? (
                    <X className="w-4 h-4" />
                  ) : (
                    key
                  )}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-lg pointer-events-none"
                    style={{ transform: 'translateZ(-1px)' }}
                  />
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}