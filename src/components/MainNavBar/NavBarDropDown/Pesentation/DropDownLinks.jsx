import { Link } from 'react-router-dom'
import useRouterChecker from '../../../../Hooks/useRouterChecker'
import { useContentContext } from '../../../../Store/contextStore/ContentContext'

export const DropDownLinks = ({ routes, windowSize }) => {
  /* receive the routes to link "to:" */
  const { animalRouterChecker } = useRouterChecker()
  const { isOpen } = useContentContext()
  console.log(windowSize);
  return (
    <>
      {
        routes.map((route) => {
          return (
            <li key={route.path}>
              <Link
                className={`
                             w-[10vw] font-robotoM text-left text-[1vh] md:text-[1.5vh] pl-[3px] block whitespace-no-wrap hover:bg-lime-100 w-[9vw]
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
        })
      }
    </>
  )
}
