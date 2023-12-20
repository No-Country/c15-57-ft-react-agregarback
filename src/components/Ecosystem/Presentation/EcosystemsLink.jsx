import { Link } from 'react-router-dom'

export default function EcosystemsLinks ({ iconImg, changeArea, children }) {
  return (

    <Link to='#' className='relative mx-2 ' onClick={changeArea}>
      <figure className='group relative w-[181px] h-[181px]  sm:h-full sm:w-full overflow-hidden'>
        <img className='h-full w-full  ' src={iconImg} alt='' />
        <div className='group-hover:bg-black/50  absolute bottom-0  flex  w-full rounded-full h-full  justify-center items-center'>
          <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[20px] sm:text-[12px] lg:text-[25px]'>{children}</p>
        </div>
      </figure>

    </Link>
  )
}
