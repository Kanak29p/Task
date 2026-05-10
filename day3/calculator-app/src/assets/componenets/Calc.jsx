import React, { useState } from 'react'
import Buttons from './Buttons'
import Display from './Display'

const Calc = () => {

  const [input, setInput] = useState("")

  return (
    <div className='text-white text-shadow-lg h-2/3 w-screen '>
      <Display input={input} />
      <Buttons 
         input={input}
         setInput={setInput}
      />
    </div>
  )
}

export default Calc
