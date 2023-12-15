import { EllipseBosque, EllipseDesierto, EllipseMontaña, EllipseOceano, bannerAllEcosystems } from "../../../assets/ecosystem"
import { bosqueAnimalBottom, bosqueAnimalCenter, bosqueAnimalLeft, bosqueAnimalRightDown, bosqueAnimalRigthTop } from "../../../assets/ecosystem/bosques"
import { desiertoAnimalBottom, desiertoAnimalCenter, desiertoAnimalLeft, desiertoAnimalRightDown, desiertoAnimalRigthTop } from "../../../assets/ecosystem/decierto"
import { montañaAnimalBottom, montañaAnimalCenter, montañaAnimalLeft, montañaAnimalRightTop } from "../../../assets/ecosystem/montaña"
import { oceanoAnimalBottom, oceanoAnimalCenter, oceanoAnimalLeft, oceanoAnimalRightDown, oceanoAnimalRigthTop } from "../../../assets/ecosystem/oceano"
import { sabanaAnimalBottom, sabanaAnimalCenter, sabanaAnimalLeft, sabanaAnimalRightDown, sabanaAnimalRightTop } from "../../../assets/ecosystem/sabana"
import { videoSabana } from "../../../assets/ecosystem/videos"



const nameExaple = 'Lindo Bichito'
const textExample = `Los ecosistemas de sabanas y pastizales en América Latina son verdaderos tesoros de biodiversidad, destacándose por su amplitud y singularidad. Con estaciones secas y húmedas, estos entornos dinámicos impulsan la adaptación de la flora y fauna a las cambiantes condiciones climáticas. Esta diversidad brinda un hábitat propicio para una variedad de mamíferos, aves, reptiles e insectos. Los habitantes de estas tierras abiertas han evolucionado con astutas adaptaciones, desde sistemas de camuflaje hasta complejos patrones migratorios y sociales. 
Estos ecosistemas desempeñan un papel vital en la conservación del suelo, además de servir como refugio para especies en peligro de extinción. Sin embargo, la biodiversidad de estos ecosistemas enfrenta desafíos significativos, incluyendo la pérdida de hábitat debido a la expansión agrícola y la caza. La conservación de estos paisajes no solo preserva la diversidad biológica única, sino que también garantiza la sostenibilidad a largo plazo de estos ecosistemas esenciales para la salud del planeta.`
const bannerDePrueba = bannerAllEcosystems


const allEcosystem = [];
export const MAIN_AREA = 'SABANAS'



allEcosystem.push({
  id:1,
  title:`SABANAS Y PASTIZALES`,
  area:'SABANAS',
  text: textExample,
  banerFondo:videoSabana,
  iconImg:EllipseDesierto,
  allAnimals:{
    left:{
      img:sabanaAnimalLeft,
      link: '#',
      name:'Tapir de Baird'
    },
    center:{
      img:sabanaAnimalCenter,
      link: '#',
      name:'Huemul'
    },
    right:{
      top:{
        img:sabanaAnimalRightTop,
        link: '#',
        name:'Tatú Gigante'
      },
      down:{
        img:sabanaAnimalRightDown,
        link: '#',
        name:'Cardenal  Amarillo'
      }
    },
    bottom:{
      img:sabanaAnimalBottom,
      link: '#',
      name:'Oso homiguero gigante'
    },
  }
})
allEcosystem.push({
  id:2,
  title:`Fauna dela Desierto`,
  area:'DESIERTO',
  text:textExample,
  banerFondo:bannerDePrueba,
  iconImg:EllipseDesierto,
  allAnimals:{
    left:{
      img:desiertoAnimalLeft,
      link: '#',
      name:nameExaple
    },
    center:{
      img:desiertoAnimalCenter,
      link: '#',
      name:nameExaple
    },
    right:{
      top:{
        img:desiertoAnimalRigthTop,
        link: '#',
        name:nameExaple
      },
      down:{
        img:desiertoAnimalRightDown,
        link: '#',
        name:nameExaple
      }
    },
    bottom:{
      img:desiertoAnimalBottom,
      link: '#',
      name:nameExaple
    },
  }

})
allEcosystem.push({
  id:3,
  title:`Fauna de las montañas`,
  area:'MONTAÑAS',
  text:textExample,
  banerFondo:bannerDePrueba,
  iconImg: EllipseMontaña,
  allAnimals:{
    left:{
      img:montañaAnimalLeft,
      link: '#',
      name:nameExaple
    },
    center:{
      img:montañaAnimalCenter,
      link: '#',
      name:nameExaple
    },
    right:{
      top:{
        img:montañaAnimalRightTop,
        link: '#',
        name:nameExaple
      }
    },
    bottom:{
      img:montañaAnimalBottom,
      link: '#',
      name:nameExaple
    },
  }
})
allEcosystem.push({
  id:4,
  title:`Fauna de los oceanos`,
  area:'OCEANOS',
  text: textExample,
  banerFondo:bannerDePrueba,
  iconImg: EllipseOceano,
  allAnimals:{
    left:{
      img:oceanoAnimalLeft,
      link: '#',
      name:nameExaple
    },
    center:{
      img:oceanoAnimalCenter,
      link: '#',
      name:nameExaple
    },
    right:{
      top:{
        img:oceanoAnimalRigthTop,
        link: '#',
        name:nameExaple
      },
      down:{
        img:oceanoAnimalRightDown,
        link: '#',
        name:nameExaple
      }
    },
    bottom:{
      img:oceanoAnimalBottom,
      link: '#',
      name:nameExaple
    },
  }
})
allEcosystem.push({
  id:5,
  title:`Fauna de los Bosques`,
  area:'BOSQUES',
  text:textExample,
  banerFondo:bannerDePrueba,
  iconImg:EllipseBosque,
  allAnimals:{
    left:{
      img:bosqueAnimalLeft,
      link: '#',
      name:nameExaple
    },
    center:{
      img:bosqueAnimalCenter,
      link: '#',
      name:nameExaple
    },
    right:{
      top:{
        img:bosqueAnimalRigthTop,
        link: '#',
        name:nameExaple
      },
      down:{
        img:bosqueAnimalRightDown,
        link: '#',
        name:nameExaple
      }
    },
    bottom:{
      img:bosqueAnimalBottom,
      link: '#',
      name:nameExaple
    },
  }
})

export default allEcosystem;


