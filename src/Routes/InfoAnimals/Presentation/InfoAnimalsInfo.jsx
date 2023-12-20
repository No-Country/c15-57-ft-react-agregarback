import { BiLoaderCircle } from 'react-icons/bi'
import { GiWeight } from 'react-icons/gi'
import { RxRulerHorizontal } from 'react-icons/rx'
import { PiTreeBold } from 'react-icons/pi'
import Button from '../../../components/Button'
import EspecieCircular1 from '../../../assets/InfoAnimals/EspecieCircular1.png'
import EspecieCircular2 from '../../../assets/InfoAnimals/EspecieCircular2.png'
import EspecieCircular3 from '../../../assets/InfoAnimals/EspecieCircular3.png'
import EspecieCircular4 from '../../../assets/InfoAnimals/EspecieCircular4.png'
import EspecieCircular5 from '../../../assets/InfoAnimals/EspecieCircular5.png'
import EspecieCircular6 from '../../../assets/InfoAnimals/EspecieCircular6.png'
import EspecieCircular7 from '../../../assets/InfoAnimals/EspecieCircular7.png'
import EspecieCircular8 from '../../../assets/InfoAnimals/EspecieCircular8.png'
import EspecieCircular9 from '../../../assets/InfoAnimals/EspecieCircular9.png'
import EspecieCircular10 from '../../../assets/InfoAnimals/EspecieCircular10.png'
import EspecieCircular11 from '../../../assets/InfoAnimals/EspecieCircular11.png'
import EspecieCircular12 from '../../../assets/InfoAnimals/EspecieCircular12.png'
import EspecieCircular13 from '../../../assets/InfoAnimals/EspecieCircular13.png'
import EspecieCircular14 from '../../../assets/InfoAnimals/EspecieCircular14.png'

const especiesCirculares = [
  EspecieCircular1,
  EspecieCircular2,
  EspecieCircular3,
  EspecieCircular4,
  EspecieCircular5,
  EspecieCircular6,
  EspecieCircular7,
  EspecieCircular8,
  EspecieCircular9,
  EspecieCircular10,
  EspecieCircular11,
  EspecieCircular12,
  EspecieCircular13,
  EspecieCircular14
].slice().sort(() => Math.random() - 0.5).slice(0, 3)

