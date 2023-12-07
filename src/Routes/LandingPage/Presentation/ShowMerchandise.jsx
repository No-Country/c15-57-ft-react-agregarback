import {tasa,camisa,vector2,vector1} from '../../../assets/landig'
import BotonBanner from './BotonBanner';

const ShowMerchandise = ({animalLink ,animalIcon }) =>{
  

  return (
<section className='  w-[1440px] h-[630px] p-[75px]  flex  mx-auto '>
  <header className='w-[50%] pt-[60px]'>
    <div className='mb-8'>
    <p className='text-green-00 font-josefin-sans text-6xl font-normal'>¡Conseguí algunos de estos productos <br/>
    <span className='text-black font-josefin-sans text-6xl font-normal'>y ayuda a los animales! </span></p>
  </div>
  <BotonBanner path={'to-products/'} link={animalLink} >Ver productos.</BotonBanner>
  </header>
  <nav className='w-[50%] h-full relative'>
    {/* camisa con su icono */}
    <img className='absolute z-10 w-[920px] h-[620px] bottom-[2px] left-[140px]' src={camisa} alt="camisa" />
    <img className='absolute z-10 w-[220px] left-[340px] top-[80px]' src={animalIcon} alt="animalIcon" />
    {/* tasa con su icono */}
    <img className='absolute z-20  top-[72px]' src={tasa} alt="tasa" />
    <img className='absolute z-20 w-[120px] left-[125px] top-[240px]' src={animalIcon} alt="animalIcon" />
      {/* vectores decorativos */}
    <img className='w-[360px] h-[340px] z-0' src={vector1} alt="vector1" />
    <img className='w-[216px] h-[230px] z-0 absolute top-[240px] right-0' src={vector2} alt="vector2" />
  </nav>

</section>
)};
export default ShowMerchandise;