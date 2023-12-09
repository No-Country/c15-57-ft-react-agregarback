import NavBarLinks from "./NavBarLinks"
import NavBarLayout from "./NavBarLayout"
const NavBarContainer = ({navigationLinks ,isInHome , checkHome}) => {
    return (
        <NavBarLayout checkHome={checkHome} isInHome={isInHome}>
           <NavBarLinks links={navigationLinks} />
        </NavBarLayout>
    )
}

export default NavBarContainer