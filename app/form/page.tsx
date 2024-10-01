"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import Sidebar from "../components/nav";

export default function Page() {
  const [deviceType, setDeviceType] = useState<string>("");
  const [deviceNumber, setDeviceNumber] = useState<string>("");
  const [isKeyGenerated, setIsKeyGenerated] = useState<boolean>(false);
  const [isBatch, setIsBatch] = useState<boolean>(false);
  const [deviceIds, setDeviceIds] = useState<string>("");
  const [keys, setKeys] = useState<string[]>([]);

  const generatedKeys = new Set<string>();

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

  const generateKeys = () => {
    const ids = isBatch
      ? deviceIds.split(",").map((id) => id.trim())
      : [deviceNumber];
    const newKeys: string[] = [];

    ids.forEach((id) => {
      const deviceID = parseInt(id, 10);
      if (!isNaN(deviceID) && deviceID > 0 && deviceID <= 1000) {
        let newKey;
        do {
          newKey = generateUniqueKey();
        } while (
          generatedKeys.has(`${deviceType.toUpperCase()}-${deviceID}-${newKey}`)
        );

        newKeys.push(
          `APABS-${deviceType.toUpperCase()}-${deviceID}-"${newKey}"`
        );
        generatedKeys.add(
          `APABS-${deviceType.toUpperCase()}-${deviceID}-"${newKey}"`
        );
        
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Device ID",
          text: `Device ID "${id}" is invalid. Please enter valid IDs (1-1000).`,
        });
      }
    });

    setKeys(newKeys);
    setIsKeyGenerated(true);
  };

  const downloadKeys = (format: "txt" | "excel") => {
    if (format === "txt") {
      const blob = new Blob([keys.join("\n")], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `BitLocker_TPM_Keys_${Date.now()}.txt`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else if (format === "excel") {
      const csvContent = "data:text/csv;charset=utf-8," + keys.join("\n");
      const encodedUri = encodeURI(csvContent);
      const a = document.createElement("a");
      a.href = encodedUri;
      a.download = `BitLocker_TPM_Keys_${Date.now()}.csv`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const resetKeys = () => {
    setKeys([]);
    setIsKeyGenerated(false);
    setDeviceType("");
    setDeviceNumber("");
    setDeviceIds("");
    Swal.fire({
      icon: "success",
      title: "Keys Deleted",
      text: "All generated keys have been deleted.",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row ">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center p-4 sm:p-4 md:p-8 lg:p-10">
        <div className="form bg-white border border-white  shadow-inner p-4 rounded-2xl bg-opacity-20 shadow-opacity-20 shadow-lg border-1 border-gray-400">
          <div className="backdrop-blur-md bg-black bg-opacity-60 shadow-innerr shadow-lg rounded-lg p-8 max-w-2xl w-full shadow-opacity-60">
            <h1 className="text-3xl font-normal text-white mb-6">
              BitLocker TPM Key Generator APABS
            </h1>

            <div className="mb-6">
              <label className="block text-sm font-normal mb-1 text-white">
                Device Type:
              </label>
              <select
                className="shadow-md shadow-inneer border-white border-2 text-white bg-gray-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                onChange={(e) => setDeviceType(e.target.value)}
                value={deviceType}
                aria-label="Device Type"
              >
                <option value="" disabled>
                  Select Device Type
                </option>
                <option value="Laptop">Laptop</option>
                <option value="Desktop">Desktop</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-normal  mb-1 text-white">
                Generate Single Key or Batch:
              </label>
              <select
                className="text-white bg-gray-500 rounded-md p-2  hadow-md shadow-inneer border-white border-2  w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                onChange={(e) => setIsBatch(e.target.value === "batch")}
                aria-label="Key Generation Type"
              >
                <option value="single">Single Key</option>
                <option value="batch">Batch Key Generation</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-normal mb-1 text-white">
                {isBatch
                  ? "Enter Device IDs (comma-separated):"
                  : "Enter Device ID:"}
              </label>
              <input
                type="text"
                placeholder={
                  isBatch
                    ? "Enter Device IDs (e.g., 1, 2, 3)"
                    : "Enter Device ID (e.g., 1)"
                }
                className="text-white shadow-md shadow-inneer border-white border-2  bg-gray-500 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                onChange={(e) => {
                  if (isBatch) {
                    setDeviceIds(e.target.value);
                  } else {
                    setDeviceNumber(e.target.value);
                  }
                }}
                value={isBatch ? deviceIds : deviceNumber}
                aria-label={isBatch ? "Device IDs" : "Device ID"}
              />
            </div>

            <button
              onClick={generateKeys}
              className="bg-[#5a4bad] shadow-inner shadow-md shadow-gray text-white p-3 rounded-md w-full hover:bg-gray-800 transition duration-200"
            >
              {isKeyGenerated ? "Generate New Key" : "Generate Key"}
            </button>

            {isKeyGenerated && (
              <div className="mt-6">
                <h2 className="text-xl font-medium text-white mb-2">
                  Generated Keys:
                </h2>
                {keys.map((k, index) => (
                  <div
                    key={index}
                    className="border text-blue-400 font-semibold border-white rounded-md p-2 mb-1 flex justify-between items-center"
                  > 
                 <span>{`${k}`}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard
                          .writeText(k)
                          .then(() => {
                            Swal.fire({
                              icon: "success",
                              title: "Copied!",
                              text: "Key copied to clipboard!",
                              confirmButtonText: "OK",
                            });
                          })
                          .catch((err) => {
                            console.error("Failed to copy: ", err);
                          });
                      }}
                      className="bg-gray-500 shadow-md text-white p-2 rounded-md flex items-center hover:bg-green-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z" />
                        <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z" />
                      </svg>
                    </button>
                  </div>
                ))}
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => downloadKeys("txt")}
                    className="bg-green-500 text-white p-2 shadow-inner shadow-green-200 rounded-md flex items-center hover:bg-green-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    TXT
                  </button>
                  <button
                    onClick={() => downloadKeys("excel")}
                    className="bg-blue-500 text-white p-2 rounded-md flex items-center hover:bg-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 4.75C2 3.784 2.784 3 3.75 3h4.836c.464 0 .909.184 1.237.513l1.414 1.414a.25.25 0 0 0 .177.073h4.836c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 16.25 17H3.75A1.75 1.75 0 0 1 2 15.25V4.75Zm8.75 4a.75.75 0 0 0-1.5 0v2.546l-.943-1.048a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.114 0l2.25-2.5a.75.75 0 1 0-1.114-1.004l-.943 1.048V8.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Excel
                  </button>
                  <button
                    onClick={resetKeys}
                    className="bg-red-500 text-white p-2 rounded-md flex items-center hover:bg-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5 mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