const InfoAnimalsInfo = ({ Animal, WorldMap1, Amenazas1, Amenazas2, Ayuda1, Ayuda2 }) => {
  return (
    <div className='font-roboto'>
      <img src={Animal} alt='VaquitaMarina' className='object-cover w-screen' />
      <div className='flex bg-infoAnimals text-white justify-center items-center text-sm md:text-lg'>
        <p className=' p-3 w-[250px] mr-2 ml-2 text-center hover:bg-green-900'>Datos</p>
        <p className=' p-3 w-[250px] mr-2 ml-2 text-center hover:bg-green-900'>Amenazas</p>
        <p className=' p-3 w-[250px] mr-2 ml-2 text-center hover:bg-green-900'>¿Cómo puedo ayudar?</p>
      </div>
      <div className='flex justify-center items-center p-[3%]'>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
        <h1 className='text-center p-5 text-4xl font-robotoM'>DATOS</h1>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
      </div>
      <div className='flex flex-col md:flex-row p-[7%] pt-[0%]'>
        <p className='flex-1 text-sm md:text-base'>
          La vaquita marina es una pequeña y escurridiza marsopa que habita en el Golfo de California, México. Conocida por su distintivo aspecto, caracterizado por manchas oscuras alrededor de los ojos y los labios, la vaquita es reconocida como el cetáceo más pequeño del mundo.
          Lamentablemente, también es uno de los mamíferos marinos más amenazados.
          Su comportamiento tímido se manifiesta en su reacción cautelosa ante embarcaciones y otros estímulos externos.
          Con una dieta que probablemente consiste en peces y calamares adaptados a su entorno marino específico, la vaquita se desplaza en grupos pequeños, asociándose con áreas ricas en alimentos.
          Aunque los detalles sobre su comunicación y reproducción son limitados, se cree que utilizan sonidos para la comunicación y que las hembras dan a luz crías.
          La vaquita enfrenta amenazas críticas que la colocan al borde de la extinción. Nuestros esfuerzos de conservación se centran en proteger su hábitat y mitigar las amenazas humanas para garantizar la supervivencia de esta especie única y esquiva.
        </p>
        <div className='flex-1 md:pl-[10%] font-roboto'>
          <div className='flex items-center md:p-2 pt-[10%] md:pt-0'>
            <p className='bg-red-600 rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white'>CR</p>
            <div className='text-red-600'>
              <p className='font-robotoM'>ESTADO</p>
              <p className='text-sm'>Peligro Crítico</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <p className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white'>Aa</p>

            <div>
              <p className='font-robotoM'>NOMBRE CIENTÍFICO</p>
              <p className='text-sm'>Phocoena sinus</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <BiLoaderCircle className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div>
              <p>POBLACIÓN</p>
              <p>Aproximandamente 10 individuos</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <GiWeight className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div>
              <p>PESO</p>
              <p>45 kg</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <RxRulerHorizontal className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div>
              <p>TAMAÑO</p>
              <p>1,5 mts de longitud</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <PiTreeBold className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div>
              <p>HABITAT</p>
              <p>Marino (Golfo de California, México)</p>
            </div>
          </div>
        </div>
      </div>
      <img src={WorldMap1} alt='WorldMap1' className='object-cover min-h-full' />
      <div className='flex justify-center items-center p-[3%]'>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
        <h1 className='text-center p-5 text-xl md:text-4xl font-robotoM'>AMENAZAS</h1>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
      </div>
      <div className='flex'>
        <img src={Amenazas1} alt='Amenazas1' className='w-[215px] md:w-screen h-auto' />
        <img src={Amenazas2} alt='Amenazas2' className='w-[215px] md:w-screen h-auto' />
      </div>
      <p className='text-sm md:text-base text-white font-roboto p-[3%] pl-[7%] pr-[7%] pb-[10%] md:pb-[3%] leading-6 bg-infoAnimals'>La vaquita marina enfrenta una serie de amenazas críticas que ponen en peligro su supervivencia. La principal amenaza es la pesca ilegal de totoaba, donde las vaquitas quedan atrapadas en las redes destinadas a capturar estos peces. Este comercio ilegal, impulsado por la demanda de la vejiga natatoria de totoaba en el mercado asiático, ha llevado a una disminución drástica de la población de vaquitas. Además, la pérdida de hábitat, la contaminación y el riesgo de colisiones con embarcaciones contribuyen a su vulnerabilidad. Aunque se han implementado medidas de conservación, la crítica situación de la vaquita marina destaca la necesidad urgente de acciones coordinadas a nivel nacional e internacional para proteger este pequeño cetáceo y preservar su hábitat único en el Golfo de California
      </p>
      <div className='flex justify-center items-center p-[3%] pb-[0%] pt-[4%]'>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
        <h1 className='text-center p-5 text-xl md:text-4xl font-robotoM'>¿COMO PUEDO AYUDAR?</h1>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
      </div>
      <div className='flex flex-col md:flex-row md:pr-[7%] md:pl-[7%] pb-[0%]'>
        <div className='flex flex-col md:flex-row pb-[7%] md:pt-[7%] md:m-2 md:mr-8'>
          <div className='flex flex-col md:flex-row shadow-md'>
            <div className='flex-2/3 items-center'>
              <h2 className='pl-3 leading-10 md:pb-[8%] pt-2 text-[35px] text-colorFooter font-robotoM'>SÉ PARTE DE LA <span className='text-amber-300'>SOLUCIÓN</span> </h2>
              <p className='p-3'>Opta por un consumo responsable, evitando productos derivados de especies en peligro, y adopta prácticas cotidianas sostenibles, como la reducción del uso de plásticos.</p>
            </div>
            <img src={Ayuda1} alt='Ayuda1' className='flex-1/3' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row pb-[7%] pt-[7%] md:m-2'>
          <div className='flex flex-col md:flex-row shadow-md'>
            <div>
              <p className='p-3'>Juntos, podemos proteger la vida silvestre vulnerable, conservar hábitats vitales y construir un futuro donde las personas vivan en armonía con la naturaleza.</p>
              <Button text='Hacer una donación' color='bg-green-600' hover='hover:bg-green-900' className='p-[15px] text-2xl' />
            </div>
            <img src={Ayuda2} alt='Ayuda2' className='' />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center p-[3%] pt-[0%]'>
        <div className='w-[100px] sm:w-[80px] h-[2px] bg-datos' />
        <h1 className='text-center md:p-5 text-xl md:text-4xl font-robotoM'>OTRAS ESPECIES VULNERABLES</h1>
        <div className='w-[100px] sm:w-[80px] h-[2px] bg-datos' />
      </div>
      <div className='flex justify-center pb-[4%]'>
        {especiesCirculares.map((EspecieCircular, index) =>
          <div className='p-4 ' key={index}>
            <div>
              <img src={EspecieCircular} alt='EspecieCircular1' className='' />
              <h1 className='text-center p-4'>Manatí del Caribe</h1>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default InfoAnimalsInfo
