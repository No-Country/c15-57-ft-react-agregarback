import { Formik, Form } from 'formik'
import { InputPassword, Input, Button } from '../../../components/'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'

const ResetPasswordComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [selectedQuestion, setSelectedQuestion] = useState('')

  const handleResetPassword = async (values) => {
    try {
      // Hacer una solicitud para obtener la pregunta secreta asociada al correo electrónico
      const secretQuestionResponse = await axios.get(`/api/users/${values.email}`)

      // Verificar si se encontró la pregunta secreta y configurarla en el estado
      if (secretQuestionResponse.data.question) {
        setSelectedQuestion(secretQuestionResponse.data.question)
      } else {
        setMessage('No se encontró la pregunta secreta para este usuario')
        return
      }
      // Validar la respuesta secreta
      if (values.answer === secretQuestionResponse.data.answer) {
        // Si la respuesta es correcta, mostrar la contraseña guardada
        setMessage(`Tu contraseña es: ${secretQuestionResponse.data.password}`)
      } else {
        setMessage('La respuesta secreta no coincide')
      }
    } catch (error) {
      setMessage('Error al recuperar la contraseña')
    }
  }

  const handleFindSecretQuestion = async (values) => {
    try {
      const secretQuestionResponse = await axios.get(`/api/users/${values.email}`)

      if (secretQuestionResponse.data.question) {
        setSelectedQuestion(secretQuestionResponse.data.question)
      } else {
        setMessage('No se encontró la pregunta secreta para este usuario')
      }
    } catch (error) {
      setMessage('Error al recuperar la pregunta secreta')
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword) // Cambia el estado para mostrar u ocultar la contraseña
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', answer: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleResetPassword(values)
        setSubmitting(false)
      }}
    >
      {({ errors, values, isSubmitting, handleChange }) => (
        <Form className='rounded pt-6 pb-5'>
          {/* Campos del formulario */}
          <Input name='Correo electrónico' onChange={handleChange} type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' value={values.email} />
          <Button disabled={isSubmitting} onClick={() => handleFindSecretQuestion(values)} text='Buscar Pregunta secreta' color='bg-green-600' hover='hover:bg-green-900' />

          <Input name='Pregunta secreta' value={selectedQuestion} type='email' placeholder='Pregunta secreta' errors={errors} id='question' />

          <Input name='Respuesta secreta' onChange={handleChange} type='text' placeholder='Ingrese respuesta secreta' errors={errors} id='answer' value={values.answer} />
          <InputPassword name='Password recuperado' placeholder='Password a recuperar' onChange={handleChange} id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
          {/* Botón de envío del formulario */}
          <Button disabled={isSubmitting} text='Cambiar Contraseña' color='bg-green-600' hover='hover:bg-green-900' />

          {message && <p className='text-red-600 text-xs italic text-center'>{message}</p>}
        </Form>
      )}
    </Formik>
  )
}

export default ResetPasswordComponent
