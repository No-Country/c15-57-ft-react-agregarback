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
        throw new Error(err)
      })
  }, [])

  return (
    <>
      <img
        className='hidden md:block w-64 h-36 rounded-xl'
        src={jaguar}
      />
      <div className='hidden md:inline-flex w-72 p-3 rounded-xl justify-center items-center gap-2.5'>
        <p className='w-60 text-center text-gray-800 text-xl font-normal font-roboto '>
          Con la compra de uno de los productos solidarios estás contribuyendo  directamente con la labor que las ONG realiza en beneficio a los animales que se encuentran en Peligro de extinción en Latinoamérica
        </p>
      </div>
      <div className='hidden md:block h-px border border-gray-300 w-36' />
      <h2 className='text-[0.9375rem] font-light leading-[137%] tracking-[-0.05rem] font-Roboto '>
        Categorías de productos por animales
      </h2>
      <ul className=' p-4 mx-4 rounded-box flex md:flex-col md:items-center md:justify-center md:flex-shrink-0 gap-3  '>
        {animals.map((animal) => (
          <li
            key={animal.id}
          >
            <img
              className='rounded-box w-[15.5rem] h-[6.0625rem]'
              src={animal.img}
              alt={animal.name}
            />
          </li>
        ))}
      </ul>
      <div className='flex:row md:hidden w-full p-3 rounded-xl justify-center items-center gap-2.5'>
        <p className='w-full text-center text-gray-800 p-3 text-xl font-normal font-roboto '>
          Con la compra de uno de los productos solidarios estás contribuyendo
          directamente con la labor que las ONG realiza en beneficio a los
          animales que se encuentran en Peligro de extinción en Latinoamérica
        </p>
        <p className='w-full text-center pb-3 text-[0.9375rem] font-roboto not-italic font-light leading-[137%] tracking-[-0.05rem] '>
          Tipos de productos
        </p>
      </div>
    </>
  )
}
