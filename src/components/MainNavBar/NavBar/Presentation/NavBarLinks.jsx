import { Link } from 'react-router-dom'

import useRouterChecker from '../../../../Hooks/useRouterChecker.jsx'
import { useContentContext } from '../../../../Store/contextStore/ContentContext.jsx'

const NavBarLinks = ({ links }) => {
  const { animalRouterChecker } = useRouterChecker()
  const { isOpen, setIsOpen } = useContentContext()

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false)
      closeMenu()
    }
  }
  return (
    <>
      {
                links.map(({ to, link }) => (
                  <li
                    key={to} className={`
                    md:hover:bg-green-900 md:p-2 md:rounded-xl text-center
                         font-robotoM text-[4vw] lg:h-[35%] md:text-[1.5vw] lg:text-[1.6vw]  2xl:text-[2.3vh] color-colorFooter md:hover:text-white
                   ${isOpen && 'w-[100%] align-middle text-[2vh] sm:text-[4vh] h-[20%]'}
                   ${!animalRouterChecker || isOpen && 'text-black w-[100%] text-[4v|h] h-[20%]'}
                   ${animalRouterChecker || isOpen && 'text-white'}
                   ${animalRouterChecker && 'text-gray-300'}
                   ${!animalRouterChecker || !isOpen && 'text-black'}
                `}
                  >
                    <Link to={to} onClick={handleClick}>{link}</Link>
                  </li>
                ))
}
    </>

  )
}

export default NavBarLinks
