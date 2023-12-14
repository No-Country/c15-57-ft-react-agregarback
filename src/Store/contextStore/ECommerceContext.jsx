import { createContext, useContext, useState } from 'react'
import defaultImage from '../../assets/products/remeras/remeras-02.png'
const defaultDescriptions = [
  '- Confeccionamos con telas de primera calidad, Algodón 100% jersey 24/1 de textura suave y liviana.',
  '- Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad.',
  '- Cuello de Reeb fino al tono (Sin TapaCostura).- Tirillera de hombro a hombro con hilos de Algodón.'
]
const defaultSizes = ['S', 'M', 'L', 'XL', 'XXL']
const defaultColors = ['black', 'white', 'gray', 'red']

export const ECommerceContext = createContext()

export default function ECommerceProvider ({ children }) {
  const [product, setProduct] = useState({
    category: 'Jaguar',
    title: 'Remera',
    price: 800,
    img: defaultImage,
    descriptions: defaultDescriptions,
    sizes: defaultSizes,
    colors: defaultColors,
    quantity: 1
  })
  const [category, setCategory] = useState('Remeras')
  const [animal, setAnimal] = useState('Jaguar')
  const changeProduct = (newProduct) => {
    setProduct({ ...product, ...newProduct })
  }

  return (
    <ECommerceContext.Provider
      value={{
        product,
        setProduct,
        changeProduct,
        category,
        setCategory,
        animal,
        setAnimal
      }}
    >
      {children}
    </ECommerceContext.Provider>
  )
}

export const useECommerceContext = () => useContext(ECommerceContext)
