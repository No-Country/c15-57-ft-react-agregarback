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
                   font-roboto h-[15.6%] text-[9vw] md:text-[1.7vw] lg:text-[1.7vw] 2xl:text-xl
                   ${isOpen && "w-[100%]"}
                   ${!animalRouterChecker || isOpen && "text-black"}
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