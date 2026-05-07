import React from 'react'

const CardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>  
            <h2 className='bg-white rounded-full font-semibold h-12 w-12 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-lg text-white mb-10  leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellendus aut facere. Facere, veritatis</p>
                <div className='flex justify-between items-center'>
                    <button className='font-medium bg-blue-500 text-white px-4 py-3 rounded-full'>{props.tag}</button>
                    <button className='font-medium bg-blue-500 text-white px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default CardContent
