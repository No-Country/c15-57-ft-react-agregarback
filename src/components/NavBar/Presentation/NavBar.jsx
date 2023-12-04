import NavBarLinks from "./NavBarLinks"
import NavBarLayout from "./NavBarLayout"
const NavBarContainer = ({navigationLinks}) => {
    return (
        <NavBarLayout>
           <NavBarLinks links={navigationLinks} />
        </NavBarLayout>
    )
}

export default NavBarContainer