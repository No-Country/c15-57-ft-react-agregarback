import {Link} from "react-router-dom";
import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";

export const LoginLogoutSectElement = ({routes}) => {
    const {onAnimalRouteChecker} = useContentContext()
    const onAnimalRoute = onAnimalRouteChecker();
    return (
        <>
            {
                routes.map((route) => (
                        <li key={route.name} className={`
                ${onAnimalRoute ? 'text-white' : 'text-black'} 
                sm:text-[8vw] sm:pl-[1%] sm:text-center
                lg:text-[2.05vw]
                `}>
                            <Link to={route.path}> {route.name} </Link>
                        </li>
                    )
                )
            }
        </>
    );
};