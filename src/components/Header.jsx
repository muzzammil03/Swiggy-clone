import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
// import { Link } from "lucide-react";
import link from "../data/headerLinks";
import { Link } from "react-router-dom";

const Header = ({ setIsOpen }) => {
  const [toggle, setToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Black Overlay class  */}
      <div
        className="black-overlay w-full h-full fixed duration-500 z-[999999]"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms] p-6 overflow-y-auto"
          style={{ left: toggle ? "0%" : "-100%" }}
        >
          {/* toggle area */}
          {/* Close Button */}
          <button
            onClick={hideSideMenu}
            className="absolute top-3 right-5 text-gray-500 hover:text-gray-800 text-xl font-bold focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>
          {/* Sidebar Content */}
          <div className="text-gray-800">
            {/* Search Area */}
            <div className="mb-4 mt-6">
              <input
                type="text"
                placeholder="Search for area, street name..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {/* GPS Location */}
            <div className="flex items-center gap-2 text-gray-700 mb-6">
              <CiSearch className="text-lg text-orange-500" />
              <span>
                Get current location{" "}
                <span className="text-gray-500">Using GPS</span>
              </span>
            </div>
            {/* Recent Searches */}
            <div className="mb-2 text-gray-700 font-semibold">
              RECENT SEARCHES
            </div>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Ahmed
              </li>
              <li className="text-gray-600 hover:text-orange-500 cursor-pointer">
                Another Location
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* header start */}
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center flex-wrap sm:flex-nowrap">
          <div className="w-[80px] sm:w-[100px]">
            <Link to="/">
              <img
                src="images/s.png"
                className="w-24 sm:w-28 md:w-32 hover:scale-110 duration-150"
                alt=""
              />
            </Link>
          </div>
          <div className="text-sm md:text-base lg:text-lg">
            <span className="font-bold border-b-[3px]"> Ibrahimpura </span> ,
            Bhopal, India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer "
            />
          </div>
          <nav className="hidden sm:flex list-none gap-6 md:gap-10 ml-auto text-[18px] font-semibold">
            {
              link.map((link, index) => {
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className="hover:underline hover:decoration-[#fc8019]"
                  >
                    <li
                      className="flex hover:text-[#fc8019] items-center gap-2 cursor-pointer"
                      onClick={index === 3 ? () => setIsOpen(true) : undefined}
                    >
                      {link.icon}
                      {link.name}
                      <sup>{link.sup}</sup>
                    </li>
                  </Link>
                );
              })
              // onClick={() => setIsOpen(true)}
            }
          </nav>
          {/* Hamburger Menu */}
          <button
            className="block sm:hidden text-2xl text-[#fc8019] ml-auto"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:hidden bg-white shadow-lg absolute left-0 top-full w-full p-4 z-[999]`}
        >
          {link.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block py-2 text-[#686b78] font-semibold hover:text-[#fc8019]"
            >
              <div
                className="flex items-center justify-between"
                onClick={index === 3 ? () => setIsOpen(true) : undefined}
              >
                {link.name}
                <sup>{link.sup}</sup>
              </div>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
