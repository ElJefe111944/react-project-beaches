import React, { useState } from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const Carousel = () => {

    const sliderData = [
        {
            url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            url: 'https://images.pexels.com/photos/131423/pexels-photo-131423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            url: 'https://images.pexels.com/photos/3601450/pexels-photo-3601450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]

    const [slide,setSlide] = useState(0);
    const length = sliderData.length;
    // console.log(length);

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
        setSlide(slide === 0 ? length -1 : slide - 1);
    };


  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer left-16' />
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-16' />
        {sliderData.map((item,index) => (
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (  <img className='w-full rounded-md' src={item.url} alt="/" />)}          
            
            </div>
        ))}
    </div>
  )
}

export default Carousel