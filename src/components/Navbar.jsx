import React, { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }

  return (
    <div className='flex justify-between items-center h-20 px-4'>
        {/*-- Logo --*/}
        <div>           
            <h1 className={logo ? 'hidden lg:block' : 'block'}>BEACHES.</h1>
        </div> 
        {/*-- Menu - Desktop --*/}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        {/*-- Icons - Desktop --*/}
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
        </div>
         {/*-- Dropdown Icon - Mobile --*/}
        <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
            {nav ?  <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20}/>}           
        </div>
         {/*-- Menu - Mobile --*/}
       
         <div className={nav ? 'absolute left-0 top-0 md:hidden w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'}>
         <ul>
            <h1>BEACHES.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaPinterest className='icon'/>
                <FaYoutube className='icon'/>
            </div>
        </ul>
         </div>
    </div>
  )
}

export default Navbar