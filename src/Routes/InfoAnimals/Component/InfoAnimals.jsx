import { useLoaderData } from 'react-router-dom'

import InfoAnimals from '../Presentation/InfoAnimals'
import { getAnimal } from './animals'


export const InfoAnimalsContainer = () => {

  const { animalInfo } = useLoaderData();

  return <InfoAnimals {...animalInfo} />
}

export const loaderAnimal = async () => {
  const data = getAnimal('VaquitaMarina')
  const animalInfo = data;
  return { animalInfo };
};