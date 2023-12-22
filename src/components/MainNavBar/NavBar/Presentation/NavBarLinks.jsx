import { Link } from 'react-router-dom'
import useRouterChecker from '../../../../Hooks/useRouterChecker.jsx'
import { useContentContext } from '../../../../Store/contextStore/ContentContext.jsx'

const NavBarLinks = ({ links, windowSize }) => {
  const { animalRouterChecker } = useRouterChecker()
  const { isOpen, toggle } = useContentContext();

  return (
    <>
      {links.map(({ to, link }) => (
        <li
          key={to}
          className={`
            text-center
            font-robotoM md:text-[1.5vw] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 
            ${isOpen && 'w-[100%] text-[3vh] sm:text-[4vh] h-[20%]'}
            ${!animalRouterChecker || (isOpen && 'text-black w-[100%] text-[4vh] h-[20%]')}
            ${animalRouterChecker || (isOpen && 'text-white')}
            ${animalRouterChecker && 'text-gray-300'}
            ${!animalRouterChecker || (!isOpen && 'text-black')}
          `}
        >
          {windowSize[0] > 767 
          ? (<Link to={to}>{link}</Link>)
          : (<Link to={to} onClick={toggle}>{link}</Link>)
          }
        </li>
      ))}

    </>
  );
};

export default NavBarLinks
