import React from 'react'

const SelectCard = ({ text, bg }) => {
  return (   
          <div className='relative'>
              <img src={bg} alt="/" />
              <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-xl text-white absolute font-extrabold'>{text}</p>
              </div>
          </div>  
  )
}

export default SelectCard