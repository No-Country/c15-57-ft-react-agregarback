import { FaTrashCan } from 'react-icons/fa6'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { useLocalStorage } from '../../../components/Hooks/useStorage'
export default function ModalDeleteItem () {
  const { setOpenDeleteModal, openDeleteModal, index, shoppingList, setShoppingList } = useContentContext()
  const [, setCart] = useLocalStorage('cart', [])

  const closeModal = () => {
    setOpenDeleteModal(false)
  }
  const deleteProduct = () => {
    const positionToErase = index
    const newShoppingList = [...shoppingList]
    newShoppingList.splice(positionToErase, 1)
    setOpenDeleteModal(false)
    setCart(newShoppingList)
    setShoppingList(newShoppingList)
  }
  return (
    <div className={`${openDeleteModal ? 'fixed' : 'hidden'} bg-white max-w-[300px] p-3 rounded-lg flex flex-col justify-center items-center shadow-md pt-6`}>
      <FaTrashCan className='text-gray-600 text-[24px]' />
      <p className='font-roboto text-center self-center text-[1.1rem] my-4'>¿Estás seguro que deseas eliminar este ítem?</p>
      <div className='flex justify-between w-[85%] font-roboto text-[0.9rem] mb-6'>
        <button className='border-[1px] border-black rounded-3xl px-2 py-1' onClick={closeModal}>Cancelar</button>
        <button className='bg-red-600 text-white px-3 border-[1px] border-red-600 rounded-3xl py-1' onClick={deleteProduct}>Sí, eliminar</button>
      </div>
    </div>
  )
}
