import { Link } from "react-router-dom"

const NavBarLinks = ({ links }) => {

    return (
        <>
            {links.map(({ to, link }) => (
                <li key={to} className="
                sm:text-[2.05vw] sm:pl-[1%] sm:text-black 
                lg:text-[2.05vw] pl-[1%] lg:text-white	
                ">
                    <Link to={to}>{link}</Link>
                </li>

            ))}
        </>

    )
}

export default NavBarLinks