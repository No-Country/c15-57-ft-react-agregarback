import { EllipseBosque, EllipseDesierto, EllipseMontaña, EllipseOceano } from "../../../assets/ecosystem"
import { sabanaAnimalBottom, sabanaAnimalCenter, sabanaAnimalLeft, sabanaAnimalRightDown, sabanaAnimalRightTop } from "../../../assets/ecosystem/sabana"
const nameExaple = 'Lindo Bichito'
const textExample = `Los ecosistemas de sabanas y pastizales en América Latina son verdaderos tesoros de biodiversidad, destacándose por su amplitud y singularidad. Con estaciones secas y húmedas, estos entornos dinámicos impulsan la adaptación de la flora y fauna a las cambiantes condiciones climáticas. Esta diversidad brinda un hábitat propicio para una variedad de mamíferos, aves, reptiles e insectos. Los habitantes de estas tierras abiertas han evolucionado con astutas adaptaciones, desde sistemas de camuflaje hasta complejos patrones migratorios y sociales. 
Estos ecosistemas desempeñan un papel vital en la conservación del suelo, además de servir como refugio para especies en peligro de extinción. Sin embargo, la biodiversidad de estos ecosistemas enfrenta desafíos significativos, incluyendo la pérdida de hábitat debido a la expansión agrícola y la caza. La conservación de estos paisajes no solo preserva la diversidad biológica única, sino que también garantiza la sostenibilidad a largo plazo de estos ecosistemas esenciales para la salud del planeta.`
const allEcosystem = [ ]
export const MAIN_AREA = 'SABANAS'

// , , ,  ,
allEcosystem.push({
  id:1,
  title:`SABANAS Y PASTIZALES`,
  area:'SABANAS',
  text: textExample,
  iconImg:EllipseDesierto,
  allAnimals:{
    left:{
      img:sabanaAnimalLeft,
      link: '#',
      name:nameExaple
    },
    center:{
      img:sabanaAnimalCenter,
      link: '#',
      name:nameExaple
    },
    right:{
      top:{
        img:sabanaAnimalRightTop,
        link: '#',
        name:nameExaple
      },
      down:{
        img:sabanaAnimalRightDown,
        link: '#',
        name:nameExaple
      }
    },
    bottom:{
      img:sabanaAnimalBottom,
      link: '#',
      name:nameExaple
    },
  }
})
allEcosystem.push({
  id:2,
  title:`Fauna dela Desierto`,
  area:'DESIERTO',
  text:textExample,
  iconImg:EllipseDesierto,

})
allEcosystem.push({
  id:3,
  title:`Fauna de las montañas`,
  area:'MONTAÑAS',
  text:textExample,
  iconImg: EllipseMontaña,
})
allEcosystem.push({
  id:4,
  title:`Fauna de los oceanos`,
  area:'OCEANOS',
  text: textExample,
  iconImg: EllipseOceano,
})
allEcosystem.push({
  id:5,
  title:`Fauna de los Bosques`,
  area:'BOSQUES',
  text:textExample,
  iconImg:EllipseBosque,
})

export default allEcosystem;

/**
  allAnimals:{
    left:{
      img:sabanaAnimalLeft,
      link: '#'
    },
    center:{
      img:sabanaAnimalLeft,
      link: '#'
    },
    right:{
      top:{
        img:sabanaAnimalLeft,
        link: '#'
      },
      dow:{
        img:sabanaAnimalLeft,
        link: '#'
      }
    },
    bottom:{
      img:sabanaAnimalLeft,
      link: '#'
    },
  }
 
 */