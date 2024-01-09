import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className='flex justify-between items-center ml-52 mr-10 bg-[#FAFAFA] max-w-[2860px] px-16 py-4 mx-auto mt-4 mb-8 text-white'>
        

      {/* Payments */}
      <Link to="/">
        <p className=' text-3xl text-[#29272c]'>Payments</p>
      </Link>

      {/* Search Bar */}
      <div>
        {/* Add your search bar component or input here */}
        <input type="text" placeholder="Search features, tutorials, etc." className='border bg-[#F2F2F2] px-2 py-1 rounded-md w-[600px] h-[40px]'/>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className='text-richblack-100 flex gap-x-6 font-bold '>
          <li>
            <Link to="/" className='hover:bg-white hover:text-richblack-900'></Link>
          </li>
        </ul>
      </nav>

      

    </div>
  );
}

export default Navbar;
