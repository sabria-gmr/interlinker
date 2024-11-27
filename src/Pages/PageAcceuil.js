import React from 'react'
import Cardoffre from '../components/Acceuil/Cardoffre'
import { CiSearch } from "react-icons/ci";
import CardReco from '../components/Acceuil/CardReco';
import Foother from '../components/Acceuil/Foother';
import NavBar from '../components/Acceuil/NavBar';

function PageAcceuil() {

  return (

    <div>
      <NavBar />
      <div className='grid col-start-1 col-end-2 '>
        <div className='flex place-self-center text-lg mt-10 mb-10 font-medium text-2c3484 w-50 border-b-2'>
          <div>
            <input type='text'
              placeholder='What are you looking for ?  '
              style={{ width: '900px' }}
              className='text-xl bg-transparent outline-none w-9/12' />
          </div>
          <div className='mt-1.5'>
            <button>
              <CiSearch size={30} />
            </button>
          </div>
        </div>
        <div className='grid gap-y-4 row-start-2 row-span-4 text-xl ml-5 text-2c3484'><h1 className='font-bold'>For you</h1> </div>
        <div className='flex overflow-x-auto gap-12'>
          <CardReco />
          <CardReco />
          <CardReco />
          <CardReco />
          <CardReco />
          <CardReco />
          <CardReco />
          <CardReco />
        </div>
      </div>
      <div className='grid gap-32 grid-cols-6 mt-10'>
        <div className=' col-start-1 col-end-3 text-3xl text-2c3484 bg-bluemani ml-5 rounded-md h-2/6'>
          <h1 className='ml-10 mt-1'>Filtrage</h1>
        </div>
        <div className='grid gap-y-6 col-start-3 col-end-7 text-2xl'>
          <div className='text-xl text-2c3484'>
            <h1 className='mb-2 text-3xl font-bold'>Internship</h1>
            <div className='flex'>
              <h1 className='text-yellow-400 font-semibold text-xl mr-3' >200</h1><h1>offre de stage</h1>
            </div>

          </div>
          <div><Cardoffre /></div>
          <div><Cardoffre /></div>
          <div><Cardoffre /></div>
          <div><Cardoffre /></div>
          <div><Cardoffre /></div>
          <div><Cardoffre /></div>
        </div>
      </div>
      <div><Foother /></div>
    </div>
  )
}

export default PageAcceuil
