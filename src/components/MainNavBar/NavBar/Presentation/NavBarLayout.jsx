import { HamburguerMenu } from "../../HamburguerMenu/Component/HamburguerMenu.jsx";
import { Logo } from "../../Logo/Component/Logo.jsx";
import { Dropdown } from "../../NavBarDropDown/Component/DropDown.jsx";
import { Cart } from "../../Cart/Component/Cart.jsx";
import { LoginLogoutSect } from "../../LoginLogoutSect/Component/LoginLogoutSect.jsx";

import { useContentContext } from "../../../../Store/contextStore/ContentContext.jsx";
import { useUserContext } from '../../../../Store/contextStore/UserContext.jsx';
import useRouterChecker from "../../../Hooks/useRouterChecker.jsx";

const NavBarLayout = ({ children }) => {

    const { isOpen } = useContentContext()
    const { user } = useUserContext();
    const { animalRouterChecker, loginRegisterRouteChecker } = useRouterChecker()

    return (
        <>

            {/* main navbar menu --> */}

            <nav className={`${animalRouterChecker
                ? 'h-[8.49vh]  row-span-1 grid grid-cols-3 grid-rows-1 bg-gradient-to-b to-transparent  from-black from-45% absolute z-50 sm:h-[11.3vh] md:w-[100%] md:h-[13.6vh] md:absolute md:grid md:grid-cols-3 md:grid-rows-1 md:justify-items-center md:z-50 2xl:w-[100%] 2xl:h-[13.6vh]'
                : loginRegisterRouteChecker
                    ? 'hidden'
                    : 'bg-white w-full h-[8.49vh] grid grid-cols-3 grid-rows-1 z-50 sm:h-[11.3vh] md:w-[100%] md:h-[13.6vh] md:grid md:grid-cols-3 md:grid-rows-1 md:justify-items-center md:z-50 2xl:w-[100%] 2xl:h-[13.6vh]   '
                }
               `}>

                {/* hamburguer menu hidden --> */}

                <nav
                    className={`${ 
                        animalRouterChecker
                        ?   "col-start-1 col-end-2 w-[27%] top-[17%] left-[24%] self-center absolute flex justify-between items-center z-4550 sm:w-[21%] sm:top-[24%] md:hidden z-100"
                        :   "col-start-1 col-end-2 w-[7%] top-[2.3%] left-[7%] self-center absolute flex justify-between items-center z-4550 sm:w-[21%] sm:top-[24%] md:hidden z-100"
                      
                    } `
                    }
                    >
                    <HamburguerMenu />
                </nav>

                {/*logo nav bar --> */}

                <Logo />

                {/*links block --> */}

                <ul
                    className={`
                    ${animalRouterChecker
                            ? 'z-150 hidden md:flex  md:col-start-2 md:col-end-4 md:w-[100%]  md:h-[13.7vh] md:flex-row md:flex-nowrap	md:content-center md:items-center md:justify-around	lg:justify-between lg:w-[94.29%]  2xl:w-[82.29%] 2xl:h-[13.7vh]   z-50'
                            : 'z-150 row-span-2 top-[9%] md:flex md:col-start-2 md:col-end-4 md:w-[94.29%] md:h-[13.7vh] md:flex-row md:flex-nowrap	md:content-center md:items-center md:justify-between 2xl:w-[82.29%] 2xl:h-[13.7vh]   z-50'

                        }
                    ${!isOpen
                            ? 'z-150 hidden lg:col-span-2 '
                            : 'z-150 absolute bg-blue-300 w-[100vw] h-[100vh] row-span-1 col-span-1 left-auto content-center md:top-[8%] lg:hidden'
                        }
                     `}>
                    {children}
                    {
                        user
                            ? (
                                <>

                                    {/* shows: (login/logout) when no auth - shows: (dropdown/cart) when auth --> */}

                                    <li className="
                                            sm:grid sm:row-[span_1_/_span_6] sm:z-50
                                            md:text-[1.3vw] lg:text-[1.7vw]  lg: col-span-3 lg:text-white lg:z-50">
                                        <Dropdown />
                                    </li>
                                    <Cart />
                                </>

                            )
                            : (
                                <LoginLogoutSect />
                            )
                    }



                </ul>

                {/* cart icon shown when it is in a small vieport size -Responsive-  --> */}

                <section className="w-[10vw]  min-[509px]:left-[1vw] min-[509px]:top-[2vw] col-start-3 col-end-4 row-start-1 row-end-3 place-self-center sm:h-[30%] sm:relative sm:top-[0vh] sm:left-[0vw] md:hidden">
                    {
                        user && <Cart />
                    }
                </section>

            </nav >
        </>
    );

};

export default NavBarLayout