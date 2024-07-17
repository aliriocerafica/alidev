"use client";
import React from "react";
import "../css/home.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

const Certificate = () => {
  return (
    <div className="contentAbout w-auto mb-24 ">
      <div className="content w-full lg:w-3/5  gap-10 h-auto mx-auto flex flex-col lg:flex-row-reverse p-8">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center  border-2 p-4 border-[#7484dd] rounded-md">
          <Image
            src="/cert1.jpg"
            alt="Image"
            width={500} 
            height={500} 
            className="w-full lg:w-[500px] h-auto rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="text-content px-4 lg:px-0 text-center lg:text-left animate-on-scroll">
            <h2 className="text-2xl font-bold  gradient-text mb-6">
              Certificates{" "}
              <Image
                src="/cert.svg"
                alt="Code Icon"
                width={18}
                height={18} 
                className="inline w-10 h-10 beat-fade fade-animation"
              />
            </h2>
            <p className="mt-2 mb-12  text-gray-300 text-base font-normal">
              All <span className="font-bold">certificates </span>
              were obtained during my college years, reflecting my commitment to
              learning and personal growth through dedicated effort and
              perseverance.
            </p>

            <Link href="/certificate">
      <motion.p
        className="font-normal border-2 text-white w-36 text-center border-[#7484dd] hover:bg-[#4855a3] hover:text-white hover:border-white p-2 text-sm rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Certificates
      </motion.p>
    </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
