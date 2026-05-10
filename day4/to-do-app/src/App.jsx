import React, { useState } from 'react'

const App = () => {

   const [title, setTitle] = useState('')
   const [details, setDetails] = useState('')

  const submitHandler=()=>{
    e.preventDefault()
  }
  
 
  
  return (
    <div className='h-screen lg:flex bg-black p-10  text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
       className='flex items-start lg:w-1/2 flex-col gap-5 '>  

       <h1 className='text-3xl'>Add Task</h1>
          <input 
        type='text'
         placeholder='Enter a task'
         className='px-5 py-2 w-full border-2 rounded' 
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />


        <textarea
         placeholder='Enter task details' name="" id=""
         className='px-5 py-2 w-full border-2 h-30 item-start rounded'
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
        ></textarea>
        <button className='bg-white text-black w-full px-5 py-2 rounded '>Add Task</button>
       
      </form>

      <div className=' p-10 lg:w-1/2'>
        <h1 className='text-3xl'>To Do List</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto '>
          <div className='h-50 w-40 rounded-2xl bg-white text-black'></div>
          <div className='h-50 w-40  rounded-2xl bg-white text-black'></div>
        </div>
      </div>
    </div>
  )
}

export default App
