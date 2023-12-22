import { Link } from 'react-router-dom'

import HabitatList from '../../../components/HabitatList/Component'
import {
  aguaraGuazu,
  ajolote,
  jaguar,
  manati,
  monoArania,
  osoDeAnteojos,
  totugaCarey,
  tatu,
  tapir,
  hormiguero,
  cardenal,
  huemul,
  vaquita,
  selva2
} from '../../../assets/vulnerableSpecies/'

export default function VulnerableSpeciesInfo() {
  const animals = [
    { img: jaguar, name: 'jaguar' },
    { img: manati, name: 'manati' },
    { img: ajolote, name: 'ajolote' },
    { img: osoDeAnteojos, name: 'oso' },
    { img: monoArania, name: 'mono' },
    { img: aguaraGuazu, name: 'guara' },
    { img: totugaCarey, name: 'tortuga' },
    { img: tapir, name: 'tapir' },
    { img: huemul, name: 'huemul' },
    { img: tatu, name: 'tatu' },
    { img: cardenal, name: 'cardenal' },
    { img: hormiguero, name: 'hormiguero' },
    { img: vaquita, name: 'vaquitaMarina' }
  ]
  return (
    <>
      <section
        style={{ backgroundImage: `url(${selva2})`,
       }}
        className='bg-cover bg-no-repeat flex flex-col sm:flex-row'
      >
        <div className='relative z-10 w-screen h-auto max-w-[42rem] p-8 sm:pl-0 text-white flex flex-col sm:m-28'>
          <h2 className='text-4xl sm:text-7xl not-italic font-semibold leading-[4rem] sm:leading-[6rem] tracking-widest uppercase mb-9'>
            Protegiendo la vida silvestre para un planeta saludable
          </h2>
          <p className='text-2xl not-italic leading-[41.5px] font-medium'>
            Trabajamos en unidad con muchos para lograr resultados de conservación duraderos. Juntos, podemos proteger y
            restaurar las especies y sus hábitats.
          </p>
        </div>

        <div className='relative self-center w-[55vw]'
          style={{
            overflow: 'scroll',
            scrollbarColor: 'transparent',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '-ms-overflow-style': 'none'
          }}
        >
          <div className='flex '>

            {animals.map((animal) => (
              <>
                <Link
                  to={`/Animals/${animal.name}`}
                  key={animal.name}
                  style={{ backgroundImage: `url(${animal.img})` }}
                  className='w-[16rem] h-[25rem] shrink-0 cursor-pointer bg-cover flex items-center text-[color:var(--White,#FFF)] flex-col justify-end mr-[43px] rounded-[20px]'
                >
                  <p className='flex-col justify-center shrink-0 text-3xl not-italic font-normal leading-[44px] pb-[34px]'>
                    {animal.name.charAt(0).toUpperCase() + animal.name.slice(1)}
                  </p>
                </Link>
              </>
            ))}
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