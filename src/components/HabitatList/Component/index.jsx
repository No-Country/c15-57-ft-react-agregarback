import bosque from '../../../assets/habitats/bosque.jpg'
import desierto from '../../../assets/habitats/desierto.jpg'
import montania from '../../../assets/habitats/montania.jpg'
import oceano from '../../../assets/habitats/oceano.jpg'
import sabana from '../../../assets/habitats/sabana.jpg'
import HabitatListContainer from '../Presentation/HabitatList'

export default function HabitatList () {
  const habitats = [
    { img: bosque, name: 'Bosques y Selvas' },
    { img: desierto, name: 'Desiertos' },
    { img: montania, name: 'Montañas' },
    { img: oceano, name: 'Oceanos y Mares' },
    { img: sabana, name: 'Sabanas' }
  ]

  return <div><HabitatListContainer habitats={habitats} /></div>
}
