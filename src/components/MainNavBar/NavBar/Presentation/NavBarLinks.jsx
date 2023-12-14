import { Link } from "react-router-dom"

import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";

const NavBarLinks = ({ links }) => {
  const {animalRouterChecker} =  useRouterChecker()
    return (
        <>
            {
                links.map(({ to, link }) => (
                    <li key={to} className={`
                   md:text-[1.3vw] lg:text-[1.7vw]  2xl:text-xl 
                ${ animalRouterChecker ? "text-white" : "text-black"}
                `}>
                        <Link to={to}>{link}</Link>
                    </li>

                ))}
        </>

    );
}

export default NavBarLinks