import React from 'react'
import CardContent from './CardContent'

const Card = (props) => {
  return (
    <div className='h-full w-60 bg-red-400 overflow-hidden relative rounded-4xl'>
        <img className='h-full object-cover' src={props.img} alt=""></img>

        <CardContent id={props.id} tag={props.tag} />
    </div>
  )
}

export default Card
