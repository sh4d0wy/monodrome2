"use client"
import React, { ReactNode, useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState();
    return (
    <UserContext.Provider value={setUser}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider