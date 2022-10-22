import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'


const Search = () => {
  return (
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
          <div className='lg:col-span-2 flex flex-col justify-evenly'>
              <div>
                  <h2 className='uppercase'>Luxury included vacations for two people</h2>
                  <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, saepe! Ducimus ipsam enim, mollitia corporis, asperiores repudiandae officia non, commodi necessitatibus obcaecati possimus impedit! Quidem, a ex? Ipsum, similique eius!</p>
              </div>
              <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={50} />
                    </button>
                    <div>
                        <h3 className='uppercase py-2'>Leading Service</h3>
                        <p className='uppercase py-1'>All-Inclusive company for 20 years in-a-row</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className='uppercase py-2'>Leading Service</h3>
                        <p className='uppercase py-1'>All-Inclusive company for 20 years in-a-row</p>
                    </div>
                </div>
              </div>
          </div>
          {/* Form */}         
          <div>
            <div className='border text-center'>
                <p className='uppercase pt-2'>Get an additional 10% off</p>
                <p className='uppercase py-4'>12 hours left</p>
                <p className='uppercase bg-gray-800 text-gray-200 py-2'>Book now and save</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label htmlFor="destination">Destination</label>
                    <select className='border rounded-md p-2' name="destination" id="destination">
                        <option value="/">Grande Antigua</option>
                        <option value="/">Key West</option>
                        <option value="/">Maldives</option>
                        <option value="/">Cozumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor="check-in">Check-in</label>
                    <input className='border rounded-md p-2' type="date" />     
                </div>
                <div className='flex flex-col my-2'>
                    <label htmlFor="check-out">Check-out</label>
                    <input className='border rounded-md p-2' type="date" />     
                </div>
                <button className='w-full my-4'>Rates & Availibities</button>
            </form>
          </div>
      </div>
  )
}

export default Search