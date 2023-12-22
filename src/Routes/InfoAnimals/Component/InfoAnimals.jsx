import InfoAnimals from '../Presentation/InfoAnimals'

import { getAnimal } from './animals'
import { useParams } from 'react-router-dom'

const InfoAnimalsContainer = () => {
  const { animal } = useParams()
  const animalInfo = getAnimal(animal)
  return <InfoAnimals {...animalInfo} />
}

export default InfoAnimalsContainer
