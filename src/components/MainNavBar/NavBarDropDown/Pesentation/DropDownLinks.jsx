import { Link } from 'react-router-dom'
import useRouterChecker from '../../../../Hooks/useRouterChecker'
import { useContentContext } from '../../../../Store/contextStore/ContentContext'

export const DropDownLinks = ({ routes }) => {
  /* receive the routes to link "to:" */
  const { animalRouterChecker } = useRouterChecker()
  const { isOpen } = useContentContext()

  return (
    <>
      {
                routes.map((route) => {
                  return (
                    <li key={route.path}>
                      <Link
                        className={`
                                  w-[10vw] font-robotoM text-left text-[1vh] md:text-[1.5vh] pl-[6px] block whitespace-no-wrap hover:bg-gray-400
                                    ${isOpen && 'w-[100%] text-black hover:bg-gray-400'}
                                    ${(!animalRouterChecker || isOpen) && 'text-black hover:bg-gray-400'}
                                    ${(animalRouterChecker || isOpen) && 'text-black hover:bg-gray-400'}
                                    ${animalRouterChecker && 'text-black hover:bg-gray-400'}
                                    ${(!animalRouterChecker || !isOpen) && 'text-black hover:bg-gray-400'}
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
