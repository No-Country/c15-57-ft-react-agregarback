import axios from 'axios'
import { useEffect, useState } from 'react'

import ShowMerchandise from '../Presentation/ShowMerchandise'
import AnimalsCategory from '../Presentation/AnimalsCategory'
import Banner from '../Presentation/Baner'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useContaintContext } from '../../../Store/contextStore/ContentContext'
import InfoContainer from '../Presentation/InfoContainer'
import ListInfo from '../Presentation/ListInfo'
import VoluntaryInfo from '../Presentation/VoluntaryInfo'

const LandingPage = ()  => {
  const { item } = useECommerceContext()
  const { animalInfo, setAnimalInfo,bannerAnimals, setBannerAnimals,
    mostrar, setMostrar,classBaner,infoData} = useContaintContext()

  



  return (
    <div className='w-full relative z-0 top-[-10px]'>
      <Banner showAnimals={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar} />
      <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon} />
      <AnimalsCategory animals={animalInfo} />
     
      <InfoContainer/>
      <ListInfo pointData={infoData}/>
      <VoluntaryInfo/>
    </div>
  )
}

export default LandingPage;