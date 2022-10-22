import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import beachVid from '../assets/beachVid.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        {/* Video */}
        <video className='w-full object-cover h-full' muted loop autoPlay src={beachVid}></video>
          {/* Overlay */}
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/15'></div>
          {/* Search Bar Title */}
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h2 className='py-4'>Top 1% locations Worldwide</h2>
            {/* Search Bar */}
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
              <div>
              <input type="text" placeholder='Search Destinations' className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' />
              </div>
              <div>
                <button><AiOutlineSearch style={{color: 'white'}} size={20} className='icon' /></button>
              </div>
            </form>
          </div>
    </div>
  )
}

export default Hero