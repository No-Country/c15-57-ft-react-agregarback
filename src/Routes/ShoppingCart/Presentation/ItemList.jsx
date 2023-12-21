import { useState } from 'react'
import { FaTrashCan } from 'react-icons/fa6'

import { useContentContext } from '../../../Store/contextStore/ContentContext'

export default function ItemList ({ title, quantity, price, description, id, img, updateTotalCounting }) {
  const { setOpenDeleteModal, getIndex } = useContentContext()
  // save number of products
  const [number, setNumber] = useState(quantity)

  // increase number of products
  const increaseNumber = () => {
    const newCounter = number + 1
    setNumber(newCounter)
    updateTotalCounting(1)
  }

  // decrease number of products
  const decreaseNumber = () => {
    if (number > 0) {
      const newCounter = number - 1
      setNumber(newCounter)
      updateTotalCounting(-1)
    }
  }

  // open delete modal
  const openModal = () => {
    setOpenDeleteModal(true)
    getIndex(id)
  }
  return (
    <div className='w-[95%] lg:w-[100%] h-[80px] lg:h-[100px] mb-4 flex border-[1px] border-slate-300 rounded-xl box-border overflow-hidden' id={id}>
      <img src={img} alt='miniature product' className='w-[80px] h-[78px] lg:w-[100px] lg:h-[98px]' />
      <div className='mx-3 w-[45%] lg:flex lg:flex-col lg:justify-center lg:w-[30%] lg:mr-[22%] box-border'>
        <h3 className='font-robotoM text-[0.8rem] lg:text-[1.2rem] text-itemTitle mt-2'>{title}</h3>
        <p className='font-light text-[0.6rem] lg:text-[0.9rem] text-slate-800 py-1'>{description}</p>
        <p className='text-green-800 lg:hidden'>{`$${price}`}</p>
      </div>
      <div className='flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-2 justify-center w-[30%] lg:w-[28%] lg:justify-between'>
        <FaTrashCan className='text-red-600 cursor-pointer' onClick={openModal} />
        <p className='text-green-800 hidden lg:inline'>{`$${price}`}</p>
        <div className='flex w-[55px] lg:w-[92px] h-[18px] lg:h-[41px] py-2 lg:py-2 lg:px-2 justify-between items-center lg:gap-4 border-[1px] border-black rounded-lg lg:rounded-3xl text-roboto'>
          <button className='px-[4px] text-gray-800 text-[1.2rem] lg:text-[1.6rem]' onClick={decreaseNumber}>-</button>
          <p className='text-gray-800  text-[0.8rem] lg:text-[1.rem]'>{number}</p>
          <button className='px-[4px] text-gray-800 text-[0.9rem] lg:text-[1.2rem]' onClick={increaseNumber}>+</button>
        </div>
      </div>
    </div>
  )
}
