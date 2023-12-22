import jungle from '../../../assets/jaguarete.jpg'
import jungleMobile from '../../../assets/jaguarete2.jpg'
import logo from '../../../assets/logo.png'
import ResetPasswordComponent from '../Presentation/ResetPassword' // Importa el componente del formulario aquí
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function ResetPassword () {
  return (
    <div className='relative'>
      <div className='flex flex-col lg:flex-row'>
        {/* Sección del formulario utilizando FormularioComponent */}
        <section className='lg:w-1/2 flex flex-col items-center justify-center ml-5 lg:ml-0 mr-5 lg:mr-0  p-2.5 gap-2.5 h-auto mt-8 mb-8 bg-gray-100 lg:bg-none bg-opacity-60 lg:bg-opacity-0 rounded-xl'>
          <div className='flex flex-col justify-center px-8 pt-6 mb-4'>
            <Link to='/login'>
              <FaArrowLeft className='static ml-[-5%] sm:ml-[-40%] md:ml-[-20%] md:absolute  lg:ml-[5%] lg:left-0 lg:top-8 text-[40px]' />
            </Link>
            <img src={logo} alt='' className='w-80 h-7 mt-6 ' />
            <h2 className='font-roboto text-3xl mt-6 mb-2 text-center'>Bienvenido</h2>
            <div className='w-full h-[500px] max-w-xs'>
              <ResetPasswordComponent />
            </div>
          </div>
        </section>
        {/* Sección de la imagen */}
        <section className='lg:w-1/2 order-2 lg:order-1 absolute lg:static lg:none top-0 left-0 w-full lg:h-auto h-full lg:z-0 z-[-10]'>
          <img src={jungleMobile} alt='jungla2' className='lg:hidden block h-full w-full object-cover rounded-none' />
          <img src={jungle} alt='jungla' className='hidden lg:block h-full object-fill rounded-none' />
        </section>
      </div>
    </div>
  )
};
