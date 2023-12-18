import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { SubtitleInfoStore } from '../../../components'
import { map, monkey, certificate } from '../../../assets/who-we-are/index'

const WhoWeAreInfo = () => {
  return (
    <>
      <div className='w-full flex justify-center md:hidden'>
        <SubtitleInfoStore link='/' title='Perfil' />
      </div>
      <section className='my-[44px] w-[95%] flex flex-col items-center md:flex-row md:w-full md:h-auto md:my-0 box-border'>
        <div className='md:w-[50%] h-full flex flex-col items-center md:my-[20px] md:h-full md:mx-[5%]'>
          <h1 className='text-yellow-300 font-robotoM text-3xl font-black mb-6 w-[90%] md:text-5xl'>
            QUIENES SOMOS
          </h1>
          <p className='w-[90%] font-robotoL text-[1rem] md:text-[1.2rem] '>
            Preservación Animal es una organización internacional de  protección animal que trabaja en países de Americe Latina  para reducir la extinción de los animales y sus hábitats. Con un programa abierto de donaciones para proyectos a favor de la conservación ambiental y de animales.
            <br />
          </p>
          <div className='w-[60%] mt-6 flex flex-col items-center border-[1px] border-slate-200 rounded py-2 px-3 md:w-[65%]'>
            <FaQuoteLeft className='text-gray-300 text-xl self-start' />
            <p className='font-robotoL w-4/5 text-[0.7rem] italic text-center mt-3 md:text-[0.9rem] md:w-[75%]'>
              Los animales no son propiedades o cosas, sino organimdos vivientes, sujetos de una vida, que merecen nuestra compasión, respeto, amistad y apoyo.
            </p>
            <hr className='w-[50%] mt-2 mb-3' />
            <FaQuoteRight className='text-gray-300 text-xl self-end' />
            <p className='font-robotoM text-[0.7rem] italic text-center md:text-[0.9rem]'>
              (Marc Bekoff)
            </p>
          </div>
        </div>
        <figure className='w-1/2  md:h-[758px] lg:h-[608px]  hidden md:block'>
          <img src={monkey} alt='mono araña' className=' h-full object-cover object-center' />
        </figure>
      </section>
      <section className='bg-yellow-300 flex flex-col w-full items-center text-center md:py-[70px]'>
        <h2 className='font-robotoM text-xl font-black text-center my-8 w-[90%] md:mt-0 '>
          CREADO EN LATINOAMERICA, PARA LATINOAMERICA
        </h2>
        <img src={map} alt='mapa de centro y sur América' className='w-[90%] mb-8 md:w-1/2' />
        <div className='flex flex-col items-center md:flex-row md:items-start md:gap-7'>
          <div className='flex flex-col items-center'>
            <h3 className='text-white font-roboto text-[1.7rem] font-extrabold md:text-5xl md:py-2'>9</h3>
            <p className='font-robotoL text-[0.9rem] w-1/2 mb-3 md:w-[60%] md:mb-0'>
              Operando en 9 paises
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-white font-roboto text-[1.7rem] font-extrabold md:text-5xl md:py-2'>60</h3>
            <p className='font-robotoL text-[0.9rem] w-[65%] mb-3  md:mb-0'>
              Fuentes defensores en el equipo
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-white font-roboto text-[1.7rem] font-extrabold md:text-5xl md:py-2'>10.000+</h3>
            <p className='mb-8 font-robotoL text-[0.9rem] w-[65%] md:w-[70%] md:mb-0'>
              Donaciones en todo el mundo
            </p>
          </div>
        </div>
      </section>
      <section className='my-[54px] w-[90%] flex flex-col items-center md:flex-row md:justify-center md:gap-28'>
        <div className='md:w-[30%]'>
          <h2 className='font-robotoM text-lg font-black mb-3 text-itemTitle'>
            HEMOS SIDO CALIFICADOS COMO UNA DE LAS ONG MÁS EFECTIVAS DEL MUNDO
          </h2>
          <p className='font-robotoL text-[0.8rem] mb-8'>
            2023 es el quinto año consecutivo en el que Animal
            Charity Evaluators (ACE) reconoce a Preservación
            Animmal como una de las ONG de protección animal
            más efectivas del mundo
          </p>
        </div>
        <img src={certificate} alt='logo certificado' className='md:w-1/4 md:h-1/4' />
      </section>
    </>
  )
}

export default WhoWeAreInfo
