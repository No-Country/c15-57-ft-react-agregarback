import BotonDonar from "../../../components/BotonDonar";
import vector1 from '../../../../src/assets/Vector-1.png'
import vector2 from '../../../../src/assets/Vector-2.png'
import camisa from '../../../../src/assets/camisa.png'
import tasa from '../../../../src/assets/tasa.png'

const ShowMerchandise = ({animalLink ,animalIcon }) =>{
  const linkMerchandise = `/to-products/${animalLink}` 
  return (
<section className='  w-[1440px] h-[630px] p-[75px]  flex  mx-auto '>
  <div className='w-[50%] pt-[60px]'>
    <div className='mb-8'>
    <p className='text-green-600 font-josefin-sans text-6xl font-normal'>¡Conseguí algunos de estos productos <br/>
    <span className='text-black font-josefin-sans text-6xl font-normal'>y ayuda a los animales! </span></p>
  </div>
  <BotonDonar link={linkMerchandise} >Ver productos.</BotonDonar>
  </div>
  <div className='w-[50%] h-full relative'>
    {/* camisa con su icono */}
    <img className='absolute z-10 w-[920px] h-[620px] bottom-[2px] left-[140px]' src={camisa} alt="camisa" />
    <img className='absolute z-10 w-[220px] left-[340px] top-[80px]' src={animalIcon} alt="animalIcon" />
    {/* tasa con su icono */}
    <img className='absolute z-20  top-[72px]' src={tasa} alt="tasa" />
    <img className='absolute z-20 w-[150px] left-[120px] top-[230px]' src={animalIcon} alt="animalIcon" />
      {/* vectores decorativos */}
    <img className='w-[360px] h-[340px] z-0' src={vector1} alt="vector1" />
    <img className='w-[216px] h-[230px] z-0 absolute top-[240px] right-0' src={vector2} alt="vector2" />
    
  </div>

</section>
)};
export default ShowMerchandise;