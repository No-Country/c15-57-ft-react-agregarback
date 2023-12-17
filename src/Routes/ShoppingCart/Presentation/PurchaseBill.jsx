import { Button } from '../../../components'
import { Link } from 'react-router-dom'
export default function PurchaseBill () {
  return (
    <div className='flex flex-col justify-center items-center w-[95%] md:mt-[56px] max-w-[314px]'>
      <div className='w-[95%] border-[1px] border-slate-300 rounded-xl flex flex-col items-center'>
        <h2 className='mt-3 mb-1 font-robotoM text-[1.1rem] text-itemTitle'>Resumen</h2>
        <hr className='w-[70%] text-gray-600' />
        <div className='flex w-[70%] justify-between mt-2'>
          <p className='text-itemTitle font-light text-[0.9rem]'>Productos(3)</p>
          <p className='text-green-800 font-light text-[0.9rem]'>$2400</p>
        </div>
        <Link to='/Shipping-information' className='self-start mb-2 ml-[15%] text-green-800 font-light text-[0.9rem] underline'>
          Cargar envío
        </Link>
        <hr className='w-[70%] text-gray-600' />
        <div className='flex flex-col w-full justify-center mt-2 mb-3 text-[1rem]'>
          <div className='flex w-[70%] justify-between ml-[15.5%]'>
            <p className='font-robotoM text-itemTitle text-[1rem]'>Total</p>
            <p className='font-robotoM text-green-800 text-[1rem]'>$2400</p>
          </div>
          <div className='w-full hidden md:inline'>
            <Link to='/ShoppingSuccessful'>
              <Button text='Continuar compra' color='bg-green-600' hover='hover:bg-green-900' />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[70%] mb-6 md:hidden '>
        <Link to='/ShoppingSuccessful'>
          <Button text='Continuar compra' color='bg-green-600' hover='hover:bg-green-900' />
        </Link>
      </div>
    </div>
  )
}
