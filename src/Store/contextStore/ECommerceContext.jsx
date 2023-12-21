import { createContext, useContext, useEffect, useState } from 'react'
import defaultImage from '../../assets/products/remeras/remeras-02.png'
import useGetData from '../../Hooks/useGetData'
const defaultDescriptions = [
  '- Confeccionamos con telas de primera calidad, Algodón 100% jersey 24/1 de textura suave y liviana.',
  '- Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad.',
  '- Cuello de Reeb fino al tono (Sin TapaCostura).- Tirillera de hombro a hombro con hilos de Algodón.'
]
const defaultSizes = ['S', 'M', 'L', 'XL', 'XXL']
const defaultColors = ['black', 'white', 'gray', 'red']

export const ECommerceContext = createContext()

export default function ECommerceProvider({ children }) {

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

  const [isModalOpen, setIsModalOpen] = useState(false)

  const isOpen = () => setIsModalOpen(!isModalOpen)

  const [category, setCategory] = useState('Remeras')

  const [animal, setAnimal] = useState('Jaguar')

  const changeProduct = (newProduct) => {
    setProduct({ ...product, ...newProduct })
  }


  const [cartContainCounter, setcartContainCounter] = useState(0) // global cart counter

  const [cartProductsContainer, setCartProductsContainer] = useState([])// global cart to complete the purchase 


  const addToTheCartCounter = () => {// function that allows to increase the global cart counter
    setcartContainCounter({
      quanity: cartContainCounter.quanity + 1
    }
    )
  }

  const removeFromCartCounter = () => {// function that allows to decrease the global cart counter
    setcartContainCounter({
      quanity: cartContainCounter.quanity - 1
    }
    )
  }

  const addToTheCart = (product) => {// function that allows to add products to the global car

    const { category, title, price, img, descriptions, sizes, colors, quantity } = product
    console.log(title);


  }

  return (
    <ECommerceContext.Provider
      value={{
        isModalOpen,
        isOpen,
        product,
        setProduct,
        changeProduct,
        category,
        setCategory,
        animal,
        setAnimal,
        cartContainCounter,
        addToTheCartCounter,
       
      }}
    >
      {children}
    </ECommerceContext.Provider>
  )
}

export const useECommerceContext = () => useContext(ECommerceContext)
