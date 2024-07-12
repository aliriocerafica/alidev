"use client";
import React from "react";
import "../css/home.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen mt-32">
        <div className="certificate mx-auto w-4/5 mb-36 p-2">
          <div className="flex justify-center items-center mt-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
              <div className="box1 rounded-md min-h-[100px] min-w-[50px]  border-2  border-[#7484dd] w-full h-full flex flex-col justify-between p-4 text-center">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cert1.jpg"
                    alt="Image"
                    width={400}
                    height={400}
                    className="w-auto lg:w-[500px] h-auto rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1FdOIIYFcbEE3Zb45ILss5IDmrcpW3cjI/view"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center text-sm border-2 w-32 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                      <span className="text-center w-full">View</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="box2 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center border-2 border-[#7484dd]">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cert2.jpg"
                    alt="Image"
                    width={400}
                    height={400}
                    className="w-auto lg:w-[500px] h-60 rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1uQnAHuTF0WTRi95G6B4orfdrNb6igVCj/view"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center text-sm border-2 w-32 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                      <span className="text-center w-full">View</span>
                    </button>
                  </a>
                </div>
              </div>

              <div className="box2 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center border-2  border-[#7484dd]">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cert3.png"
                    alt="Image"
                    width={400}
                    height={400}
                    className="w-auto lg:w-[500px] h-60 rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1DFTzWE5m_NeeM4vwednxHMReCp02_E6Z/view"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center text-sm border-2 w-32 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                      <span className="text-center w-full">View</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="box2 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center border-2  border-[#7484dd]">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cert4.jpg"
                    alt="Image"
                    width={400}
                    height={400}
                    className="w-auto lg:w-[500px] h-60 rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1tuBKxJntZr0mjLArUm4QzMeQRZl7KQAT/view"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center text-sm border-2 w-32 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                      <span className="text-center w-full">View</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="box2 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center border-2  border-[#7484dd]">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cert5.png"
                    alt="Image"
                    width={400}
                    height={400}
                    className="w-auto lg:w-[500px] h-60 rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/19jCo2glV2Si9in36uswi8a_DpjmrkZkC/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center text-sm border-2 w-32 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                      <span className="text-center w-full">View</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="box2 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center border-2  border-[#7484dd]">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cert6.jpg"
                    alt="Image"
                    width={400}
                    height={400}
                    className="w-auto lg:w-[500px] h-60 rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1BIzMoMVQRdrAW4EZ5f1pQtm6ayNf1qIg/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center text-sm border-2 w-32 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                      <span className="text-center w-full">View</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="box2 rounded-md min-h-[100px] min-w-[50px] flex flex-col justify-between p-4 text-center border-2  border-[#7484dd]">
                <div className="flex justify-center items-center">
                  <Image
                    src="/cert7.png"
                    alt="Image"
                    width={400}
                    height={400}
                    className="w-auto lg:w-[500px] h-60 rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1mDVnyou7b2rJc6cYhlICOKqDiBDxm_XM/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center text-sm border-2 w-32 text-white hover:bg-[#4855a3] hover:text-white hover:border-white border-gray-300 p-2 rounded-md">
                      <span className="text-center w-full">View</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
