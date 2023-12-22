import logoWhite from '../../../assets/LogoWhite.png'
import { FaInstagram, FaTwitter, FaYoutube, FaArrowRight } from 'react-icons/fa'
import { IoBasketballOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <div className='absolut bottom-0 left-0 right-0 z-50 flex flex-col md:flex-row w-full bg-colorFooter p-2'>
      <div className='md:w-[400px] md:pl-[10%] flex flex-col items-center justify-center md:mr-[6%] flex-1 p-3'>
        <Link to='/'>
          <img src={logoWhite} alt='' className='h-auto w-[200px] md:w-[400px] max-w-none' />
          <p className='font-roboto text-center text-white text-[13px] md:text-sm pt-2'>LATINOAMERICA</p>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row font-thin text-[11px] md:text-[14px] md:pr-[7%] md:ml-[3%] mr'>
        <div className='flex md:flex-auto'>
          <div className='text-white md:pt-5 md:pb-5 pr-5 pl-5 p-2 flex-1 md:mb-0 md:mr-4 flex flex-col justify-center items-start'>
            <Link to='/WhoWeAre' className='pb-2 font-robotoM text-[15px] md:text-lg'>¿Quiénes somos?</Link>
            <p className='pb-2'>Sobre prevención Animal</p>
            <p className='pb-2'>Misión</p>
            <p className='pb-2'>Proyectos</p>
          </div>
          <div className='text-white md:p-5 pr-5 pl-5 p-2 flex-1 md:mb-0 md:mr-4 flex flex-col justify-center items-start'>
            <p className='pb-2 font-robotoM text-[15px] md:text-lg'>Ayuda</p>
            <p className='pb-2'>Contacto</p>
            <p className='pb-2'>Preguntas frecuentes</p>
            <p className='pb-2'>Políticas de privacidad</p>
          </div>
        </div>
        <div className='text-white md:p-5 flex-1 flex flex-col justify-center md:items-center items-center md:w-[400px]'>
          <p className='pb-2 font-robotoM text-[13px] md:text-lg'>Mantente informado</p>
          <div className='relative'>
            <input
              className='p-2 pl-8 w-full rounded-md bg-colorInputFooter text-white'
              type='text'
              placeholder='Ingresa tu email'
            />
            <div className='absolute inset-y-0 left-2 flex items-center pointer-pointer'>
              <FaArrowRight className='text-white cursor-pointer' />
            </div>
          </div>
          <div className='flex justify-between items-end pt-1'>
            <Link to='https://www.instagram.com'>
              <FaInstagram className='h-[30px] w-auto m-3 border-white bg-green-900 rounded-2xl p-1 text-white' />
            </Link>
            <IoBasketballOutline className='h-[30px] m-3 w-auto border-white bg-green-900 rounded-2xl p-1 text-white' />
            <Link to='https://www.twitter.com'>
              <FaTwitter className='h-[30px] w-auto m-3 border-white bg-green-900 rounded-2xl p-1 text-white' />
            </Link>
            <Link>
              <FaYoutube to='https://www.youtube.com' className='h-[30px] w-auto m-3 border-white bg-green-900 rounded-2xl p-1 text-white' />
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}
