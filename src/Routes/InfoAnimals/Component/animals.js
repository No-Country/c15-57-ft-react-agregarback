import AnimalVaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/VaquitaMarina.png'
import WorldMapVaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/WorldMap1.png'
import AmenazasVaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/Amenazas1.png'
import Ayuda1VaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/Ayuda1.png'
import Ayuda2VaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/Ayuda2.png'

import AnimalJaguar from '../../../assets/InfoAnimals/Jaguar/Jaguar.png'
import WorldMapJaguar from '../../../assets/InfoAnimals/Jaguar/WorldMap1.png'
import AmenazasJaguar from '../../../assets/InfoAnimals/Jaguar/Amenazas1.png'
import Ayuda1Jaguar from '../../../assets/InfoAnimals/Jaguar/Ayuda1.png'
import Ayuda2Jaguar from '../../../assets/InfoAnimals/Jaguar/Ayuda2.png'

import EspecieCircular1 from '../../../assets/InfoAnimals/VaquitaMarina/EspecieCircular1.png'
import EspecieCircular2 from '../../../assets/InfoAnimals/VaquitaMarina/EspecieCircular2.png'
import EspecieCircular3 from '../../../assets/InfoAnimals/VaquitaMarina/EspecieCircular3.png'

export function getAnimal (animal) {
  switch (animal) {
    case 'vaquitaMarina':
      return {
        Animal: AnimalVaquitaMarina,
        WorldMap1: WorldMapVaquitaMarina,
        Amenazas1: AmenazasVaquitaMarina,
        Ayuda1: Ayuda1VaquitaMarina,
        Ayuda2: Ayuda2VaquitaMarina,
        EspecieCircular1,
        EspecieCircular2,
        EspecieCircular3
      }
    case 'jaguar':
      return {
        Animal: AnimalJaguar,
        WorldMap1: WorldMapJaguar,
        Amenazas1: AmenazasJaguar,
        Ayuda1: Ayuda1Jaguar,
        Ayuda2: Ayuda2Jaguar,
        EspecieCircular1,
        EspecieCircular2,
        EspecieCircular3
      }
    default: return {
      Animal: AnimalJaguar,
      WorldMap1: WorldMapJaguar,
      Amenazas1: AmenazasJaguar,
      Ayuda1: Ayuda1Jaguar,
      Ayuda2: Ayuda2Jaguar,
      EspecieCircular1,
      EspecieCircular2,
      EspecieCircular3
    }
  }
}
