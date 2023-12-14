
import { useContentContext } from "../../../Store/contextStore/ContentContext"
import { leftIcon, rigthIcon } from "../../../assets/img-hero"
import BannerInfo from "./BannerInfo"
import BotonBanner from "./BotonBanner"
import ButtomMovileList from "./ButtomMovileList"
import InfoMovileBarner from "./InfoMovileBarner"

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

