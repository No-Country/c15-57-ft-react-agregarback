import jungle from '../../../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg'
import logo from '../../../assets/Frame 4048.png'
import ResetPasswordComponent from '../Component/ResetPassword' // Importa el componente del formulario aquí

export default function ResetPassword () {
  return (
    <div className='flex'>
      {/* Sección del formulario utilizando FormularioComponent */}
      <section className='w-1/2 flex flex-col items-center justify-center p-2.5 gap-2.5 h-[690px] mt-8'>
        <div className='flex flex-col justify-center px-8 pt-6 pb-8 mb-4'>
          <img src={logo} alt='' className='w-80 h-7 mt-6 ' />
          <h2 className='font-display text-3xl font-normal mt-6 text-center'>Bienvenido</h2>
          <div className='w-full max-w-xs'>
            <ResetPasswordComponent />
          </div>
        </div>
      </section>
      {/* Sección de la imagen */}
      <section className='w-1/2 '>
        <img src={jungle} alt='jungla' className='h-full object-fill' />
      </section>
    </div>
  )
};
