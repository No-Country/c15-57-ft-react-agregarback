
import { useEffect, useState } from "react"
import allEcosystem, { MAIN_AREA } from "./data";
import EcosystemLayaout from "../Presentation/EcosystemLayaout";
import EcosystemInfoDectail from "../Presentation/EcosystemInfoDectail";
import EcosystemHero from "../Presentation/EcosystemHero";
import EcosystemCollageAnimas from "../Presentation/EcosystemCollageAnimas";
import EcosystemsLinksContainer from "../Presentation/EcosystemsLinksContainer";




 export default function  AnimalsByEcosystem(){
  const [dataEcosystems , setDataEcosystems ] = useState(allEcosystem);
  const [areaIndex , setAreaIndex] = useState(0)
  const [curretArea , setCurrentArea ] = useState(null)



  useEffect(()=>{
    setCurrentArea(dataEcosystems[areaIndex])
  },[dataEcosystems,areaIndex])

   
  return(
  <EcosystemLayaout>
    <EcosystemHero mainArea={MAIN_AREA} aratoShow={curretArea?.area} areaBanner={curretArea?.banerFondo}  areaTitle={curretArea?.title}/>
    <EcosystemInfoDectail showText={curretArea?.text}/>
    <EcosystemCollageAnimas getAnimals={curretArea} />
    <EcosystemsLinksContainer areaIndex={areaIndex} setAreaIndex={setAreaIndex}  otherAreas={dataEcosystems}/>
  </EcosystemLayaout>
  )
 }
// 








 

 

