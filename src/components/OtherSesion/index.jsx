import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function OtherSesion ({ to, text }) {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <button className='flex justify-center rounded bg-neutral-100 item-center border '>
          {' '}
          <FcGoogle />
          <span className='py-1.5 text-center w-9/12'>Iniciar con Google</span>
        </button>
        <button className='flex justify-center rounded bg-neutral-100 item-center border '>
          {' '}
          <BsFacebook />
          <span className='py-1.5 text-center w-9/12'>
            {' '}
            Iniciar con Facebook
          </span>
        </button>
        <Link to={to} className='text-center pt-3 font-medium'>{text}</Link>
      </div>
    </>
  )
}
