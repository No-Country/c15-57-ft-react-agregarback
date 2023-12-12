import logoWhite from '../../../assets/LogoWhite.png'

import { FaInstagram } from 'react-icons/fa6'
import { FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoBasketballOutline } from 'react-icons/io5'

export default function Footer () {
  return (
    <div className='flex flex-row h-full mt-5 p-5 w-full absolut bg-colorFooter rounded-tr-[45px]'>
      <div className='w-[400px] pt-5 pr-5 pl-10 flex flex-col items-center'>
        <img src={logoWhite} alt='' className='h-auto w-[300px] ' />
        <p className='font-roboto text-center text-white text-sm pt-2'>LATINOAMERICA</p>
        <div className='flex justify-center m-4'>
          <FaInstagram className='h-[30px] w-auto m-2 border-white bg-green-900 rounded-2xl p-1 text-white' />
          <IoBasketballOutline className='h-[30px] m-2 w-auto border-white bg-green-900 rounded-2xl p-1 text-white' />
          <FaTwitter className='h-[30px] w-auto m-2 border-white bg-green-900 rounded-2xl p-1 text-white' />
          <FaYoutube className='h-[30px] w-auto m-2 border-white bg-green-900 rounded-2xl p-1 text-white' />
        </div>

      </div>
      <div className='xl:flex absolute  flex-row hidden pl-[200px] font-thin text-sm'>
        <div className='text-white p-5'>
          <p className='pb-2 font-robotoM text-lg'>Quienes somos</p>
          <p className='pb-2'>Sobre prevención Animal</p>
          <p className='pb-2'>Misión</p>
          <p className='pb-2'>Proyectos</p>
        </div>
        <div className='text-white p-5 '>
          <p className='pb-2 font-robotoM text-lg'>Ayuda</p>
          <p className='pb-2'>Contacto</p>
          <p className='pb-2'>Preguntas frecuentes</p>
          <p className='pb-2'>Políticas de privacidad</p>
        </div>
        <div className='text-white p-5'>
          <p className='pb-2 font-robotoM text-lg'>Mantente informado</p>
        </div>
      </div>

    </div>
  )
}
