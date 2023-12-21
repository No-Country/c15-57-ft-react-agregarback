import ItemList from './ItemList'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
export default function ShoppingList () {
  const { updateTotalCounting } = useContentContext()

  return (
    <div className='mt-6 md:mt-[56px] font-roboto w-full md:w-[60%] flex flex-col items-center max-w-[864px] box-border'>
      <div className='hidden lg:flex lg:justify-between lg:w-full box-border lg:gap-9 text-itemTitle text-[1rem] font-robotoM'>
        <p>Producto</p>
        <p className='ml-[54%]'>Cantidad</p>
        <p className='mr-[12%]'>Precio</p>
      </div>
      <hr className='hidden lg:inline mb-2 w-full text-gray-300 ' />
      <ItemList updateTotalCounting={updateTotalCounting} />
      <ItemList updateTotalCounting={updateTotalCounting} />
      <ItemList updateTotalCounting={updateTotalCounting} />
    </div>
  )
}
