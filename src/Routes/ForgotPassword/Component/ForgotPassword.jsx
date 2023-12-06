import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'

const ResetPasswordComponent = () => {
  const [message, setMessage] = useState('')

  const handleResetPassword = async (values) => {
    try {
      const response = await axios.put('/reset-password', {
        email: values.email,
        newPassword: values.password
      })
      setMessage(response.data.message)
    } catch (error) {
      setMessage('Error al cambiar la contraseña')
    }
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

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleResetPassword(values)
        setSubmitting(false)
      }}
    >
      {({ errors, values, isSubmitting, handleChange }) => (
        <Form className='rounded pt-6 pb-5'>
          {/* Campos del formulario */}
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            placeholder='Ingrese correo electrónico'
          />
          <ErrorMessage name='email' component='div' className='text-red-600 text-xs italic' />

          <input
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
            placeholder='Ingrese contraseña nueva'
          />
          <ErrorMessage name='password' component='div' className='text-red-600 text-xs italic' />

          {/* Botón de envío del formulario */}
          <button type='submit' disabled={isSubmitting}>
            Cambiar contraseña
          </button>
          {message && <p className='text-red-600 text-xs italic text-center'>{message}</p>}
        </Form>
      )}
    </Formik>
  )
}

export default ResetPasswordComponent
