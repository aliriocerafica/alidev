"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
   
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent"
      }`}
    >
      <nav>
        <div
          className={`navbar mx-auto h-auto p-4 text-right text-white rounded-full w-3/4 flex items-center justify-between relative ${
            isScrolled ? "" : "mt-8"
          }`}
        >
          <div
            className={`logo ml-2 font-bold ${isScrolled ? "text-black" : ""}`}
          >
            <h1>Alidev</h1>
          </div>

          {/* Mobile Menu Icon */}
          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu}>
              <svg
                className={`w-6 h-6 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Modal */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-lg mt-2 w-full text-center">
              <div className="p-2">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="block text-lg hover:font-bold">
                    Home
                  </Link>
                  <Link
                    href="#about"
                    onClick={(e) => handleSmoothScroll(e, "about")}
                    className="block text-lg hover:font-bold"
                  >
                    About
                  </Link>
                  <Link
                    href="#Works"
                    onClick={(e) => handleSmoothScroll(e, "Works")}
                    className="block text-lg hover:font-bold"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#skills"
                    onClick={(e) => handleSmoothScroll(e, "skills")}
                    className="block text-lg hover:font-bold"
                  >
                    Skills
                  </Link>
                  <Link
                    href="#skills"
                    onClick={(e) => handleSmoothScroll(e, "skills")}
                    className="block text-lg hover:font-bold"
                  >
                    Certificate
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 flex-1 justify-center">
            <Link
              href="/"
              className={`relative hover:font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "about")}
              className={`relative hover:font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="#Works"
              onClick={(e) => handleSmoothScroll(e, "Works")}
              className={`relative hover:font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className={`relative hover:font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Skills
            </Link>
            <Link
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className={`relative hover:font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Cetificate
            </Link>
          </div>

          {/* Contact Me Button */}
          <div>
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              passHref
            >
              <p
                className={`contact font-normal border-2 border-[#7484dd] p-2 text-sm rounded-lg hover:bg-[#4855a3] hover:text-white hover:border-white ${
                  isScrolled ? "text-black" : ""
                }`}
              >
                Contact Me
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
