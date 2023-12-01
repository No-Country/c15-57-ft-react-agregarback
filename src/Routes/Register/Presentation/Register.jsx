import jungle from '../../../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg'
import logo from '../../../assets/Frame 4048.png'
import { OtherSesion } from '../../../components'
import FormularioComponent from '../Component/Register' // Importa el componente del formulario aquí

export default function Register () {
  // const { formSend, handleSubmit, validateForm } = useFormValidation()

  return (
    <div className='flex'>
      {/* Sección del formulario utilizando FormularioComponent */}
      <section className='w-1/2 flex flex-col items-center justify-center p-2.5 gap-2.5 h-auto mt-8'>
        <div className='flex flex-col justify-center px-8 pt-6 pb-8 mb-4 font-display'>
          <img src={logo} alt='' className='w-80 h-7 mt-6' />
          <h2 className='text-3xl font-normal leading-10 mt-6 text-center'>Bienvenido</h2>
          <div className='w-full max-w-xs'>
            <FormularioComponent />
          </div>
          {/* Otros elementos del formulario */}
          <div className='flex justify-center items-center'>
            <hr className='w-2/5' />
            <span className='w-1/5 text-center'> o</span>
            <hr className='w-2/5' />
          </div>
          <OtherSesion />
        </div>
      </section>
      {/* Sección de la imagen */}
      <section className='w-1/2 '>
        <img src={jungle} alt='jungla' className='object-fill w-screen h-full' />
      </section>
    </div>
  )
};
