import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../../components/Hooks/useStorage'
import { remera01 } from '../../assets/products/remeras/'

const defaultDescriptions = [
  '- Confeccionamos con telas de primera calidad, Algodón 100% jersey 24/1 de textura suave y liviana.',
  '- Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad.',
  '- Cuello de Reeb fino al tono (Sin TapaCostura).- Tirillera de hombro a hombro con hilos de Algodón.'
]
const defaultSizes = ['S', 'M', 'L', 'XL', 'XXL']
const defaultColors = ['black', 'white', 'gray', 'red']
const initialProduct = {
  id: 'remera01',
  category: 'Jaguar',
  type: 'Remera',
  price: 800,
  img: remera01,
  description: defaultDescriptions[0],
  sizes: defaultSizes,
  size: defaultSizes[0],
  colors: defaultColors,
  color: defaultColors[0],
  quantity: 1
}

export const ECommerceContext = createContext()

export default function ECommerceProvider ({ children }) {
  const [product, setProduct] = useState(initialProduct)
  const [category, setCategory] = useState('Remeras')
  const [animal, setAnimal] = useState('Jaguar')
  const [cart, setCart] = useLocalStorage('cart', [])
  const [cantidad, setCantidad] = useState(0)
  const [total, setTotal] = useState(0)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState()

  useEffect(() => {
    const { nuevaCantidad, nuevoTotal } = cart.reduce(
      (accumulator, item) => {
        accumulator.nuevaCantidad += item.quantity
        accumulator.nuevoTotal += item.quantity * item.price
        return accumulator
      },
      { nuevaCantidad: 0, nuevoTotal: 0 }
    )

    // Actualiza los estados cantidad y total
    setCantidad(nuevaCantidad)
    setTotal(nuevoTotal)
  }, [cart])

  const changeProduct = (newProduct) => {
    setProduct({ ...product, ...newProduct })
  }

  const clearCart = () => {
    setCart([])
  }

  const deleteProduct = (id) => {
    const newShoppingList = [...cart]
    newShoppingList.splice(id, 1)
    setOpenDeleteModal(false)
    setCart(newShoppingList)
  }

  const increment = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1
    }))
  }

  const decrement = () => {
    if (product.quantity > 1) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1
      }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }))
  }

  const addProduct = () => {
    setCart((prevCart) => {
      // Verifica si el producto ya está en el carrito
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id)

      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        const updatedCart = prevCart.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, quantity: item.quantity + product.quantity }
          }
          return item
        })
        return updatedCart
      } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        return [...prevCart, product]
      }
    })
  }

  const incrementCart = (id) => {
    const newCart = cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    )
    setCart(newCart)
  }
  const decrementCart = (id) => {
    const newCart = cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity - 1 } : p
    )
    setCart(newCart)
  }

  return (
    <ECommerceContext.Provider
      value={{
        deleteProduct,
        cantidad,
        total,
        cart,
        setCart,
        product,
        setProduct,
        changeProduct,
        category,
        setCategory,
        animal,
        setAnimal,
        increment,
        decrement,
        handleChange,
        openDeleteModal,
        selectedProduct,
        setSelectedProduct,
        setOpenDeleteModal,
        addProduct,
        incrementCart,
        decrementCart,
        clearCart
      }}
    >
      {children}
    </ECommerceContext.Provider>
  )
}

export const useECommerceContext = () => useContext(ECommerceContext)
