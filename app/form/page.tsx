"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import Sidebar from "../components/nav";
import React from "react";

export default function Page() {
  const [deviceType, setDeviceType] = useState("");
  const [deviceNumber, setDeviceNumber] = useState("");
  const [key, setKey] = useState("");
  const [isKeyGenerated, setIsKeyGenerated] = useState(false);

  const generatedKeys = new Set();

  const generateUniqueKey = () => {
    let uniqueKey = "";
    let lastDigit = -1;

    for (let i = 0; i < 10; i++) {
      let digit;
      do {
        digit = Math.floor(Math.random() * 10);
      } while (digit === lastDigit);

      uniqueKey += digit;
      lastDigit = digit;
    }

    return uniqueKey;
  };

  const generateKey = () => {
    const deviceID = parseInt(deviceNumber, 10);
    if (!isNaN(deviceID) && deviceID > 0 && deviceID <= 1000) {
      let newKey;
      do {
        newKey = generateUniqueKey();
      } while (
        generatedKeys.has(`${deviceType}-${deviceID} - "${newKey}"`) &&
        generatedKeys.size < 1000
      );

      if (generatedKeys.size >= 1000) {
        alert("Maximum unique keys generated for the device type.");
        return;
      }

      generatedKeys.add(`${deviceType}-${deviceID} - "${newKey}"`);
      setKey(`${deviceType}-${deviceID} - "${newKey}"`);
      setIsKeyGenerated(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Device ID",
        text: "Please enter a valid device ID number (1-1000).",
      });
    }
  };

  const resetForm = () => {
    setDeviceType("");
    setDeviceNumber("");
    setKey("");
    setIsKeyGenerated(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(key)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Copied!",
          text: "Key copied to clipboard!",
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to copy key!",
        });
      });
  };

  const downloadKeyAsText = () => {
    if (key) {
      const blob = new Blob([key], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `BitLocker_TPM_Key_${deviceNumber}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      Swal.fire({
        icon: "error",
        title: "No Key to Download",
        text: "Please generate a key before downloading.",
      });
    }
  };

  const handleButtonClick = () => {
    if (isKeyGenerated) {
      resetForm();
    } else {
      generateKey();
    }
  };

  // New onDelete function to reset the key
  const onDelete = () => {
    resetForm();
    Swal.fire({
      icon: "info",
      title: "Key Deleted",
      text: "The generated key has been deleted.",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center p-4 lg:p-10">
        <div className="form bg-white p-4 rounded-2xl bg-opacity-20 shadow-sky-100 shadow-opacity-20 shadow-lg border-1 border-gray-400">
          <div className="backdrop-blur-md bg-[#1e2330] bg-opacity-80 shadow-lg rounded-lg p-8 max-w-2xl w-full shadow-opacity-60">
            <h1 className="text-3xl font-normal text-center mb-6 text-white">
              BITLOCKER KEY GENERATORS APABS
              <hr className="border-t-1 border-white w-full mt-2" />
            </h1>
            <div className="border-t- border-gray-200 rounded-full w-full"></div>

            <div className="mb-6">
              <label className="block text-sm font-normal mb-1 text-white">
                Select Device Type:
              </label>
              <select
                className="text-white bg-gray-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                onChange={(e) => setDeviceType(e.target.value)}
                value={deviceType}
                aria-label="Device Type"
              >
                <option value="">Select...</option>
                <option value="APABS-LAPTOP">Laptop</option>
                <option value="APABS-DESKTOP">Desktop</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-normal mb-1 text-white">
                Device ID Number:
              </label>
              <input
                type="number"
                placeholder="Enter Device ID Number"
                className="text-white bg-gray-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                onChange={(e) => setDeviceNumber(e.target.value)}
                value={deviceNumber}
                aria-label="Device ID Number"
              />
            </div>
            <button
              onClick={handleButtonClick}
              className="bg-black text-white p-3 rounded-md w-full hover:bg-gray-800 transition duration-200"
            >
              {isKeyGenerated ? "Generate New Key" : "Generate Key"}
            </button>
            <div className="mt-6">
              {key && (
                <>
                  <h2 className="text-xl font-medium text-white mb-2">
                    Generated Key:
                  </h2>
                  <div className="border text-blue-400 font-semibold border-white rounded-md p-2 mb-1 flex justify-between items-center">
                    <div className="flex items-center">
                      <span>{key}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {" "}
                      {/* Updated spacing here */}
                      <button
                        onClick={onDelete}
                        className="flex items-center justify-center text-black p-1 rounded-md  shadow-md hover:bg-gray-white transition duration-200"
                        style={{ background: 'linear-gradient(to right, #3a435d, #f0f0f0)' }} 
                        aria-label="Delete Item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="size-5 shadow-md"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className="flex items-center justify-center text-black p-1 rounded-md shadow-md hover:bg-gray-300 transition duration-200"
                        style={{ background: 'linear-gradient(to right, #3a435d, #f0f0f0)' }} 
                        aria-label="Copy Key to Clipboard"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="white"
                          className="size-5"
                        >
                          <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
                          <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
  onClick={downloadKeyAsText}
  className="text-white flex items-center space-x-2 hover:text-green-200 mt-4 transition duration-200"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
  <span>Download Key</span>
</button>

                 
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
