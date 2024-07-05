import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#636992] to-[#6e7abe] w-full h-80 text-white">
      <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center p-8">
          <img src="logo3.png" className="h-24 w-auto mr-4" alt="Logo" />
          <div>
            <h3 className="text-xl font-bold">Alidev</h3>
            <p className="text-white">Front End Developer</p>
            <div className="flex mt-2">
              <div className="mr-4">
                <a href="https://facebook.com">
                  <img src="facebook.svg" className="h-8 w-auto" alt="Facebook" />
                </a>
              </div>
              <div className="mr-4">
                <a href="https://instagram.com">
                  <img src="instagram.svg" className="h-8 w-auto" alt="Instagram" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com">
                  <img src="twitter.svg" className="h-8 w-auto" alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="text-start p-8">
            <h3 className="text-xl font-normal mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <img src="gmail.svg" className="h-6 w-auto mr-2" alt="Email Icon" />
              <p>ceraficaalejandrojr@gmail.com</p>
            </div>
            <div className="flex items-center">
              <img src="messages.svg" className="h-6 w-auto mr-2" alt="Phone Icon" />
              <p>+639217488822</p>
            </div>
          </div>
          <div className="text-start p-8">
            <h3 className="text-xl font-normal mb-4">Address</h3>
            <div className="flex items-center">
              <img src="google maps.svg" className="h-6 w-auto mr-2" alt="Phone Icon" />
              <p>Pasig City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
