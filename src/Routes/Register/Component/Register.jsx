import jungle from '../../../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg'
import logo from '../../../assets/Frame 4048.png'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import OtherSesion from '../../../components/OtherSesion'
import { Formik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'muy corto').max(20, 'Que nombre tan largo').required('El nombre es requerido'),
  email: Yup.string().email('El correo no es válido').required('El correo es requerido'),
  password: Yup.string().min(8, 'La contraseña debe contener mínimo 8 caracteres, con al menos 1 de cada: mayúscula, minúscula, número y caracter especial')
    .matches(
      /^(?=.*[a-z])/,
      'Debe contener al menos una letra en minúscula'
    )
    .matches(
      /^(?=.*[A-Z])/,
      'Debe contener al menos una letra en mayúscula'
    )
    .matches(
      /^(?=.*[0-9])/,
      'Debe contener al menos un número'
    )
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      'Debe contener al menos un caracter especial'
    )
    .required('La contraseña es requerida')
  // passwordConfirmation: Yup.string()
  //    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const initialValues = {
  name: '',
  email: '',
  password: ''
  // passwordConfirmation: ''
}

export default function Register () {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className='flex'>
      {/* form section */}
      <section className='w-1/2 flex flex-col items-center justify-center p-2.5 gap-2.5 h-auto mt-8'>
        <div className='flex flex-col justify-center  shadow-md rounded px-8 pt-6 pb-8 mb-4 font-display '>
          <img src={logo} alt='' className='w-80 h-7 mt-6 ' />
          <h2 className='text-3xl font-light leading-10 mt-6 text-center'>
            Bienvenido
          </h2>

          <div className='w-full max-w-xs'>
            {/* beginning of the form */}
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
              {({ errors, touched, handleBlur, handleSubmit }) => (
                <form className=' rounded px-8 pt-6 pb-7 mb-4' onSubmit={handleSubmit}>
                  {/* name input */}
                  <Input
                    name='Nombre'
                    text='20 caracteres maximo y se permiten caracteres especiales'
                    type='text'
                    placeholder='Juanito'
                    id='name'
                    errors={errors}
                  />
                  {/* email input */}
                  <Input
                    name='Correo electrónico'
                    text=''
                    type='email'
                    placeholder='juanito@gmail.com'
                    id='email'
                    errors={errors}
                  />
                  {/* password input */}
                  <Input
                    name='Contraseña'
                    text='Mín 8 caracteres, debe contener al menos una mayúscula, debe
                contener al menos un número'
                    type='password'
                    placeholder='******************'
                    id='password'
                    errors={errors}
                  />
                  {/* submit button input */}
                  <Button
                    text='Registrarme'
                    color='bg-green-600'
                    colorHover='hover:bg-green-900'
                  />
                </form>
              )}
            </Formik>
          </div>
          {/* horizontal rule */}
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
      <section className='w-1/2 '>
        <img
          src={jungle}
          alt='jungla'
          className='object-fill w-screen h-full'
        />
      </section>
    </div>
  )
}
