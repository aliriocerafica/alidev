import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 w-full">
      <div className="container-modern py-20 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image 
                src="/logo3.png" 
                width={64} 
                height={64} 
                className="rounded-full" 
                alt="Ali Cerafica Logo" 
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-[#7484dd]">ali</span>
                  <span className="text-neutral-900 dark:text-white">DEV</span>
                </h1>
                <p className="text-neutral-400">Front End Developer</p>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <p className="text-neutral-300 text-sm mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/aliriocerafica" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#7484dd]/20 transition-colors group"
                >
                  <svg className="w-5 h-5 fill-neutral-900 dark:fill-white group-hover:fill-[#7484dd]" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com/in/aliriocerafica" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#7484dd]/20 transition-colors group"
                >
                  <svg className="w-5 h-5 fill-neutral-900 dark:fill-white group-hover:fill-[#7484dd]" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://facebook.com/aliriocerafica" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-[#7484dd]/20 transition-colors group"
                >
                  <svg className="w-5 h-5 fill-neutral-900 dark:fill-white group-hover:fill-[#7484dd]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#7484dd]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="mailto:ceraficaalejandrojr@gmail.com"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-[#7484dd] transition-colors"
                >
                  ceraficaalejandrojr@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#7484dd]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a 
                  href="tel:+639217488822"
                  className="text-neutral-600 dark:text-neutral-300 hover:text-[#7484dd] transition-colors"
                >
                  +639217488822
                </a>
              </div>
            </div>
          </div>

          {/* Address & Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Location</h3>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#7484dd]/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#7484dd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-neutral-300">Buting Pasig City Metro Manila</p>
            </div>
            
            <div className="pt-4">
              <h4 className="text-neutral-900 dark:text-white font-medium mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-neutral-600 dark:text-neutral-300 hover:text-[#7484dd] transition-colors">About</a>
                <a href="#Works" className="block text-neutral-600 dark:text-neutral-300 hover:text-[#7484dd] transition-colors">Projects</a>
                <a href="#tech1" className="block text-neutral-600 dark:text-neutral-300 hover:text-[#7484dd] transition-colors">Skills</a>
                <a href="#contact" className="block text-neutral-600 dark:text-neutral-300 hover:text-[#7484dd] transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © 2024 Ali Cerafica. All rights reserved.
            </p>
            <p className="text-neutral-400 text-sm">
              Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
