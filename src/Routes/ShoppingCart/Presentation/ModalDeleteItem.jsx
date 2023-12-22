import { FaTrashCan } from 'react-icons/fa6'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'

export default function ModalDeleteItem () {
  const { openDeleteModal, setOpenDeleteModal, deleteProduct, selectedProduct } = useECommerceContext()
  const closeModal = () => {
    setOpenDeleteModal(false)
  }

  return (
    <div className={`${openDeleteModal ? 'fixed' : 'hidden'} bg-white max-w-[300px] p-3 rounded-lg flex flex-col justify-center items-center shadow-md pt-6`}>
      <FaTrashCan className='text-gray-600 text-[24px]' />
      <p className='font-roboto text-center self-center text-[1.1rem] my-4'>¿Estás seguro que deseas eliminar este ítem?</p>
      <div className='flex justify-between w-[85%] font-roboto text-[0.9rem] mb-6'>
        <button className='border-[1px] border-black rounded-3xl px-2 py-1' onClick={closeModal}>Cancelar</button>
        <button className='bg-red-600 text-white px-3 border-[1px] border-red-600 rounded-3xl py-1' onClick={() => deleteProduct(selectedProduct)}>Sí, eliminar</button>
      </div>
    </div>
  )
}
