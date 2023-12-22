import { useEffect, useState } from 'react'
import axios from 'axios'
import jaguar from '../../../assets/juguar-categories.png'

export default function AnimalCategories () {
  const [animals, setAnimals] = useState([])
  const url = 'api/animalCs'

  useEffect(() => {
    axios(url)
      .then((res) => {
        setAnimals(res.data.animalCs)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className='flex flex-col items-center w-screen sm:w-auto overflow-hidden'>
      <img
        className='hidden md:block w-64 h-36 rounded-xl'
        src={jaguar}
      />
      <div className='hidden md:inline-flex w-72 p-3 rounded-xl justify-center items-center gap-2.5'>
        <p className='w-60 text-center text-gray-800 text-xl font-normal font-roboto '>
          Con la compra de uno de los productos solidarios estás contribuyendo directamente con la labor que las ONG realiza en beneficio a los animales que se encuentran en Peligro de extinción en Latinoamérica
        </p>
      </div>
      <div className='hidden md:block h-px border border-gray-300 w-36' />
      <h2 className='text-[0.9375rem] font-light leading-[137%] tracking-[-0.05rem] font-Roboto my-4 text-center'>
        Categorías de productos por animales
      </h2>
      <ul className='max-w-full overflow-scroll sm:overflow-auto  flex flex-row gap-4 justify-start p-3 mx-20 sm:rounded-box sm:flex sm:flex-col sm:items-center sm:justify-center'>
        {animals.map((animal) => (
          <li
            key={animal.id}
          >
            <img
              className='rounded-box min-w-[15.5rem] h-[6.0625rem] sm:w-[15.5rem] sm:h-[6.0625rem]'
              src={animal.img}
              alt={animal.name}
            />
          </li>
        ))}
      </ul>
      <div className='flex:row md:hidden w-full p-3 rounded-xl justify-center items-center gap-2.5'>
        <p className='w-full text-center text-gray-800 p-3 text-xl font-normal font-roboto '>
          Con la compra de uno de los productos solidarios estás contribuyendo directamente con la labor que las ONG
          realiza en beneficio a los animales que se encuentran en Peligro de extinción en Latinoamérica
        </p>
        <p className='w-full text-center pb-3 text-[0.9375rem] font-roboto not-italic font-light leading-[137%] tracking-[-0.05rem] '>
          Tipos de productos
        </p>
      </div>
    </div>
  )
}
