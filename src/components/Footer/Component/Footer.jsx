import logoWhite from '../../../assets/LogoWhite.png'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoBasketballOutline } from 'react-icons/io5'

export default function Footer () {
  return (
    <div className='absolut bottom-0 left-0 right-0 z-50 flex flex-col md:flex-row w-full bg-colorFooter rounded-tr-[45px] p-2'>
      <div className='md:w-[400px] md:pl-[10%] flex flex-col items-center justify-center md:mr-[10%] flex-1 p-3'>
        <img src={logoWhite} alt='' className='h-auto w-[300px] md:w-[400px] max-w-none' />
        <p className='font-roboto text-center text-white text-sm pt-2'>LATINOAMERICA</p>
      </div>
      <div className='flex flex-col md:flex-row font-thin text-sm flex-auto ml-2 pr-[8%]'>
        <div className='text-white p-5 flex-1 mb-4 md:mb-0 md:mr-4 flex flex-col justify-center md:items-start items-center'>
          <p className='pb-2 font-robotoM text-lg'>Quienes somos</p>
          <p className='pb-2'>Sobre prevención Animal</p>
          <p className='pb-2'>Misión</p>
          <p className='pb-2'>Proyectos</p>
        </div>
        <div className='text-white p-5 flex-1 mb-4 md:mb-0 md:mr-4 flex flex-col justify-center md:items-start items-center'>
          <p className='pb-2 font-robotoM text-lg'>Ayuda</p>
          <p className='pb-2'>Contacto</p>
          <p className='pb-2'>Preguntas frecuentes</p>
          <p className='pb-2'>Políticas de privacidad</p>
        </div>
        <div className='text-white p-5 flex-1 flex flex-col justify-center md:items-start items-center'>
          <p className='pb-2 font-robotoM text-lg'>Mantente informado</p>
          <input className='p-2 w-full rounded-md bg-colorInputFooter' type='text' placeholder='Ingresa tu email' />
          <div className='flex justify-between items-end pt-1'>
            <FaInstagram className='h-[30px] w-auto m-3 border-white bg-green-900 rounded-2xl p-1 text-white' />
            <IoBasketballOutline className='h-[30px] m-3 w-auto border-white bg-green-900 rounded-2xl p-1 text-white' />
            <FaTwitter className='h-[30px] w-auto m-3 border-white bg-green-900 rounded-2xl p-1 text-white' />
            <FaYoutube className='h-[30px] w-auto m-3 border-white bg-green-900 rounded-2xl p-1 text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}
