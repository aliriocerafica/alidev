"use client";
import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Education from "./components/education";
import Contact from "./components/contact";
import Image from "next/image";

import "./css/home.css";

const Page = () => {
  useEffect(() => {
    // Add a class to trigger the animation on refresh
    window.scrollTo(0, 0);
    document.body.classList.add("fade-in");
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleScrollAnimations = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (position < screenHeight) {
        element.classList.add("animate");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimations);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);
  useEffect(() => {
    const handleContextMenu = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Optionally, you can alert or inform the user that inspecting is disabled
    };
  
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
                src="/profile.png"
                alt="Image"
                width={500} // specify the width of the image
                height={500} // specify the height of the image
                className="w-auto h-auto md:float-right animate-float"
              />
            </div>
            <div className="md:order-1 text-white mt-20">
              <h2 className="text-5xl font-bold mb-2 gradient-text animate-slide-in slide-in">
                Hi, I'm Ali Cerafica
              </h2>
              <h2 className="text-3xl font-bold mb-2 animate-slide-in slide-in">
                Front End Developer{" "}
                <Image
                  src="/svg/code-solid.svg"
                  alt="Code Icon"
                  width={24} // specify the width of the icon
                  height={24} // specify the height of the icon
                  className="inline w-6 h-6 beat-fade"
                />
              </h2>
              <p className="text-gray-400 mt-4 animate-slide-in slide-in">
                I am a Front End Developer and UI/UX Designer, a recent graduate
                of Bachelor of Science in Computer Science Majoring in
                Application Development from the University of Makati.
              </p>
              <a
                href="https://drive.google.com/file/d/1VbJASK-QYU0JqNvTGk5Fc73D2_AySj6T/view?usp=sharing"
                className="contact font-normal border-2 border-[#7484dd] p-2 text-sm rounded-lg mt-10 block hover:bg-[#4855a3] hover:text-white hover:border-white w-32 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-auto h-auto focus:outline-none">
                  Download CV
                </button>
              </a>
              <div className="container-about flex items-start mt-48">
                <a
                  href="https://github.com/aliriocerafica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex mr-4"
                >
                  <Image
                    src="/gitIcon.png"
                    alt="GitHub Logo"
                    width={32} // specify the width of the icon
                    height={32} // specify the height of the icon
                    className="w-8 h-8 rounded-sm"
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/RioCer22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex mr-4"
                >
                  <Image
                    src="/fbIcon.png"
                    alt="Facebook Logo"
                    width={32} // specify the width of the icon
                    height={32} // specify the height of the icon
                    className="w-8 h-8 rounded-sm"
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
                    src="/indeedIcon.png"
                    alt="LinkedIn Logo"
                    width={32} // specify the width of the icon
                    height={32} // specify the height of the icon
                    className="w-8 h-8 rounded-sm"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="about"
          className="about mx-auto w-3/5 p-2 text-2xl gradient-text text-center font-bold mt-24 animate-on-scroll"
        >
          <h1>About Me</h1>
          <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full"></div>
        </div>
        <div className="contentAbout w-auto bg-white mt-12">
          <div className="content w-full lg:w-3/5 h-auto mx-auto flex flex-col lg:flex-row-reverse p-8">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center mt-10">
              <Image
                src="/mySet.png"
                alt="Image"
                width={500} // specify the width of the image
                height={500} // specify the height of the image
                className="w-full lg:w-[500px] h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="text-content px-4 lg:px-0 text-center lg:text-left animate-on-scroll">
                <h2 className="text-3xl font-bold mt-12 gradient-text mb-6">
                  Front End Developer
                </h2>
                <p className="mt-2 mb-12 text-gray-600">
                  An inspired <span className="font-bold">UI/UX</span> designer
                  and Front-End Developer aiming to create and provide creative
                  and user-friendly User Interfaces by using tools and utilities
                  through online platforms. Passionate about staying up-to-date
                  with the latest design trends and technologies, I strive to
                  enhance the user experience through innovative and efficient
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Education />
        <div
          id="Works"
          className="works w-full h-auto mx-auto mt-10 mb-28 animate-on-scroll"
        >
          <div className="Work mx-auto w-4/5  mb-36 p-2">
            <div className="about mx-auto w-full p-2 text-2xl gradient-text text-center font-bold mt-6">
              <h1>Works</h1>
              <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full"></div>
            </div>
            <div className="flex justify-center items-center mt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
                <div
                  className="box1 rounded-md min-h-[100px] min-w-[50px]  w-full h-full flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/petTaxi.png"
                      alt="Image"
                      width={200} // specify the width of the image
                      height={200} // specify the height of the image
                      className="w-auto lg:w-[200px] h-auto"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <a
                      href="https://www.figma.com/design/cmJrmeFFeHKCGYFaedkmY5/Pet-Taxi-Mobile-Alidev?node-id=0-1&t=VYwBzxbrfKRb9mxd-1"
                      target="_blank"
                    >
                      <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                        <span>View</span>
                        <Image
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          width={16} // specify the width of the icon
                          height={16} // specify the height of the icon
                          className="w-4 h-4 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="box2 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/eB.png"
                      alt="Image"
                      width={400} // specify the width of the image
                      height={400} // specify the height of the image
                      className="w-auto lg:w-[450px] h-auto"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <a
                      href="https://www.figma.com/design/t53wU5lvmslTRHLQb2HEAb/Ebarangay?node-id=0-1&t=4u7qiusbrmlF9T8Q-1"
                      target="_blank"
                    >
                      <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                        <span>View</span>
                        <Image
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          width={16} // specify the width of the icon
                          height={16} // specify the height of the icon
                          className="w-4 h-4 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="box3 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/W.png"
                      alt="Image"
                      width={200} // specify the width of the image
                      height={200} // specify the height of the image
                      className="w-auto lg:w-[250px] h-auto"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <a
                      href="https://www.figma.com/design/Y3wrqCns3xbytwih42GlQs/Watch?t=4u7qiusbrmlF9T8Q-1"
                      target="_blank"
                    >
                      <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                        <span>View</span>
                        <Image
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          width={16} // specify the width of the icon
                          height={16} // specify the height of the icon
                          className="w-4 h-4 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="box4 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <Image
                      src="/eBasa1.svg"
                      alt="Image"
                      width={200} // specify the width of the image
                      height={200} // specify the height of the image
                      className="w-auto lg:w-[370px] h-auto"
                    />
                  </div>
                  <div className="mt-4 text-left">
                    <a
                      href="https://www.figma.com/design/k50orFt2KS10oUn2st8Xdh/Ebasa?node-id=0-1&t=x7eLKzUTYnfKNFBo-1"
                      target="_blank"
                    >
                      <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                        <span>View</span>
                        <Image
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          width={16} // specify the width of the icon
                          height={16} // specify the height of the icon
                          className="w-4 h-4 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="skills">
          <div className="text-center text-2xl gradient-text font-bold mb-10 animate-pulse ">
            <h1>
              Tech Skills{" "}
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
        </div>
        <div className="skills-section">
          <div className="mx-auto w-full p-8 mb-24">
            <div className="techstack overflow-x-auto mb-24">
              <ul className="flex flex-wrap justify-center gap-8 md:gap-20 text-lg">
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/Group 4.svg"
                    alt="HTML5 Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/Group 5.svg"
                    alt="CSS3 Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/Group 8.svg"
                    alt="JS Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/Group 9.svg"
                    alt="React Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/Group 10.svg"
                    alt="Tailwind CSS Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/bootstrap.svg"
                    alt="Bootstrap Logo"
                    width={48}
                    height={40}
                    className="w-12 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/Group 16.svg"
                    alt="Other Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/nodejs-icon.svg"
                    alt="Node.js Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300">
                  <Image
                    src="/dev/laravel-2.svg"
                    alt="Laravel Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>
    </body>
  );
};

export default Page;
