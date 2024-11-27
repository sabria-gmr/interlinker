import React from 'react'
import CardStudent from '../components/Acceuil/CardStudent'
import NavBar from '../components/Acceuil/NavBar'


function Student() {
  return (
    <div>
      <NavBar/>
    <div className=' ml-8 grid gap-4 grid-cols-3'>
     
      <CardStudent/>
      <CardStudent/>
      <CardStudent/>
      <CardStudent/>
      <CardStudent/>
    </div>
    </div>
  )
}

export default Student
