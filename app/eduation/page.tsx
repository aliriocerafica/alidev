'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar';
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
      // school: "University of Makati",
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
    <div className=''>
      <Navbar />
      <div className="mt-18 flex justify-center items-start mt-20">
        <div className="w-full md:w-4/5 flex justify-center items-center p-8">
          <div className="relative w-full ">
            <button
              className="absolute left-0 z-10 bg-black text-white  p-3 rounded-full transform -translate-y-1/2 top-1/2"
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
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="flex-1 text-center  relative flex justify-center items-center">
                      <div className="w-full h-auto md:w-full md:h-auto overflow-hidden mx-auto flex ">
                        <img
                          src={item.imageSrc}
                          alt="Profile Picture"
                          className="w-full h-auto  profile-img"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center gradient-text p-18 mt-24  text-6xl md:text-md font-semibold md:text-left">
                      <h1 >{item.title}</h1>
                      {item.school && <h2 className="text-2xl mt-4">{item.school} <img
                  src="/svg/location-dot-solid.svg"
                  alt="Code Icon"
                  className="inline w-6 h-6 beat-fade"
                /></h2>}
                      <div className="text-2xl mt-8 font-semibold text-white">
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 z-10 bg-black text-white p-3 rounded-full transform -translate-y-1/2 top-1/2"
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
