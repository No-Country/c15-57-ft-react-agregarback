import ButtonCarrouselSection from '../../CarrouselButtonSection/Container/ButtonCarrouselSection'

const VulnerableCarrouselContent = ({
  carouselWrapper,
  translateValue,
  selva2
}) => {
  return (
    <>
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
        <div className='w-full hover:visible mx-auto my-0'>
          <div
            style={{ transform: `translateX(${translateValue}px)` }}
            className='flex transition-transform duration-[0.5s] ease-[ease-in-out]'
          >
            {
              carouselWrapper.map((animal) => (
                <div
                  key={animal.name}
                  style={{ backgroundImage: `url(${animal.image})` }}
                  className='w-[250px] h-[361px] shrink-0 cursor-pointer flex items-center text-[color:var(--White,#FFF)] flex-col justify-end mr-[43px] rounded-[20px]'
                >
                  <p className='flex-col justify-center shrink-0 text-3xl not-italic font-normal leading-[44px] pb-[34px]'>
                    {animal.name}
                  </p>
                </div>
              ))
            }
          </div>
        </div>

        <ButtonCarrouselSection />

      </div>

    </>

  )
}

export default VulnerableCarrouselContent
