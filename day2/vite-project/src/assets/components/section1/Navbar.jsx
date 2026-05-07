import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-6'>
      <h4 className="bg-black text-white uppercase flex py-2 px-6 rounded-full">Target Audience</h4>
      <button className='uppercase flex bg-gray-200 px-6 py-2 tracking-wider rounded-full'>Digital banking platform</button>
    </div>
  )
}

export default Navbar
