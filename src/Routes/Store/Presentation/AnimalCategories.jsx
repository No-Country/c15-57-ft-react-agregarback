import { useEffect, useState } from 'react'
import axios from 'axios'

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
    <aside className='flex flex-col w-34 h-132 justify-center items-center gap-3 flex-shrink-0'>
      <h2 className='text-dark font-sans font-size-sm font-weight-light leading-normal tracking-tight'>
        Categorías por animales
      </h2>
      <ul className='flex flex-col w-34 h-132 justify-center items-center gap-3 flex-shrink-0'>
        {animals.map((animal) => (
          <li key={animal.id}>
            <img src={animal.img} alt={animal.name} />
          </li>
        ))}
      </ul>
    </aside>
  )
}
