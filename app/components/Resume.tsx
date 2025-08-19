'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { 
  SiTypescript, 
  SiJavascript, 
  SiCss3, 
  SiHtml5, 
  SiReact, 
  SiBootstrap, 
  SiFigma, 
  SiNodedotjs, 
  SiLaravel, 
  SiTailwindcss 
} from 'react-icons/si';

const Resume = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the main page when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
         <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4"
       onClick={onClose}
     >
              <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
                     className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto my-auto max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
           onClick={(e) => e.stopPropagation()}
           style={{
             background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
             boxShadow: '0 25px 45px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)'
           }}
        >
                          {/* Close Button */}
         <div className="absolute top-4 right-4 z-10">
           <button
             onClick={onClose}
             className="w-8 h-8 bg-[#7484dd] rounded-full flex items-center justify-center hover:bg-[#6366f1] transition-colors backdrop-blur-sm"
           >
             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
         </div>

        {/* Resume Content */}
        <div className="p-8">
          {/* Profile Section */}
          <div className="text-center mb-8">
                           <div className="relative w-32 h-32 mx-auto mb-6">
                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7484dd]/30 to-purple-500/30 blur-xl"></div>
                 <Image
                   src="/grad2.png"
                   alt="Ali Cerafica"
                   fill
                   className="rounded-full object-cover border-4 border-white/30 relative z-10"
                 />
               </div>
            <h2 className="text-3xl font-bold text-white mb-2">Ali Cerafica</h2>
                         <div className="inline-block bg-gradient-to-r from-[#7484dd]/80 to-purple-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
               Frontend Developer
             </div>
            
                         {/* Contact Information */}
             <div className="space-y-2 text-white/90">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ceraficaalejandrojr@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Buting, Pasig City, Metro Manila</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+639217488822</span>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* About Me */}
              <div>
                <h3 className="text-white font-bold text-lg mb-3">About Me</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Passionate Frontend Developer with expertise in modern web technologies. 
                  Specialized in creating responsive, user-friendly interfaces and implementing 
                  cutting-edge design solutions. Committed to delivering high-quality code and 
                  exceptional user experiences.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold">University of Makati</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-2 h-2 bg-[#7484dd] rounded-full"></div>
                      <span className="text-gray-300 text-sm">Bachelor of Science in Computer Science Major in Application Development, 2022-2024</span>
                    </div>
                  </div>
                </div>
              </div>

                             {/* Experience */}
               <div>
                 <h3 className="text-white font-bold text-lg mb-3">Experience</h3>
                 <div className="space-y-4">
                   <div>
                     <h4 className="text-white font-semibold">Ardent Paralegal Business Solutions Inc.</h4>
                     <p className="text-gray-300 text-sm mb-2">IT Support Specialist • 2024 - 2025</p>
                     <div className="space-y-1 ml-4">
                       <div className="flex items-center space-x-2">
                         <div className="w-1.5 h-1.5 bg-[#7484dd] rounded-full"></div>
                         <span className="text-gray-300 text-sm">Project Automations</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <div className="w-1.5 h-1.5 bg-[#7484dd] rounded-full"></div>
                         <span className="text-gray-300 text-sm">Hardware and Software Troubleshoot</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <div className="w-1.5 h-1.5 bg-[#7484dd] rounded-full"></div>
                         <span className="text-gray-300 text-sm">Company Process Automation</span>
                       </div>
                     </div>
                   </div>
                   <div>
                     <h4 className="text-white font-semibold">Up Up Technologies PTE LTD</h4>
                     <p className="text-gray-300 text-sm mb-2">On the Job Training • 2024</p>
                     <div className="space-y-1 ml-4">
                       <div className="flex items-center space-x-2">
                         <div className="w-1.5 h-1.5 bg-[#7484dd] rounded-full"></div>
                         <span className="text-gray-300 text-sm">Mobile and Web Application Developer</span>
                       </div>
                       <div className="flex items-center space-x-2">
                         <div className="w-1.5 h-1.5 bg-[#7484dd] rounded-full"></div>
                         <span className="text-gray-300 text-sm">UI UX designer</span>
                       </div>
                     </div>
                   </div>
                   <div>
                     <h4 className="text-white font-semibold">Melham Corporation</h4>
                     <p className="text-gray-300 text-sm mb-2">On the Job Training • 2022</p>
                     <div className="space-y-1 ml-4">
                       <div className="flex items-center space-x-2">
                         <div className="w-1.5 h-1.5 bg-[#7484dd] rounded-full"></div>
                         <span className="text-gray-300 text-sm">Web Application Developer</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

                         {/* Right Column - Tech Skills */}
             <div>
               <div className="text-center mb-6">
                 <h3 className="text-[#7484dd] font-bold text-lg mb-2 flex items-center justify-center">
                   <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                   Tech Skills
                 </h3>
                 <div className="w-16 h-0.5 bg-[#7484dd] mx-auto"></div>
               </div>
               
                               {/* Tech Skills Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {/* TypeScript */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiTypescript className="w-6 h-6 text-blue-600 mb-1" />
                    <span className="text-white text-xs">TypeScript</span>
                  </div>

                  {/* JavaScript */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiJavascript className="w-6 h-6 text-yellow-400 mb-1" />
                    <span className="text-white text-xs">JavaScript</span>
                  </div>

                  {/* CSS3 */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiCss3 className="w-6 h-6 text-blue-500 mb-1" />
                    <span className="text-white text-xs">CSS3</span>
                  </div>

                  {/* HTML5 */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiHtml5 className="w-6 h-6 text-orange-500 mb-1" />
                    <span className="text-white text-xs">HTML5</span>
                  </div>

                  {/* React */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiReact className="w-6 h-6 text-cyan-400 mb-1" />
                    <span className="text-white text-xs">React</span>
                  </div>

                  {/* Bootstrap */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiBootstrap className="w-6 h-6 text-purple-600 mb-1" />
                    <span className="text-white text-xs">Bootstrap</span>
                  </div>

                  {/* Figma */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiFigma className="w-6 h-6 text-pink-500 mb-1" />
                    <span className="text-white text-xs">Figma</span>
                  </div>

                  {/* Node.js */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiNodedotjs className="w-6 h-6 text-green-600 mb-1" />
                    <span className="text-white text-xs">Node.js</span>
                  </div>

                  {/* Laravel */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiLaravel className="w-6 h-6 text-red-500 mb-1" />
                    <span className="text-white text-xs">Laravel</span>
                  </div>

                  {/* Tailwind CSS */}
                  <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg p-3 flex flex-col items-center justify-center hover:border-[#7484dd] hover:bg-white/30 transition-all duration-300">
                    <SiTailwindcss className="w-6 h-6 text-cyan-500 mb-1" />
                    <span className="text-white text-xs">Tailwind</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
