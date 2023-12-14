
import { useContentContext } from "../../../Store/contextStore/ContentContext"
import { leftIcon, rigthIcon } from "../../../assets/img-hero"
import BannerInfo from "./BannerInfo"
import BotonBanner from "./BotonBanner"
import ButtomMovileList from "./ButtomMovileList"

export default function BannerContainer ({ children, datosMostrar, classBaner }) {
 
  return (
    <>
    <header className={`w-[430px] flex flex-col  sm:w-screen mx-auto mb-12 relative sm:flex-row ${classBaner} rounded-bl-[60px] bg-gray-400 overflow-hidden`}>
      {children}
      <figure className="h-[500px]  lg:w-[100%] lg:h-screen w-[430px]  sm:w-screen sm:h-screen overflow-hidden flex justify-center items-center">

      <img className='w-[100%] h-[100%] z-0  flex-shrink-0 xl:w-full xl:h-full object-cover' src={datosMostrar?.img} alt={datosMostrar?.name} />
    
      </figure>
      
    </header>
    <MovileControl />
  
    </>
  )
}

function MovileControl (){
  const { animalInfo,bannerAnimals,
    mostrar, setMostrar,classBaner,infoData } = useContentContext();
    const sideDownBanner = ()=>{
      if (mostrar != 0){
        setMostrar(mostrar - 1)
      }
    }
    const sideUPBanner = ()=>{
      if (mostrar < animalInfo.length - 2){
        setMostrar(mostrar + 1)
      }
    }
    
  return(
    <section className="sm:hidden relative w-full h-9 my-10 flex justify-between px-16">
      <div className="absolute bottom-[100px] left-[-160px]" >

      < InfoMovileBarner data={animalInfo[mostrar]} />
      </div>
    
    <div>
    <img src={leftIcon} onClick={()=>sideDownBanner()} alt="" />
    </div>  

    <div>
    <img src={rigthIcon} onClick={()=>sideUPBanner()} alt="" />
    </div> 
    
      </section>

  )
 
}

function InfoMovileBarner({data}){
  return(
    <section className='w-[460px] h-[250px]  top-4 bg-black bg-opacity-50   rounded-bl-[120px] pl-1
    relaticve left-[130px]
    justify-center items-center flex flex-col gap-6 relative '>
     <div className='hero-info flex flex-col gap-6  w-[70%]'>
     <div className=''>
       <p className='text-teal-300 font-semibold text-[8spx]'>{data?.name}</p>
       <p className='lg:text-[48px] text-[16px] lg:w-[400px] text-white leading-none font-semibold'>
         {data?.titular}
       </p>
     </div>
     <p className='lg:w-[450px] text-white text-[14px] lg:text-base font-light'>{data?.detalle}</p>
     <div className="px-10">

     <BotonBanner path='to-donate/' link={data?.link}>¡DONA AHORA!</BotonBanner>
     </div>
     </div>
   </section>

  )
}
