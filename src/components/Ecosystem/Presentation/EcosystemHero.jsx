import EcosystemVideo from "./EcosystemVideo"

export default function  EcosystemHero ({mainArea, aratoShow, areaTitle ,areaBanner}){
  const showVideo = mainArea == aratoShow
  
  return(
    <section className="relative  h-[360px] flex justify-center items-center">
      <figure className='absolute z-0 w-screen h-[360px]' >
      {showVideo ? <EcosystemVideo videoToShow={areaBanner} />: <img className="w-full h-full object-cover " src={areaBanner} alt="" />}
      </figure>
      <div className="relative z-10">
        <p className="text-white text-[32px] sm:text-[64px]">{areaTitle}</p>
      </div>
    </section>
  )
 } 
