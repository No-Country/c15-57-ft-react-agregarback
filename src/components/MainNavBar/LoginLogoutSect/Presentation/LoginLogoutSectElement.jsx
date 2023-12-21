import { Link } from 'react-router-dom'
import { useContentContext } from '../../../../Store/contextStore/ContentContext.jsx'
import useRouterChecker from '../../../../Hooks/useRouterChecker.jsx'

export const LoginLogoutSectElement = ({ routes }) => {
  const { animalRouterChecker } = useRouterChecker()
  const { isOpen } = useContentContext()
  return (
    <>
      {
                routes.map((route) => (
                  <li
                    key={route.name} className={` flex lg:items-center p-3 rounded-xl md:hover:bg-green-900 text-center
                         font-robotoM md:hover:text-white
                         text-[4vw] lg:h-[35%] md:text-[1.5vw] lg:text-[1.6vw]  2xl:text-[2.3vh]
                ${isOpen && 'w-[100%] text-[4.1vh] h-[16.6%] justify-center'}
                ${animalRouterChecker || isOpen ? 'text-white' : 'text-black'}
                `}
                  >
                    <Link to={route.path}> {route.name} </Link>
                  </li>
                )
                )
        }
    </>
  )
}
