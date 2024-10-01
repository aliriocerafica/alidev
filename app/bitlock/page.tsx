"use client";
import { useState } from "react";
import Sidebar from "../components/nav";

export default function Dashboard() {
  const [key, setKey] = useState("Your generated key will appear here.");

  return (
    <div className=" text-white min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-grow flex items-center justify-center p-10">
      
      </div>
    </div>
  );
}
