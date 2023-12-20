import Ayuda1 from '../../../assets/InfoAnimals/Ayuda1.png'
import Ayuda2 from '../../../assets/InfoAnimals/Ayuda2.png'

import AnimalVaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/VaquitaMarina.png'
import WorldMapVaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/WorldMap1.png'
import Amenazas1VaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/Amenazas0.png'
import Amenazas2VaquitaMarina from '../../../assets/InfoAnimals/VaquitaMarina/Amenazas1.png'

import AnimalJaguar from '../../../assets/InfoAnimals/Jaguar/Jaguar.png'
import WorldMapJaguar from '../../../assets/InfoAnimals/Jaguar/WorldMap2.png'
import Amenazas1Jaguar from '../../../assets/InfoAnimals/Jaguar/Amenazas2.png'
import Amenazas2Jaguar from '../../../assets/InfoAnimals/Jaguar/Amenazas3.png'

import AnimalManati from '../../../assets/InfoAnimals/ManatiDelCaribe/ManatiDelCaribe.png'
import WorldMapManati from '../../../assets/InfoAnimals/ManatiDelCaribe/WorldMap3.png'
import Amenazas1Manati from '../../../assets/InfoAnimals/ManatiDelCaribe/Amenazas4.png'
import Amenazas2Manati from '../../../assets/InfoAnimals/ManatiDelCaribe/Amenazas5.png'

import AnimalOso from '../../../assets/InfoAnimals/OsoDeAnteojos/OsoDeAntejos.png'
import WorldMapOso from '../../../assets/InfoAnimals/OsoDeAnteojos/WorldMap4.png'
import Amenazas1Oso from '../../../assets/InfoAnimals/OsoDeAnteojos/Amenazas6.png'
import Amenazas2Oso from '../../../assets/InfoAnimals/OsoDeAnteojos/Amenazas7.png'

import AnimalMono from '../../../assets/InfoAnimals/MonoAraña/MonoAraña.png'
import WorldMapMono from '../../../assets/InfoAnimals/MonoAraña/WorldMap5.png'
import Amenazas1Mono from '../../../assets/InfoAnimals/MonoAraña/Amenazas8.png'
import Amenazas2Mono from '../../../assets/InfoAnimals/MonoAraña/Amenazas9.png'

import AnimalTortuga from '../../../assets/InfoAnimals/TortugaCarey/TortugaCarey.png'
import WorldMapTortuga from '../../../assets/InfoAnimals/TortugaCarey/WorldMap6.png'
import Amenazas1Tortuga from '../../../assets/InfoAnimals/TortugaCarey/Amenazas10.png'
import Amenazas2Tortuga from '../../../assets/InfoAnimals/TortugaCarey/Amenazas11.png'

import AnimalGuara from '../../../assets/InfoAnimals/AguaraGuazu/AguaraGuazu.png'
import WorldMapGuara from '../../../assets/InfoAnimals/AguaraGuazu/WorldMap7.png'
import Amenazas1Guara from '../../../assets/InfoAnimals/AguaraGuazu/Amenazas12.png'
import Amenazas2Guara from '../../../assets/InfoAnimals/AguaraGuazu/Amenazas13.png'

import AnimalAjolote from '../../../assets/InfoAnimals/Ajolote/Ajolote.png'
import WorldMapAjolote from '../../../assets/InfoAnimals/Ajolote/WorldMap8.png'
import Amenazas1Ajolote from '../../../assets/InfoAnimals/Ajolote/Amenazas14.png'
import Amenazas2Ajolote from '../../../assets/InfoAnimals/Ajolote/Amenazas15.png'

import AnimalTapir from '../../../assets/InfoAnimals/TapirDeBaird/TapirDeBaird.png'
import WorldMapTapir from '../../../assets/InfoAnimals/TapirDeBaird/WorldMap9.png'
import Amenazas1Tapir from '../../../assets/InfoAnimals/TapirDeBaird/Amenazas16.png'
import Amenazas2Tapir from '../../../assets/InfoAnimals/TapirDeBaird/Amenazas17.png'

import AnimalHuemul from '../../../assets/InfoAnimals/Huemul/Huemul.png'
import WorldMapHuemul from '../../../assets/InfoAnimals/Huemul/WorldMap10.png'
import Amenazas1Huemul from '../../../assets/InfoAnimals/Huemul/Amenazas18.png'
import Amenazas2Huemul from '../../../assets/InfoAnimals/Huemul/Amenazas19.png'

import AnimalTatu from '../../../assets/InfoAnimals/TatuGigante/TatuGigante.png'
import WorldMapTatu from '../../../assets/InfoAnimals/TatuGigante/WorldMap11.png'
import Amenazas1Tatu from '../../../assets/InfoAnimals/TatuGigante/Amenazas20.png'
import Amenazas2Tatu from '../../../assets/InfoAnimals/TatuGigante/Amenazas21.png'

