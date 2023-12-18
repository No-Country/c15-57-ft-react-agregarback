import {Link} from "react-router-dom";

import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";

export const LoginLogoutSectElement = ({routes}) => {
 
    const {animalRouterChecker} = useRouterChecker();
    return (
        <>
            {
                routes.map((route) => (
                        <li key={route.name} className={`
                        text-[1vh] md:text-[1.5vh] lg:text-[2vh] 2xl:text-[2.5vh]
                ${animalRouterChecker ? 'text-white' : 'text-black'} 
                `}>
                            <Link to={route.path}> {route.name} </Link>
                        </li>
                    )
                )
            }
        </>
    );
};