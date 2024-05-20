import React, { ReactNode } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-gradient-to-b from-[#152131] to-[#141A23] w-full h-full'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default layout