'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  onComplete, 
  duration = 3000 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#7484dd]/10 rounded-full blur-3xl animate-pulse-gentle" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#7484dd]/5 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#7484dd]/8 rounded-full blur-2xl animate-pulse-gentle" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10 text-center space-y-8">
            {/* Hi there text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Hi there
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#7484dd] to-[#6366f1] mx-auto rounded-full"
              />
            </motion.div>

            {/* Logo Icon Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
                {/* Main Logo Icon */}
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <svg 
                    viewBox="0 0 1440 809.999993" 
                    className="w-full h-full"
                    fill="currentColor"
                  >
                    {/* Gear/Device Icon - extracted from the main logo */}
                    <g clipPath="url(#adc5f28116)">
                      <path fill="#7484dd" d="M 43.070312 129.574219 L 523.960938 129.574219 L 523.960938 610.464844 L 43.070312 610.464844 Z M 43.070312 129.574219 " fillOpacity="1" fillRule="nonzero"/>
                    </g>
                    <g clipPath="url(#550a7d04bc)">
                      <path fill="#000000" d="M 43.070312 129.574219 L 524.703125 129.574219 L 524.703125 593.101562 L 43.070312 593.101562 Z M 43.070312 129.574219 " fillOpacity="1" fillRule="nonzero"/>
                    </g>
                    <path fill="#ffffff" d="M 198.226562 268.003906 C 198.226562 262.988281 199.898438 259.644531 203.242188 256.296875 L 270.136719 189.40625 C 276.824219 182.714844 286.859375 182.714844 293.546875 189.40625 L 360.441406 256.296875 C 367.128906 262.988281 367.128906 273.019531 360.441406 279.710938 C 353.75 286.398438 343.71875 286.398438 337.027344 279.710938 L 281.839844 224.523438 L 226.65625 279.710938 C 219.964844 286.398438 209.933594 286.398438 203.242188 279.710938 C 199.898438 276.367188 198.226562 273.019531 198.226562 268.003906 Z M 198.226562 268.003906 " fillOpacity="1" fillRule="nonzero"/>
                    <path fill="#ffffff" d="M 198.226562 435.234375 C 198.226562 430.21875 199.898438 426.875 203.242188 423.53125 C 209.933594 416.839844 219.964844 416.839844 226.65625 423.53125 L 281.839844 478.714844 L 337.027344 423.53125 C 343.71875 416.839844 353.75 416.839844 360.441406 423.53125 C 367.128906 430.21875 367.128906 440.253906 360.441406 446.941406 L 293.546875 513.835938 C 286.859375 520.523438 276.824219 520.523438 270.136719 513.835938 L 203.242188 446.941406 C 199.898438 443.597656 198.226562 440.253906 198.226562 435.234375 Z M 198.226562 435.234375 " fillOpacity="1" fillRule="nonzero"/>
                    <g clipPath="url(#1623400341)">
                      <path fill="#ffffff" d="M 164.78125 318.171875 C 164.78125 316.5 164.78125 314.828125 166.453125 313.15625 C 169.796875 304.796875 178.15625 299.777344 188.191406 303.121094 L 388.871094 370.015625 C 397.230469 373.359375 402.25 381.722656 398.902344 391.753906 C 395.558594 400.117188 387.199219 405.132812 377.164062 401.789062 L 176.484375 334.898438 C 169.796875 331.550781 164.78125 324.863281 164.78125 318.171875 Z M 164.78125 318.171875 " fillOpacity="1" fillRule="nonzero"/>
                    </g>
                  </svg>
                </motion.div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#7484dd]/20 rounded-full blur-2xl animate-glow" />
              </div>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-[#7484dd] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              ))}
            </motion.div>

            {/* Welcome message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="text-neutral-400 text-sm md:text-base font-medium"
            >
              Welcome to my portfolio
            </motion.p>
          </div>

          {/* Exit animation overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#7484dd] to-[#6366f1]"
            initial={{ scale: 0, borderRadius: '50%' }}
            exit={{ 
              scale: 4, 
              borderRadius: '0%',
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
