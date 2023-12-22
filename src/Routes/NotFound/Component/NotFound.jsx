import { useRouteError, Link } from 'react-router-dom'
import Logo404 from '../../../assets/404.jpg'
import BannerPA from '../../../assets/BannerPA.png'

const NotFound = () => {
  const error = useRouteError()

  return (
    <div className='bg-black/90 h-screen flex flex-col content-between place-content-between '>
      <Link to='/'>
        <img
          src={BannerPA}
          alt='volver al home'
          title='volver al home'
          className='w-screen'
        />
      </Link>
      <img
        src={Logo404}
        alt='has puesto triste al jaguar'
        title='has puesto triste al jaguar'
        className='w-screen'
      />
      <h1 className='text-center text-white'>Error 404 - Page {error.statusText || error.message}</h1>

    </div>
  )
}

export default NotFound
