import CategoryCard from './CategoryCard'
import { categoryBG, leftIcon, rigthIcon } from '../../../assets/img-hero'

import './style.css'

const AnimalsCategory = ({ animals }) => {
  return (
    <section className='relative min-w-[430px] sm:pl-20  sm:mb-40 sm:w-[1440px] lg:mx-auto h-[660px]  pt-[86px] pb-[48px]  mb-20 '>
      <figure className='bg-category-Animals h-[630px] w-[430px] sm:w-screen sm:max-w-[1220px] sm:h-[670px]  absolute top-0  overflow-hidden '>
        <img
          className='w-[100%] h-[100%] z-0  flex-shrink-0 xl:w-full xl:h-full sm:object-cover'
          src={categoryBG}
          alt='BackGround-category'
        />
      </figure>
      <div className=' sm:m-w-[1080px] h-[630px]  mx-auto relative  z-10'>
        <div className='w-full flex flex-col items-center justify-center'>
          <p className='sm:font-semibold mt-5 sm:text-[35px] text-[24px] mb-3'>
            Productos por animales
          </p>
          <div className='flex '>
            <p className='font-light  text-[18px] '>
              Mira todas las carateristicas
            </p>
            <div className=' hover:cursor-pointer w-8 flex justify-center items-center hover:font-bold'>
              <img
                className='h-4'
                src={rigthIcon}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='w-full m-w-[1440%] h-full flex flex-col items-start px-[30px] pt-[40px] overflow-auto'>
          <div className='w-auto h-full flex gap-[10px]   items-start'>
            <div className='h-[320px] w-10  flex justify-center items-center'>
            <img
                className='h-6 '
                src={leftIcon}
                alt=''
              />
            </div>
        
            {animals.map((animal, index) => (
              <CategoryCard
                key={index}
                animal={animal}
              />
            ))}
            <div className='h-[320px] w-10  flex justify-center items-center'>
            <img
                className='h-6'
                src={rigthIcon}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='h-full w-10 flex justify-center items-center text-[32px] '>
        <img
          className='sm:hidden'
          src={rigthIcon}
          alt=''
        />
      </div>
    </section>
  )
}
export default AnimalsCategory
