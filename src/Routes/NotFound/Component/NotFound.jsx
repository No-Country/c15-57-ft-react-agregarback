import { useRouteError , Link } from 'react-router-dom'
import Logo404 from '../../../assets/404.jpg'
import BannerPA from '../../../assets/BannerPA.png'

const NotFound = () => {
  const error = useRouteError()

  return (
    <div className='bg-black/90'>
      <img
        src={Logo404}
        alt='has puesto triste al jaguar'
        title='has puesto triste al jaguar'
      />
      <h1 className='text-center text-white'>Error 404 - Page {error.statusText || error.message}</h1>
      <Link to='/'>
        <img
          src={BannerPA}
          alt='volver al home'
          title='volver al home'
        />
      </Link>
    </div>
  )
}

export default NotFound
