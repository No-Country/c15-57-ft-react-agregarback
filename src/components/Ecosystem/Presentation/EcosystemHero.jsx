import EcosystemVideo from "./EcosystemVideo"

export default function  EcosystemHero ({mainArea, aratoShow, areaTitle ,areaBanner}){

  
  return(
    <section className="relative w-full  min-h-[220px] sm:h-[430px] lg:h-[610px] flex justify-center items-center overflow-hidden">
      <figure className='absolute top-2 z-0 w-screen h-auto ' >
       <EcosystemVideo videoToShow={areaBanner} /> 
      </figure>
      <div className="relative z-10 flex ">
        <p className="text-gray-100 text-[32px] md:text-[58px]   lg:text-[96px] font-[300]">{areaTitle}</p>
      </div>
    </section>
  )
 } 
