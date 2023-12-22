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
                    key={route.name} className={` flex lg:items-center hover:text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 
                         font-robotoM
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
