import { Input, Button, InputPassword } from '../../../components/'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'

const FormularioComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [selectedQuestion, setSelectedQuestion] = useState('')

  // Manejar el post del API
  const onSubmit = async (values) => {
    const newUser = {
      ...values,
      question: selectedQuestion
    }
    try {
      await axios.post('/api/users/', newUser)
      setError('')
    } catch (error) {
      if (error.response.status === 400 && error.response.data.error === 'El correo ya está registrado') {
        setError('El correo ya está registrado. Por favor use uno distinto.')
      } else {
        setError('Error al registrar usuario')
      }
    }
  }

  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    name: Yup.string().min(2, 'muy corto').max(20, 'Que nombre tan largo').required('El nombre es requerido'),
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
      .required('La contraseña es requerida'),
    answer: Yup.string().required('La respuesta secreta es requerida')
  })

  const initialValues = {
    // Definir los valores iniciales del formulario
    id: crypto.randomUUID(),
    name: '',
    email: '',
    password: '',
    answer: ''
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword) // Cambia el estado para mostrar u ocultar la contraseña
  }

  const handleSelectChange = (event) => {
    setSelectedQuestion(event.target.value)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, values }) => (
        <Form className='rounded h-[610px]'>
          {/* Campos del formulario */}
          <Input name='Nombre' type='text' placeholder='Ingrese nombre' errors={errors} id='name' value={values.name} />
          <Input name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' value={values.email} />
          <InputPassword name='Contraseña' placeholder='Ingrese contraseña' id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
          <div className='mb-3 h-[90px]'>
            <p className='block text-gray-700 text-sm mb-2'>Pregunta secreta</p>
            <select name='preguntaSecreta' onChange={handleSelectChange} className='shadow appearance-none border rounded w-full py-3 px-3 leading-tight' required>
              <option value=''>Seleccione una pregunta secreta</option>
              <option value='opcion1'>¿Cuál es el nombre de tu mascota?</option>
              <option value='opcion2'>¿En qué ciudad naciste?</option>
              <option value='opcion3'>¿Cuál es tu comida favorita?</option>
            </select>
          </div>
          <Input name='Respuesta secreta' type='text' placeholder='Ingrese respuesta secreta' errors={errors} id='answer' value={values.answer} />

          {/* Botón de envío del formulario */}
          <Button text='Registrarme' color='bg-green-600' hover='hover:bg-green-900' />
          {/* error de registro */}
          {error && <p className='text-red-600 text-xs italic text-center'>{error}</p>}
        </Form>
      )}
    </Formik>
  )
}

export default FormularioComponent

