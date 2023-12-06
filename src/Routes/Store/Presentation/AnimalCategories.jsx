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
        className='w-64 h-36 rounded-xl'
        src={jaguar}
      />
      <div className='w-72 p-3 rounded-xl justify-center items-center gap-2.5 inline-flex'>
        <p className="w-60 text-center text-gray-800 text-xl font-normal font-['Roboto'] ">
          Con la compra de uno de los productos solidarios estás contribuyendo
          directamente con la labor que las ONG realiza en beneficio a los
          animales que se encuentran en Peligro de extinción en Latinoamérica
        </p>
      </div>
      <div className='h-px border border-gray-300 w-36' />
      <h2 className="text-slate-800 text-base font-light font-['Roboto'] ">
        Categorías de productos por animales
      </h2>
      <ul className='flex flex-col items-center justify-center flex-shrink-0 gap-3 w-34 h-132'>
        {animals.map((animal) => (
          <li key={animal.id}>
            <img
              src={animal.img}
              alt={animal.name}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
