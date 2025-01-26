import React from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";



import { useState } from 'react';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  }
  const hideSideMenu = () => {
    setToggle(false);
  }
 
  const link=[
    {
      icon:<CiSearch />,
      name:"Search"
    }
    ,
    {
      icon:<CiDiscount1 />,
      name:"Offers",
      sup:"New"
    },
    {
      icon:<IoIosHelpBuoy />,
      name:"Help"
    },
    {
      icon:<MdOutlineAssignmentInd />,
      name:"Sign In"
    },
    {
      icon:<FaShoppingCart />,
      name:"Cart"
    }
  ]


  return (
    <>
<div className="black-overlay w-full h-full fixed duration-500 z-[999999]" onClick={hideSideMenu} style={{ opacity: toggle ? 1 : 0, visibility: toggle ? "visible" : "hidden" }}>
  {/* Black Overlay */}
  <div
    onClick={(e) => {
      e.stopPropagation();
    }}
    className="w-[500px] bg-white h-full absolute duration-[400ms] p-6 overflow-y-auto"
    style={{ left: toggle ? "0%" : "-100%" }}
  >

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
          Get current location <span className="text-gray-500">Using GPS</span>
        </span>
      </div>
      {/* Recent Searches */}
      <div className="mb-2 text-gray-700 font-semibold">RECENT SEARCHES</div>
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
      <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
          <div className='w-[100px] '>
            <img src="images/s.png" className='w-full' alt="" />
          </div>
          <div className=''>
            <span className='font-bold border-b-[3px]'> Ibrahimpura </span> , Bhopal, India <RxCaretDown onClick={showSideMenu} fontSize={25} className="inline text-[#fc8019] cursor-pointer " />
          </div>
          <nav className='hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold' >
           {
            link.map(
              (link,index)=>{
                return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>
                  {link.icon}
                  {link.name}
                  <sup>{link.sup}</sup>
                  </li>
              }
            )
           }
          </nav>
        </div>
      </header>

    </>
  )
}

export default Header
