import React from 'react'
import LeftText from './LeftText'
import RightContent from './RightContent'

const Page1Content = (props) => {
  
  return (
    <div className='py-3 px-18 flex gap-10 h-[90vh] '>
      <LeftText />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
