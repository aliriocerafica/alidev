"use client";
import React from "react";
import "../css/home.css";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <div className="Work mx-auto w-4/5 p-2">
      <div className="about mx-auto w-full p-2 text-2xl gradient-text text-center font-bold mt-6">
        <h1>Works</h1>
        <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 mb-24 rounded-full"></div>
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
                src="/Pet.png"
                alt="Image"
                width={1200} // specify the width of the image
                height={1200} // specify the height of the image
                className="w-auto lg:w-[250px] h-auto"
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
                src="/Watch.png"
                alt="Image"
                width={1200} // specify the width of the image
                height={1200} // specify the height of the image
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
                src="/displayP.png"
                alt="Image"
                width={1200} // specify the width of the image
                height={1200} // specify the height of the image
                className="w-auto lg:w-[400px] h-auto pt-10"
              />
            </div>
            <div className="mt-4 text-left">
              <div className="flex space-x-4">
                <a
                  href="https://www.figma.com/design/l8o1u26Tg3Xlqlq4uut0U6/Portfolio?node-id=0-1&t=ep6rADEtWEo21CAg-1"
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
                <a
                  href="https://github.com/aliriocerafica/alidev"
                  target="_blank"
                >
                  <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                    <span>Git Repository</span>
                
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
