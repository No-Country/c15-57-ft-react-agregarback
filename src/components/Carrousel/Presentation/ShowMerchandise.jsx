import { productImg } from '../../../assets/img-hero'

import BotonBanner from './BotonBanner'

const ShowMerchandise = ({ animalLink, animalIcon }) => {
  return (
    <section className='p-0 sm:mb-32 sm:grid sm:grid-cols-2 sm:max-w-[1080px] sm:mx-auto flex justify-center items-center flex-col-reverse  '>
      <header className=' pt-[60px]  mx-auto sm:mx-0 flex w-full gap-7 flex-col items-center justify-center sm:items-start  m-0 mb-8'>
        <div className='mb-2 w-full flex justify-center flex-col  items-center sm:items-start '>
          <p className='text-green-400  text-center text-[42px] font-normal'>¡Conseguí algunos  </p>
          <p className='text-green-400  text-center text-[42px] font-normal'> de estos productos  </p>
          <p className='text-black  text-center text-[42px] font-normal'>y ayuda a los animales! </p>
        </div>
        <div className='w-[180px]  flex sm:ml-14  flex-col items-center justify-center '>
          <BotonBanner path='store' link={animalLink}>Ver productos.</BotonBanner>
        </div>
      </header>
      <figure className=' sm-screen sm:w-[430px] h-[430px]  relative  overflow-hidden sm:mr-24'>
        <img className='w-full h-full object-cover' src={productImg} alt='product-Img' />
      </figure>
    </section>
  )
}
export default ShowMerchandise
