import { Link } from 'react-router-dom'

import HabitatList from '../../../components/HabitatList/Component'
import EspecieCircular8 from '../../../assets/InfoAnimals/EspecieCircular8.png'
import EspecieCircular9 from '../../../assets/InfoAnimals/EspecieCircular9.png'
import EspecieCircular10 from '../../../assets/InfoAnimals/EspecieCircular10.png'
import EspecieCircular11 from '../../../assets/InfoAnimals/EspecieCircular11.png'
import EspecieCircular12 from '../../../assets/InfoAnimals/EspecieCircular12.png'
import EspecieCircular13 from '../../../assets/InfoAnimals/EspecieCircular13.png'
import {
  aguaraGuazu,
  ajolote,
  jaguar,
  manati,
  monoArania,
  osoDeAnteojos,
  totugaCarey,
  selva2
} from '../../../assets/vulnerableSpecies/'

export default function VulnerableSpeciesInfo () {
  const animals = [
    { img: jaguar, name: 'jaguar' },
    { img: manati, name: 'manati' },
    { img: ajolote, name: 'ajolote' },
    { img: osoDeAnteojos, name: 'oso' },
    { img: monoArania, name: 'mono' },
    { img: aguaraGuazu, name: 'guara' },
    { img: totugaCarey, name: 'tortuga' },
    { img: EspecieCircular8, name: 'tapir' },
    { img: EspecieCircular9, name: 'huemul' },
    { img: EspecieCircular10, name: 'tatu' },
    { img: EspecieCircular11, name: 'cardenal' },
    { img: EspecieCircular12, name: 'hormiguero' },
    { img: EspecieCircular13, name: 'vaquitaMarina' }
  ]
  return (
    <>
      <section
        style={{ backgroundImage: `url(${selva2})` }}
        className='w-screen md:h-full shrink-0 bg-cover bg-no-repeat flex sm:flex-row h-auto'
      >
        <div className='relative z-10 w-screen h-auto max-w-[42rem] text-white flex flex-col m-14 sm:m-28 mt-16'>
          <h2 className='text-4xl sm:text-7xl not-italic font-semibold leading-[4rem] sm:leading-[6rem] tracking-widest uppercase mb-9'>
            Protegiendo la vida silvestre para un planeta saludable
          </h2>
          <p className='text-2xl not-italic leading-[41.5px] font-medium'>
            Trabajamos en unidad con muchos para lograr resultados de conservación duraderos. Juntos, podemos proteger y
            restaurar las especies y sus hábitats.
          </p>
        </div>
        <div className='invisible sm:visible flex flex-col items-start justify-center w-min'>
          <div className='sm:w-[105vh] mx-auto'>
            <div className='relative z-0 overflow-auto flex transition-transform duration-[0.5s] ease-[ease-in-out]'>
              {animals.map((animal) => (
                <div
                  key={animal.name}
                  style={{ backgroundImage: `url(${animal.img})` }}
                  className='w-[16rem] h-[25rem] shrink-0 cursor-pointer bg-cover flex items-center text-[color:var(--White,#FFF)] flex-col justify-end mr-[43px] rounded-[20px]'
                >
                  <p className='flex-col justify-center shrink-0 text-3xl not-italic font-normal leading-[44px] pb-[34px]'>
                    {animal.name.charAt(0).toUpperCase() + animal.name.slice(1)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
