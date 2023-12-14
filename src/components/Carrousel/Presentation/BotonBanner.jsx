import { Link } from 'react-router-dom'
export default function BotonBanner ({ path, link, children }) {
  return (
    <Link
      to={/* / + */ path /* + : + link */}
      className='sm:w-[260px] w-full mx-auto sm:m-0 h-auto hover:cursor-pointer hover:bg-yellow-50 bg-teal-300  py-4 rounded-full text-base text-gray-800 flex justify-center items-center '
    >
      <p className='font-semibold text-[24px] sm:mx-6  '>{children}</p>
    </Link>
  )
}
