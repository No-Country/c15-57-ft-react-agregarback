import googleLogo from '../../assets/icons8-google.svg'
import facebookLogo from '../../assets/icons8-facebook.svg'
import { Link } from 'react-router-dom'

export default function OtherSesion ({ text, to }) {
  return (
    <>
      <div className='flex flex-col gap-2 pt-2 mt-3'>
        <button className='flex justify-center rounded bg-neutral-100 item-center border '>

          <img
            src={googleLogo}
            alt='gogle-logo'
            className='py-1.5 object-fill h-[36px] w-[36px]'
          />
          <span className='py-1.5 text-center w-9/12'>Iniciar con Google</span>
        </button>

        <button className='flex justify-center rounded bg-neutral-100 item-center border '>
          <img
            src={facebookLogo}
            alt='gogle-logo'
            className='py-1.5 object-fill h-[36px] w-[36px]'
          />
          <span className='py-1.5 text-center w-9/12'>
            Iniciar con Facebook
          </span>
        </button>
        <Link to={to} className='text-center mt-1.5'>{text}</Link>
      </div>
    </>
  )
}
