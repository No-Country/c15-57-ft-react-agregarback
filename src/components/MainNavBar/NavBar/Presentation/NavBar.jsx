import NavBarLinks from "./NavBarLinks.jsx"
import NavBarLayout from "./NavBarLayout.jsx"
const NavBarContainer = ({navigationLinks}) => {
    return (
        <NavBarLayout >
           <NavBarLinks links={navigationLinks} />
        </NavBarLayout>
    )
}

export default NavBarContainer