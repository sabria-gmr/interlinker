import React from 'react'
import logoEntr from '../../assets/profile.png'
import { PiUserListBold } from "react-icons/pi";
function CardTeacher() {
  return (
    <div>
       <div className='relative bg-f9f9f9 cursor-pointer pt-5 text-2c3484 rounded shadow-sm hover:shadow-md w-9/12'>
      <div className='flex '>
         <div className='absolute'> 
         <img className=' ml-5 w-8 md:w-12 lg:w-20 rounded-full' src={logoEntr} alt='profile Logo' />
         </div>
       <div className='ml-40 mb-3 '> 
          <h2 className='font-bold text-xl'>Abderrazak</h2>
          <h1 className=' font-thin'>Software engineer</h1>
           <h1 className='font-semibold'>ESTIN</h1>
        </div>
      </div>
      <div className='relative  bg-bluemani flex justify-center rounded-b'>
        <div className=' absolute top-1 mr-32'><PiUserListBold /></div>
        
        <div className='ml-10 top-4 hover:underline underline-offset-2 hover:font-semibold' ><a href='/'>See thier CV</a></div>
      </div>
    </div>
    </div>
  )
}

export default CardTeacher
