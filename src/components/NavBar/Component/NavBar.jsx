
import { useEffect, useState } from 'react'
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
  return <NavBarContainer checkHome={checkHome} isInHome={isInHome} navigationLinks={navigationLinks} />
}
