import { BiLoaderCircle } from 'react-icons/bi'
import { GiWeight } from 'react-icons/gi'
import { RxRulerHorizontal } from 'react-icons/rx'
import { PiTreeBold } from 'react-icons/pi'
import { useRef, useEffect, useState } from 'react'
import Button from '../../../components/Button'
import EspecieCircular1 from '../../../assets/InfoAnimals/EspecieCircular1.png'
import EspecieCircular2 from '../../../assets/InfoAnimals/EspecieCircular2.png'
import EspecieCircular3 from '../../../assets/InfoAnimals/EspecieCircular3.png'
import EspecieCircular4 from '../../../assets/InfoAnimals/EspecieCircular4.png'
import EspecieCircular5 from '../../../assets/InfoAnimals/EspecieCircular5.png'
import EspecieCircular7 from '../../../assets/InfoAnimals/EspecieCircular7.png'
import EspecieCircular8 from '../../../assets/InfoAnimals/EspecieCircular8.png'
import EspecieCircular9 from '../../../assets/InfoAnimals/EspecieCircular9.png'
import EspecieCircular10 from '../../../assets/InfoAnimals/EspecieCircular10.png'
import EspecieCircular11 from '../../../assets/InfoAnimals/EspecieCircular11.png'
import EspecieCircular12 from '../../../assets/InfoAnimals/EspecieCircular12.png'
import EspecieCircular13 from '../../../assets/InfoAnimals/EspecieCircular13.png'
import EspecieCircular14 from '../../../assets/InfoAnimals/EspecieCircular14.png'
import { Link } from 'react-router-dom'

const InfoAnimalsInfo = ({ Animal, WorldMap1, Amenazas1, Amenazas2, Ayuda1, Ayuda2, Texto1, Logo1, Texto2, Texto3, Texto4, Texto5, Texto6, Texto7, Texto8 }) => {
  const [especiesCirculares, setEspeciesCirculares] = useState([])
  const datosRef = useRef(null)
  const amenazasRef = useRef(null)
  const ayudaRef = useRef(null)
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    setEspeciesCirculares([
      { img: EspecieCircular1, name: 'manati' },
      { img: EspecieCircular2, name: 'tortuga' },
      { img: EspecieCircular3, name: 'ajolote' },
      { img: EspecieCircular4, name: 'oso' },
      { img: EspecieCircular5, name: 'mono' },
      { img: EspecieCircular7, name: 'guara' },
      { img: EspecieCircular8, name: 'tapir' },
      { img: EspecieCircular9, name: 'huemul' },
      { img: EspecieCircular10, name: 'tatu' },
      { img: EspecieCircular11, name: 'cardenal' },
      { img: EspecieCircular12, name: 'hormiguero' },
      { img: EspecieCircular13, name: 'vaquitaMarina' },
      { img: EspecieCircular14, name: 'jaguar' }
    ].slice().sort(() => Math.random() - 0.5).slice(0, 3))
  }, [Animal])

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15)
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
      }
    }, 20)
  }

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className='font-roboto'>
      <img src={Animal} alt='VaquitaMarina' className='object-cover w-screen' />
      <div className='flex bg-infoAnimals text-white justify-center items-center text-sm md:text-lg sticky  w-full top-0'>
        <p className='p-3 w-[250px] mr-2 ml-2 text-center hover:bg-green-900' onClick={() => scrollToRef(datosRef)}>
          Datos
        </p>
        <p className='p-3 w-[250px] mr-2 ml-2 text-center hover:bg-green-900' onClick={() => scrollToRef(amenazasRef)}>
          Amenazas
        </p>
        <p className='p-3 w-[250px] mr-2 ml-2 text-center hover:bg-green-900' onClick={() => scrollToRef(ayudaRef)}>
          ¿Cómo puedo ayudar?
        </p>
      </div>
      <div className=' mt-[10%] md:mt-[0%] flex justify-center items-center p-[3%]' ref={datosRef} id='datosSection'>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
        <h1 className='text-center p-5 text-4xl font-robotoM'>DATOS</h1>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
      </div>
      <div className='flex flex-col md:flex-row p-[7%] pt-[0%]'>
        <p className='flex-1 text-sm md:text-base'>
          {Texto1}
        </p>
        <div className='flex-1 md:pl-[20%] font-roboto'>
          <div className='flex items-center md:p-2 pt-[10%] md:pt-0'>
            <p className='bg-red-600 rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white'>{Logo1}</p>
            <div className='text-red-600 md:pl-5'>
              <p className='font-robotoM'>ESTADO</p>
              <p className='text-sm'>{Texto2}</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <p className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white'>Aa</p>

            <div className='md:pl-5'>
              <p className='font-robotoM'>NOMBRE CIENTÍFICO</p>
              <p className='text-sm'>{Texto3}</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <BiLoaderCircle className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div className='md:pl-5'>
              <p>POBLACIÓN</p>
              <p>{Texto4}</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <GiWeight className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div className='md:pl-5'>
              <p>PESO</p>
              <p>{Texto5}</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <RxRulerHorizontal className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div className='md:pl-5'>
              <p>TAMAÑO</p>
              <p>{Texto6}</p>
            </div>
          </div>
          <div className='flex items-center text-colorFooter md:p-2 pt-[3%] md:pt-0'>
            <PiTreeBold className='bg-colorFooter rounded-full mr-5 p-3 md:m-1 w-[53px] h-[53px] text-center content-center text-xl text-white' />
            <div className='md:pl-5'>
              <p>HABITAT</p>
              <p>{Texto7}</p>
            </div>
          </div>
        </div>
      </div>
      <img src={WorldMap1} alt='WorldMap1' className='object-cover w-full min-h-full' />
      <div className='flex justify-center items-center p-[3%]' ref={amenazasRef} id='amenazasSection'>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
        <h1 className='text-center p-5 text-xl md:text-4xl font-robotoM'>AMENAZAS</h1>
        <div className='w-[60px] sm:w-[120px] h-[2px] bg-datos' />
      </div>
      <div className='flex'>
        <img src={Amenazas1} alt='Amenazas1' className='w-[215px] md:w-screen h-auto' />
        <img src={Amenazas2} alt='Amenazas2' className='w-[215px] md:w-screen h-auto' />
      </div>
      <p className='text-sm md:text-base text-white font-roboto p-[3%] pl-[7%] pr-[7%] pb-[10%] md:pb-[3%] leading-6 bg-infoAnimals'>{Texto8}
      </p>
      <div className='flex justify-center items-center p-[3%] pb-[0%] pt-[4%]' ref={ayudaRef} id='ayudaSection'>
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
              <Button to='/donations' text='Hacer una donación' color='bg-green-600' hover='hover:bg-green-900' className='p-[15px] text-2xl' />
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
      <div className='flex justify-center pb-[6%]'>
        {especiesCirculares.map((EspecieCircular, index) =>
          <div className='p-4 ' key={index}>
            <Link onClick={() => scrollToTop()} to={`/Animals/${EspecieCircular.name}`}>
              <img src={EspecieCircular.img} alt='EspecieCircular1' className='' />
              {/* <h1 className='text-center p-4'>Manatí del Caribe</h1> */}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfoAnimalsInfo
