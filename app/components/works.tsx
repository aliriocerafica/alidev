'use client';
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "../css/home.css";
import Image from "next/image";

const Works = () => {
  return (
    <div className="work mx-auto w-4/5 p-2">
      <div className="about mx-auto w-full p-2 text-2xl gradient-text text-center font-bold mt-6">
        <h1>Works</h1>
        <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 mb-24 rounded-full"></div>
      </div>
      <div className="flex justify-center items-center mt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {/* Wrap each box with motion.div */}
          <motion.div
            className="box rounded-md flex flex-col justify-between p-4 text-center"
            style={{
              background: "linear-gradient(to right, #7484dd, #e0e3eb)",
            }}
            whileHover={{ scale: 1.05 }} // Scale effect on hover
          >
            <div className="flex justify-center items-center h-64">
              <Image
                src="/Pet.png"
                alt="Pet Taxi"
                width={1200}
                height={1200}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <a
                href="https://www.figma.com/design/cmJrmeFFeHKCGYFaedkmY5/Pet-Taxi-Mobile-Alidev?node-id=0-1&t=VYwBzxbrfKRb9mxd-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                  <span>View</span>
                  <Image
                    src="/dev/Group 16.svg"
                    alt="Other Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4 ml-2"
                  />
                </button>
              </a>
            </div>
          </motion.div>
          {/* Repeat the same for other boxes */}
          <motion.div
            className="box rounded-md flex flex-col justify-between p-4 text-center"
            style={{
              background: "linear-gradient(to right, #7484dd, #e0e3eb)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center h-64">
              <Image
                src="/eB.png"
                alt="Ebarangay"
                width={1200}
                height={1200}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <a
                href="https://www.figma.com/design/t53wU5lvmslTRHLQb2HEAb/Ebarangay?node-id=0-1&t=4u7qiusbrmlF9T8Q-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                  <span>View</span>
                  <Image
                    src="/dev/Group 16.svg"
                    alt="Other Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4 ml-2"
                  />
                </button>
              </a>
            </div>
          </motion.div>
          {/* Repeat the same for other boxes */}
          <motion.div
            className="box rounded-md flex flex-col justify-between p-4 text-center"
            style={{
              background: "linear-gradient(to right, #7484dd, #e0e3eb)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center h-64">
              <Image
                src="/Watch.png"
                alt="Watch"
                width={1200}
                height={1200}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <a
                href="https://www.figma.com/design/Y3wrqCns3xbytwih42GlQs/Watch?t=4u7qiusbrmlF9T8Q-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                  <span>View</span>
                  <Image
                    src="/dev/Group 16.svg"
                    alt="Other Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4 ml-2"
                  />
                </button>
              </a>
            </div>
          </motion.div>
          {/* Repeat the same for other boxes */}
          <motion.div
            className="box rounded-md flex flex-col justify-between p-4 text-center"
            style={{
              background: "linear-gradient(to right, #7484dd, #e0e3eb)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center h-64">
              <Image
                src="/displayP.png"
                alt="Portfolio"
                width={1200}
                height={1200}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <div className="flex space-x-4">
                <a
                  href="https://www.figma.com/design/l8o1u26Tg3Xlqlq4uut0U6/Portfolio?node-id=0-1&t=ep6rADEtWEo21CAg-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                    <span>View</span>
                    <Image
                      src="/dev/Group 16.svg"
                      alt="Other Logo"
                      width={16}
                      height={16}
                      className="w-4 h-4 ml-2"
                    />
                  </button>
                </a>
                <a
                  href="https://github.com/aliriocerafica/alidev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                    <span>Git Repository</span>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
          {/* Repeat the same for other boxes */}
          <motion.div
            className="box rounded-md flex flex-col justify-between p-4 text-center"
            style={{
              background: "linear-gradient(to right, #7484dd, #e0e3eb)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center h-64">
              <Image
                src="/project5.png"
                alt="Coffee Shop"
                width={1200}
                height={1200}
                className="w-auto h-full object-contain"
              />
            </div>
            <div className="mt-4 text-left">
              <div className="flex space-x-4">
                <a
                  href="https://www.figma.com/design/O1Utop0WQWW7AKnoqKxAyL/Coffee-Shop?node-id=0-1&t=6y5oP29Ybk4xVHtK-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                    <span>View</span>
                    <Image
                      src="/dev/Group 16.svg"
                      alt="Other Logo"
                      width={16}
                      height={16}
                      className="w-4 h-4 ml-2"
                    />
                  </button>
                </a>
                <a
                  href="https://github.com/aliriocerafica/alidev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center text-sm border-2 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                    <span>Git Repository</span>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Works;
