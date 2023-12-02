import { Input, Button } from '../../../components/'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const FormularioComponent = () => {
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (values) => {
    console.log(values)
  }
  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    email: Yup.string().email('El correo no es válido').required('El correo es requerido'),
    password: Yup.string().min(8, 'La contraseña debe tener mínimo 8 caracteres')
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
        /^(?=.*[!@#/$%/^&/*])/,
        'Debe contener al menos un caracter especial'
      )
      .required('La contraseña es requerida')
  })

  const initialValues = {
    // Definir los valores iniciales del formulario
    name: '',
    email: '',
    password: ''
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword) // Cambia el estado para mostrar u ocultar la contraseña
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors }) => (
        <Form className='rounded pt-6 pb-5'>
          {/* Campos del formulario */}
          <Input name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' />
          <div className='relative'>
            <Input name='Contraseña' type={showPassword ? 'text' : 'password'} placeholder='Ingrese contraseña' id='password' />
            <span
              className='absolute right-5 text-neutral-600 top-[70%] transform -translate-y-1/2 cursor-pointer'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Botón de envío del formulario */}
          <Button text='Registrarme' color='bg-green-600' hover='hover:bg-green-900' />
        </Form>
      )}
    </Formik>
  )
}

export default FormularioComponent
