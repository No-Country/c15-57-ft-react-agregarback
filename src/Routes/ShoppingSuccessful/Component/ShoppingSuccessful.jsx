import { ButtonForm, SubtitleInfoStore } from '../../../components'
import { catMobile, greenCheck, catDesktop } from '../../../assets/purchase'
import TotalPurchase from '../Presentation/TotalPurchase'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useNavigate } from 'react-router-dom'

export default function ShoppingSuccessful () {
  const { clearCart } = useECommerceContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    clearCart()
    setTimeout(() => {
      navigate('/Store')
    }, 200)
  }

  return (
    <section className='flex flex-col items-center justify-center'>
      <SubtitleInfoStore link='/ShoppingCart' title='Orden Completada' />
      <div className='flex justify-center items-center md:w-full xl:w-[70%] md:border-[1px] md:border-slate-100'>
        <div className='flex overflow-hidden xl:rounded-xl xl:shadow-md xl:mt-[56px] xl:mb-[100px] xl:border-[1px] xl:border-slate-200 border-box xl:w-[85%] '>
          <img src={catDesktop} alt='gato andino' className='hidden xl:block xl:max-w-[393px] xl:max-h-full' />
          <div className='flex flex-col items-center xl:max-w-[686px] border-box xl:mx-4'>
            <img src={catMobile} alt='gato andino' className='mt-6 mb-4 xl:hidden' />
            <img src={greenCheck} alt='checkmark' className='w-[50px] h-[46px] xl:w-[87px] xl:h-[80px] xl:mt-8' />
            <div className='my-4 flex flex-col items-center gap-3 xl:mt-[47px]'>
              <h2 className='font-robotoM text-itemTitle text-[1rem] xl:text-[1.2rem]'>
                ¡Gracias por tu compra!
              </h2>
              <p className='font-roboto font-light text-itemTitle text-[0.8rem] max-w-[328px] text-center xl:text-[1.2rem] xl:w-[85%] xl:max-w-[600px]'>
                Tu orden está siendo procesada y estará completa en 3-4 hs. Recibirás un correo electrónico de confirmación cuando esté completa.
              </p>
            </div>
            <TotalPurchase />
            <div onClick={handleSubmit} className='w-full xl:w-[70%] mb-12'>
              <div className='flex flex-col items-center'>
                <ButtonForm text='Continuar comprando' color='bg-green-600' hover='hover:bg-green-900' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
