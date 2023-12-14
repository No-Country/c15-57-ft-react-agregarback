import {Link} from "react-router-dom";

import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";

export const LoginLogoutSectElement = ({routes}) => {
 
    const {animalRouterChecker} = useRouterChecker();
    return (
        <>
            {
                routes.map((route) => (
                        <li key={route.name} className={`
                        lg:text-[1.7vw] 2xl:text-xl
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