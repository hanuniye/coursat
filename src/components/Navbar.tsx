"use client";

import { nav_items } from "@/constants";
import Button from "./Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center px-6 md:px-14 h-20 ">
      <h1 className="font-bold text-[25px] tracking-wide ">Coursat.</h1>

      {/* Navigation links */}
      <div className="hidden md:flex space-x-5 items-center ml-14">
        {nav_items.map((item, index) => {
          return (
            <a key={index} href={item.link} className="text-[19px] font-medium">
              {item.name}
            </a>
          );
        })}
      </div>

      {/* Login and Signup buttons */}
      <div className="ml-auto hidden md:flex">
        <Button
          text="Sing Up"
          border="border border-black"
          background="bg-transparent"
          paddingX="px-6"
          paddingY="py-3"
        />
        <Button
          text="Login"
          margin="ml-3"
          background="bg-[#DDF247]"
          paddingX="px-7"
          paddingY="py-3"
        />
      </div>

      {/* Hamburger menu */}
      <div className="md:hidden ml-auto">
        <button
          className="text-2xl focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`flex flex-col justify-between absolute top-[80px] right-0 w-full px-6 py-10 h-[calc(100vh-80px)] z-40 md:hidden bg-neutral-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-3">
          {nav_items.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                className="text-[18px] block font-medium"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="">
          <Button
            text="Sing Up"
            border="border border-black"
            background="bg-transparent"
            paddingX="px-5"
            paddingY="py-3"
          />
          <Button
            text="Login"
            margin="ml-3"
            background="bg-[#DDF247]"
            paddingX="px-5"
            paddingY="py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
