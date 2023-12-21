import { Link } from 'react-router-dom'

export default function EcosystemsLinks ({ escosystemsData, children }) {
  // al cambiar los datos queria devolver la pagina al comienso
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  return (

    <Link onClick={handleScrollToTop} to={`/${escosystemsData.path}`} className='relative mx-2 '>
      <figure className='group relative w-[181px] h-[181px]  sm:h-full sm:w-full overflow-hidden'>

        <img className='h-full w-full  ' src={escosystemsData.img} alt={escosystemsData.area} />
        <div className='opacity-0 transition-all duration-300 hover:opacity-100 bg-black/25 absolute bottom-0  flex  w-full rounded-full h-full  justify-center items-center'>
          <p className=' text-white text-[20px] sm:text-[12px] lg:text-[25px]'>{children}</p>

        </div>
      </figure>

    </Link>
  )
}
