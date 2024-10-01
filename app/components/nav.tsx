import { useState, useEffect } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Auto-close sidebar on small screens
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
    <div className="relative flex pl-4">
      {/* External Toggle Button that moves with the Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-2 transform transition-transform duration-300 bg-black text-white rounded-full p-2 shadow-lg focus:outline-none z-50
          ${isOpen ? "translate-x-64" : "translate-x-0"}
        `}
      >
        {/* Toggle Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
</svg>

      </button>

      {/* Sidenav */}
      <nav
        className={`fixed top-0 left-0 h-full bg-black w-64 pl-4 text-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="flex justify-between items-center p-4">
          {/* <Link href="/" passHref>
            <h1 className="font-semibold cursor-pointer pt-4">
              <span className="text-2xl">ali</span>
              <span className="text-red-white font-medium text-3xl">DEV</span>
            </h1>
          </Link> */}
        </div>

        <div className="flex flex-col space-y-8 p-4 mt-4">
        <Link href="/" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              {/* Settings Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>



              {isOpen && <span className="ml-3">Portfolio</span>}
            </div>
          </Link>
          <Link href="/bitlock" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              {/* Home Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              {isOpen && <span className="ml-3">Home</span>}
            </div>
           
          </Link>
          <Link href="/form" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              {/* Bitlocker Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>

              {isOpen && <span className="ml-3">Bitlocker</span>}
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              {/* User Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>

              {isOpen && <span className="ml-3">User</span>}
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="w-full flex items-center p-2 hover:bg-white hover:bg-opacity-20 rounded transition">
              {/* Settings Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 w-6 h-6"
              >
                <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM9 18.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
              </svg>

              {isOpen && <span className="ml-3">Settings</span>}
            </div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className={`flex-grow transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
        style={{ zIndex: 1 }}
      >
        {/* Your main content will go here */}
      </div>
    </div>
  );
};

export default Sidebar;
