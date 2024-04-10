import Navbar from "./Navbar";
import { Link } from "@nextui-org/react";
import React from "react";

const BasicLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col h-full bg-grey-800">
      <Navbar />
      <div className=" mx-auto w-full ">{children}</div>
      <footer className="w-full flex items-center justify-center py-3"></footer>
    </div>
  );
};

export default BasicLayout;
// Existing code...
