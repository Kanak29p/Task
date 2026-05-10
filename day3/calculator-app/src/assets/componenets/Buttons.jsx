import React from 'react'

const Buttons = ({ input, setInput }) => {

  const btns=[
    'AC','DEL','%','/',
    '7','8','9','*',
    '4','5','6','-',
    '1','2','3','+',
     'e', '0','.','='
  ]

  function handleClick(item){
    if(item === 'AC'){
      setInput("")
    }
    else if(item === 'DEL'){
      setInput(input.slice(0, -1))
    }
    else if(item === '='){
        setInput(eval(input))
    }
    else{
      setInput(input + item)
    }
  }

  return (
    <div className='absolute bottom-0 left-0 right-0 grid grid-cols-4 gap-3 px-2 py-2'>
        {
            btns.map((item, index)=> (
                <button 
                  key={index}
                  onClick={()=>{
                    handleClick(item)
                  }}
                  className='bg-gray-700 text-white text-xl m-2 px-2 py-2 flex  justify-center rounded-3xl ' >{item}</button>
                
            ))
        }
      
    </div>
  )
}

export default Buttons
