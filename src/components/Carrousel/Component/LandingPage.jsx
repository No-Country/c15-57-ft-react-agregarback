import ShowMerchandise from '../Presentation/ShowMerchandise'
import AnimalsCategory from '../Presentation/AnimalsCategory'
import Banner from '../Presentation/Baner'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import InfoContainer from '../Presentation/InfoContainer'
import ListInfo from '../Presentation/ListInfo'
import MovileList from '../Presentation/MovileList'
import HighlightBox from '../Presentation/HighlightBox'
import LandingLayout from '../Presentation/LandingLayout'
import HabitatList from '../../HabitatList/Component'
import { useEffect, useState } from 'react'
import axios from 'axios'

const LandingPage = () => {
  const {
    mostrar, setMostrar, classBaner, infoData
  } = useContentContext()
  const [animalInfo, setAnimalInfo] = useState([])
  const [bannerAnimals, setBannerAnimals] = useState([])

  useEffect(() => {
    axios('api/animals/')
      .then((res) => {
        setAnimalInfo(res.data.animals.slice(0, 4))
        setBannerAnimals(res.data.animals.slice(0, 3))
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <LandingLayout>
      <Banner animalInfo={animalInfo} showAnimals={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar} />
      <HighlightBox />
      <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon} />
      <AnimalsCategory animals={animalInfo} />
      <InfoContainer />
      <ListInfo pointData={infoData} />
      <MovileList data={infoData} />
      <HabitatList />
    </LandingLayout>

  )
}

export default LandingPage
