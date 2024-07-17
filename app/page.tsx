"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Education from "./components/education";
import Contact from "./components/contact";
import Image from "next/image";
import Certificate from "./components/certificate";
import Works from "./components/works";
import "./css/home.css";
import Tech from "./components/tech";
import { ReactTyped } from "react-typed";

const animationVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Page = () => {
  useEffect(() => {
    // Add a class to trigger the animation on refresh
    window.scrollTo(0, 0);
    document.body.classList.add("fade-in");
  }, []);

  const handleContextMenu = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Optionally, you can alert or inform the user that inspecting is disabled
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <body className="bg-[#0c1c29] min-h-screen fade-in">
      <div>
        <Navbar />
        <div className="profile mx-auto w-3/5 p-4 mt-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:order-2">
              <Image
                src="/p3.png"
                alt="Image"
                width={1000}
                height={1000}
                className="w-auto h-auto md:float-right animate-float"
              />
            </div>
            <div className="md:order-1 text-white mt-20 gradient-text">
              <motion.h2
                className="text-5xl font-bold mb-2 "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm Ali Cerafica
              </motion.h2>
              <motion.h2
                className="text-3xl font-bold mb-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span style={{ display: "inline-block" }}>
                  <h1
                    className="inline-block text-gray-200 font-semibold"
                    style={{ display: "inline ", margin: 0 }}
                  >
                    {" "}
                    A{" "}
                  </h1>
                  <ReactTyped
                    strings={[
                      " Front End Developer",
                      " UI and UX Designer",
                      " Graphic Designer",
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                    className="text-white"
                  />
                </span>{" "}
                <Image
                  src="/svg/code-solid.svg"
                  alt="Code Icon"
                  width={24}
                  height={24}
                  className="inline w-6 h-6 beat-fade"
                />
              </motion.h2>
              <motion.p
                className="text-gray-400 mt-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I am a recent graduate of Bachelor of Science in Computer
                Science, specializing in Application Development, from The
                University. I am eager to enhance my skills and knowledge.
              </motion.p>
              <motion.a
                href="https://drive.google.com/file/d/1VbJASK-QYU0JqNvTGk5Fc73D2_AySj6T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.p
                  className="font-normal border-2 mt-10 text-white w-32 text-center border-[#7484dd] hover:bg-[#4855a3] hover:text-white hover:border-white p-2 text-sm rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.p>
              </motion.a>
              <motion.div
                className="container-about flex items-start mt-48"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a
                  href="https://github.com/aliriocerafica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex mr-4"
                >
                  <Image
                    src="/gitCsvg.svg"
                    alt="GitHub Logo"
                    width={1000}
                    height={100}
                    className="w-10 h-10 rounded-sm fade-animation"
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/RioCer22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex mr-4 fade-animation"
                >
                  <Image
                    src="/fbCsvg.svg"
                    alt="Facebook Logo"
                    width={1000}
                    height={100}
                    className="w-10 h-10 rounded-sm"
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/alejandro-cerafica-jr-926a7a23b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <Image
                    src="/inCsvg.svg"
                    alt="LinkedIn Logo"
                    width={1000}
                    height={100}
                    className="w-10 h-10 rounded-sm fade-animation "
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              id="about"
              className="about mx-auto w-3/5 p-2 text-2xl gradient-text text-center font-bold mt-20"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              <h1>About Me</h1>
              <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full"></div>
            </motion.div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="contentAbout w-auto bg-white mt-12"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              <div className="content w-full lg:w-3/5 h-auto mx-auto flex flex-col lg:flex-row-reverse p-8">
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center mt-10"
                  whileHover={{ scale: 1.1 }} // Zoom effect on hover
                >
                  <Image
                    src="/mySet.png"
                    alt="Image"
                    width={500}
                    height={500}
                    className="w-full lg:w-[500px] h-auto"
                  />
                </motion.div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                  <div className="text-content px-4 lg:px-0 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mt-12 gradient-text mb-6">
                      Application Developer
                    </h2>
                    <p className="mt-2 mb-12 text-gray-600">
                      A recent graduate with a Bachelor of Science in Computer
                      Science, specializing in creating UI and UX for mobile and
                      web applications. I focus on developing prototypes and
                      mockups using Figma, and I have proficient skills in
                      design. I also develop the front end of mobile and web
                      applications using various programming languages
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              id="Works"
              className="works w-full h-auto mx-auto mt-10 mb-28"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              <Education />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              id="Works"
              className="works w-full h-auto mx-auto mt-10 mb-28"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              <Works />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              id="tech"
              className="works w-full h-auto mx-auto mt-10 mb-28"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              <Tech />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              id="cert"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              <Certificate />
            </motion.div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              id="contact"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              <Contact />
            </motion.div>
          )}
        </InView>
        <Footer />
      </div>
    </body>
  );
};

export default Page;
