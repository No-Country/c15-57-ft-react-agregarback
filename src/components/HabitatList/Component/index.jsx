import bosque from '../../../assets/habitats/bosque.jpg'
import desierto from '../../../assets/habitats/desierto.jpg'
import montania from '../../../assets/habitats/montania.jpg'
import oceano from '../../../assets/habitats/oceano.jpg'
import sabana from '../../../assets/habitats/sabana.jpg'
import HabitatListContainer from '../Presentation/HabitatList'

export default function HabitatList () {
  const habitats = [
    { img: bosque, name: 'Bosques y Selvas', path: '/Ecosystems/bosques' },
    { img: desierto, name: 'Desiertos', path: '/Ecosystems/desiertos' },
    { img: montania, name: 'Montañas', path: '/Ecosystems/montañas' },
    { img: oceano, name: 'Oceanos, Rios y Lagunas', path: '/Ecosystems/oceanos-rios' },
    { img: sabana, name: 'Sabanas y Pastizales', path: '/Ecosystems/sabana-pastizales' }
  ]

  return <div><HabitatListContainer habitats={habitats} /></div>
}
