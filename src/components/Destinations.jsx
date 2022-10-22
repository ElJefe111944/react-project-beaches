import React from 'react'

import destinantion1 from '../assets/dest1.jpg'
import destinantion2 from '../assets/dest2.jpg'
import destinantion3 from '../assets/dest3.jpg'
import destinantion4 from '../assets/dest4.jpg'
import destinantion5 from '../assets/dest5.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='py-4'>On the Caribbean's Best Beaches</p>
        {/* Image Grid */}
        <div className='grid grid-rows-none md:grid-cols-5 py-5 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={destinantion1} alt="/" />
            <img className='w-full h-full object-cover' src={destinantion2} alt="/" />
            <img className='w-full h-full object-cover' src={destinantion3} alt="/" />
            <img className='w-full h-full object-cover' src={destinantion4} alt="/" />
            <img className='w-full h-full object-cover' src={destinantion5} alt="/" />
        </div>
    </div>
  )
}

export default Destinations