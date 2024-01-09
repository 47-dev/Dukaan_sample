import React from 'react';
import { Link } from 'react-router-dom';
import { CiCircleQuestion } from "react-icons/ci";
import { RiMessage3Fill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = (props) => {
  return (
    <div className='flex justify-between items-center ml-40 mr-10 bg-[#FFFFFF] max-w-[2860px] px-16 py-4 mx-auto mt-4 mb-8 text-white'>
        

      {/* Payments */}
      <Link to="/">
        <p className=' text-2xl w-[70px] h-[22px] text-inter text-[#29272c]'>Payments</p>
      </Link>
      <div className='flex mr-[340px] mt-[15px]'>
      <CiCircleQuestion className='text-[black] text-[12px] mr-[6px] mt-[4px]'/>
      <div className='text-[black] font-inter text-[12px]'>How it works</div>
      </div>
      {/* Search Bar */}
      <div>
        {/* Add your search bar component or input here */}
        <input type="text" placeholder="Search features, tutorials, etc." className='border bg-[#F2F2F2] px-2 py-1 rounded-md w-[450px] h-[40px]'/>
      </div>

      <RiMessage3Fill className='text-[#4c4c4c] text-xl bg-[#e6e6e6] rounded-xl pt[10px] w-[50px] h-[30px]'/>
      <MdArrowDropDown className='text-[#4c4c4c] text-xl bg-[#e6e6e6] rounded-xl pt[10px] w-[50px] h-[30px]'/>

      

    </div>
  );
}

export default Navbar;
