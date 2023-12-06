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
      <div className='flex flex-col gap-2 pt-2 mt-3'>
        <button className='flex justify-center rounded bg-neutral-100 item-center border' onClick={handleGoogleLogin}>
          <FcGoogle />
          <span className='py-1.5 text-center w-9/12'>Iniciar con Google</span>
        </button>

        <button className='flex justify-center rounded bg-neutral-100 item-center border ' onClick={handleFacebookLogin}>
          {' '}
          <BsFacebook className='fle content-center' />
          <span className='py-1.5 text-center w-9/12'>
            Iniciar con Facebook
          </span>
        </button>
        <Link to={to} className='text-center pt-3 font-medium'>{text}</Link>
      </div>
    </>
  )
}
