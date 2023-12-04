
import { createContext, useContext, useState } from "react";


export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [item2, setItem2] = useState('hello from user context')

    return (

    <UserContext.Provider value={{ item2 }} >
      {children}
    </UserContext.Provider>

  )
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext);