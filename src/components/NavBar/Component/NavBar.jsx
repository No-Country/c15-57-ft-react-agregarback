
import NavBarContainer from '../Presentation/NavBar'

const navigationLinks = [
  {
    to: "/",
    link: "Home"
  },
  {
    to: "/login",
    link: "Login"
  },
  /* {
     to:"/register",
     link: "Register"
   },*/
  {
    to: "/Contact",
    link: "Contact"
  },
]

export default function NavBar() {
  return <NavBarContainer navigationLinks={navigationLinks}  />
}
