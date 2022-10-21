import React from 'react'

import beachVid from '../assets/beachVid.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        {/* Video */}
        <video className='w-full object-cover h-full' muted loop autoPlay src={beachVid}></video>
          {/* Overlay */}
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/20'></div>
          {/* Search Bar Title */}
          <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>First Class Travel</h1>
            <h2>Top 1% locations Worldwide</h2>
          </div>
    </div>
  )
}

export default Hero