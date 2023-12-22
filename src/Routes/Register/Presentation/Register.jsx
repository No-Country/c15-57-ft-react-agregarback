import { InputForm, ButtonForm, InputPassword, InputSelectForm } from '../../../components/'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormularioComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  // Manejar el post del API
  const onSubmit = async (values) => {
    try {
      await axios.post('/api/users/', values)
      setError('')
      navigate('/login')
      window.scrollTo(0, 0)
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
    name: Yup.string().min(3, 'Mínimo de 3 caractares').max(20, 'Máximo 20 caracteres').required('Nombre requerido'),
    email: Yup.string().email('Correo eléctronico no válido').required('Correo eléctronico requerido'),
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
    answer: Yup.string().required('La respuesta secreta es requerida'),
    question: Yup.string().required('La pregunta secreta es requerida')
  })

  const initialValues = {
    // Definir los valores iniciales del formulario
    id: crypto.randomUUID(),
    name: '',
    email: '',
    password: '',
    answer: '',
    question: ''
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
      {({ errors, values }) => (
        <Form className='rounded h-[550px] font-roboto'>
          {/* Campos del formulario */}
          <InputForm name='Nombre' type='text' placeholder='Ingrese nombre' errors={errors} id='name' value={values.name} />
          <InputForm name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' value={values.email} />
          <InputPassword name='Contraseña' placeholder='Ingrese contraseña' id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
          <InputSelectForm values={values.question} />
          <InputForm name='Respuesta secreta' type='text' placeholder='Ingrese respuesta secreta' errors={errors} id='answer' value={values.answer} />
          {/* Botón de envío del formulario */}
          <div className='flex flex-col items-center'>
            <ButtonForm text='Registrarme' color='bg-green-600' hover='hover:bg-green-900' />
            {/* error de registro */}
            {error && <p className='text-red-600 text-xs font-roboto text-center'>{error}</p>}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormularioComponent
