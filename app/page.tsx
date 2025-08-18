'use client'
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Education from "./components/education";
import Contact from "./components/contact";
import Certificate from "./components/certificate";
import Works from "./components/works";
import Tech from "./components/tech";
import AdditionalSkills from "./components/additionalSkills";
import { PERSONAL_INFO, SOCIAL_LINKS } from "./data/constants";
import "./css/home.css";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("fade-in");

    const handleScroll = () => {
      const elements = document.querySelectorAll(".animated");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContextMenu = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center relative">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-gentle" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-modern relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Profile Image */}
            <motion.div
              className="order-2 lg:order-1 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl" />
                <Image
                  src="/grad2.png"
                  alt="Ali Cerafica - Frontend Developer"
                  width={500}
                  height={500}
                  className="relative z-10 w-full max-w-md h-auto animate-float-gentle"
                  priority
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="heading-xl gradient-text-primary"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Hi, I'm {PERSONAL_INFO.name}
                </motion.h1>

                <motion.div
                  className="heading-md text-neutral-800 dark:text-neutral-200"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="inline-block">I'm a&nbsp;</span>
                  <span className="gradient-text-secondary font-bold">
                    <ReactTyped
                      strings={PERSONAL_INFO.roles}
                      typeSpeed={60}
                      backSpeed={40}
                      loop
                    />
                  </span>
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse" 
                    }}
                  >
                    <Image
                      src="/svg/code-solid.svg"
                      alt="Code Icon"
                      width={32}
                      height={32}
                      className="w-8 h-8 text-primary-400"
                    />
                  </motion.span>
                </motion.div>

                <motion.p
                  className="text-body max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {PERSONAL_INFO.description}
                </motion.p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Download Resume</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="btn-ghost inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Talk</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    aria-label={social.ariaLabel}
                  >
                    <div className="p-3 bg-white/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-white dark:border-neutral-700/50 rounded-xl group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-all duration-300">
                      <Image
                        src={social.icon}
                        alt={`${social.label} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-neutral-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-modern">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-lg gradient-text-primary mb-4">About Me</h2>
                <div className="w-20 h-1 bg-[#7484dd] mx-auto rounded-full" />
              </motion.div>
            )}
          </InView>

          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="order-2 lg:order-1">
                  <div className="card-modern p-8 space-y-6">
                    <h3 className="heading-md gradient-text-secondary">
                      Frontend Developer
                    </h3>
                    <p className="text-body leading-relaxed">
                      A recent graduate with a Bachelor of Science in Computer Science, 
                      specializing in creating intuitive UI and UX for mobile and web applications. 
                      I focus on developing prototypes and mockups using Figma, and I have 
                      proficient skills in design.
                    </p>
                    <p className="text-body leading-relaxed">
                      I develop the frontend of mobile and web applications using modern 
                      technologies like React, Next.js, TypeScript, and Tailwind CSS, 
                      ensuring responsive, accessible, and performant user experiences.
                    </p>
                  </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl" />
                    <Image
                      src="/mySet.png"
                      alt="Development setup"
                      width={500}
                      height={500}
                      className="relative z-10 w-full max-w-lg h-auto rounded-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-neutral-900/30">
        <div className="container-modern">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
              >
                <Education />
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* Works Section */}
      <section id="Works" className="section-padding">
        <div className="container-modern">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
              >
                <Works />
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* Tech Skills Section */}
      <section id="tech1" className="section-padding bg-neutral-900/30">
        <div className="container-modern">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h2 className="heading-lg gradient-text-primary">Tech Skills</h2>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Image
                      src="/dev/Gear.svg"
                      alt="Gear Icon"
                      width={40}
                      height={40}
                      className="w-10 h-10 text-primary-400"
                    />
                  </motion.div>
                </div>
                <div className="w-20 h-1 bg-[#7484dd] mx-auto rounded-full" />
              </motion.div>
            )}
          </InView>

          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Tech />
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section id="additional-skills" className="section-padding">
        <div className="container-modern">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
              >
                <AdditionalSkills />
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="section-padding">
        <div className="container-modern">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
              >
                <Certificate />
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-neutral-900/30">
        <div className="container-modern">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
              >
                <Contact />
              </motion.div>
            )}
          </InView>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Page;
