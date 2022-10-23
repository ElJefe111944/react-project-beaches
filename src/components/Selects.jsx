import React from 'react'
import SelectCard from './SelectCard'

import destinantion1 from '../assets/dest1.jpg'
import destinantion2 from '../assets/dest2.jpg'
import destinantion3 from '../assets/dest3.jpg'
import destinantion4 from '../assets/dest4.jpg'
import destinantion5 from '../assets/dest5.jpg'
import destinantion6 from '../assets/dest6.jpg'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

      <SelectCard bg={destinantion1} text='Maldives' />
      <SelectCard bg={destinantion2} text='Grande Antigua' />
      <SelectCard bg={destinantion3} text='Key West' />
      <SelectCard bg={destinantion4} text='Cozumel' />
      <SelectCard bg={destinantion5} text='Bora Bora' />
      <SelectCard bg={destinantion6} text='Jamaica' />
    </div>
  )
}

export default Selects