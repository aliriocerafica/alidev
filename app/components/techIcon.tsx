import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TechIconProps {
  src: string;
  alt: string;
  name: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const TechIcon: React.FC<TechIconProps> = ({ src, alt, name, onMouseEnter, onMouseLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="inline-block relative"
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave();
      }}
      whileHover={{ scale: 1.2 }}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="w-10 h-10 mr-4"
      />
      {isHovered && (
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center rounded-full bg-gray-800 bg-opacity-75 text-white text-sm font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {name}
        </motion.div>
      )}
    </motion.li>
  );
};

export default TechIcon;
