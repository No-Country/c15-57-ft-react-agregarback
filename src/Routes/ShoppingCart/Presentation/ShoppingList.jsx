import ItemList from './ItemList'
import { Fragment, useEffect } from 'react'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { useLocalStorage } from '../../../components/Hooks/useStorage'
export default function ShoppingList () {
  const [cart, setCart] = useLocalStorage('cart', [])
  const { updateTotalCounting, setTotalCounting, shoppingList, setShoppingList } = useContentContext()

  useEffect(() => {
    // Get the total quantity of the products on shopping list
    setShoppingList([...cart])
    const extractProperty = 'quantity'
    const totalQuantity = cart.reduce((acumulador, item) => {
      if (item[extractProperty]) {
        return acumulador + item[extractProperty]
      } else {
        return acumulador
      }
    }, 0)
    setTotalCounting(totalQuantity)
  }, [])
  return (
    <div className='mt-6 md:mt-[56px] font-roboto w-full md:w-[60%] flex flex-col items-center max-w-[864px] box-border'>
      <div className='hidden lg:flex lg:justify-between lg:w-full box-border lg:gap-9 text-itemTitle text-[1rem] font-robotoM'>
        <p>Producto</p>
        <p className='ml-[54%]'>Cantidad</p>
        <p className='mr-[12%]'>Precio</p>
      </div>
      <hr className='hidden lg:inline mb-2 w-full text-gray-300 ' />
      {shoppingList.map((product, index) => {
        return (
          <Fragment key={index}>
            <ItemList updateTotalCounting={updateTotalCounting} title={product.title} quantity={product.quantity} price={product.price} description={product.description} id={index} img={product.img} setCart={setCart} cart={cart} setShoppingList={setShoppingList} />
          </Fragment>
        )
      })}
    </div>
  )
}
