import { Formik, Form } from 'formik'
import { InputPassword, Input, Button } from '../../../components/'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'

const ResetPasswordComponent = () => {
  const [userEmail, setUserEmail] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState('')
  const [recoverPassword, setRecoverPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorAnswer, setErrorAnswer] = useState('')

  const onSubmitPassword = async (values) => {
    try {
      const response = await axios.post('/api/users/check-question', values)
      setUserEmail(values.email)
      setErrorEmail('')
      if (response.data.error) {
        setErrorEmail('password', { message: response.data.error })
      } else {
        setSelectedQuestion(response.data.question)
      }
    } catch (error) {
      if (error.response.status === 400 && error.response.data.error === 'Correo o contraseña invalida') {
        setErrorEmail('Error dato no encontrado')
      } else {
        setErrorEmail('Error correo no encontrado')
      }
    }
  }

  const handleFindPassword = async (values) => {
    try {
      const secretPasswordResponse = await axios.post('/api/users/find-password', values)
      setErrorAnswer('')
      if (secretPasswordResponse.data.password) {
        setRecoverPassword(secretPasswordResponse.data.password)
      } else {
        setErrorAnswer('No se encontró la pregunta secreta para este usuario')
        setRecoverPassword('')
      }
    } catch (error) {
      setErrorAnswer('Error al revisar la pregunta secreta')
      setRecoverPassword('')
    }
  }
  const validationSchemaEmail = Yup.object().shape({
    email: Yup.string().email('El correo no es válido').required('El correo es requerido')
  })
  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    answer: Yup.string().required('La respuesta es requerida')
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword) // Cambia el estado para mostrar u ocultar la contraseña
  }

  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchemaEmail}
        onSubmit={onSubmitPassword}
      >
        {({ errors, values, handleChange }) => (
          <Form className='rounded pt-6'>
            {/* Campos del formulario */}
            <Input name='Correo electrónico' onChange={handleChange} type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' value={values.email} />
            {!userEmail && <Button text='Buscar Pregunta secreta' color='bg-green-600' hover='hover:bg-green-900' />}
            {errorEmail && <p className='text-red-600 text-xs italic text-center'>{errorEmail}</p>}
          </Form>
        )}
      </Formik>
      {userEmail &&
        <Formik
          initialValues={{ email: userEmail, answer: '' }}
          validationSchema={validationSchema}
          onSubmit={handleFindPassword}
        >
          {({ errors, values, handleChange }) => (
            <Form className='rounded pt-2 pb-5'>
              <div className='mb-3 h-[90px]'>
                <p className='block text-gray-700 text-sm mb-2'>Pregunta secreta</p>
                <select name='preguntaSecreta' onChange={handleChange} className='shadow appearance-none border rounded w-full py-3 px-3 leading-tight' value={selectedQuestion}>
                  <option value=''>Seleccione una pregunta secreta</option>
                  <option value='opcion1'>¿Cuál es el nombre de tu mascota?</option>
                  <option value='opcion2'>¿En qué ciudad naciste?</option>
                  <option value='opcion3'>¿Cuál es tu comida favorita?</option>
                </select>
              </div>
              <Input name='Respuesta secreta' onChange={handleChange} type='text' placeholder='Ingrese respuesta secreta' errors={errors} id='answer' value={values.answer} />
              {recoverPassword && <InputPassword name='Password recuperado' placeholder='Password a recuperar' onChange={handleChange} id='password' value={recoverPassword} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />}
              {/* Botón de envío del formulario */}
              <Button text='Recuperar Contraseña' color='bg-green-600' hover='hover:bg-green-900' />
              {errorAnswer && <p className='text-red-600 text-xs italic text-center'>{errorAnswer}</p>}
            </Form>
          )}
        </Formik>}
    </>
  )
}

export default ResetPasswordComponent