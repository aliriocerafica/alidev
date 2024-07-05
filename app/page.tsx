'use client'
import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Education from "./components/education";
import Contact from "./components/contact";

import "./css/home.css";

const Page = () => {
  useEffect(() => {
    // Add a class to trigger the animation on refresh
    window.scrollTo(0, 0);
    document.body.classList.add('fade-in');
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };
  const handleScrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight) {
            element.classList.add('animate');
        }
    });
};
  useEffect(() => {
    window.addEventListener('scroll', handleScrollAnimations);
    return () => {
        window.removeEventListener('scroll', handleScrollAnimations);
    };
}, []);
  return (
    <body className="bg-[#0c1c29] min-h-screen fade-in">
      <div>
        <Navbar />

        <div className="profile mx-auto w-3/5 p-4 mt-36 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:order-2">
              <img
                src="profile.png"
                alt="Image"
                className="w-auto h-auto md:float-right animate-float"
              />
            </div>

            <div className="md:order-1 text-white mt-20">
              <h2 className="text-6xl font-bold mb-2 gradient-text  animate-slide-in slide-in  ">
                Hi , I'm Ali Cerafica{" "}
              </h2>
              <h2 className="text-3xl font-bold mb-2   animate-slide-in slide-in ">
                Front End Developer{" "}
                <img
                  src="/svg/code-solid.svg"
                  alt="Code Icon"
                  className="inline w-6 h-6 beat-fade"
                />
              </h2>
              <p className="text-gray-400 mt-4  animate-slide-in slide-in ">
                I am a Front End Developer and UI/UX Designer, a recent graduate
                of Bachelor of Science in Computer Science Majoring in
                Application Development from the University of Makati.
              </p>
              <a
                href="https://drive.google.com/file/d/1VbJASK-QYU0JqNvTGk5Fc73D2_AySj6T/view?usp=sharing"
                className="contact font-normal border-2 border-[#7484dd] p-2 text-sm rounded-lg mt-10 block
             hover:bg-[#4855a3] hover:text-white hover:border-white w-32 text-center"
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
                  <img
                    src="gitIcon.png"
                    alt="GitHub Logo"
                    className="w-8 h-8  rounded-sm "
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/RioCer22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex mr-4"
                >
                  <img
                    src="fbIcon.png"
                    alt="GitHub Logo"
                    className="w-8 h-8  rounded-sm "
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/alejandro-cerafica-jr-926a7a23b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <img
                    src="indeedIcon.png"
                    alt="LinkedIn Logo"
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
          className="about mx-auto w-3/5 p-2 text-2xl gradient-text text-center font-bold mt-24 animate-on-scroll "
        >
          <h1>About Me</h1>
          <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full"></div>
        </div>

        <div className="contentAbout w-auto bg-white mt-12 ">
          <div className="content w-full lg:w-3/5 h-auto mx-auto flex flex-col lg:flex-row-reverse p-8">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center mt-10">
              <img
                src="mySet.png"
                alt="Image"
                className="w-full lg:w-[500px] h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="text-content px-4 lg:px-0 text-center lg:text-left animate-on-scroll ">
                <h2 className="text-3xl font-bold mt-12 gradient-text mb-6 ">
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
        <div id="Works" className=" works w-auto h-auto mx-auto mt-10 mb-28 animate-on-scroll">
          <div className="Work mx-auto w-full mb-36 p-2">
            <div className="about mx-auto w-full p-2 text-2xl gradient-text text-center font-bold mt-6">
              <h1>Works</h1>
              <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full"></div>
            </div>
            <div className="flex justify-center items-center mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                <div
                  className="box1 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src="petTaxi.png"
                      alt="Image"
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
                        <img
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          className="w-6 h-6 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="box1 rounded-md min-h-[200px] min-w-[50px] flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src="eB.png"
                      alt="Image"
                      className="w-auto lg:w-[400px] h-auto"
                    />
                  </div>
                  <div className="mt-4 text-left">
                  <a
                      href="https://www.figma.com/design/t53wU5lvmslTRHLQb2HEAb/Ebarangay?t=dTE7yj1S6uGlWL7R-1"
                      target="_blank"
                    >
                      <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                        <span>View</span>
                        <img
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          className="w-6 h-6 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="box1 rounded-md min-h-[200px] min-w-[50px] flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src="W.png"
                      alt="Image"
                      className="w-auto lg:w-[250px] h-auto"
                    />
                  </div>
                  
                  <div className="mt-4 text-left">
                  <a
                      href="https://www.figma.com/design/Y3wrqCns3xbytwih42GlQs/Watch?node-id=0-1&t=OgCY6WVetC839oGM-1"
                      target="_blank"
                    >
                      <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                        <span>View</span>
                        <img
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          className="w-6 h-6 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
                <div
                  className="box1 rounded-md min-h-[200px] min-w-[50px] flex flex-col justify-between p-4 text-center"
                  style={{
                    background: "linear-gradient(to right, #7484dd, #e0e3eb)",
                  }}
                >
                  <div className="flex justify-center items-center">
                    <img
                      src="Ebasa.png"
                      alt="Image"
                      className="w-auto lg:w-[400px] h-auto"
                    />
                  </div>
                  <div className="mt-4 text-left">
                  <a
                      href="https://www.figma.com/design/k50orFt2KS10oUn2st8Xdh/Ebasa?node-id=0-1&t=4oz20mypuWHL9wKE-1"
                      target="_blank"
                    >
                      <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                        <span>View</span>
                        <img
                          src="/dev/Group 16.svg"
                          alt="Other Logo"
                          className="w-6 h-6 ml-2"
                        />
                      </button>
                    </a>
                  </div>
                </div>
                {/* <div className="box1 rounded-md min-h-[200px] min-w-[350px] flex flex-col justify-between p-4 text-center" style={{ background: 'linear-gradient(to right, #7484dd, #e0e3eb)' }}>
                  <div className="flex justify-center items-center">
                    <img
                      src="petTaxi.png"
                      alt="Image"
                      className="w-auto lg:w-[200px] h-auto"
                    />
                  </div>
                  <div className="mt-4">
                  <button className="border-2 text-black p-2 text-sm rounded-md border-[#262d52] transition duration-300 ease-in-out hover:bg-[#7484dd]">
                      Check Work
                    </button>
                  </div>
                </div> */}
                {/* <div className="box1 rounded-md min-h-[200px] min-w-[350px] flex flex-col justify-between p-4 text-center" style={{ background: 'linear-gradient(to right, #7484dd, #e0e3eb)' }}>
                  <div className="flex justify-center items-center">
                    <img
                      src="petTaxi.png"
                      alt="Image"
                      className="w-auto lg:w-[200px] h-auto"
                    />
                  </div>
                  <div className="mt-4">
                  <button className="border-2 text-black p-2 text-sm rounded-md border-[#262d52] transition duration-300 ease-in-out hover:bg-[#7484dd]">
                      Check Work
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div
            id="skills"
            className="text-center text-2xl gradient-text font-bold mb-10 animate-pulse"
          >
            <h1>
              {" "}
              Tech Skills{" "}
              <img
                src="/dev/Gear.svg "
                alt="Code Icon"
                className="ml-2 inline w-8 h-8 spin text-white"
              />
              <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full"></div>
            </h1>
          </div>
          <div className="mx-auto w-full  p-8">
            <div className="techstack overflow-x-auto">
              <ul className="flex flex-wrap justify-center gap-8 md:gap-20 text-lg">
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/Group 4.svg"
                    alt="HTML5 Logo"
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/Group 5.svg"
                    alt="CSS3 Logo"
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/Group 8.svg"
                    alt="JS Logo"
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/Group 9.svg"
                    alt="React Logo"
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/Group 10.svg"
                    alt="Tailwind CSS Logo"
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/bootstrap.svg"
                    alt="Bootstrap Logo"
                    className="w-12 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/Group 16.svg"
                    alt="Other Logo"
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/nodejs-icon.svg"
                    alt="Node.js Logo"
                    className="w-10 h-10 mr-4"
                  />
                </li>
                <li className="inline-block transform transition-transform duration-300 ">
                  <img
                    src="/dev/laravel-2.svg"
                    alt="Laravel Logo"
                    className="w-10 h-10"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </body>
  );
};

export default Page;
