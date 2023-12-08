import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'
import ShowMerchandise from '../Presentation/ShowMerchandise'
import AnimalsCategory from '../Presentation/AnimalsCategory'
import Banner from '../Presentation/Baner'

const LandingPage = ()  => {
  const [animalInfo, setAnimalInfo] = useState([])
  const [bannerAnimals, setBannerAnimals] = useState([])
  const [mostrar, setMostrar] = useState(0)
  const classBaner = 'img-container'

  useEffect(() => {
    axios('api/animals').then((res) => {
      setAnimalInfo(res.data.animals.slice(0, 4))
      setBannerAnimals(res.data.animals.slice(0, 3)) // el Banner simpre mostrara 3 animales
    })
  }, [])

  return (
    <>
      <Banner showAnimals={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar} />
      <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon} />
      <AnimalsCategory animals={animalInfo} />
    </>
  )
}

export default LandingPage;