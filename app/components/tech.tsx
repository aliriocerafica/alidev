import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import TechIcon from './techIcon';

const animationVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Tech = () => {
  const handleHover = (iconName: string) => {
    // Handle hover logic here
  };

  const handleHoverExit = () => {
    // Handle hover exit logic here
  };

  return (
    <div>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            id="skills"
            className="mt-32"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
          >
            <div className="text-center text-2xl gradient-text font-bold animate-pulse">
              <h1>
                Tech Skills{' '}
                <Image
                  src="/dev/Gear.svg"
                  alt="Code Icon"
                  width={32}
                  height={32}
                  className="ml-2 inline w-8 h-8 spin text-white "
                />
                <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full "></div>
              </h1>
            </div>
          </motion.div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className="skills-section fade-animation"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
          >
            <div className="mx-auto w-full p-8 mb-24 h-auto">
              <div className="techstack mb-12">
                <ul className="flex flex-wrap justify-center gap-8 md:gap-20 text-lg">
                  <TechIcon
                    src="/dev/Group 4.svg"
                    alt="HTML5 Logo"
                    name="Typescript"
                    onMouseEnter={() => handleHover('HTML5')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/Group 5.svg"
                    alt="CSS3 Logo"
                    name="Javascript"
                    onMouseEnter={() => handleHover('CSS3')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/Group 8.svg"
                    alt="JS Logo"
                    name="HTML"
                    onMouseEnter={() => handleHover('JavaScript')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/Group 9.svg"
                    alt="React Logo"
                    name="HTML 5"
                    onMouseEnter={() => handleHover('React')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/Group 10.svg"
                    alt="Tailwind CSS Logo"
                    name="Typescript"
                    onMouseEnter={() => handleHover('Tailwind CSS')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/bootstrap.svg"
                    alt="Bootstrap Logo"
                    name="Bootstrap"
                    onMouseEnter={() => handleHover('Bootstrap')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/Group 16.svg"
                    alt="Other Logo"
                    name="Figma"
                    onMouseEnter={() => handleHover('Other')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/nodejs-icon.svg"
                    alt="Node.js Logo"
                    name="Node.js"
                    onMouseEnter={() => handleHover('Node.js')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/dev/laravel-2.svg"
                    alt="Laravel Logo"
                    name="Laravel"
                    onMouseEnter={() => handleHover('Laravel')}
                    onMouseLeave={handleHoverExit}
                  />
                  <TechIcon
                    src="/svg/tailwind-css.svg"
                    alt="Tailwind CSS Logo"
                    name="Tailwind Css"
                    onMouseEnter={() => handleHover('Tailwind')}
                    onMouseLeave={handleHoverExit}
                  />
                  {/* Add more TechIcon components here */}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default Tech;
