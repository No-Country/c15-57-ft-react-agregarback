import { Button, SubtitleInfoStore } from '../../../components'
import { Link } from 'react-router-dom'
import { catMobile, greenCheck, catDesktop } from '../../../assets/purchase'
import TotalPurchase from '../Presentation/TotalPurchase'
export default function ShoppingSuccessful () {
  return (
    <section className='flex flex-col items-center'>
      <SubtitleInfoStore link='/ShoppingCart' title='Orden Completada' />
      <div className='flex overflow-hidden lg:rounded-xl lg:shadow-md lg:mt-[56px] lg:mb-[100px] lg:border-[1px] lg:border-slate-200 border-box '>
        <img src={catDesktop} alt='gato andino' className='hidden lg:block lg:max-w-[393px] sm:max-h-[678px]' />
        <div className='flex flex-col items-center lg:max-w-[686px] border-box lg:mx-4'>
          <img src={catMobile} alt='gato andino' className='mt-6 mb-4 lg:hidden' />
          <img src={greenCheck} alt='checkmark' className='w-[50px] h-[46px] lg:w-[87px] lg:h-[80px] lg:mt-8' />
          <div className='my-4 flex flex-col items-center gap-3 lg:mt-[47px]'>
            <h2 className='font-robotoM text-itemTitle text-[1rem] lg:text-[1.2rem]'>
              ¡Gracias por tu compra!
            </h2>
            <p className='font-roboto font-light text-itemTitle text-[0.8rem] max-w-[328px] text-center lg:text-[1.2rem] lg:w-[85%] lg:max-w-[600px]'>
              Tu orden está siendo procesada y estará completa en 3-4 hs. Recibirás un correo electrónico de confirmación cuando esté completa.
            </p>
          </div>
          <TotalPurchase />
          <div className='w-full lg:w-[50%] mb-12'>
            <Link to='/Store' className='cursor-auto w-[70%]'>
              <Button text='Continuar comprando' color='bg-green-600' hover='hover:bg-green-900' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
