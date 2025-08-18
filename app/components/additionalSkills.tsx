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

  return (
    <section id="additional-skills" className="section-padding">
      <div className="container-modern">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            IT Administration & Support Skills
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT services including system administration, network management, and technical support
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {ADDITIONAL_SKILLS[0].skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-modern p-8 group hover:border-[#7484dd]/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-visible"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#7484dd]/20 rounded-full flex items-center justify-center group-hover:bg-[#7484dd]/30 transition-colors">
                  <svg 
                    className="w-6 h-6 text-[#7484dd]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <h3 className="text-neutral-900 dark:text-white font-bold text-xl group-hover:text-[#7484dd] transition-colors">
                  {skill.title}
                </h3>
              </div>

              {/* Floating Expand Details */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[calc(100%+2rem)] bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/50 rounded-2xl p-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 scale-95 group-hover:scale-100 shadow-2xl">
                <div className="relative">
                  {/* Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-900/95 border-l border-t border-neutral-700/50 rotate-45"></div>
                  
                  <ul className="space-y-3">
                    {skill.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7484dd] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-200 text-sm leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <div className="w-8 h-8 bg-[#7484dd]/20 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-[#7484dd]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 11l5-5m0 0l5 5m-5-5v12" 
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
