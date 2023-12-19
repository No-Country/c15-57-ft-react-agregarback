

import VulnearableCarrousel from '../../../components/VulnerableSpecies/CarrouselButtonSection/Container/ButtonCarrouselSection'
import VulnerableDonationSection from '../../../components/VulnerableSpecies/VulnerableDonationSection/Container/VulnerableDonationSection'
import VulnerableHabitadSection from '../../../components/VulnerableSpecies/VulnerableHabitatSection/Container/VulnerableHabitadSection'

import { habitat1, habitat2, habitat3, habitat4, habitat5 } from '../../../assets/vulnerableSpecies'

export default function VulnerableSpeciesInfo() {

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
          <div className='w-full overflow-invisible hover:visible mx-auto my-0'>
            <div
              style={{ transform: `translateX(${translateValue}px)` }}
              className='flex transition-transform duration-[0.5s] ease-[ease-in-out]'
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
                <div
                  className='h-full bg-[#EDDD6F] w-0 rounded-[10px_10px_10px_10px]'
                />
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

      <section className='h-[800px] flex flex-col items-center bg-[white] pt-[90px]'>
        <h2 className='text-[#1E1E1E] text-[32px] not-italic font-light leading-6 pb-[41px]'>
          Explorar los animales según su habitat
        </h2>
        <div className='flex justify-center flex-row pb-[90px]'>
          <div
            style={{ backgroundImage: `url(${habitat1})` }}
            className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
          >
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
              Bosques y selvas
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${habitat2})` }}
            className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
          >
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
              Desierto
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${habitat3})` }}
            className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
          >
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl not-italic font-bold leading-10'>
              Montañas
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${habitat4})` }}
            className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
          >
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
              Sabanas y pastisales
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${habitat5})` }}
            className='group w-[224.273px] h-[224.273px] shrink-0 cursor-pointer flex text-center justify-center items-center text-[color:var(--White,#FFF)] m-[18px]'
          >
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-3xl not-italic font-bold leading-10'>
              Océanos, Ríos y Lagunas
            </p>
          </div>
        </div>
        <div className='explorer-search'>
          <div className='relative inline-block'>
            <button className='text-[white]  flex w-[374px] justify-center items-center gap-2.5 bg-[#1a4f2e] text-[color:var(--White,#fff)] text-center text-lg not-italic font-medium leading-6 cursor-pointer px-7 py-[13px] p-2.5 rounded-[50px] border-[none]'>
              Buscar por nombre
            </button>
            <div className='invisible hover:visible absolute bg-[#f9f9f9] max-h-[150px] overflow-y-auto shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[1] w-[374px] gap-2.5 rounded-[10px_10px_10px_10px]'>
              <a href='#'>Jaguar</a>
              <a href='#'>Oso con Ateojos</a>
              <a href='#'>Manatí</a>
              <a href='#'>Ajolote</a>
              <a href='#'>Mono Araña de Frente Roja</a>
              <a href='#'>Tortuga Carey</a>
              <a href='#'>Aguará Grazú</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
