import React from 'react'
import CardTeacher from '../components/Acceuil/CardTeacher'
import NavBar from '../components/Acceuil/NavBar'



function Teacher() {
  return (
    <div>
      <NavBar/>
    <div className=' ml-8 grid gap-4 grid-cols-3'>
      
      <CardTeacher/>
    </div>
    </div>
  )
}

export default Teacher
