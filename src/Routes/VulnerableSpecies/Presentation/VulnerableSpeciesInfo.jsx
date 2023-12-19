import { Link } from 'react-router-dom'
import aguaraGuazu from '../../../assets/vulnerableSpecies/aguaraGuazu.jpg'
import ajolote from '../../../assets/vulnerableSpecies/ajolote.jpg'
import jaguar from '../../../assets/vulnerableSpecies/jaguar.jpg'
import manati from '../../../assets/vulnerableSpecies/manati.jpg'
import monoArania from '../../../assets/vulnerableSpecies/monoArania.jpg'
import osoDeAnteojos from '../../../assets/vulnerableSpecies/osoDeAnteojos.jpg'
import totugaCarey from '../../../assets/vulnerableSpecies/totugaCarey.jpg'

import selva2 from '../../../assets/vulnerableSpecies/selva2.jpeg'
import { useState, useEffect } from 'react'
import HabitatList from '../../../components/HabitatList/Component'

  useEffect(() => {
    setCarouselWrapper([
      { name: 'Aguara Guazu', image: aguaraGuazu },
      { name: 'Ajolote', image: ajolote },
      { name: 'Jaguar', image: jaguar },
      { name: 'Manati', image: manati },
      { name: 'Oso De Anteojos', image: osoDeAnteojos },
      { name: 'Totuga Carey', image: totugaCarey },
      { name: 'Mono Arania', image: monoArania }
    ])
  }, [])

  useEffect(() => {
    setTranslateValue(-currentIndex * 320) // 300px for item width and 20px for margin-right
    setProgressPercentage((currentIndex + 1 / carouselWrapper.length) * 100)
  }, [currentIndex])

  const prevBtn = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const nextBtn = () => {
    if (currentIndex < carouselWrapper.length - 1) setCurrentIndex(currentIndex + 1)
  }

  return (
    <>
      <section
        style={{ backgroundImage: `url(${selva2})` }}
        className='w-full h-[744px] shrink-0 bg-cover bg-no-repeat flex flex-row'
      >
        <div className='max-w-[673px] text-[white] flex flex-col ml-[127px] mr-[120px] mt-16'>
          <h2 className='text-[74px] not-italic font-semibold leading-[85px] tracking-[-1.48px] uppercase mb-[35px]'>
            Protegiendo la vida silvestre para un planeta saludable
          </h2>
          <p className='text-2xl not-italic leading-[41.5px] font-medium'>
            Trabajamos en unidad con muchos para lograr resultados de conservación duraderos. Juntos, podemos proteger y
            restaurar las especies y sus hábitats.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center w-[850px]'>
          <div className='w-screen overflow-invisible hover:visible mx-auto my-0'>
            <div
              style={{ transform: `translateX(${translateValue}px)` }}
              className='flex flex-nowrap transition-transform duration-[0.5s] ease-[ease-in-out]'
            >
              {carouselWrapper.map((animal) => (
                <div
                  key={animal.name}
                  style={{ backgroundImage: `url(${animal.image})` }}
                  className='w-[250px] h-[361px] shrink-0 cursor-pointer flex items-center text-[color:var(--White,#FFF)] flex-col justify-end mr-[43px] rounded-[20px]'
                >
                  <p className='flex-col justify-center shrink-0 text-3xl not-italic font-normal leading-[44px] pb-[34px]'>
                    {animal.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-row items-center justify-between w-[850px] mt-[70px]'>
            <div
              onClick={prevBtn}
              className=' w-[50px] h-[50px] bg-[rgba(255,255,255,0.5)] flex justify-center items-center cursor-pointer rounded-[50%] border-[none] flex-items'
            >
              <i className='fa-solid fa-chevron-left fa-xl' />
            </div>
            <div className='w-[600px] mx-auto my-2.5 flex-items'>
              <div
                style={{ width: progressPercentage }}
                className='h-2.5 bg-[#ddd] relative rounded-[10px_10px_10px_10px]'
              >
                <div className='h-full bg-[#EDDD6F] w-0 rounded-[10px_10px_10px_10px]' />
              </div>
            </div>
            <div
              onClick={nextBtn}
              className=' w-[50px] h-[50px] bg-[rgba(255,255,255,0.5)] flex justify-center items-center cursor-pointer rounded-[50%] border-[none] flex-items'
            >
              <i className='fa-solid fa-chevron-right fa-xl' />
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center flex-col items-center bg-[#1E1E1E] pb-[84px]'>
        <div className='flex justify-center flex-col w-[1189px] text-[white] shrink-0 mx-[127px] pt-[84px] pb-[54px]'>
          <p className='text-[color:var(--White,#FFF)] text-xl not-italic font-light leading-[33.5px] mb-1'>
            Desde majestuosos jaguares hasta coloridos loros, estas criaturas únicas enfrentan amenazas que ponen en
            riesgo su existencia y la riqueza de nuestros ecosistemas. Es de suma importancia preservar estas especies
            no solo por su belleza intrínseca, sino por el papel vital que desempeñan en el equilibrio de la naturaleza
            y el patrimonio cultural de la región.
          </p>
          <h2 className='text-[color:var(--White,#FFF)] text-xl not-italic font-normal leading-[33.5px]'>
            ¡Ayudanos a proteger y celebrar la extraordinaria vida silvestre de América Latina!
          </h2>
        </div>
        <Link
          to='/donations'
          className='flex w-[374px] justify-center items-center gap-2.5 bg-[#1A4F2E] text-[color:var(--White,#FFF)] text-center text-lg not-italic font-medium leading-6 cursor-pointer px-7 py-[13px] rounded-[50px] border-[none]'
        >
          Hacer una donación
        </Link>
      </section>
      <HabitatList />
    </>
  )
}
