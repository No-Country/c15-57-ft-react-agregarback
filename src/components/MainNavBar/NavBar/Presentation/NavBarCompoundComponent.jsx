
import { useUserContext } from '../../../../Store/contextStore/UserContext'
import { useContentContext } from '../../../../Store/contextStore/ContentContext';
import useRouterChecker from '../../../../Hooks/useRouterChecker'

import { HamburguerMenu } from '../../HamburguerMenu/Component/HamburguerMenu';
import { Logo } from '../../Logo/Component/Logo';
import { Dropdown } from '../../NavBarDropDown/Component/DropDown';
import { LoginLogoutSect } from '../../LoginLogoutSect/Component/LoginLogoutSect';

import CartSection from '../../CartSection/Componentt/CartSection';

function NavBar({ children }) {

    const { animalRouterChecker, loginRegisterRouteChecker } = useRouterChecker()

    /* main navbar menu styles --> */

    let barLayoutRouteStyle = '';

    if (animalRouterChecker) {
        barLayoutRouteStyle = 'h-[8.49vh]  row-span-1 grid grid-cols-3 grid-rows-1 bg-gradient-to-b to-transparent  from-black from-45% absolute z-50 sm:h-[11.3vh] md:w-[100%] md:h-[13.6vh] md:absolute md:grid md:grid-cols-3 md:grid-rows-1 md:justify-items-center md:z-50 2xl:w-[100%] 2xl:h-[13.6vh]';
    } else if (loginRegisterRouteChecker) {
        barLayoutRouteStyle = 'hidden';
    } else {
        barLayoutRouteStyle = 'bg-white w-full h-[8.49vh] grid grid-cols-3 grid-rows-1 z-50 sm:h-[11.3vh] md:w-[100%] md:h-[13.6vh] md:grid md:grid-cols-3 md:grid-rows-1 md:justify-items-center md:z-50 2xl:w-[100%] 2xl:h-[13.6vh]';
    }

    return (
        <nav className={barLayoutRouteStyle} >
            {children}
        </nav>
    );
}

const NavUl = ({ children }) => {

    /* UL menu hidden styles --> */
    const { animalRouterChecker } = useRouterChecker()
    const { isOpen } = useContentContext()

    let ulMenuHiddenStyle = `
    
    ${animalRouterChecker
            ? 'z-150 w-[100%]  md:flex  md:col-start-2 md:col-end-4 md:w-[100%]  md:h-[13.7vh] md:flex-row md:flex-nowrap	md:content-center md:items-center md:justify-around	lg:justify-between lg:w-[94.29%]  2xl:w-[82.29%] 2xl:h-[13.7vh] z-50'
            : 'z-150 row-span-2 top-[9vh] sm:top-[11%] md:flex md:col-start-2 md:col-end-4 md:w-[94.29%] md:h-[13.7vh] md:flex-row md:flex-nowrap md:content-center md:items-center md:justify-between 2xl:w-[82.29%] 2xl:h-[13.7vh] z-50'
        }

    ${!isOpen
            ? 'z-150 hidden'
            : 'z-150  absolute bg-slate-950	top-[11vh] opacity-90 w-[100%] h-[91vh] flex flex-col flex-no-wrap items-center justify-center content-center md:hidden'
        }`;

    return (
        <ul className={ulMenuHiddenStyle} >
            {children}
        </ul>
    )
}

const HamburguerMenuSection = () => {

    const { animalRouterChecker } = useRouterChecker()

    let ulMenuHiddenStyle = `${animalRouterChecker
        ? 'col-start-1 col-end-2 w-[27%] self-center justify-self-center absolute flex justify-between items-center z-4550 sm:w-[21%] sm:top-[24%] md:hidden z-100'
        : 'col-start-1 col-end-2 w-[27%] self-center justify-self-center  flex justify-between items-center z-4550 sm:w-[21%] sm:top-[3.6%] md:hidden z-100'
        }`

    return (
        <section className={ulMenuHiddenStyle}>
            <HamburguerMenu />
        </section>
    )
}

const LogoSection = () => {
    return <Logo />
}

const DinamicAuthSection = () => {
    const { user } = useUserContext()
    const { windowSize } = useContentContext()

    return (
        <>
            {
                user
                    ? (
                        <>

                            <Dropdown windowSize={windowSize} />

                            <CartSection />

                        </>
                    )
                    : (
                        <>
                            <LoginLogoutSect />
                        </>
                    )
            }
        </>

    )

}

const CartLogoSection = () => {

    const { user } = useUserContext()

    let CartLogoSectionMenuHiddenStyle = 'col-start-3 col-end-4 row-start-1 row-end-3 place-self-center sm:relative sm:top-[0vh] sm:left-[0vw] md:hidden'

    return (
        <section className={CartLogoSectionMenuHiddenStyle}>
            {
                user &&
                <CartSection />
            }
        </section>
    )
}

NavBar.NavUl = NavUl
NavBar.HamburguerMenuSection = HamburguerMenuSection
NavBar.LogoSection = LogoSection
NavBar.DinamicAuthSection = DinamicAuthSection
NavBar.CartLogoSection = CartLogoSection

export default NavBar
