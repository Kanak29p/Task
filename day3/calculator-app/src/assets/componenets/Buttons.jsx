import React from 'react'

const Buttons = () => {

  const btns=[
    'AC','DEL','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
    '0','.','=',''
  ]

  return (
    <div className='grid grid-cols-4 gap-3 px-2 py-2'>
        {
            btns.map((item, index)=> (
                <button className='bg-gray-700 text-white text-xl m-2 px-2 py-2 flex  justify-center rounded-3xl ' key={index}>{item}</button>
            ))
        }
      
    </div>
  )
}

export default Buttons
