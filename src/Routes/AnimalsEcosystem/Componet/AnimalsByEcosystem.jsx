
import { useEffect, useState } from "react"
import allEcosystem, { MAIN_AREA } from "./data"
import { arrowRight, bannerAllEcosystems } from "../../../assets/ecosystem";


 
 /**
  id:1,
  title:`SABANAS Y PASTIZALES`,
  area:'SABANAS',
  text: textExample
  */


 export default function  AnimalsByEcosystem(){
  const [dataEcosystems , setDataEcosystems ] = useState(allEcosystem);
  const [areaIndex , setAreaIndex] = useState(0)
  const [curretArea , setCurrentArea ] = useState(null)



  useEffect(()=>{
    setCurrentArea(dataEcosystems[areaIndex])
  },[dataEcosystems,areaIndex])

   
  return(
  <EcosystemLayaout>
    <EcosystemHero aratoShow={curretArea?.area}  areaTitle={curretArea?.title}/>
    <EcosystemInfoDectail showText={curretArea?.text}/>
    <CollageAnimasEcosystem getAnimals={curretArea} />
    <EcosystemsLinksContainer areaIndex={areaIndex} setAreaIndex={setAreaIndex}  otherAreas={dataEcosystems}/>
  </EcosystemLayaout>
  )
 }
// 

function CollageAnimasEcosystem({getAnimals}){
 
  
  return(
    <section className="max-w-[1200px] max-h-[1120px] flex flex-col gap-[2px] overflow-hidden ">
    <header className="max-w-[1200px] max-h-[744px] grid grid-cols-3">
      <CardByEcosystem animal={getAnimals?.allAnimals?.left} />
      
      <CardByEcosystem animal={getAnimals?.allAnimals?.center} />
        <div className="w-full h-full flex flex-col"> 
          <CardByEcosystem animal={getAnimals?.allAnimals?.right?.top} />
          {getAnimals?.allAnimals?.right?.down && <CardByEcosystem animal={getAnimals?.allAnimals?.right?.down} />}
        </div>
    </header>
      <div className="w-full h-full">
        <CardByEcosystem animal={getAnimals?.allAnimals?.bottom} />
      </div>   
    </section>
  )
}
function CardByEcosystem ({animal}){
  const [isHover , setIsHover ] = useState(false);
  const showLink= ()=>{
    setIsHover(true)
  }
  const hiddenLink= ()=>{
    setIsHover(false)
  }
 
  return(
    <section className="relative group">
      <div onMouseEnter={showLink} onMouseLeave={hiddenLink}className="  transition">
        <figure className="w-full h-full bg-red-300 ">
          <img className="bg-red-300 relative z-0 w-full    " src={animal?.img} alt="" />
        </figure>
        <div className={` absolute bottom-0  ${isHover?'flex':'hidden' } flex-col z-20 w-full h-full bg-black bg-opacity-60 justify-center items-center    top-0 left-0 p-4`}>
          <p className="text-white font-[600] mb-6 sm:text-[4vw] md:text-[40px]">{animal?.name}</p>
          <a className="w-12 h-12 bg-green-950 rounded-full flex justify-center items-center  "  href={animal?.link}> 
            <img className=" w-6 h-6" src={arrowRight} alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}

 function  EcosystemHero ({aratoShow, areaTitle}){
  const showVideo = MAIN_AREA == aratoShow
  
  return(
    <section className="relative  h-[360px] flex justify-center items-center">
      <figure className='absolute z-0 w-screen h-[360px]' >
      {showVideo ? <EcosystemVideo/>: <img className="w-full h-full object-cover " src={bannerAllEcosystems} alt="" />}
      </figure>
      <div className="relative z-10">
        <p className="text-white text-[32px] sm:text-[64px]">{areaTitle}</p>
      </div>
    </section>
  )
 } 

 function EcosystemInfoDectail ({showText}){
  return (
    <section className="max-w-[1076px]  px-8 h-[420px] sm:h-auto sm:px-0 overflow-auto">
      <p className="text-[20px] font-[400px] text-gray-950">{showText}</p>
    </section>
  )
 }

 function  EcosystemVideo (){
  return(
    <section >
      <video className="relative bottom-0 w-full h-[360px] object-cover" autoPlay loop muted src="https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/6134/f3cc/-460c-45cf-97e0-3d8c185f1256?Expires=1703462400&Signature=dIHb5Y2e9JCAF00yQZLhsA0xweQBFq5JinBdv9hYcRr9gQwKryhmrirxnEtbDUeFmP94G3xZXvei2h4K4Vwqs1EXcgFrqhFSdUuLh47uHDubnhWcgGF~DGvrPnDqUjOt6290rpAG62nQ20Wxw7VY1VitABysejwOUMBwlbguZDPetaPMt1J7p6ilQt~uMy21Y3TcUPGjwRa-OTEBkhW8g16oRWA8q8VZN23SvNbbg9DYHeA2Ov7~l78eMlWDX9Z5imN1PYoFIh3mGBkYpbLawUMUhLUOAZ80YDEntzbXGj4GM-fhKZ~iMu035dL0fdHNN6xaJVvJgZ0j5gWYrHz4Eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></video>
    
    </section>
  )
 } 

 function  EcosystemsLinksContainer ({areaIndex, setAreaIndex, otherAreas}){
 
  return(
    <section className="flex flex-col max-w-[1080px] gap-[10px] sm:gap-[30px] items-center mb-[123px]">
      <div className=" h-[72px] flex flex-row gap-[18px] items-center justify-center">
        <div className="w-[60px] sm:w-[120px] h-[2px] bg-black"></div>
        <p className="text-gray-950 min-w-[165px] sm:text-[32px] font-[500]" >OTROS ECOSISTEMAS</p>
        <div className="w-[60px] sm:w-[120px] h-[2px] bg-black"></div>
      </div>
    <div className=" max-w-[1080px]  grid grid-cols-4 sm:gap-[24px]">
      {
        otherAreas.map((area , index )=>{
        
          if (areaIndex != index ) {
          return <EcosystemsLinks key={area.id} changeArea={()=> setAreaIndex(index)} iconImg={area.iconImg}  >{area.area}</EcosystemsLinks>} 
        }
        )
      }
    </div>
    </section>
  )
 } 

 function EcosystemsLinks({iconImg,changeArea, children}){
  const [isHover , setIsHover ] = useState(false);
  const showLink= ()=>{
    setIsHover(true)
  }
  const hiddenLink= ()=>{
    setIsHover(false)
  }
  return(
    <div className="relative mx-2 " onMouseEnter={showLink} onMouseLeave={hiddenLink}  onClick={changeArea}>
    <figure className="relative  h-full w-full overflow-hidden">

      <img className="  h-full w-full  " src={iconImg} alt="" />
      <div className={`absolute bottom-0 hover:cursor-pointer ${isHover?'flex':'hidden' }  w-full rounded-full h-full bg-opacity-60 bg-black justify-center items-center`} >
      <p className="text-white text-[30px]">{children}</p>
    </div>
    </figure>
    
    </div>
  )
 }

 function  EcosystemLayaout ({children}){
  return(
    <section className=" flex flex-col gap-[123px] items-center">
      {children}
    </section>
  )
 }