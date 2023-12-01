import jungle from '../../../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg'
import logo from '../../../assets/Frame 4048.png'
import { Button, OtherSesion } from '../../../components/'
import { Formik, Form } from 'formik'
import { useFormValidation } from '../Component/Register' // Importa tu hook aquí

export default function Register () {
  const { formSend, handleSubmit, validateForm } = useFormValidation()

  return (
    <div className='flex'>
      {/* form section */}
      <section className='w-1/2 flex flex-col items-center justify-center p-2.5 gap-2.5 h-auto mt-8'>
        <div className='flex flex-col justify-center px-8 pt-6 pb-8 mb-4'>
          <img src={logo} alt='' className='w-80 h-7 mt-6 ' />
          <h2 className='font-display text-3xl font-light leading-10 mt-6 text-center'>
            Bienvenido
          </h2>

          <div className='w-full max-w-xs'>
            <Formik
              initialValues={{
                name: '',
                email: ''
              }}
              validate={validateForm}
              onSubmit={(values, { resetForm }) =>
                handleSubmit(values, resetForm)}
            >
              {({ errors }) => (
                <Form className='rounded px-8 pt-6 pb-7 mb-4'>
                  {/* Rest of the form inputs */}
                  {/* ... */}
                  <Button
                    text='Registrarme'
                    color='bg-green-600'
                    colorHover='hover:bg-green-900'
                  />
                  {formSend && (
                    <p className=''>Formulario enviado con éxito!</p>
                  )}
                </Form>
              )}
            </Formik>
          </div>

          {/* horizontal role */}
          <div className='flex justify-center items-center'>
            <hr className='w-2/5' />
            <span className='w-1/5 text-center'> o</span>
            <hr className='w-2/5' />
          </div>

          {/* other options to register */}
          <OtherSesion />
        </div>
      </section>

      {/* main image section */}
      <section className='w-1/2'>
        <img
          src={jungle}
          alt='jungla'
          className='object-fill w-screen h-full'
        />
      </section>
    </div>
  )
}
