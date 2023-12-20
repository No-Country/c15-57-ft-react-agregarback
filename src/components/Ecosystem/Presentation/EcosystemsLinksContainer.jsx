
import EcosystemsLinks from "./EcosystemsLink";

export default function EcosystemsLinksContainer ({ correctArea, otherAreas }) {


 const noShow = (correctArea != undefined )?  correctArea : 'sabana-pastizales'

  return (
    <section className='flex flex-col w-screen sm:max-w-[1080px] gap-[10px] sm:gap-[30px] items-center mb-[123px] overflow-auto'>
      <div className=' h-[72px] flex flex-row gap-[18px] items-center justify-center'>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-black' />
        <p className='text-gray-950 min-w-[165px] sm:text-[32px] font-[500]'>OTROS ECOSISTEMAS</p>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-black' />
      </div>
      <div className=' w-screen max-w-[1080px]   px-28 overflow-auto flex flex-row sm:grid sm:grid-cols-4 gap-x-[30px] justify-items-start sm:gap-[24px]'>
        {

       otherAreas.map((ecosystem ) => {
       const correctPath = ecosystem.path?.slice(11, 99) //tomar solo el querry 
         if (correctPath !== noShow) {
           return <EcosystemsLinks key={ecosystem.id}  escosystemsData={ecosystem}>{ecosystem.area}</EcosystemsLinks>

         }
       }
       )
     }
      </div>
    </section>
  )
}
