import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../../Store/contextStore/UserContext'

export default function OtherSesion ({ to, text }) {
  const navigate = useNavigate()
  const { logControl } = useUserContext()
  const handleGoogleLogin = async () => {
    try {
      const response = await axios.post('/api/users/google-login')
      console.log('Usuario de Google:', response.data.user)
      logControl()
      navigate('/')
      window.scrollTo(0, 0)
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error.response.data.error)
    }
  }

  const handleFacebookLogin = async () => {
    try {
      const response = await axios.post('/api/users/facebook-login')
      console.log('Usuario de Facebook:', response.data.user)
      logControl()
      navigate('/')
      window.scrollTo(0, 0)
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error.response.data.error)
    }
  }
  return (
    <>
      <div className='flex flex-col gap-2 text-sm'>
        <button className='flex justify-center rounded items-center bg-neutral-100 item-center border' onClick={handleGoogleLogin}>
          <FcGoogle />
          <span className='py-1.5 text-center w-9/12 font-roboto'>Continuar con Google</span>
        </button>
        <button className='flex justify-center rounded items-center bg-neutral-100 item-center border' onClick={handleFacebookLogin}>
          <BsFacebook className='flex content-center text-blue-600' />
          <span className='py-1.5 text-center w-9/12 font-roboto'>
            Continuar con Facebook
          </span>
        </button>
        <Link to={to} className='text-center pt-3 font-robotoM'>{text}</Link>
      </div>
    </>
  )
}
