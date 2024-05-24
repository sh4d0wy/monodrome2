"use client"
import React, { ReactNode, useState,createContext } from 'react'

export interface UserContextType {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextType |undefined>(undefined);

const UserContextProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState<string|null>(null);
    return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider