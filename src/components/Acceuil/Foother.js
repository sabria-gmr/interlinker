import React from 'react'
import Logo from '../../assets/conduite.png'
function Foother() {
  return (
    <div>
      <div className='bg-bluemani h-56 grid grid-cols-4 gap-10 mt-10 w-full'>
      <div className='flex mb-1.5 '> 
      <div className='ml-4 mt-2'><a href='/'><img src={Logo} width={48} height={44} alt='Logo' /></a></div>
      <div className='ml-5 mt-3 text-2c3484 text-3xl font-semibold'>InterLinker</div>
      <div>About</div>
      <div>Contact Us</div>
      <div>chkon hna </div>
      </div>
      </div>
      
    </div>
  )
}

export default Foother
