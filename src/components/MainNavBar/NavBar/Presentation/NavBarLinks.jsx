import { Link } from "react-router-dom"

import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";

const NavBarLinks = ({ links }) => {
  const {animalRouterChecker} =  useRouterChecker()
    return (
        <>
            {
                links.map(({ to, link }) => (
                    <li key={to} className={`
                    text-[.75rem]  md:text-[1.3vh] lg:text-[1.7vh]  2xl:text-[2vh]
                ${ animalRouterChecker ? "text-white" : "text-black"}
                `}>
                        <Link to={to}>{link}</Link>
                    </li>

                ))}
        </>

    );
}

export default NavBarLinks