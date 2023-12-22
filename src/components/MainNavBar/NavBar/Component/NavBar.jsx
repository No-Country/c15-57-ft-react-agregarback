import NavBarContainer from '../Presentation/NavBar.jsx'

const navigationLinks = [
  {
    to: '/',
    link: 'Inicio'
  },
  {
    to: '/Store',
    link: 'Tienda'
  },
  {
    to: '/WhoWeAre',
    link: '¿Quienes Somos?'
  },
  {
    to: 'VulnerableSpecies',
    link: 'Especies Vulnerables'
  }
]

export default function NavBar () {
  return <NavBarContainer navigationLinks={navigationLinks} />
}
