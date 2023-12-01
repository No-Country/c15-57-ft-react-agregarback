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
      </div>
    </>
  )
}
