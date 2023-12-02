import jungle from '../../../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg'
import logo from '../../../assets/Frame 4048.png'
import { OtherSesion } from '../../../components'
import FormularioComponent from '../Component/Register' // Importa el componente del formulario aquí

export default function Register () {
  // const { formSend, handleSubmit, validateForm } = useFormValidation()

  return (
    <div className='flex'>
      {/* Sección del formulario utilizando FormularioComponent */}
      <section className='w-1/2 flex flex-col items-center justify-center gap-2 h-[100dvh] mt-2'>
        <div className='flex flex-col justify-center px-2 pt-6 pb-8 mb-2 font-display'>
          <img src={logo} alt='' className='w-80 h-7 mt-2' />
          <h2 className='text-3xl font-normal leading-10 mt-4 text-center'>Bienvenido</h2>
          <div className='w-full max-w-xs'>
            <FormularioComponent />
          </div>
          {/* Otros elementos del formulario */}
          <div className='flex justify-center items-center'>
            <hr className='w-2/5' />
            <span className='w-1/5 text-center'> o</span>
            <hr className='w-2/5' />
          </div>
          <OtherSesion text='Iniciar sesión' to='/login' />
        </div>
      </section>
      {/* Sección de la imagen */}
      <section className='w-1/2 '>
        <img src={jungle} alt='jungla' className='object-fill w-screen h-[100dvh]' />
      </section>
    </div>
  )
};
