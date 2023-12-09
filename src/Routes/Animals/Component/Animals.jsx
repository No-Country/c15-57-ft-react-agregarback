
import { useContaintContext } from "../../../Store/contextStore/ContentContext";
import { useECommerceContext } from "../../../Store/contextStore/ECommerceContext";
import { useUserContext } from "../../../Store/contextStore/UserContext";
import { LandingPage } from "../../../components";

 import { ListInfo,InfoContainer ,Banner , ShowMerchandise ,AnimalsCategory , VoluntaryInfo}from "../../../components/Carrousel/Component";


export default function Home() {

  const { item } = useECommerceContext()
  const { animalInfo, setAnimalInfo,bannerAnimals, setBannerAnimals,
    mostrar, setMostrar,classBaner,infoData} = useContaintContext()

  

  return (
    // <div  className="h-[1000px] w-20 row-start-1 row-end-2 bg-red-300">
    // <div >
    //   hola
    // </div>
    <>
    <LandingPage/>
    </>
    
    // <section className="absolute z-0 w-full top-[130px]">
    //   <div className="w-auto  p-5 "> 
    //     <Banner showAnimals={bannerAnimals} classBaner={classBaner} setMostrar={setMostrar} mostrar={mostrar} />
    //     <ShowMerchandise animalLink={animalInfo[mostrar]?.link} animalIcon={animalInfo[mostrar]?.icon} />
    //     <AnimalsCategory animals={animalInfo} />
    //     <InfoContainer/>
    //     <ListInfo pointData={infoData}/>
    //     <VoluntaryInfo/>
    //     <p>hola</p>
    //     </div>
    // </section>
  )
};


