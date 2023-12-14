import { babyOso, separadorDown, separadorUP } from '../../../assets/img-hero'
import BotonBanner from './BotonBanner'
import './style.css'

export default function InfoContainer () {
  return (
    <>

      <section className=' relative flex-col-reverse flex gap-48 sm:flex-row sm:justify-cesnter lg:w-[1080px] sm:mx-auto sm:items-center sm:mb-20'>
        <img className='absolute z-0 h-16 w-full  top-0 hidden sm:flex' src={separadorDown} alt='separadorDown' />

        <div className='relative z-20 h-[200px] flex gap-12 w-[380px]  flex-col justify-center items-center  mb-12'>
          <div className=' w-full flex h-auto sm:h-[160px]   sm:w-[400px]  justify-center  ml-8 sm:ml-0 pt-3  '>
            <p className=' text-[4vw] sm:text-[16px]  w-full text-gray-800  sm:px-12 '>¡Dona ahora, la supervivencia de los animales <br />de Latinoamérica depende de todos nosotros! </p>
          </div>
          <div className='w-[200px] h-32 flex justify-center items-center border border-transparent border-b-black sm:border-transparent pb-10'>

            <BotonBanner path='donations' link='donations/'>¡Dona ahora!</BotonBanner>
          </div>
        </div>
        <figure className='min-w-[350px] relative z-20   sm:w-[400px] h-32 sm:h-[430px]  sm:flex sm:justify-center sm:items-center '>
          <img className='bg-category-Animals h-auto object-cover w-full' src={babyOso} alt='' />
        </figure>

        <img className='absolute z-0 w-full h-16  bottom-3 hidden sm:flex ' src={separadorUP} alt='' />
      </section>

    </>
  )
}
