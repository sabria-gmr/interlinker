import React from 'react'
import logoEntr from '../../assets/ooredoo.png'
import { RxBackpack } from "react-icons/rx";


function Cards() {
  return (
    <div className='relative bg-f9f9f9 cursor-pointer pt-5 text-2c3484 rounded shadow-sm hover:shadow-md w-9/12'>
      <div className='flex '>
         <div className='absolute'> 
         <img className=' ml-5 w-8 md:w-12 lg:w-20 ' src={logoEntr} alt='Company Logo' />
         </div>
       <div className='ml-40 mb-3 '> 
          <h2 className='font-bold text-xl  '>Ooredoo</h2>
          <h1 className=' font-thin'>Grande entreprise</h1>
           <h1>Telecomunication</h1>
        </div>
      </div>
      <div className='relative  bg-bluemani flex justify-center rounded-b'>
        <div className=' absolute top-1 mr-32'>< RxBackpack /></div>
        
        <div className='ml-10 top-4 hover:underline underline-offset-2 hover:font-semibold' ><a href=''>voir nos offre</a></div>
      </div>
    </div>
  )
}

export default Cards
