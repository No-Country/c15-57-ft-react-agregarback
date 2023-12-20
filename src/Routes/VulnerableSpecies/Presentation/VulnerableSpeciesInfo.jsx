import { Link } from 'react-router-dom'

import selva2 from '../../../assets/vulnerableSpecies/selva2.jpeg'
import HabitatList from '../../../components/HabitatList/Component'
import Carousel from './Carousel'

export default function VulnerableSpeciesInfo () {
  return (
    <>

      <section
        style={{ backgroundImage: `url(${selva2})` }}
        className='w-screen md:h-full shrink-0 bg-cover bg-no-repeat flex flex-row'
      >
        <div className='w-screen h-auto max-w-[42rem] text-white flex flex-col m-14 sm:m-28 mt-16'>
          <h2 className='text-4xl sm:text-7xl not-italic font-semibold leading-[4rem] sm:leading-[6rem] tracking-widest uppercase mb-9'>
            Protegiendo la vida silvestre para un planeta saludable
          </h2>
          <p className='text-2xl not-italic leading-[41.5px] font-medium'>
            Trabajamos en unidad con muchos para lograr resultados de conservación duraderos. Juntos, podemos proteger y
            restaurar las especies y sus hábitats.
          </p>
        </div>
        {/* <div className='invisible sm:visible flex flex-col items-start justify-center w-min'>
          <div className='w-[60rem] mx-auto '>
            <div
              style={{ transform: `translateX(${translateValue}px)` }}
              className='flex overflow-hidden transition-transform duration-[0.5s] ease-[ease-in-out]'
            >
              {carouselWrapper.map((animal) => (
                <div
                  key={animal.name}
                  style={{ backgroundImage: `url(${animal.image})` }}
                  className='w-[16rem] h-[25rem] shrink-0 cursor-pointer bg-cover flex items-center text-[color:var(--White,#FFF)] flex-col justify-end mr-[43px] rounded-[20px]'
                >
                  <p className='flex-col justify-center shrink-0 text-3xl not-italic font-normal leading-[44px] pb-[34px]'>
                    {animal.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-row items-center justify-around gap-4 w-[50rem] mt-[70px]'>
            <div
              className='w-[3.125rem] h-[3.125rem] text-5xl bg-white/50 cursor-pointer rounded-full  flex-items'
              onClick={prevBtn}
            >
              <IoIosArrowBack />
            </div>
            <div className='w-full mx-auto my-2.5'>
              <div
                style={{ width: progressPercentage }}
                className='h-2.5 bg-white/75 relative rounded-full'
              />
            </div>
            <div
              className='pl-1 w-[50px] h-[50px] bg-white/75 text-5xl  cursor-pointer rounded-[50%] border-none'
              onClick={nextBtn}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div> */}
        <Carousel />

      </section>

      <section className='flex justify-center flex-col items-center bg-[#1E1E1E] pb-[84px]'>
        <div className='flex justify-center flex-col w-auto text-white shrink-0 sm:mx-16 p-14'>
          <p className='text-white text-xl not-italic font-light  leading-[33.5px] mb-3'>
            Desde majestuosos jaguares hasta coloridos loros, estas criaturas únicas enfrentan amenazas que ponen en
            riesgo su existencia y la riqueza de nuestros ecosistemas. Es de suma importancia preservar estas especies
            no solo por su belleza intrínseca, sino por el papel vital que desempeñan en el equilibrio de la naturaleza
            y el patrimonio cultural de la región.
          </p>
          <h2 className='text-white text-xl not-italic font-normal leading-[33.5px]'>
            ¡Ayudanos a proteger y celebrar la extraordinaria vida silvestre de América Latina!
          </h2>
        </div>
        <Link
          to='/donations'
          className='flex justify-center items-center bg-[#1A4F2E] text-white text-center text-3xl not-italic font-medium leading-6 cursor-pointer p-7 rounded-full border-none'
        >
          Hacer una donación
        </Link>
      </section>
      <HabitatList />
    </>
  )
}
