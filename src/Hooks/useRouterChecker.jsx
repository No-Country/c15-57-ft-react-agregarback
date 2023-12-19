import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

export default function useRouterChecker() {

    const [animalRouterChecker, setAnimalRouterChecker] = useState(false);
    const [loginRegisterRouteChecker, setLoginRegisterRouteChecker] = useState(false);

    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/') {
            setAnimalRouterChecker(true);
            setLoginRegisterRouteChecker(false);
        } else if (location.pathname === '/Login' || location.pathname === '/Register') {
            setAnimalRouterChecker(false);
            setLoginRegisterRouteChecker(true);
        } else {
            setAnimalRouterChecker(false);
            setLoginRegisterRouteChecker(false);
        }
    }, [location.pathname]);
    return { animalRouterChecker, loginRegisterRouteChecker };
}
