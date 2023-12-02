import googleLogo from '../../assets/icons8-google.png'
import facebookLogo from '../../assets/icons8-facebook.png'
import { Link } from 'react-router-dom'

export default function OtherSesion () {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <button className='flex justify-center rounded bg-neutral-100 item-center border '>

          {/* {' '} */}

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
        <Link to='/login' className='text-center'>Iniciar sesión</Link>
      </div>
    </>
  )
}
