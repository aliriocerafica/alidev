"use client";
import React from "react";
import "../css/home.css";
import Image from "next/image";
import Link from "next/link";

const Certificate = () => {
  return (
    <div className="contentAbout w-auto mb-24 ">
      <div className="content w-full lg:w-3/5  gap-10 h-auto mx-auto flex flex-col lg:flex-row-reverse p-8">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center  border-2 p-4 border-[#7484dd] rounded-md">
          <Image
            src="/cert1.jpg"
            alt="Image"
            width={500} // specify the width of the image
            height={500} // specify the height of the image
            className="w-full lg:w-[500px] h-auto rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="text-content px-4 lg:px-0 text-center lg:text-left animate-on-scroll">
            <h2 className="text-3xl font-bold  gradient-text mb-6">
              Certificates{" "}
              <Image
                src="/cert.svg"
                alt="Code Icon"
                width={24} // specify the width of the icon
                height={24} // specify the height of the icon
                className="inline w-12 h-12 beat-fade fade-animation"
              />
            </h2>
            <p className="mt-2 mb-12 text-base text-gray-300">
              All <span className="font-bold">certificates </span>
              were obtained during my college years, reflecting my commitment to
              learning and personal growth through dedicated effort and
              perseverance.
            </p>

            <Link href="/certificate">
                <p className="font-normal border-2 text-white w-32 text-center border-[#7484dd] hover:bg-[#4855a3] hover:text-white hover:border-white p-2 text-sm rounded-lg">
                  View Certificates
                </p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
