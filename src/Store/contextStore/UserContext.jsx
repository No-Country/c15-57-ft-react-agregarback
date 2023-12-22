import { createContext, useContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  // firebase
  // oauth
  // jwt

  const [user, setUser] = useState(false)

  const logControl = () => {
    if (user) {
      setUser(null)
    } else {
      setUser(true)
    }
  }

  return (

    <UserContext.Provider value={{ logControl, user }}>
      {children}
    </UserContext.Provider>

  )
}

export default UserProvider

export const useUserContext = () => useContext(UserContext)
