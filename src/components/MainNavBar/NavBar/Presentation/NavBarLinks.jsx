import { Link } from "react-router-dom"

import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";
import { useContentContext } from "../../../../Store/contextStore/ContentContext.jsx";

const NavBarLinks = ({ links }) => {
    const { animalRouterChecker } = useRouterChecker()
    const { isOpen } = useContentContext()
    return (
        <>
            {
                links.map(({ to, link }) => (
                    <li key={to} className={`
                    hover:bg-sky-700 text-center 
                         font-roboto md:text-[1.5vw] 
                   ${isOpen && "w-[100%] text-[4vh] h-[16.6%]"}
                   ${!animalRouterChecker || isOpen && "text-black w-[100%] text-[4vh] h-[16.6%]"}
                   ${animalRouterChecker || isOpen && "text-white"}
                   ${animalRouterChecker && "text-gray-300"}
                   ${!animalRouterChecker || !isOpen && "text-black"}
                `}>
                        <Link to={to}>{link}</Link>
                    </li>

                ))}
        </>

    );
}

export default NavBarLinks