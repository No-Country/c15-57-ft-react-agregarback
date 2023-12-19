import React from 'react'
import { SubtitleInfoStore } from '../../../components'

const WhoWeAreLayout = ({ children }) => {
 
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full flex justify-center md:hidden'>
  
      </div>
      {children}
    </div>
  )
}

export default WhoWeAreLayout
