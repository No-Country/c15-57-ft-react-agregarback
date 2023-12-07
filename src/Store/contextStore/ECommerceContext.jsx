
import { createContext, useContext, useState } from "react";


export const ECommerceContext = createContext()

const ECommerceProvider = ({ children }) => {

    const [item, setItem] = useState('hello from e-comerce context')

    return (

    <ECommerceContext.Provider value={{ item }} >
      {children}
    </ECommerceContext.Provider>

  )
}

export default ECommerceProvider;

export const useECommerceContext = () => useContext(ECommerceContext);