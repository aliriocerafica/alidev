"use client";
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { SectionProps, TechSkill } from '../types';
import { TECH_SKILLS, ANIMATION_VARIANTS } from '../data/constants';
import TechIcon from './techIcon';

interface TechProps extends SectionProps {
  skills?: TechSkill[];
  categories?: ('frontend' | 'backend' | 'design' | 'other')[];
  showCategories?: boolean;
  onSkillHover?: (skill: TechSkill) => void;
  onSkillHoverExit?: () => void;
}

interface TechGridProps {
  skills: TechSkill[];
  onSkillHover?: (skill: TechSkill) => void;
  onSkillHoverExit?: () => void;
}

/**
 * Tech skills grid component
 */
const TechGrid: React.FC<TechGridProps> = ({ 
  skills, 
  onSkillHover, 
  onSkillHoverExit 
}) => {
  const handleSkillEnter = useCallback((skill: TechSkill) => {
    onSkillHover?.(skill);
  }, [onSkillHover]);

  const handleSkillLeave = useCallback(() => {
    onSkillHoverExit?.();
  }, [onSkillHoverExit]);

  return (
    <div className="mx-auto w-full p-4 mb-8">
      <div className="techstack mb-6">
        {/* Responsive Grid Layout */}
        <div className="w-full">
          <ul 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-6 md:gap-8 lg:gap-10 text-lg px-4"
            role="list"
            aria-label="Technical skills"
            style={{ 
              minHeight: "200px"
            }}
          >
            {skills.map((skill) => (
              <TechIcon
                key={skill.id}
                src={skill.icon}
                alt={`${skill.name} logo`}
                name={skill.name}
                onMouseEnter={() => handleSkillEnter(skill)}
                onMouseLeave={handleSkillLeave}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/**
 * Tech skills section component that displays technical skills with animations
 */
const Tech: React.FC<TechProps> = ({
  className = "",
  skills = TECH_SKILLS,
  categories,
  showCategories = false,
  onSkillHover,
  onSkillHoverExit,
  ...props
}) => {
  // Filter skills by categories if specified
  const filteredSkills = categories
    ? skills.filter(skill => categories.includes(skill.category || 'other'))
    : skills;

  // Group skills by category for display
  const skillsByCategory = showCategories
    ? filteredSkills.reduce((acc, skill) => {
        const category = skill.category || 'other';
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      }, {} as Record<string, TechSkill[]>)
    : { all: filteredSkills };

  const handleSkillHover = useCallback((skill: TechSkill) => {
    console.log(`Hovering over skill: ${skill.name}`);
    onSkillHover?.(skill);
  }, [onSkillHover]);

  const handleSkillHoverExit = useCallback(() => {
    onSkillHoverExit?.();
  }, [onSkillHoverExit]);

  const categoryLabels = {
    frontend: 'Frontend Technologies',
    backend: 'Backend Technologies', 
    design: 'Design Tools',
    other: 'Other Skills',
    all: 'Technical Skills'
  };

  return (
    <section 
      className={className}
      aria-label="Technical skills section"
      {...props}
    >
      {/* Empty placeholder section for spacing/animations */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            id="skills"
            className="mt-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={ANIMATION_VARIANTS.fadeInLeft}
            transition={{ duration: 0.6 }}
          />
        )}
      </InView>

      {/* Main skills section */}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className="skills-section fade-animation"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={ANIMATION_VARIANTS.fadeInLeft}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="mb-8">
                {showCategories && (
                  <h3 className="text-xl font-semibold text-center text-white mb-6">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                )}
                
                <TechGrid
                  skills={categorySkills}
                  onSkillHover={handleSkillHover}
                  onSkillHoverExit={handleSkillHoverExit}
                />
              </div>
            ))}

            {/* Empty State */}
            {filteredSkills.length === 0 && (
              <div className="text-center text-gray-400 mt-12">
                <p>No skills to display in the selected categories.</p>
              </div>
            )}
          </motion.div>
        )}
      </InView>
    </section>
  );
};

export default Tech;
