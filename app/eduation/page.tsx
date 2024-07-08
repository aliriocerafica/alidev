'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../css/home.css";

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const educationItems = [
    {
      imageSrc: "umakEdu.png",
      title: "Bachelor of Science in Computer Science Major in Application Development",
      school: "University of Makati",
      date: "2022 - 2024",
    },
    {
      imageSrc: "umak2.png",
      title: "Diploma in Application Development",
      school: "University of Makati",
      date: "2019 - 2022",
    },
    {
      imageSrc: "graduate.png",
      title: "General Academic Strand - Senior High School",
      school: "Bansud Institute",
      date: "2017 - 2019",
    },
    {
      imageSrc: "graduate.png",
      title: "Junior High School",
      school: "Bansud Institute",
      date: "2013 - 2017",
    },
    {
      imageSrc: "graduate.png",
      title: "Basic Education - Proper Bansud Elementary School",
      date: "2007 - 2013",
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % educationItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + educationItems.length) % educationItems.length);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-18 flex justify-center items-start mt-32">
        <div className="w-full md:w-4/5 flex justify-center items-center p-8">
          <div className="relative w-full">
            <button
              className="absolute left-0 z-10 bg-white text-black p-3 rounded-full transform -translate-y-1/2 top-1/2"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="flex overflow-hidden">
              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex-none transition-transform duration-500 ${
                    index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                  }`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <div className="flex flex-col md:flex-row w-full items-center justify-center">
                    <div className="flex-1 text-center relative flex justify-center items-center p-4">
                      <div className="w-full h-auto md:w-3/4 overflow-hidden mx-auto flex">
                        <Image
                          src={`/${item.imageSrc}`} // Ensure the leading slash is included for the image path
                          alt={item.title}
                          width={500} // specify the width of the image
                          height={500} // specify the height of the image
                          className="w-full h-auto profile-img"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center p-4 md:p-8 text-xl md:text-md md:text-left gradient-text font-bold">
                      <h1 className="text-2xl md:text-4xl">{item.title}</h1>
                      {item.school && (
                        <h2 className="text-lg md:text-2xl mt-2 md:mt-4 gradient-text font-semibold">
                          {item.school} 
                          <Image
                            src="/svg/location-dot-solid.svg"
                            alt="Location Icon"
                            width={24} // specify the width of the image
                            height={24} // specify the height of the image
                            className="inline w-4 h-4 md:w-6 md:h-6 beat-fade"
                          />
                        </h2>
                      )}
                      <div className="text-sm md:text-xl mt-4 md:mt-8 font-semibold text-white">
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 z-10 bg-white text-black p-3 rounded-full transform -translate-y-1/2 top-1/2"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
