import {HamburguerMenu} from "../../HamburguerMenu/Component/HamburguerMenu.jsx";
import {Logo} from "../../Logo/Component/Logo.jsx";
import {Dropdown} from "../../NavBarDropDown/Component/DropDown.jsx";
import {Cart} from "../../Cart/Component/Cart.jsx";
import {LoginLogoutSect} from "../../LoginLogoutSect/Component/LoginLogoutSect.jsx";

import {useContentContext} from "../../../../Store/contextStore/ContentContext.jsx";
import { useUserContext } from '../../../../Store/contextStore/UserContext.jsx';

const NavBarLayout = ({children}) => {

    const {onAnimalRouteChecker, isOpen} = useContentContext()
    const onAnimalRoute = onAnimalRouteChecker();
    const {user} = useUserContext();

    return (
        <>
            <nav
                className="w-[25%] h-[25%] top-[-8%] left-[4%] self-center absolute flex justify-between items-center z-50  lg:hidden xl:hidden z-100">
                <HamburguerMenu />
            </nav>

            <div className={`
              ${
                onAnimalRoute
                    ? 'w-full h-[9vh] grid grid-cols-3 grid-rows-1 z-50 bg-gradient-to-b to-transparent  from-black from-45%  lg:absolute lg: lg:h-[12vh] lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:justify-items-center lg:z-50'
                    : 'bg-white w-full h-[9vh] grid grid-cols-3 grid-rows-2 z-50 lg:h-[12vh] lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:justify-items-center lg:z-50'
            }
                `}>

                <Logo/>

                <ul
                    className={`
                    ${
                        onAnimalRoute
                            ? 'z-150  lg:col-span-2 lg:h-[6.7vh] lg:w-max lg:grid lg:grid-cols-6 lg:grid-rows-1 lg:place-items-center lg:absolute lg:self-center left-[34%] top-[7%] lg:left-[44%] lg:top-[19%] 2xl:left-[44%]  2xl:top-[24%]  z-50'
                            : 'z-150 row-span-2  top-[9%] z-50 md:absolute md:right-[4%] md:top-[3.7%] lg:top-[4%] lg:col-span-1 lg:h-[5.4vh] lg:w-max lg:grid lg:grid-cols-6 lg:grid-rows-1 lg:place-items-center lg:self-center'
                    }
                    ${
                        !isOpen
                            ? 'z-150 hidden lg:grid  lg:col-span-2  lg:h-[6.7vh]  lg:grid-rows-1'
                            : 'z-150 absolute bg-blue-300 w-[100vw] h-[100vh] row-span-1 col-span-1 left-auto content-center md:top-[8%] lg:hidden'
                    }
                     `}>
                    {children}
                    {
                        user
                            ? (
                                <>
                                    <li className="
                                            sm:grid sm:row-[span_1_/_span_6] sm:pl-[5%] sm:z-50
                                            lg: col-span-3   lg:text-xl lg:pl-[5%] lg:z-50">
                                        <Dropdown/>
                                    </li>
                                    <Cart/>
                                </>

                            )
                            : (
                                <LoginLogoutSect/>
                            )
                    }
                </ul>
            </div>
        </>
    );

};

export default NavBarLayout