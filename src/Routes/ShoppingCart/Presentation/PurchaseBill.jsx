import { Button } from '../../../components'
import { Link } from 'react-router-dom'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { useEffect } from 'react'

export default function PurchaseBill () {
  const { sentShippingInfo, totalCounting, enableButton, setEnableButton } = useContentContext()

  useEffect(() => {
    sentShippingInfo && totalCounting ? setEnableButton(false) : setEnableButton(true)
  }, [sentShippingInfo, totalCounting])
  return (
    <div className='flex flex-col justify-center items-center w-[95%] md:mt-[56px] max-w-[314px]'>
      <div className='w-[95%] border-[1px] border-slate-300 rounded-xl flex flex-col items-center'>
        <h2 className='mt-3 mb-1 font-robotoM text-[1.1rem] text-itemTitle'>Resumen</h2>
        <hr className='w-[70%] text-gray-600' />
        <div className='flex w-[70%] justify-between mt-2'>
          <p className='text-itemTitle font-light text-[0.9rem]'>{`Productos(${totalCounting})`}</p>
          <p className='text-green-800 font-light text-[0.9rem]'>$2400</p>
        </div>
        <Link to='/Shipping-information' className={`self-start ${!sentShippingInfo ? 'mb-2' : 'mb-0'} ml-[15%] text-green-800 font-light text-[0.9rem] underline`}>
          {!sentShippingInfo ? 'Cargar envío' : 'Cambiar dirección'}
        </Link>
        <div className={`${sentShippingInfo ? 'flex' : 'hidden'} w-[70%] justify-between mb-2`}>
          <p className='text-itemTitle font-light text-[0.9rem]'>Envío</p>
          <p className='text-green-800 font-light text-[0.9rem]'>$2000</p>
        </div>
        <hr className='w-[70%] text-gray-600' />
        <div className='flex flex-col w-full justify-center  mt-2 mb-3 text-[1rem]'>
          <div className='flex w-[70%] justify-between ml-[15.5%]'>
            <p className='font-robotoM text-itemTitle text-[1rem]'>Total</p>
            <p className='font-robotoM text-green-800 text-[1rem]'>$2400</p>
          </div>
          <div className='w-full hidden md:flex justify-center items-center'>
            <Link to={!enableButton ? '/ShoppingSuccessful' : ''} className='cursor-auto w-[70%]'>
              <Button text='Continuar compra' color='bg-green-600' hover='hover:bg-green-900' disabled={enableButton} />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full mb-6 md:hidden flex flex-col items-center justify-center'>
        <Link to={!enableButton ? '/ShoppingSuccessful' : ''} className='cursor-auto w-[70%] inline-block'>
          <Button text='Continuar compra' color='bg-green-600' hover='hover:bg-green-900' disabled={enableButton} />
        </Link>
      </div>
    </div>
  )
}
