
import ShowMerchandise from '../Presentation/ShowMerchandise'
import AnimalsCategory from '../Presentation/AnimalsCategory'
import Banner from '../Presentation/Baner'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import InfoContainer from '../Presentation/InfoContainer'
import ListInfo from '../Presentation/ListInfo'
import MovileList from '../Presentation/MovileList'
import HighlightBox from '../Presentation/HighlightBox'
import LandingLayout from '../Presentation/LandingLayout'



const LandingPage = ()  => {
  const { item } = useECommerceContext()
  const { animalInfo,bannerAnimals,
    mostrar, setMostrar,classBaner,infoData } = useContentContext()

  return (   
    <LandingLayout>
      <Banner showAnimals={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar} /> 
      <HighlightBox/>      
      <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon} />
      <AnimalsCategory animals={animalInfo} />      
      <InfoContainer/>
      <ListInfo pointData={infoData}/>     
      <MovileList data={infoData}/>
    </LandingLayout>
      
    
  )
}

export default LandingPage;





