'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
                <Image
                  src="/svg/logo.svg"
                  alt="aliDEV Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain animate-float-gentle"
                  priority
                />
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
