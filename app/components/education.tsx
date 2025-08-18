"use client";
import React, { useState, useRef } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { SectionProps, Education as EducationType } from "../types";
import { EDUCATION_DATA } from "../data/constants";

interface EducationProps extends SectionProps {
  educationData?: EducationType[];
  title?: string;
  showDivider?: boolean;
}

/**
 * Education section component with horizontal scrolling timeline
 * displaying complete educational background
 */
const Education: React.FC<EducationProps> = ({
  className = "",
  educationData = EDUCATION_DATA,
  title = "Education",
  showDivider = true,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < educationData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : educationData.length - 1
    );
  };

  const scrollToItem = (index: number) => {
    setCurrentIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className={className} {...props}>
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="heading-lg gradient-text-primary mb-4">{title}</h2>
        {showDivider && (
          <div className="w-20 h-1 bg-[#7484dd] mx-auto rounded-full" />
        )}
      </div>

      {/* Education Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <motion.button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#7484dd] hover:bg-[#6366f1] text-white p-3 rounded-full shadow-lg transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous education item"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#7484dd] hover:bg-[#6366f1] text-white p-3 rounded-full shadow-lg transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next education item"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Education Cards Container */}
        <div className="overflow-hidden px-16">
          <motion.div
            ref={scrollContainerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                className="w-full flex-shrink-0 px-4"
                variants={itemVariants}
              >
                <div className="card-modern p-8 h-full border border-white dark:border-neutral-700/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Institution Image */}
                    <motion.div
                      className="order-2 lg:order-1 flex justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#7484dd]/20 rounded-2xl blur-xl" />
                        <Image
                          src={education.image}
                          alt={`${education.institution} logo`}
                          width={400}
                          height={400}
                          className="relative z-10 w-full max-w-sm h-auto rounded-2xl shadow-hard"
                          priority={index === 0}
                        />
                      </div>
                    </motion.div>

                    {/* Education Details */}
                    <div className="order-1 lg:order-2 space-y-6">
                      {/* Institution Name */}
                      <motion.h3
                        className="heading-md gradient-text-primary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {education.institution}
                      </motion.h3>

                      {/* Degree Information */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-body text-lg font-semibold">
                          {education.degree}
                        </p>
                        {education.major && (
                          <p className="text-neutral-600 dark:text-neutral-300">
                            Major in <span className="text-[#7484dd] font-bold">{education.major}</span>
                          </p>
                        )}
                      </motion.div>

                      {/* Academic Years & Location */}
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex items-center gap-2 text-neutral-200">
                          <svg className="w-5 h-5 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v3m-3-3h6m-9-1v1a3 3 0 003 3h6a3 3 0 003-3v-1M5 7h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
                          </svg>
                          <span className="font-bold">
                            {education.startYear} - {education.endYear}
                          </span>
                        </div>
                        
                        {education.location && (
                          <div className="flex items-center gap-2 text-neutral-300">
                            <svg className="w-5 h-5 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{education.location}</span>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {educationData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToItem(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[#7484dd] scale-125'
                  : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to education item ${index + 1}`}
            />
          ))}
        </div>

        {/* Education Counter */}
        <div className="text-center mt-6">
          <span className="text-neutral-400 text-sm">
            {currentIndex + 1} of {educationData.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;
