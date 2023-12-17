import { Button, SubtitleInfoStore } from '../../../components'
import { Link } from 'react-router-dom'
import { catMobile, greenCheck } from '../../../assets/purchase'

import TotalPurchase from '../Presentation/TotalPurchase'
export default function ShoppingSuccessful () {
  return (
    <div className='flex flex-col items-center'>
      <SubtitleInfoStore link='/ShoppingCart' title='Orden Completada' />
      <img src={catMobile} alt='gato andino' className='mt-6 mb-4' />
      <img src={greenCheck} alt='checkmark' className='w-[50px] h-[46px]' />
      <div className='my-4 flex flex-col items-center gap-3'>
        <h2 className='font-robotoM text-itemTitle text-[1rem]'>¡Gracias por tu compra!</h2>
        <p className='font-roboto font-light text-itemTitle text-[0.8rem] w-[95%] text-center'>
          Tu orden está siendo procesada y estará completa en 3-4 hs. Recibirás un correo electrónico de confirmación cuando esté completa.
        </p>
      </div>
      <TotalPurchase />
      <Link to='/Store'>
        <Button text='Continuar comprando' color='bg-green-600' hover='hover:bg-green-900' />
      </Link>
    </div>
  )
}
