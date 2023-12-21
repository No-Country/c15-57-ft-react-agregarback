import { useState } from 'react'
import { arrowRight } from '../../../assets/ecosystem'
import { Link } from 'react-router-dom'

export default function CardByEcosystem ({ isRight, animal }) {
  const [isHover, setIsHover] = useState(false)
  const showLink = () => {
    setIsHover(true)
  }
  const hiddenLink = () => {
    setIsHover(false)
  }

  return (
    <section className='relative group'>
      <div onMouseEnter={showLink} onMouseLeave={hiddenLink} className='  transition'>
        <figure className={`${isRight ? 'min-w-[195px] sm:w-[398px] h-[181px]' : 'w-full h-full'}`}>
          <img className=' relative z-0  object-cover   ' src={animal?.img} alt='' />
        </figure>
        <div className={` absolute bottom-0  ${isHover ? 'flex' : 'hidden'} flex-col z-20 ${isRight ? 'min-w-[215px] w-full sm:w-[40%] sm:max-w-[420px] sm:min-w-[270px] sm:max-h-[391px]' : 'w-full h-full'} bg-black bg-opacity-60 justify-center items-center    top-0 left-0 p-4`}>
          <p className='text-white font-[600] mb-6 sm:text-[4vw] md:text-[40px]'>{animal?.name}</p>
          <Link className='w-12 h-12 transition-all duration-300 ease-in bg-green-800 hover:bg-green-900 active:bg-green-950 rounded-full flex justify-center items-center  ' to={animal?.link}>
            <img className=' w-6 h-6 transition-all duration-300 ease-in ' src={arrowRight} alt='' />
          </Link>
        </div>
      </div>
    </section>
  )
}