import AnimalCardenal from '../../../assets/InfoAnimals/CardenalAmarillo/CardenalAmarillo.png'
import WorldMapCardenal from '../../../assets/InfoAnimals/CardenalAmarillo/WorldMap12.png'
import Amenazas1Cardenal from '../../../assets/InfoAnimals/CardenalAmarillo/Amenazas22.png'
import Amenazas2Cardenal from '../../../assets/InfoAnimals/CardenalAmarillo/Amenazas23.png'

import AnimalHormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/OsoHormigueroGigante.png'
import WorldMapHormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/WorldMap13.png'
import Amenazas1Hormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/Amenazas24.png'
import Amenazas2Hormiguero from '../../../assets/InfoAnimals/OsoHormigueroGigante/Amenazas25.png'

export function getAnimal (animal) {
  switch (animal) {
    case 'vaquitaMarina':
      return {
        Animal: AnimalVaquitaMarina,
        WorldMap1: WorldMapVaquitaMarina,
        Amenazas1: Amenazas1VaquitaMarina,
        Amenazas2: Amenazas2VaquitaMarina,
        Ayuda1,
        Ayuda2
      }
    case 'jaguar':
      return {
        Animal: AnimalJaguar,
        WorldMap1: WorldMapJaguar,
        Amenazas1: Amenazas1Jaguar,
        Amenazas2: Amenazas2Jaguar,
        Ayuda1,
        Ayuda2
      }
    case 'manati':
      return {
        Animal: AnimalManati,
        WorldMap1: WorldMapManati,
        Amenazas1: Amenazas1Manati,
        Amenazas2: Amenazas2Manati,
        Ayuda1,
        Ayuda2
      }
    case 'oso':
      return {
        Animal: AnimalOso,
        WorldMap1: WorldMapOso,
        Amenazas1: Amenazas1Oso,
        Amenazas2: Amenazas2Oso,
        Ayuda1,
        Ayuda2
      }
    case 'mono':
      return {
        Animal: AnimalMono,
        WorldMap1: WorldMapMono,
        Amenazas1: Amenazas1Mono,
        Amenazas2: Amenazas2Mono,
        Ayuda1,
        Ayuda2
      }
    case 'tortuga':
      return {
        Animal: AnimalTortuga,
        WorldMap1: WorldMapTortuga,
        Amenazas1: Amenazas1Tortuga,
        Amenazas2: Amenazas2Tortuga,
        Ayuda1,
        Ayuda2
      }
    case 'guara':
      return {
        Animal: AnimalGuara,
        WorldMap1: WorldMapGuara,
        Amenazas1: Amenazas1Guara,
        Amenazas2: Amenazas2Guara,
        Ayuda1,
        Ayuda2
      }
    case 'ajolote':
      return {
        Animal: AnimalAjolote,
        WorldMap1: WorldMapAjolote,
        Amenazas1: Amenazas1Ajolote,
        Amenazas2: Amenazas2Ajolote,
        Ayuda1,
        Ayuda2
      }
    case 'tapir':
      return {
        Animal: AnimalTapir,
        WorldMap1: WorldMapTapir,
        Amenazas1: Amenazas1Tapir,
        Amenazas2: Amenazas2Tapir,
        Ayuda1,
        Ayuda2
      }
    case 'huemul':
      return {
        Animal: AnimalHuemul,
        WorldMap1: WorldMapHuemul,
        Amenazas1: Amenazas1Huemul,
        Amenazas2: Amenazas2Huemul,
        Ayuda1,
        Ayuda2
      }
    case 'tatu':
      return {
        Animal: AnimalTatu,
        WorldMap1: WorldMapTatu,
        Amenazas1: Amenazas1Tatu,
        Amenazas2: Amenazas2Tatu,
        Ayuda1,
        Ayuda2
      }
    case 'cardenal':
      return {
        Animal: AnimalCardenal,
        WorldMap1: WorldMapCardenal,
        Amenazas1: Amenazas1Cardenal,
        Amenazas2: Amenazas2Cardenal,
        Ayuda1,
        Ayuda2
      }
    case 'hormiguero':
      return {
        Animal: AnimalHormiguero,
        WorldMap1: WorldMapHormiguero,
        Amenazas1: Amenazas1Hormiguero,
        Amenazas2: Amenazas2Hormiguero,
        Ayuda1,
        Ayuda2
      }
    default: return {
      Animal: AnimalVaquitaMarina,
      WorldMap1: WorldMapVaquitaMarina,
      Amenazas1: Amenazas1VaquitaMarina,
      Amenazas2: Amenazas2VaquitaMarina,
      Ayuda1,
      Ayuda2
    }
  }
}
