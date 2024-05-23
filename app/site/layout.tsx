import React, { ReactNode } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import UserContextProvider from '../Context/UserContextProvider'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-gradient-to-b from-[#1E242B] to-[#0D1015] w-full h-full'>
        <Navbar/>
        <UserContextProvider>
        {children}
        </UserContextProvider>
        <Footer/>
    </div>
  )
}

export default layout