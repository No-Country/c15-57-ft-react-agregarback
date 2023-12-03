import { useState, useEffect } from 'react'
import BotonDonar from '../BotonDonar'
import './style.css'
import axios from 'axios'
import HeroInfo from './Component/HeroInfo'

const Hero = () => {
  const [mostrar, setMostrar] = useState(0)
  const [heroes, setHeroes] = useState([])
  const datosMostrar = heroes[mostrar]
  useEffect(() => {
    axios('/api/animals').then((res) => setHeroes(res.data.animals.slice(0,3)));
    console.log('heroes',heroes);
    
 

  }, []);

  return (
    <header className='w-screen h-screen m-w-[1080px] relative flex flex-row'>
      {heroes?.map((animals, index) => (
        <HeroSecction
          setMostrar={setMostrar}
          mostrar={mostrar}
          key={index}
          index={index}
          data={animals}
        />
      ))}
      <img className='absolute z-0 w-full h-full flex-shrink-0 bg-cover bg-no-repeat' src={datosMostrar?.img} alt={datosMostrar?.name} />
    </header>
  )
}

const HeroSecction = ({ setMostrar, mostrar, data, index }) => {
  const isSeleccionado = mostrar === index
  return (
    <section
      onClick={() => {
        setMostrar(index)
      }}
      className={` w-full h-full z-10 flex justify-center items-center transition-all ease-in-out
     ${isSeleccionado && 'w-[180%] bg-black bg-opacity-75'}`}
    >
      {!isSeleccionado
        ? (
          <HeroOption name={data.name} />
          )
        : (
          <HeroInfo domine={'/'} data={data}  />
          )}
    </section>
  )
}
const HeroOption = ({ name }) => {
  return (
    <div className='hero-cambiarSeccion text-white transition duration-2000 ease-in-out hover:cursor-pointer'>
      <p className='w-full flex text-[72px] justify-center items-center hero-icon'>
        +
      </p>
      <p className='text-[24px] font-semibold'>{name}</p>
    </div>
  )
}



export default Hero
