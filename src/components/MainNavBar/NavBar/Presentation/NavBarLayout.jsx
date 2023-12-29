import useResizer from '../../../../Hooks/useResizer.jsx'
import NavBar from './NavBarCompoundComponent.jsx'

const NavBarLayout = ({ children }) => {

    useResizer()

    return (
        <NavBar>

            {/* hamburguer menu hidden when is on a smal viewport size --> */}
            <NavBar.HamburguerMenuSection />

            {/* logo nav bar adjust to the viewport size --> */}
            <NavBar.LogoSection />

            {/* links block  responsive --> */}
            <NavBar.NavUl>
                
                {children}

                {/* shows: (login/logout) when no auth - shows: (dropdown/cart) when auth --> */}
                <NavBar.DinamicAuthSection />

            </NavBar.NavUl>

            {/* cart icon shown when it is in a small vieport size -Responsive-  --> */}
            <NavBar.CartLogoSection />

        </NavBar>
    )
}

export default NavBarLayout
