"use client";
import React, { useState } from "react";
import { FiMenu, FiXSquare } from "react-icons/fi";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (val: boolean) => {
    setIsOpen(val);
  };
  return (
    <div className="bg-[#1E1E1F]   shadow flex flex-col  items-center justify-between  lg:bg-[#282829]  rounded-tl-lg lg:rounded-br-[30px] w-full lg:w-[531px]">
      <div className="flex md:hidden p-3 w-full bg-[#282829] rounded-t-lg">
        <button onClick={() => toggleNavbar(isOpen ? false : true)}>
          {isOpen ? (
            <FiXSquare className="text-[40px] " />
          ) : (
            <FiMenu className="text-[30px] " />
          )}
        </button>
      </div>

      <div
        className={
          (isOpen ? "block" : "hidden") +
          " w-full md:w-auto md:flex  text-bold  md:mt-0  md:border-none  transition duration-500 opacity-100"
        }
      >
        <Link
          href="/"
          className="block md:inline-block  hover:font-bold  px-3 lg:px-10 py-3 lg:py-5 hover:bg-white hover:text-black hover:rounded-tl-lg  md:border-none"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block md:inline-block  hover:font-bold px-3 lg:px-10 py-3 lg:py-5 hover:bg-white hover:text-black  md:border-none"
        >
          About
        </Link>
        <Link
          href="#"
          className="block md:inline-block  hover:font-bold px-3 lg:px-10 py-3 lg:py-5 hover:bg-white hover:text-black  md:border-none"
        >
          Portofolio
        </Link>
        <Link
          href="/contact"
          className="block md:inline-block  hover:font-bold px-3 lg:px-10 py-3 lg:py-5 hover:bg-white hover:text-black  md:border-none lg:hover:rounded-br-[30px]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
