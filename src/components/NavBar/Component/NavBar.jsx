
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

 
  
  const [isInHome , setIsInHome] = useState(true);
  const checkHome = ()=>{
    const currentPath = window.location.pathname;
   setTimeout(()=>{
    if ( currentPath === '/'){
      setIsInHome(true)
    }else{ 
      setIsInHome(false)
      
    }
   },0)
    
  }
  useEffect(()=>{
    // Obtener la ruta actual
     
    checkHome()

},[])
  return <NavBarContainer checkHome={checkHome} isInHome={isInHome} navigationLinks={navigationLinks} />
}
