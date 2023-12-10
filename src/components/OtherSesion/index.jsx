<<<<<<< HEAD
import googleLogo from '../../assets/icons8-google.png'
import facebookLogo from '../../assets/icons8-facebook.png'
import Button from '../Button'

export default function OtherSesion (props) {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <button className='flex justify-center rounded bg-neutral-100 item-center border '>
          <img
            src={googleLogo}
            alt='gogle-logo'
            className='py-1.5 object-fill h-full'
          />
          <span className='py-1.5 text-center w-9/12'>Iniciar con Google</span>
        </button>
        <button className='flex justify-center rounded bg-neutral-100 item-center border '>
          <img
            src={facebookLogo}
            alt='gogle-logo'
            className='py-1.5 object-fill h-full'
          />
          <span className='py-1.5 text-center w-9/12'>
            Iniciar con Facebook
          </span>
        </button>
        <Button
          text='Iniciar sesión'
          color='bg-green-600'
          colorHover='hover:bg-green-900'
        />
=======
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function OtherSesion ({ to, text }) {
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.post('/api/users/google-login')
      console.log('Usuario de Google:', response.data.user)
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error.response.data.error)
    }
  }
  const handleFacebookLogin = async () => {
    try {
      const response = await axios.post('/api/users/facebook-login')
      console.log('Usuario de Facebook:', response.data.user)
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error.response.data.error)
    }
  }
  return (
    <>
      <div className='flex flex-col gap-2 font-robot font-normal text-sm'>
        <button className='flex justify-center rounded items-center bg-neutral-100 item-center border' onClick={handleGoogleLogin}>
          {' '}
          <FcGoogle />
          <span className='py-1.5 text-center w-9/12'>Continuar con Google</span>
        </button>
        <button className='flex justify-center rounded items-center bg-neutral-100 item-center border' onClick={handleFacebookLogin}>
          {' '}
          <BsFacebook className='flex content-center text-blue-600' />
          <span className='py-1.5 text-center w-9/12'>
            {' '}
            Continuar con Facebook
          </span>
        </button>
        <Link to={to} className='text-center pt-3 font-medium'>{text}</Link>
>>>>>>> c383f4436040b790c9622c96ec00630f3da1b6b9
      </div>
    </>
  )
}
