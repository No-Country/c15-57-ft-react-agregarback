
import ShowMerchandise from '../Presentation/ShowMerchandise'
import AnimalsCategory from '../Presentation/AnimalsCategory'
import Banner from '../Presentation/Baner'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useContentContext } from '../../../Store/contextStore/ContentContext'
import InfoContainer from '../Presentation/InfoContainer'
import ListInfo from '../Presentation/ListInfo'
import VoluntaryInfo from '../Presentation/VoluntaryInfo'

const LandingPage = ()  => {
  const { item } = useECommerceContext()
  const { animalInfo,bannerAnimals,
    mostrar, setMostrar,classBaner,infoData} = useContentContext()

  



  return (
    <div className='w-screen  relative z-0 top-[-10px]'>
      <Banner showAnimals={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar} />
      <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon} />
      <AnimalsCategory animals={animalInfo} />
     
      <InfoContainer/>
      <ListInfo pointData={infoData}/>
     
        <MovileList data={infoData}/>
      
      <VoluntaryInfo/>
    </div>
  )
}

export default LandingPage;

const MovileList = ({ data})=>{
  const { movileIndex, rightMovileIndex, lefMovileIndex} = useContentContext()
  
  const curretNumber = movileIndex + 1
  return(
    <section className=' max-w-[500px] mx-auto sm:hidden flex flex-row justify-center items-center px-'>
    <div onClick={()=>lefMovileIndex(movileIndex)} className={` h-full w-10 flex justify-center items-center text-[82px]`}> <p className={`${movileIndex === 0 && 'hidden'}`}> {'<'}</p></div>

    <section className='w-[320px]  mx-auto bg-green-200 rounded-[22px] h-[300px] flex flex-col items-center mt-24 px-6 relative pt-20 gap-6'>
      <div className='w-[125px]  h-[125px] bg-green-700 border-white border-[10px] rounded-full flex justify-center items-center  absolute top-[-70px] bottom-[70px] '>
               <p className='text-white font-semibold text-[56px]  '> {curretNumber} </p>
                </div>
               <p className='font-bold text-lg'>{data[movileIndex].title} </p>
               <p className='font-[200]' >{data[movileIndex].information}</p>
    </section>
    <p onClick={()=>rightMovileIndex(movileIndex)} className='h-full w-10 flex justify-center items-center text-[82px]'>{'>'}</p>
    </section>

  )
}