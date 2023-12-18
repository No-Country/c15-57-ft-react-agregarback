import EcosystemsLinks from "./EcosystemsLink"

export default function  EcosystemsLinksContainer ({areaIndex, setAreaIndex, otherAreas}){

 return(
   <section className="flex flex-col w-screen sm:max-w-[1080px] gap-[10px] sm:gap-[30px] items-center mb-[123px] overflow-auto">
     <div className=" h-[72px] flex flex-row gap-[18px] items-center justify-center">
       <div className="w-[60px] sm:w-[120px] h-[2px] bg-black"></div>
       <p className="text-gray-950 min-w-[165px] sm:text-[32px] font-[500]" >OTROS ECOSISTEMAS</p>
       <div className="w-[60px] sm:w-[120px] h-[2px] bg-black"></div>
     </div>
   <div className=" w-screen max-w-[1080px]   px-28 overflow-auto flex flex-row sm:grid sm:grid-cols-4 gap-x-[30px] justify-items-start sm:gap-[24px]">
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