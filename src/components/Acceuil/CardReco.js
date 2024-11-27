import React from 'react'
import logoEntr from '../../assets/ooredoo.png'
import { IoLocationOutline } from "react-icons/io5";

function CardReco() {
  return (
    <div className='relative bg-gray-48 h-48 w-80 cursor-pointer pt-5 text-2c3484 rounded shadow-md hover:shadow-2xl'>
      <div className='flex '>
         <div className='absolute'> 
         <img className=' mt-8 ml-5 w-5 md:w-3 lg:w-24 ' src={logoEntr} alt='Company Logo' />
         </div>
       <div className='ml-40 mb-3 '> 
          <h2 className='font-bold text-2xl  '>Ooredoo</h2>
          <h1 className=' font-thin text-xl mt-2'>Description </h1>
          <div className='flex mt-8'>
            <IoLocationOutline size={25}/>
            <div className='ml-4 mb-6'>Alger</div>
        </div>
        
        </div>
      </div>
      
      
    </div>
  )
}

export default CardReco
