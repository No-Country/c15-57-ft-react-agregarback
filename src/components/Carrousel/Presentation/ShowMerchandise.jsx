import { tasa, camisa, vector2, vector1 } from '../../../assets/landig'
import BotonBanner from './BotonBanner'

const ShowMerchandise = ({ animalLink, animalIcon }) => {
  return (
    <section className='
    p-0
    sm:mb-32
    sm:grid
   
    sm:grid-cols-2 
    
    sm:max-w-[1080px]
    sm:mx-auto
    -w-screen
    -md:w-[1440px]
    -mx-auto
     -h-[100%] relative
     flex
      justify-center
      items-center
     flex-col-reverse  '>
      <header className=' pt-[60px]  mx-auto sm:mx-0 flex w-full gap-7   flex-col items-center justify-center     sm:items-start  m-0 mb-8 '>
       
        <div className='mb-2 w-full flex justify-center flex-col  items-center sm:items-start '>
          <p className='text-green-400  text-[5vw] sm:text-[3vw] font-normal'>¡Conseguí algunos de estos productos  </p>
          <p className='text-black  text-[5vw] sm:text-[40px] font-normal'>y ayuda a los animales! </p>
        </div>
        <div className='w-[180px]  flex   flex-col items-center justify-center '>

        <BotonBanner path='store' link={animalLink}>Ver productos.</BotonBanner>
        </div>
        
      </header>

      <nav className=' w-[430px] h-[480px] relative  overflow-hidden sm:mr-24'>
        {/* camisa con su icono */}
        <div className='relative right-10 bottom-8'>
        <img className='absolute z-10 w-[920px] h-[520px] top-[-42px] left-[100px]' src={camisa} alt='camisa' />
        <img className='absolute z-10 w-[220px] sm:w-[200px] sm:left-[180px] top-[150px] left-[200px] sm:top-[150px]' src={animalIcon} alt='animalIcon' />
        </div>
        {/* tasa con su icono */}
        <div className='relative w-full '>
        <img className='absolute z-20 w-[290px]  sm:w-[90%] top-[170px] left-[25px]' src={tasa} alt='tasa' />
        <img className='absolute z-20 w-[25%] sm:w-[33%] sm:left-[140px] left-[110px] sm:top-[310px] top-[290px]' src={animalIcon} alt='animalIcon' />

        </div>
        
        {/* vectores decorativos */}
        <div className='relative '>

        <img className='w-[200px] h-[200px] z-0 absolute top-[60px] left-8' src={vector1} alt='vector1' />
        <img className='w-[150px] h-[150px] z-0 absolute top-[260px] right-5' src={vector2} alt='vector2' />
        </div>
      </nav>

    </section>
  )
}
export default ShowMerchandise
