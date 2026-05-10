import React from 'react'

const Display = ({ input }) => {
  return (
    <div className='text-white text-xl text-right p-4 absolute h-1/3 w-screen'>
      <input type='text' value={input} readOnly className=' w-full text-right text-2xl ' />
    </div>
  )
}

export default Display
