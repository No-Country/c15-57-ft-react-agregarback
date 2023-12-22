import { Link } from 'react-router-dom'
import { useContentContext } from '../../../../Store/contextStore/ContentContext.jsx'
import useRouterChecker from '../../../../Hooks/useRouterChecker.jsx'

export const LoginLogoutSectElement = ({ routes }) => {
  const { animalRouterChecker } = useRouterChecker()
  const { isOpen } = useContentContext()
  return (
    <>
      <div
        className={` flex inline text-center md:flex lg:items-center space-x-6
         font-robotoM
         text-[4vh] lg:h-[35%] md:text-[1.5vw] lg:text-[1.6vw]  2xl:text-[2.3vh]
         
         ${isOpen && 'w-[100%] text-[4.1vh] h-[16.6%] justify-center'}
         ${animalRouterChecker || isOpen ? 'text-white' : 'text-black'}
         `}
      >
        {
          routes.map((route) => (
            <>
              <Link
                className='w-[40%] hover:text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  hover:scale-110 '
                 key={route.name}  to={route.path}> {route.name} </Link>
            </>
          )
          )
        }
      </div>
    </>
  )
}
