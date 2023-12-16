import { FaTrashCan } from 'react-icons/fa6'
import miniature from '../../../assets/product-miniature.jpg'
export default function ItemList () {
  return (
    <div className='w-[95%] lg:w-[100%] h-[80px] lg:h-[100px] mb-4 flex border-[1px] border-slate-300 rounded-xl box-border'>
      <img src={miniature} alt='miniature product' className='w-[80px] h-[78px] lg:w-[100px] lg:h-[98px]' />
      <div className='mx-3 w-[45%] lg:flex lg:flex-col lg:justify-center lg:w-[30%] lg:mr-[22%]  box-border'>
        <h3 className='font-robotoM text-[0.8rem] lg:text-[1.2rem] text-itemTitle'>Taza</h3>
        <p className='font-light text-[0.6rem] lg:text-[0.9rem] text-slate-800'>Taza cerámica con imagen de animal. 200ml.</p>
        <p className='text-green-800 lg:hidden'>$800</p>
      </div>
      <div className='flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-2 justify-center w-[30%] lg:w-[28%] lg:justify-between'>
        <FaTrashCan className='text-red-600' />
        <p className='text-green-800 hidden lg:inline'>$800</p>
        <div className='flex w-[55px] lg:w-[92px] h-[18px] lg:h-[41px] py-2 lg:py-2 lg:px-2 justify-between items-center lg:gap-4 border-[1px] border-black rounded-lg lg:rounded-3xl text-roboto'>
          <button className='px-[4px] text-gray-800 text-[1.2rem] lg:text-[1.6rem] '>-</button>
          <p className='text-gray-800  text-[0.8rem] lg:text-[1.rem]'>0</p>
          <button className='px-[4px] text-gray-800 text-[0.9rem] lg:text-[1.2rem]  '>+</button>
        </div>
      </div>
    </div>
  )
}
