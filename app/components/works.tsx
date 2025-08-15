'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionProps, Project } from "../types";
import { PROJECTS } from "../data/constants";
import "../css/home.css";

interface WorksProps extends SectionProps {
  projects?: Project[];
  gridColumns?: {
    default: number;
    sm: number;
    lg: number;
  };
  showDivider?: boolean;
}

interface ProjectCardProps {
  project: Project;
  onHover?: (project: Project) => void;
}

/**
 * Individual project card component
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, onHover }) => {
  const cardVariants = {
    hover: { scale: 1.05 }
  };

  const handleMouseEnter = () => {
    onHover?.(project);
  };

  const renderActionButtons = () => {
    const buttons = [];

    // Figma View Button
    if (project.figmaUrl) {
      buttons.push(
        <a
          key="figma"
          href={project.figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} design in Figma`}
        >
          <button className="btn-ghost text-xs px-3 py-2 flex items-center gap-2">
            <span>View Design</span>
            <Image
              src="/dev/Group 16.svg"
              alt="Figma icon"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </button>
        </a>
      );
    }

    // GitHub Repository Button
    if (project.githubUrl) {
      buttons.push(
        <a
          key="github"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <button className="btn-secondary text-xs px-3 py-2 flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Repository</span>
          </button>
        </a>
      );
    }

    // Live URL Button
    if (project.liveUrl) {
      buttons.push(
        <a
          key="live"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live demo`}
        >
          <button className="btn-primary text-xs px-3 py-2 flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Live Demo</span>
          </button>
        </a>
      );
    }

    return buttons;
  };

  return (
         <motion.article
       className="card-modern flex flex-col justify-between text-center group"
       variants={cardVariants}
       whileHover="hover"
       onMouseEnter={handleMouseEnter}
       transition={{ duration: 0.4, ease: "easeOut" }}
     >
      {/* Project Image */}
      <div className="flex justify-center items-center h-64 mb-6">
        <div className="relative overflow-hidden rounded-xl w-full h-full">
          {/* Check if project should show view image card */}
                     {['alma-villa', 'ardi-ai-assistant', 'b-dazzle-cafe'].includes(project.id) ? (
             <div className="w-full h-full bg-gradient-to-br from-neutral-800/80 via-neutral-900/90 to-neutral-800/80 border border-neutral-700/50 rounded-2xl flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
               {/* Animated background gradient */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#7484dd]/5 via-transparent to-[#7484dd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="text-center space-y-6 p-8 relative z-10">
                 <div className="w-20 h-20 bg-gradient-to-br from-[#7484dd]/20 to-[#7484dd]/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                   <svg className="w-10 h-10 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl mb-3 group-hover:text-[#7484dd] transition-colors duration-300">{project.title}</h4>
                   <p className="text-neutral-400 text-sm font-medium">View Project Image</p>
                 </div>
                 <div className="flex gap-3">
                   <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#7484dd]/20 to-[#7484dd]/10 text-[#7484dd] rounded-xl border border-[#7484dd]/30 backdrop-blur-sm">
                     Preview
                   </span>
                 </div>
               </div>
             </div>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-auto h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="heading-sm text-white mb-2">{project.title}</h3>
          {project.description && (
            <p className="text-muted text-sm">{project.description}</p>
          )}
        </div>

                 {/* Technologies */}
         {project.technologies && project.technologies.length > 0 && (
           <div className="flex flex-wrap gap-3 justify-center">
             {project.technologies.slice(0, 3).map((tech, index) => (
               <span
                 key={index}
                 className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#7484dd]/15 to-[#7484dd]/5 text-[#7484dd] rounded-xl border border-[#7484dd]/20 backdrop-blur-sm hover:from-[#7484dd]/25 hover:to-[#7484dd]/15 transition-all duration-300"
               >
                 {tech}
               </span>
             ))}
             {project.technologies.length > 3 && (
               <span className="px-4 py-2 text-sm font-medium bg-neutral-800/50 text-neutral-400 rounded-xl border border-neutral-700/30 backdrop-blur-sm">
                 +{project.technologies.length - 3} more
               </span>
             )}
           </div>
         )}

                 {/* Project Actions */}
         <div className="flex justify-center gap-4 pt-6">
           {renderActionButtons()}
         </div>
      </div>
    </motion.article>
  );
};

/**
 * Works/Projects section component that displays a grid of project cards
 */
const Works: React.FC<WorksProps> = ({
  className = "",
  projects = PROJECTS,
  gridColumns = {
    default: 1,
    sm: 2,
    lg: 3
  },
  title = "Works",
  showDivider = true,
  ...props
}) => {
  const handleProjectHover = (project: Project) => {
    // Optional: Handle project hover events for analytics or other features
    console.log(`Hovering over project: ${project.title}`);
  };

  const gridClasses = `grid grid-cols-${gridColumns.default} sm:grid-cols-${gridColumns.sm} lg:grid-cols-${gridColumns.lg} gap-4 w-full`;

  return (
    <section 
      className={className}
      aria-label="Portfolio projects section"
      {...props}
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="heading-lg gradient-text-primary mb-4">{title}</h2>
        {showDivider && (
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto rounded-full" />
        )}
      </div>

             {/* Projects Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onHover={handleProjectHover}
          />
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center text-neutral-400 mt-12 p-12 card-modern">
          <div className="space-y-4">
            <svg className="w-16 h-16 mx-auto text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-lg font-medium">No projects to display</p>
            <p className="text-sm text-neutral-500">Check back later for new projects!</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
