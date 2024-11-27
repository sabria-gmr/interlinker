import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function Cardoffre() {
  return (
    <div className='bg-bluemani relative text-lg text-gray-600 rounded shadow-sm hover:shadow-md pt-1 w-full h-56'>
          <div className='flex justify-between'>
          <div className='text-2c3484 font-bold text-xl mt-2 ml-5'>Machine Learning Internship</div>
          <div className='mt-2 mr-8'><FaRegHeart size={25}/></div>
          </div>
          
          <h1 className='ml-10 mt-4'>Entreprise : Djezzy</h1>
          <p className='ml-10 mt-2'>Descriptoin ...</p>
          <div className='mt-8 ml-10'>
                <div>
                  <IoLocationOutline className='inline-block mr-3'/><span>Alger</span>
                </div>
                <div>
                  <FaRegClock className='inline-block mr-2'/><span> il y a 2 jours</span>
                </div>
            </div>
    </div>
  )
}

export default Cardoffre
