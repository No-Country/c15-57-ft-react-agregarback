
import ShowMerchandise from '../Presentation/ShowMerchandise'
import AnimalsCategory from '../Presentation/AnimalsCategory'
import Banner from '../Presentation/Baner'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import InfoContainer from '../Presentation/InfoContainer'
import ListInfo from '../Presentation/ListInfo'
import MovileList from '../Presentation/MovileList'
import { talar } from '../../../assets/img-hero'



const LandingPage = ()  => {
  const { item } = useECommerceContext()
  const { animalInfo,bannerAnimals,
    mostrar, setMostrar,classBaner,infoData } = useContentContext()

  



  return (
    <div className='w-[430px]  relative z-0 top-[-10px]'>
    <Banner showAnimals={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar} /> 
    <div className='w-screen h-auto justify-center flex flex-col '>
      <FirstInfo/>
    
      
      <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon} />
      <AnimalsCategory animals={animalInfo} /> 
     
      <InfoContainer/>
      <ListInfo pointData={infoData}/>
     
        <MovileList data={infoData}/>
        </div>
      
      {/* <VoluntaryInfo/> */}
    </div>
  )
}

export default LandingPage;

function FirstInfo (){
  const articulo = 'La pérdida de árboles a nivel global tiene entre sus principales contribuyentes a la deforestación en América Latina. Un total de 15 billones de árboles se talan cada año en el mundo, e imágenes satelitales muestran que el planeta perdió un área de cobertura forestal del tamaño de Reino Unido en 2019. El 95 por ciento de este desmonte se da en regiones tropicales, y esto incluye a los bosques de países latinoamericanos. De hecho, entre 1990 y 2015, en esta región se deforestaron 97 millones de hectáreas aproximadamente, lo que representa un alto riesgo para la supervivencia de los ecosistemas.'
  return(
    <section className='relative flex-col  w-[430px] h-[350px] flex justify-center my-24'>
      <div className='absolute   z-0 w-[240px] h-[600px] bottom-[-140px] left-24 border border-transparent border-t-black border-b-black'></div>
    <div className='w-[300px] h-20   mx-auto'>
      <p className='text-[18px]'>Al deforestación un alto riesgo para <br/> la supervivencia de los ecosistemas.</p>
    </div>
    <figure className='my-3'>

    <img className='bg-category-Animals' src={talar} alt="" />
    </figure>
    <div className='w-[430px] h-[500px] relative  px-4'>
      <p className='text-[3.5vw]'>{articulo}</p>
       </div>

    </section>
  )

}

