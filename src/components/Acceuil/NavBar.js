import React from 'react'
import Logo from '../../assets/conduite.png'
import {Link} from 'react-router-dom'
import '../../Styles/Style.css'
function NavBar() {
  return (
    
    <div className='bg-white flex justify-between shadow-md text-2xl w-full'> 
      <div className='flex mb-1.5 '> 
      <div className='ml-4 mt-2'><a href='/'><img src={Logo} width={48} height={44} alt='Logo' /></a></div>
      <div className='ml-5 mt-3'><h1 className='text-2c3484'>InterLinker</h1></div>
      </div>
      <div className=' mr-32 flex space-x-16 mt-2 font-semibold text-2c3484'>
       <div className='hover:text-yellow-400 '><Link to = '/page' >Home </Link></div>
       <div className='hover:text-yellow-400'><Link to = '/companies'>Companies </Link></div>
       <div className='hover:text-yellow-400'><Link to = '/teachers'>Teachers </Link></div>
       <div className='hover:text-yellow-400'><Link to = '/students' >Students</Link></div>
       </div>
    </div>
   
    
  )
}

export default NavBar
