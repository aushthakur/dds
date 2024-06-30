import React from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../img/Untitled design (8).png'
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
      <HiOutlineMenuAlt2 className='text-3xl'/>
        <img src={logo} alt="Logo" className="h-16 mr-4" />
        
      </div>
      <div className="hidden md:flex  text-2xl gap-8">
        <a href="#home" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Home</a>
        <a href="#services" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Services</a>
        <a href="#work" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Work</a>
        <a href="#career" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Career</a>
        {/* <a href="#contact" className="hover:text-gray-400">Let's Talk</a> */}
        <button className='bg-zinc-700 hover:bg-zinc-600 rounded-md py-1 px-2 text-white mt-[-10px]'>Let's Talk</button>
      </div>
      <div className="md:hidden">
        <FaBars size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
