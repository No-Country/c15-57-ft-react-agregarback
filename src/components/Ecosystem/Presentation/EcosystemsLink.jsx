import { Link } from 'react-router-dom'

export default function EcosystemsLinks ({ iconImg, changeArea, children }) {
  return (

    <Link to='#' className='relative mx-2 ' onClick={changeArea}>
      <figure className='relative w-[181px] h-[181px]  sm:h-full sm:w-full overflow-hidden'>

        <img className='  h-full w-full  ' src={iconImg} alt='' />
        <div className='absolute bottom-0  flex  w-full rounded-full h-full  justify-center items-center'>
          <p className='text-white text-[20px] sm:text-[12px] lg:text-[25px]'>{children}</p>
        </div>
      </figure>

    </Link>
  )
}
