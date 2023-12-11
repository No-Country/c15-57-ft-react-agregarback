import NavBarLinks from './NavBarLinks'
import NavBarLayout from './NavBarLayout'
const NavBarContainer = ({ navigationLinks }) => {
  // leer la ruta
  // contatext contenido
  // if y else- cambio de color de la fuente

  return (
    <NavBarLayout>
      <NavBarLinks links={navigationLinks} />
    </NavBarLayout>
  )
}

export default NavBarContainer
