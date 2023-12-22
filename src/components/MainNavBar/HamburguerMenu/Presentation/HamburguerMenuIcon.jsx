import { useContentContext } from '../../../../Store/contextStore/ContentContext.jsx'

export const HamburguerMenuIcon = () => {
  const { toggle } = useContentContext()
  return (

    <button className='navbar-burger flex items-center text-gray-600 w-[30px]' onClick={() => toggle()}>

      <svg
        className='block h-[100%] w-[100%] fill-current md:h-[100%] md:w-[100%]' viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
      </svg>

    </button>

  )
}
