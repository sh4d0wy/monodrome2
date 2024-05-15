import React, { ReactNode } from 'react'
import Navbar from '../Components/Navbar'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-gradient-to-b from-[#20242B] to-[#0D1014] w-full h-full'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout