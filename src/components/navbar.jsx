import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { GoSearch } from "react-icons/go"; 
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

import logo from '/assets/logo.png';
const navbar = () => {
  return (
    <div className='Navbar bg-black h-[4rem] w-full'>
        <div className='flex  items-center w-full h-full px-8'>
        <div className="logo px-6 pr-16">
<img src={logo} alt='logo'></img>
        </div>
 {/* Icons Section (Only visible on mobile) */}
 <div className="icons text-white flex md:hidden">
          <div className='text-3xl mr-8'>
            <GoSearch />
          </div>
          <div className='text-3xl'>
            <FiAlignJustify />
          </div>
        </div>

        {/* Search and Contact Section (Visible on screens md and larger) */}
        <div className='hidden md:flex w-full justify-center items-center'>
          {/* Search Bar */}
          <div className="flex-1 mx-8 ">
            <input
              type="text"
              placeholder="What are you looking for..."
              className="w-[550px] px-4 py-2 bg-[#1F1F1F] text-white border-none outline-none"
            />
          </div>

          {/* Contact & Store Links */}
          <div className="flex items-center space-x-4 text-white text-xs">
            <div className="flex items-center space-x-1">
            <FaPhoneAlt className='text-xl text-red-500 mr-2'/>
              <span>itel Customer Care:<br></br> 1800-4190-525</span>
            </div>
            <div className="flex items-center space-x-1 text-xs">
            <FaMapMarkerAlt className='text-xl text-red-500 mr-2'/>
              <a href="#" className="">nearby stores<br></br>Get Direction</a>
            </div>
          </div>
        </div>
        

</div>
    </div>
  )
}

export default navbar