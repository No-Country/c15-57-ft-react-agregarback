
import ShowMerchandise from '../Presentation/ShowMerchandise'
import AnimalsCategory from '../Presentation/AnimalsCategory'
import Banner from '../Presentation/Baner'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import InfoContainer from '../Presentation/InfoContainer'
import ListInfo from '../Presentation/ListInfo'
import MovileList from '../Presentation/MovileList'
import { talar } from '../../../assets/img-hero'
import ButtomMovileList from '../Presentation/ButtomMovileList'



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
    <section className='relative flex-col  min-w-[430px] h-[550px] mb-32 sm:mb-7  w-full  sm:h-[480px]   flex justify-center mt-10  sm:m-7'>
      <div className='absolute   z-0 w-[240px] h-[630px] sm:hidden bottom-[-70px] left-24 border border-transparent border-t-gray-600 border-b-gray-600'></div>
    <div className='min-w-[300px] h-20   mx-auto'>
      <p className='text-[18px] sm:hidden text-center'>Al deforestación un alto riesgo para  <br/> la supervivencia de los ecosistemas.</p>
      <p className='hidden sm:flex text-[18px] text-center'>Al deforestación un alto riesgo para   la supervivencia de los ecosistemas.</p>
    </div>
    <figure className='my-3  sm:w-screen sm:max-w-[1440px] sm:mx-auto sm:h-[260px] '>

    <img className='bg-category-Animals w-full sm:h-[260px] font-[300] object-cover' src={talar} alt="" />
    </figure>
    <p className='hidden sm:flex mt-7  max-w-[1080px] w-full mx-auto text-center'>{articulo}</p>
    <div className='w-[430px] h-[210px] relative w-ful  sm:max-w-[1440px]  flex  sm:mx-aut px-4'>
      <p className=' sm:hidden text-[3.5vw] w-screen sm:max-w-[1440px]  sm:text-[19px]'>{articulo}</p>
     
       </div>

    </section>
  )

}

