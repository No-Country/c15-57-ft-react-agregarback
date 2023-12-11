
import { useEffect, useState } from 'react'
import NavBarContainer from '../Presentation/NavBar.jsx'



const navigationLinks = [
  {
    to: "/",
    link: "Animals"
  },
  {
    to: "/Store",
    link: "Store"
  },
  {
    to: "/Donations",
    link: "Donation"
  },
  {
    to: "/Volunteers",
    link: "Volunteer"
  },
]



export default function NavBar() {
  return <NavBarContainer navigationLinks={navigationLinks} />
}
