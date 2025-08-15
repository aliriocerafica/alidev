"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface TechIconProps {
  src: string;
  alt: string;
  name: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TechIcon: React.FC<TechIconProps> = ({ src, alt, name, onMouseEnter, onMouseLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: { 
      scale: 1,
      rotateY: 0,
      z: 0
    },
    hover: { 
      scale: 1.15,
      rotateY: 15,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    initial: { 
      rotateY: 0,
      filter: "brightness(1)",
    },
    hover: { 
      rotateY: -15,
      filter: "brightness(1.2) drop-shadow(0 0 20px rgba(116, 132, 221, 0.6))",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const labelVariants = {
    initial: { 
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -90
    },
    animate: { 
      opacity: 1,
      y: 50,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    },
    exit: { 
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -90,
      transition: {
        duration: 0.2
      }
    }
  };

  const glowVariants = {
    initial: { 
      opacity: 0,
      scale: 0.5,
    },
    animate: { 
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.5, 2],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.li
      className="flex justify-center items-center relative group cursor-pointer w-full h-32"
      style={{ perspective: 1000 }}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave();
      }}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Glow Effect Background */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(116, 132, 221, 0.3) 0%, transparent 70%)`
        }}
        variants={glowVariants}
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
      />

      {/* Main Icon Container */}
      <motion.div
        className="relative w-20 h-20 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-4 group-hover:border-[#7484dd]/50 transition-colors duration-300"
        variants={iconVariants}
      >
        {/* Icon Shadow */}
        <motion.div
          className="absolute inset-0 bg-[#7484dd]/20 rounded-2xl blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Tech Icon */}
        <motion.div className="relative z-10">
          <Image
            src={src}
            alt={alt}
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#7484dd] rounded-full"
                initial={{
                  x: 20,
                  y: 20,
                  opacity: 0
                }}
                animate={{
                  x: [20, -10, 30, -20],
                  y: [20, -30, -10, -40],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Tech Name Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 z-20"
            variants={labelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="bg-neutral-900/95 backdrop-blur-sm border border-[#7484dd]/30 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg">
              <div className="relative">
                {name}
                {/* Label Arrow */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-full">
                  <div className="w-2 h-2 bg-neutral-900 border-l border-t border-[#7484dd]/30 transform rotate-45"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ripple Effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-[#7484dd]/40"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
              scale: [1, 1.5, 2],
              opacity: [0.8, 0.4, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default TechIcon;
