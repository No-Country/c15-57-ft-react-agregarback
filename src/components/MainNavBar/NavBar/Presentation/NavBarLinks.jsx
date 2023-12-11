import { Link } from "react-router-dom"
import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";

const NavBarLinks = ({ links }) => {
    const {onAnimalRouteChecker} = useContentContext()
    const onAnimalRoute = onAnimalRouteChecker();

    return (
        <>
            {
                links.map(({to, link}) => (
                    <li key={to} className={`
                ${onAnimalRoute ? "text-white" : "text-black"}
                text-center height-[25%]
                text-[8vw] sm:pl-[1%] sm:text-center
                lg:text-[2.05vw] pl-[1%] 
                `}>
                        <Link to={to}>{link}</Link>
                    </li>

                ))}
        </>

    );
}

export default NavBarLinks