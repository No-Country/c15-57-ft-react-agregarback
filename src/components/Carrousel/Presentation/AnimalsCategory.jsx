import CategoryCard from './CategoryCard'
import { categoryBG } from '../../../assets/img-hero'
import { leftIcon, rigthIcon } from "../../../assets/img-hero";
import './style.css'

const AnimalsCategory = ({ animals }) => {
  return (
    <section className='relative min-w-[430px] sm:pl-20  sm:mb-40 sm:w-[1440px] lg:mx-auto h-[660px]  pt-[86px] pb-[48px]  mb-20 '>
   
         <figure className="bg-category-Animals h-[630px] w-full lg:w-[1240px] sm:h-[670px]  absolute top-0  overflow-hidden ">
          <img className='w-[100%] h-[100%] z-0  flex-shrink-0 xl:w-full xl:h-full sm:object-cover' src={categoryBG} alt='BackGround-category' />
          </figure>
      <div className=' sm:m-w-[1080px] h-[630px]  mx-auto relative  z-10'>
        <div className='w-full flex flex-col items-center justify-center'>
          <p className='sm:font-semibold mt-5 sm:text-[35px] text-[24px] mb-3'>Productos por animales</p>
          <div className='flex '>
            <p className='font-light  text-[18px] '>Mira todas las carateristicas </p>
            <div className=' hover:cursor-pointer w-8 flex justify-center items-center hover:font-bold'>
              <img className='h-4' src={rigthIcon} alt="" />
           
            
            </div>
          </div>
        </div>
        <div className='w-full sm:m-w-[1080px] h- flex flex-row gap-8  px-[30px] pt-[40px] overflow-x-auto overflow-hidden'>
          
        <section className='w-auto h-auto flex gap-8 sm:justify-center '>
           <div className='h-full w-10 flex justify-center items-center text-[32px] '>
           <img src={leftIcon} alt="" />
           </div>
           {animals?.map((animal, index) => (
              <CategoryCard key={index} animal={animal} />
            ))}
      <div className='h-full w-10 flex justify-center items-center text-[32px] ' >
        <img src={rigthIcon} alt="" />
      </div>
    </section>
    
           
         
        </div>
      </div>
    </section>
  )
}

export default AnimalsCategory
