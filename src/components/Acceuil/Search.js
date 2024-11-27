import React from 'react'

function Search() {
  return (
    <div>
      <div className='text-xl grid grid-cols-3'>
        <input
        type='text'
        placeholder='Search .. '
        style={{width:'900px'}}
        class='outline-none border-2 rounded-md'
        />
      </div>
    </div>
  )
}

export default Search
