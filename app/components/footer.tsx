import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#636992] to-[#6e7abe] w-full h-auto lg:h-80 text-white">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center p-8">
          <Image src="/logo3.png" width={96} height={96} className="mr-4" alt="Logo" />
          <div>
            <h3 className="text-xl font-bold">Alidev</h3>
            <p className="text-white">Front End Developer</p>
            <div className="flex mt-2">
              <div className="mr-4">
                <a href="https://Facebook.com">
                  <Image src="/facebook.svg" width={32} height={32} alt="Facebook" />
                </a>
              </div>
              <div className="mr-4">
                <a href="https://instagram.com">
                  <Image src="/instagram.svg" width={32} height={32} alt="Instagram" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com">
                  <Image src="/twitter.svg" width={32} height={32} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="text-start p-8">
            <h3 className="text-xl font-normal mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Image src="/gmail.svg" width={24} height={24} className="mr-2" alt="Email Icon" />
              <p>ceraficaalejandrojr@gmail.com</p>
            </div>
            <div className="flex items-center">
              <Image src="/messages.svg" width={24} height={24} className="mr-2" alt="Phone Icon" />
              <p>+639217488822</p>
            </div>
          </div>
          <div className="text-start p-8">
            <h3 className="text-xl font-normal mb-4">Address</h3>
            <div className="flex items-center">
              <Image src="/google maps.svg" width={24} height={24} className="mr-2" alt="Phone Icon" />
              <p>Pasig City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
