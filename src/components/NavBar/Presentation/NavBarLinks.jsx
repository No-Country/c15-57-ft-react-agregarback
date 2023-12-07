import { Link } from "react-router-dom"

const NavBarLinks = ({ links }) => {

    return (
        <>
            {links.map(({ to, link }) => (
                <li key={to}>
                    <Link to={to}>{link}</Link>
                </li>
            ))}
        </>
    )
}

export default NavBarLinks