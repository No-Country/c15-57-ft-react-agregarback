

// import LoginContainer from "../Presentation/Login";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
// llamadas sincronas asincronas etc
import { Input, Button, InputPassword } from '../../../components/'
import { Formik, Form } from 'formik'

const Login() => {

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('') // Manejar el llamdao de errores
  // manejar estados para local storage
  const storedPassword = window.localStorage.getItem('savedPassword' || ' ')
  const storedUser = window.localStorage.getItem('savedUser' || ' ')
  const [userEmail, setUserEmail] = useState(storedUser)
  const [userPassword, setUserPassword] = useState(storedPassword)
  const [actualState, changeCheckState] = useState(!!(storedUser && storedPassword))
  
  // Recuperar datos del Local Storage al montar el componente
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked
    changeCheckState(isChecked)
    
    if (!isChecked) {
      // Limpiar el estado y Local Storage si el checkbox no está marcado
      setUserEmail('')
      setUserPassword('')
      window.localStorage.removeItem('savedUser')
      window.localStorage.removeItem('savedPassword')
    }
  }

  // Manelar el Post del API para confirmar correo y contraseña
  const onSubmit = async (values) => {
    try {
      const response = await axios.post('/api/users/login', values)
      setError('')
      if (response.data.error) {
        setError('password', { message: response.data.error })
      } else {
        // Manejar el éxito del inicio de sesión, por ejemplo, almacenar el token en el estado global.
        console.log('Login successful! Token:', response.data.token)
        // Guardar en Local Storage solo si el checkbox está marcado
        if (actualState) {
          window.localStorage.setItem('savedUser', response.data.email)
          window.localStorage.setItem('savedPassword', response.data.password)
        }
      }
    } catch (error) {
      if (error.response.status === 400 && error.response.data.error === 'Correo o contraseña invalida') {
        setError('Correo o contraseña invalida')
      } else {
        setError('Error al registrar usuario')
      }
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

  const initialValues = {
    // Definir los valores iniciales del formulario
    email: userEmail,
    password: userPassword
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
        <Form className='rounded pt-6 h-[340px] font-robot font-light'>
          {/* Campos del formulario */}
          <Input name='Correo electrónico' type='email' placeholder='Ingrese correo electrónico' errors={errors} id='email' value={values.email} />
          <InputPassword name='Contraseña' placeholder='Ingrese contraseña' id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
          {/* checkbox */}
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex items-center '>
              <input id='checkbox' type='checkbox' value='' className='focus:outline-none w-4 h-4 text-green-800 bg-gray-100 mb-2 lg:border-gray-300 rounded focus:ring-transparent dark:bg-white-700 dark:border-gray-600' checked={actualState} onChange={handleCheckboxChange} />
              <label htmlFor='checkbox' className='ms-2 text-sm font-medium text-black-900 dark:text-black-300'>Recordarme</label>
            </div>
            <Link className=' text-sm font-medium text-black-900 dark:text-black-300' to='/reset-password '>¿Olvidaste tu contraseña?</Link>
          </div>
          {/* Botón de envío del formulario */}
          <Button text='Iniciar Sesión' color='bg-green-600' hover='hover:bg-green-900' />
          {error && <p className='text-red-600 text-xs italic text-center'>{error}</p>}
        </Form>
      )}
    </Formik>
  

  )
}
//  <LoginContainer />;

export default Login
