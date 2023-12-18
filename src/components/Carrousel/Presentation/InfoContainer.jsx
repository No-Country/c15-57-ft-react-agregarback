import { babyOso, separadorDown, separadorUP } from '../../../assets/img-hero'
import BotonBanner from './BotonBanner'
import './style.css'

export default function InfoContainer () {
  return (
    <>

      <section className=' relative flex-col-reverse flex gap-10 sm:px-12 sm:h-[570px] sm:flex-row sm:justify-between w-screen lg:w-[1080px] sm:mx-auto sm:items-center sm:mb-20'>
        <img className='absolute z-0 h-16 w-full  top-0 hidden sm:flex' src={separadorDown} alt='separadorDown' />

        <div className='relative z-20 h-[200px] flex gap-12 sm:gap-0  sm:h-[370px] w-[380px] sm:w-[490px] sm:pt-20 flex-col justify-center items-center  mb-16'>
          <div className=' w-full flex h-auto sm:h-[160px]  sm:w-[490px]  justify-center  ml-8 sm:ml-0 pt-3  '>
            <p className='sm:hidden text-[4vw] sm:text-[24px]   font-[300] w-full text-gray-800  sm:px-12 sm:text-center'>¡Dona ahora, la supervivencia de los  animales <br /> de Latinoamérica depende de todos nosotros! </p>
            <p className='hidden sm:flex text-[4vw] sm:text-[24px] font-[300] w-full text-gray-800  sm:px-12 sm:text-center'>¡Dona ahora, la supervivencia de los <br /> animales de Latinoamérica depende de todos nosotros! </p>
          </div>
          <div className='w-[200px] h-32 flex justify-center items-center border border-transparent border-b-black sm:border-transparent pb-10'>

            <BotonBanner path='donations' link='donations/'>¡Dona ahora!</BotonBanner>
          </div>
        </div>
        <figure className='min-w-[350px]  relative z-20 sm:h-auto  sm:w-[400px] h-[300px]   sm:flex sm:justify-center sm:items-center '>
          <img className='bg-category-Animals h-full object-cover w-full' src={babyOso} alt='' />
        </figure>

        <img className='absolute z-0 w-full h-16  bottom-3 hidden sm:flex ' src={separadorUP} alt='' />
      </section>

    </>
  )
}
