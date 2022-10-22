import React from 'react'
import destinantion1 from '../assets/dest1.jpg'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='relative'>
            <img src={destinantion1} alt="/" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-xl text-white absolute font-extrabold'>Maldives</p>
            </div>

        </div>
    </div>
  )
}

export default Selects