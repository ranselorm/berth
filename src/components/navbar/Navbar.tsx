import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-24 md:px-16 sm:px-8 font-primary">
      <div className="flex items-center">
        <div className="mr-8">
          <img
            src="/images/mix.png"
            alt="logo"
            className="w-40 h-16 object-contain"
          />
        </div>
      </div>
      <div className="hidden lg:flex space-x-8">
        <a href="#home" className="text-white text-base font-medium">
          Home
        </a>
        <a href="#wgpt3" className="text-white text-base font-medium">
          What is GPT3?
        </a>
        <a href="#possibility" className="text-white text-base font-medium">
          Open AI
        </a>
        <a href="#features" className="text-white text-base font-medium">
          Case Studies
        </a>
        <a href="#blog" className="text-white text-base font-medium">
          Library
        </a>
      </div>

      {/* <div className="hidden lg:flex items-center space-x-4">
        <p className="text-white text-lg font-medium cursor-pointer">Sign in</p>
        <button className="bg-red-500 text-white text-lg font-medium py-2 px-4 rounded">
          Sign up
        </button>
      </div> */}

      <div className="lg:hidden">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="absolute top-14 right-0 bg-gray-900 p-8 rounded shadow-lg space-y-4 w-48">
            <a href="#home" className="block text-white text-lg font-medium">
              Home
            </a>
            <a href="#wgpt3" className="block text-white text-lg font-medium">
              What is GPT3?
            </a>
            <a
              href="#possibility"
              className="block text-white text-lg font-medium"
            >
              Open AI
            </a>
            <a
              href="#features"
              className="block text-white text-lg font-medium"
            >
              Case Studies
            </a>
            <a href="#blog" className="block text-white text-lg font-medium">
              Library
            </a>
            <div className="mt-4">
              <p className="text-white text-lg font-medium">Sign in</p>
              <button className="bg-red-500 text-white text-lg font-medium py-2 px-4 rounded w-full mt-2">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
