import CategoryCard from './CategoryCard'
import { categoryBG } from '../../../assets/img-hero'
import './style.css'

const AnimalsCategory = ({ animals }) => {
  return (
    <section className='relative w-[100%] h-[660px] flex-shrink-0 bg-cover bg-no-repeat  pt-[86px] pb-[48px] mx-auto mb-12 '>
        <figure className="absolute h-[230px]    overflow-hidden ">
          <img className=' h-full sm:right-[100px] bottom-2 w-[90%]' src={categoryBG} alt='BackGround-category' />
        </figure>
      <div className=' m-w-[1080px] h-[630px]  mx-auto relative  z-10'>
        <div className='w-full flex flex-col items-center justify-center'>
          <p className='sm:font-semibold mt-5 sm:text-[35px] text-[24px] mb-3'>Productos por animales</p>
          <div className='flex '>
            <p className='font-light  text-[18px] '>Mira todas las carateristicas </p>
            <p className='ml-4 hover:cursor-pointer w-8 hover:font-bold'>{'>'}</p>
          </div>
        </div>
        <div className='w-full sm:m-w-[1440px] h- flex flex-row gap-8  px-[30px] pt-[40px] overflow-x-auto'>
          
        <section className='w-[2060px] h-auto flex gap-8  '>
           <p className='h-full w-10 flex justify-center items-center text-[32px]'>{'<'}</p>
           {animals?.map((animal, index) => (
              <CategoryCard key={index} animal={animal} />
            ))}
      <p className='h-full w-10 flex justify-center items-center text-[32px]' >{'>'}</p>
    </section>
    
           
         
        </div>
      </div>
    </section>
  )
}

export default AnimalsCategory
