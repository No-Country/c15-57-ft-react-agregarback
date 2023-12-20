import ItemList from './ItemList'
import { Fragment, useEffect } from 'react'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { useLocalStorage } from '../../../components/Hooks/useStorage'
export default function ShoppingList () {
  const [cart] = useLocalStorage('cart', [])
  const { updateTotalCounting, setTotalCounting } = useContentContext()

  useEffect(() => {
    // Valor que deseas extraer y sumar (por ejemplo, cantidad)
    const extractProperty = 'quantity'
    const totalQuantity = cart.reduce((acumulador, item) => {
      console.log(`este es el item ${item[extractProperty]}`)
      // Verificar si la propiedad existe en el objeto antes de sumar
      if (item[extractProperty]) {
        return acumulador + item[extractProperty]
      } else {
        return acumulador
      }
    }, 0)
    console.log(totalQuantity)
    setTotalCounting(totalQuantity)
  }, [cart])
  return (
    <div className='mt-6 md:mt-[56px] font-roboto w-full md:w-[60%] flex flex-col items-center max-w-[864px] box-border'>
      <div className='hidden lg:flex lg:justify-between lg:w-full box-border lg:gap-9 text-itemTitle text-[1rem] font-robotoM'>
        <p>Producto</p>
        <p className='ml-[54%]'>Cantidad</p>
        <p className='mr-[12%]'>Precio</p>
      </div>
      <hr className='hidden lg:inline mb-2 w-full text-gray-300 ' />
      {cart.map((product, index) => {
        return (
          <Fragment key={index}>
            <ItemList updateTotalCounting={updateTotalCounting} title={product.title} quantity={product.quantity} price={product.price} description={product.description} id={index} img={product.img} />
          </Fragment>
        )
      })}
    </div>
  )
}
