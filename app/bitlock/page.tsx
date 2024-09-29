"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import Sidebar from "../components/nav";

export default function TPMandPinGenerator() {
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
      } while (generatedKeys.has(`${deviceType}-${deviceID} - "${newKey}"`) && generatedKeys.size < 1000);

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

  return (
    <div>
      <Sidebar />
      <div className="flex justify-center items-center  bg-opacity-10 mt-16 p-10 ">
        <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg p-8 max-w-2xl w-full border-2  shadow-md shadow-white shadow-opacity-60 border-white border-opacity-80">
          <h1 className="text-3xl font-bold text-center mb-6 text-black">
            ITArdent BitLocker TPM and PIN Generator
          </h1>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-black">
              Select Device Type:
            </label>
            <select
              className="border border-gray-300 text-gray-700 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
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
            <label className="block text-sm font-medium mb-1 text-black">
              Device ID Number:
            </label>
            <input
              type="number"
              placeholder="Enter Device ID Number"
              className="border text-gray-700 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
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
              <h2 className="text-xl font-medium text-black mb-2">Generated Key:</h2>
            )}
            {key && (
              <div className="border text-black font-semibold border-black rounded-md p-2 mb-1 flex justify-between items-center">
                <div className="flex items-center">
                  <span>{key}</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center justify-center bg-gray-200 text-black p-1 rounded-md hover:bg-gray-300 transition duration-200"
                  aria-label="Copy Key to Clipboard"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 24 24" height="24" width="24" id="Content-Copy--Streamline-Outlined----Material-Symbols" data-name="Line" stroke="#000000" strokeWidth="1.5">
                    <path d="M7.50003 17.25H6.75003C4.79892 17.25 3.25003 15.7011 3.25003 13.75V6.75C3.25003 4.79889 4.79892 3.25 6.75003 3.25H13.75C15.7011 3.25 17.25 4.79889 17.25 6.75V7.5M9.75003 6.75H16.75C18.7011 6.75 20.25 8.29889 20.25 10.25V17.25C20.25 19.2011 18.7011 20.75 16.75 20.75H9.75003C7.79892 20.75 6.25003 19.2011 6.25003 17.25V10.25C6.25003 8.29889 7.79892 6.75 9.75003 6.75Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
               
                </button>
              </div>
            )}
            {key && (
              <div className="flex justify-between pt-2">
                <a
                  href="#"
                  onClick={downloadKeyAsText}
                  className="text-black underline flex items-center"
                  aria-label="Download Key as Text"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" className="mr-1">
                    <path d="M12 16.5l5-5h-4V3h-2v8.5H7l5 5zM4 19h16v2H4z" fill="#000000" />
                  </svg>
                  Download Key
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
