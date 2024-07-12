import React from "react";
import Link from "next/link";
import Image from 'next/image';

const Education = () => {
  return (
    <div>
      <div className="about mx-auto w-3/5 p-2 text-2xl gradient-text text-center font-bold mt-32">
        <h1>Education</h1>
        <div className="w-16 mx-auto border-b-4 border-white-400 mt-2 rounded-full"></div>
      </div>
      <div className="contentAbout w-auto">
        <div className="content w-full lg:w-3/5 h-auto mx-auto flex flex-col lg:flex-row p-8">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src="/umakEdu.png" 
              alt="University of Makati"
              width={500}
              height={500}
              className="w-full lg:w-[500px] h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="text-content px-4 lg:px-0">
              <h2 className="text-4xl font-bold mt-12 gradient-text mb-6">
                University Of Makati
              </h2>
              <p className="mt-2 mb-12 text-white text-2xl">
                Bachelor of Science in Computer Science Major in
                <span className="font-bold"> Application Development</span>
              </p>
              <p className="mt-2 mb-12 gradient-text font-bold text-2xl">
                2022 - 2024
              </p>
              <Link href="/eduation">
                <p className="font-normal border-2 text-white w-32 text-center border-[#7484dd] hover:bg-[#4855a3] hover:text-white hover:border-white p-2 text-sm rounded-lg">
                  View Education
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
