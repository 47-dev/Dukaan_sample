import React from 'react';
import { Link } from "react-router-dom";
import { FiClipboard, FiChevronDown } from 'react-icons/fi';
import { MdOutlineStorage } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BiNotepad } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiTwotoneAppstore } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { LuArrowDownUp } from "react-icons/lu";
import { FiArrowDown } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";

const SidebarSection = ({ title, links }) => {
  return (
    <div className="bg-[#1E2640] p-4 h-[700px] mt-[-122px]">
      {/* Logo and Visit Store */}
      <div className='ml flex items-center'>
        <div alt="Logo" className="border w-8 bg-[white]  h-8 mr-1"></div>
        <div className="flex items-center">
          <div className='ml-2'>
          <h3 className='text-[white] text-xl'>
            Nishyan
          </h3>
          <h2 className='text-[white] text-sm underline'>
            Visit store
          </h2>
          </div>
          <FiChevronDown className="ml-6 text-white text-2xl" />
        </div>
      </div>

      <h1 className="text-xl font-bold mb-4 text-white">{title}</h1>
      {links.map(link => (
        <Link to={link.path} key={link.path} className="flex items-center mb-3 text-white hover:text-[#27a339]">
          {link.icon}
          <p className='ml-4'>{link.label}</p>
        </Link>
      ))}
      <div className='flex justify-center rounded-md text-[white] mt-32 bg-[#353C53] p-2 '>
        <div className='text-2xl bg-[] mt-3 mr-3'>
        <CiWallet />
        </div>
        <div className='text-sm'>
          <h3>Available credits</h3>
          <h3>222.10</h3>
        </div>
      </div>
    </div>
  );
}

const Dashboard = () => {
  const sections = [
    {
      links: [
        { path: '/Analytics', label: 'Home', icon: <GoHome /> },
        { path: '/Definition', label: 'Orders', icon: <BiNotepad /> },
        { path: '/Analyticssetting', label: 'Products', icon: <AiTwotoneAppstore /> },
        { path: '/Diagonistics', label: 'Delivery', icon: <CiDeliveryTruck 
        className='text-xl'/> },
        { path: '/Interface', label: 'Marketing', icon: <HiSpeakerphone />},
        { path: '/Storage', label: 'Analytics', icon: <MdOutlineStorage /> },
        { path: '/Notification', label: 'Payments', icon: <MdPayments /> },
        { path: '/Notification', label: 'Tools', icon: <FaLocationArrow /> },
        { path: '/Notification', label: 'Discounts', icon: <FiClipboard /> },
        { path: '/Notification', label: 'Audience', icon: <FiClipboard /> },
        { path: '/Notification', label: 'Appereance', icon: <FiClipboard /> },
        { path: '/Notification', label: 'Plugins', icon: <FiClipboard /> },
      ]
    },
  ];

  return (
    <div className='flex h-full'>
      <div className='flex flex-col w-48'>
        {sections.map(section => (
          <SidebarSection key={section.title} title={section.title} links={section.links} />
        ))}
      </div>
      <div className='ml-6 w-full mr-12 h-full bg-[#FAFAFA] rounded-md'>
        <div className='overview-section'>
        <div className='flex justify-between'>
        <div className='text-xl font-medium ml-3'>Overview</div>
        <div className='flex '>
        <div className='bg-[#FFFFFF]'>Last Month</div>
        <FiChevronDown className=" text-[black] text-2xl font-medium mr-4" />
        </div>
        </div>
        <div className='overview-section2 flex  mt-12 justify-evenly rounded-md'>
        <div className='bg-[white] border border[black] w-[620px] h-[100px] rounded-md'>
        <div className='text-[#4C4C4C] text-l ml-6 mt-6 '>Online orders</div>
        <div className='text-2xl font-inter ml-6 mt-2'>231</div>
        </div>
      <div className='bg-[white] border border[black] w-[620px] h-[100px] rounded-md'>
        <div className='text-[#4C4C4C] text-l ml-6 mt-6'>Amount received</div>
        <div className='text-2xl font-inter ml-6 mt-2'>₹23,92,312.19</div>
        </div>
        </div>
        </div>
        <div className='font-inter text-[20px] mt-4 ml-3'>Transactions | This Month</div>
        <div className='flex justify-between'>
        <div className='border flex bg-[#F2F2F2] px-2 py-1 rounded-md w-[250px] h-[30px] ml-4 mt-3 align-middle'>
        <CiSearch className='m-auto ml-0'/>
          <input type="text" placeholder="Search by order ID..." className='mr-6 bg-[#F2F2F2]'/>
        </div>
        <div className='flex justify-between mr-6'>
          <div className='flex mr-3  border w-[60px] rounded-md space-y-0 '>
            <div className='mr-2'>Sort</div>
            <div className=''>
            <LuArrowDownUp />
            </div>
          </div>
          <div>
          <FiArrowDown />
          </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;