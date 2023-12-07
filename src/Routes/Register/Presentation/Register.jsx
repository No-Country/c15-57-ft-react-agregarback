import jungle from '../../../assets/jaguarete.jpg'
import logo from '../../../assets/logo.png'
import { OtherSesion } from '../../../components'
import FormularioComponent from '../Component/Register' // Importa el componente del formulario aquí

export default function Register () {
  return (
    <div className='relative'>
      <div className='flex flex-col lg:flex-row'>
        {/* Sección del formulario utilizando FormularioComponent */}
        <section className='lg:w-1/2 flex flex-col items-center justify-center ml-5 lg:ml-0 mr-5 lg:mr-0  p-2.5 gap-2.5 h-auto mt-8 mb-8 bg-gray-100 lg:bg-none bg-opacity-60 lg:bg-opacity-0 rounded-xl'>
          <div className='flex flex-col justify-center px-8 pt-6 pb-8 mb-4'>
            <img src={logo} alt='' className='w-80 h-7 mt-6' />
            <h2 className='font-display text-3xl font-normal mt-6 text-center'>Bienvenido</h2>
            <div className='w-full max-w-xs'>
              <FormularioComponent />
            </div>
            {/* Otros elementos del formulario */}
            <div className='flex justify-center items-center pb-5'>
              <hr className='w-3/5' />
              <span className='w-1/5 text-center bg-white mt-5 mb-5'> o</span>
              <hr className='w-3/5' />
            </div>
            <OtherSesion text='Iniciar sesión' to='/login' />
          </div>
        </section>
        {/* Sección de la imagen */}
        <section className='lg:w-1/2 order-2 lg:order-1 absolute lg:relative lg:none top-0 left-0 w-full lg:h-auto h-full lg:z-0 z-[-10]'>
          <img src={jungle} alt='jungla' className='h-full object-fill rounded-none' />
        </section>
      </div>
    </div>
  )
};
