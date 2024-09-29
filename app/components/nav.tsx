import { useState, useEffect } from "react";
import Link from 'next/link';
import { HomeIcon, LockClosedIcon, UserIcon, CogIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

// Example Sidebar Component
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handle resize events to auto-close the sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full bg-black w-80 pl-4 text-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 50 }}  // Ensure the sidebar is always on top
      >
        <div className="flex justify-between items-center p-4">
          <Link href="/" passHref>
            <h1 className="font-semibold cursor-pointer pt-4">
              <span className="text-2xl">ali</span>
              <span className="text-red-white font-medium text-3xl">DEV</span>
            </h1>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 py-2 rounded focus:outline-none pt-2"
          >
            {/* Open Button */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 20 20" fill="none" height="32" width="32">
              <desc>Text Line Streamline Icon</desc>
              <path
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.06875 3.825H13.931249999999999M1.06875 7.5H13.931249999999999M1.06875 11.175H6.58125"
                strokeWidth="1"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-8 p-4 mt-4">
          <Link href="/" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              <HomeIcon className="h-6 w-6 mr-2" />
              <span className="cursor-pointer w-full">Home</span>
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              <LockClosedIcon className="h-6 w-6 mr-2" />
              <span className="cursor-pointer w-full">Bitlocker</span>
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              <UserIcon className="h-6 w-6 mr-2" />
              <span className="cursor-pointer w-full">User</span>
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              <CogIcon className="h-6 w-6 mr-2" />
              <span className="cursor-pointer w-full">Settings</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className={`flex-grow ml-0 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`} style={{ zIndex: 1 }}>
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between bg-black text-white shadow-md p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 py-2 rounded focus:outline-none"
          >
            {/* Open Button */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 20 20" fill="none" height="32" width="32">
              <desc>Text Line Streamline Icon</desc>
              <path
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.06875 3.825H13.931249999999999M1.06875 7.5H13.931249999999999M1.06875 11.175H6.58125"
                strokeWidth="1"
              />
            </svg>
          </button>

          {/* Search Bar and Profile Icon */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-64 bg-transparent text-white placeholder-gray-400"
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />
            </div>
            <UserCircleIcon className="h-8 w-8 text-gray-300 hover:text-gray-100 cursor-pointer" />
          </div>
        </div>

        {/* Main Content Area */}
      </div>
    </div>
  );
};

export default Sidebar;
