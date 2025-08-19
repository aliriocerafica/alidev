'use client';

import { motion } from 'framer-motion';
import { ADDITIONAL_SKILLS } from '../data/constants';

const AdditionalSkills = () => {

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Icons for each skill category
  const skillIcons = [
    // Microsoft Administration
    <svg key="microsoft" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.5 2.75h-7a1.75 1.75 0 00-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7a1.75 1.75 0 001.75-1.75v-7A1.75 1.75 0 0011.5 2.75zM20.5 2.75h-7a1.75 1.75 0 00-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7a1.75 1.75 0 001.75-1.75v-7A1.75 1.75 0 0020.5 2.75zM11.5 13.25h-7a1.75 1.75 0 00-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7a1.75 1.75 0 001.75-1.75v-7a1.75 1.75 0 00-1.75-1.75zM20.5 13.25h-7a1.75 1.75 0 00-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7a1.75 1.75 0 001.75-1.75v-7a1.75 1.75 0 00-1.75-1.75z"/>
    </svg>,
    // Network Installation
    <svg key="network" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
    </svg>,
    // WiFi Setup
    <svg key="wifi" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
    </svg>,
    // Hardware & Software Troubleshooting
    <svg key="troubleshooting" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>,
    // System Maintenance
    <svg key="maintenance" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>,
    // Canva Design
    <svg key="canva" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
    </svg>
  ];

  return (
    <section id="additional-skills" className="section-padding bg-black min-h-screen">
      <div className="container-modern">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg gradient-text-primary mb-4">Additional Skills</h2>
          <div className="w-20 h-1 bg-[#7484dd] mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid - 2x3 Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ADDITIONAL_SKILLS[0].skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-[#7484dd] mb-4">
                {skillIcons[index]}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg lg:text-xl mb-2 lg:mb-3 group-hover:text-[#7484dd] transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-200 text-sm leading-relaxed">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>

              {/* Hover Details */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ul className="space-y-2">
                  {skill.details.slice(0, 2).map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7484dd] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-300 text-xs leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                  {skill.details.length > 2 && (
                    <li className="text-[#7484dd] text-xs font-medium">
                      +{skill.details.length - 2} more skills
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default AdditionalSkills;
