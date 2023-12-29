import NavBarLinks from "./NavBarLinks.jsx"
import NavBarLayout from "./NavBarLayout.jsx"
import useWindowReader from "../../../../Hooks/useWindowReader.jsx"

const NavBarContainer = ({ navigationLinks }) => {

    const { windowSize } = useWindowReader()

    return (
        <NavBarLayout>
            <NavBarLinks
                windowSize={windowSize}
                links={navigationLinks}
            />
        </NavBarLayout>
    )
}

export default NavBarContainer