import { Link } from 'react-router-dom'
import useRouterChecker from '../../../../Hooks/useRouterChecker'
import { useContentContext } from '../../../../Store/contextStore/ContentContext'

export const DropDownLinks = ({ routes }) => {
  /* receive the routes to link "to:" */
  const { animalRouterChecker } = useRouterChecker()
  const { isOpen } = useContentContext()

  return (
    <>
      {routes.map((route) => {
        return (
          <li key={route.path}>
            <Link
              className={`
                text-[2rem]  text-white md:text-black  block whitespace-no-wrap hover:bg-gray-400	 w-[100%] align-center text-center mt-[7vh] mb-[6vh] block whitespace-no-wrap hover:bg-zinc-700 hover:text-white font-robotoM md:text-left text-[1vh] md:w-[100%]  md:text-[1.5vh] md:pl-[3px] md:mt-[0vh] md:mb-[0vh]  
                ${isOpen && 'w-[100%] text-black '}
                ${(!animalRouterChecker || isOpen) && 'text-black'}
                ${(animalRouterChecker || isOpen) && 'text-black'}
                ${animalRouterChecker && 'text-black '}
                ${(!animalRouterChecker || !isOpen) && 'text-black'}
              `}
              to={route.path}
            >
              {route.name}
            </Link>
          </li>
        )
      })}
    </>
  )
}
