
import NavBarContainer from '../Presentation/NavBar'

const navigationLinks = [
  {
    to: "/",
    link: "Animals"
  },
  {
    to: "/Store",
    link: "Store"
  },
  /* {
    to:"/register",
    link: "Register"
  },*/
  {
    to: "/Donations",
    link: "Donations"
  },
  {
    to: "/Volunteers",
    link: "Volunteers"
  },
]

export default function NavBar() {
  return <NavBarContainer navigationLinks={navigationLinks} />
}
