import { HamburguerMenu } from "../../HamburguerMenu/Component/HamburguerMenu.jsx";
import { Logo } from "../../Logo/Component/Logo.jsx";
import { Dropdown } from "../../NavBarDropDown/Component/DropDown.jsx";
import { Cart } from "../../Cart/Component/Cart.jsx";
import { LoginLogoutSect } from "../../LoginLogoutSect/Component/LoginLogoutSect.jsx";

import { useContentContext } from "../../../../Store/contextStore/ContentContext.jsx";
import { useUserContext } from '../../../../Store/contextStore/UserContext.jsx';
import useRouterChecker from "../../../../Hooks/useRouterChecker.jsx";

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
                    className={`${animalRouterChecker
                        ? "col-start-1 col-end-2 w-[27%] self-center justify-self-center absolute flex justify-between items-center z-4550 sm:w-[21%] sm:top-[24%] md:hidden z-100"
                        : "col-start-1 col-end-2 w-[27%] self-center justify-self-center  flex justify-between items-center z-4550 sm:w-[21%] sm:top-[3.6%] md:hidden z-100"

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
                            ? 'z-150 w-[100%]  md:flex  md:col-start-2 md:col-end-4 md:w-[100%]  md:h-[13.7vh] md:flex-row md:flex-nowrap	md:content-center md:items-center md:justify-around	lg:justify-between lg:w-[94.29%]  2xl:w-[82.29%] 2xl:h-[13.7vh] z-50'
                            : 'z-150 row-span-2 top-[9vh] sm:top-[11%] md:flex md:col-start-2 md:col-end-4 md:w-[94.29%] md:h-[13.7vh] md:flex-row md:flex-nowrap md:content-center md:items-center md:justify-between 2xl:w-[82.29%] 2xl:h-[13.7vh] z-50'

                        }
                    ${!isOpen
                            ? 'z-150 hidden'
                            : 'z-150  absolute bg-slate-950	top-[8.7vh] opacity-80 w-[100%] h-[93vh] flex flex-col flex-no-wrap items-center justify-center content-center md:hidden'
                        }
                     `}>
                    {children}
                    {
                        user
                            ? (
                                <>

                                    {/* shows: (login/logout) when no auth - shows: (dropdown/cart) when auth --> */}

                                    <li className="sm:grid sm:row-[span_1_/_span_6] sm:z-50 lg: col-span-3  lg:z-50">
                                        <Dropdown />
                                    </li>
                                    <li className="flex">
                                        <Cart />
                                    </li>

                                </>

                            )
                            : (
                                <LoginLogoutSect />
                            )
                    }



                </ul>

                {/* cart icon shown when it is in a small vieport size -Responsive-  --> */}

                <section className="w-[4vw]   sm:w-[0vw]  min-[509px]:left-[1vw] min-[509px]:top-[2vw] col-start-3 col-end-4 row-start-1 row-end-3 place-self-center sm:h-[30%] sm:relative sm:top-[0vh] sm:left-[0vw] md:hidden">
                    {
                        user && <Cart />
                    }
                </section>

            </nav >
        </>
    );

};

export default NavBarLayout