import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#EBECFF] to-[#cecfeb] w-full h-auto lg:h-60 text-[#727272] ">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center p-8">
          <Image src="/logo3.png" width={96} height={96} className="mr-4" alt="Logo" />
          <div>
          <h1 className="text-2xl text-black font-bold"><span className="text-[#7786df] text-4xl font-bold"> ali</span>DEV</h1>
            <p className="text-[#727272]">Front End Developer</p>
            <div className="flex mt-2">
              <div className="mr-4">
                <a href="https://Facebook.com">
                  <Image src="/footer/Facebook.svg" width={36} height={34} alt="Facebook"  />
                </a>
              </div>
              <div className="mr-4">
                <a href="https://instagram.com">
                  <Image src="/footer/instagram.svg" width={32} height={32} alt="Instagram" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com">
                  <Image src="/footer/twitter.svg" width={32} height={30} alt="Twitter" className="pt-1"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="text-start p-8">
            <h3 className="text-xl font-normal mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Image src="/footer/gmail.svg" width={26} height={24} className="mr-2" alt="Email Icon" />
              <p>ceraficaalejandrojr@gmail.com</p>
            </div>
            <div className="flex items-center">
              <Image src="/footer/mess.svg" width={20} height={24} className="mr-2 ml-1" alt="Phone Icon" />
              <p>+639217488822</p>
            </div>
          </div>
          <div className="text-start p-8">
            <h3 className="text-xl font-normal mb-4">Address</h3>
            <div className="flex items-center">
              <Image src="/footer/Pin.svg" width={24} height={24} className="mr-2" alt="Phone Icon" />
              <p>Pasig City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
