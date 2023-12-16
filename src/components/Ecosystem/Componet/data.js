import { EllipseBosque, EllipseDesierto, EllipseMontaña, EllipseOceano, bannerAllEcosystems } from "../../../assets/ecosystem"
import { bosqueAnimalBottom, bosqueAnimalCenter, bosqueAnimalLeft, bosqueAnimalRightDown, bosqueAnimalRigthTop } from "../../../assets/ecosystem/bosques"
import { desiertoAnimalBottom, desiertoAnimalCenter, desiertoAnimalLeft, desiertoAnimalRightDown, desiertoAnimalRigthTop } from "../../../assets/ecosystem/decierto"
import { montañaAnimalBottom, montañaAnimalCenter, montañaAnimalLeft, montañaAnimalRightDown, montañaAnimalRightTop } from "../../../assets/ecosystem/montaña"
import { oceanoAnimalBottom, oceanoAnimalCenter, oceanoAnimalLeft, oceanoAnimalRightDown, oceanoAnimalRigthTop } from "../../../assets/ecosystem/oceano"
import { sabanaAnimalBottom, sabanaAnimalCenter, sabanaAnimalLeft, sabanaAnimalRightDown, sabanaAnimalRightTop } from "../../../assets/ecosystem/sabana"
import { videoSabana } from "../../../assets/ecosystem/videos"

const videoLinkDesierto = "https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/c5e6/8eb0/-b17c-434d-aac3-eb3d5392bf84?Expires=1703462400&Signature=VE6QMxvfP9kxVMThfu1nVj8S11VoaoIpUCAFs2nE2yEPNKs8M-fDc4Pk3kEF5Z1un74~ea8UCqN4ejxdUAjInGaO04GRhDtqY563XB67925JljZUUXCFmpyztDrowELm3KIdtxTAIu6BsL6y-nDUd4tgvBYteXw-avAvlv9MUEaG3cbk29TWlsLe2gHpXafTNJugAZArbPOFgpxc~FOA8JrdgtXSpei-MX2elCL14MbWPIoLWEW~ACCG7LTRc9EvzzBmuUi0L~ey54AC126rfJMtrsfHhQavnqqcvL-fykzOHvncocvNMW2-gmKTC60gl2P9vg7jzjJXJPtBTBrnMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const videoLinkMontaña = "https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/a920/24ca/-536c-4a10-b409-6294389bb57a?Expires=1703462400&Signature=dii88lGMsuDk0E5EjOR5AuQXwUWBnBsbhJKvcEaccljNaPJFkB~C6UtvRa4dtRThyLn7QWV7DXRCZNRRswGJebns3cmGG77-OgS-9tFSqnrh9rMYwNpbO3ciWxzEhmfOmXzfKcWDqx2j6admRp24ovGakP89SN7PSgyumABUa54OC0LnObImelehL7kntbWu72flz1TtuULTOGXiU4yoJyDRyyEmwwhfUg-ornyhaWGP5BHbsz-mXe2v4I0nmg4zxozio6Ou3CA23LWRjqDXCn-9afolx65A8e1tYgCJrAQtVmG0NV1WeFKf5XCoBfWosCYqX2Ux2T7n7chg2NuyGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const videoLinkOceano = "https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/6d1c/ec1d/-980c-4d4d-b154-204707e7acd4?Expires=1703462400&Signature=jCeZnfH7S8GNozLgoGeidTRDcjGeBrK9au1kLEKxFkh9~RfyJcNz3jAIzOoY7uFfhgsbkhrWCiOvnU3J8c9TZLkBxHM-X16c7Bic1jysyA8WLKnMNVk3kDPzRwvuPwoQsCkp27VvTsp~PggIcyfsoOJM~N6y0aVG4okGQgDC4QbK9qySjOKWafYZNHpQ4hCNob9Y2ZfZhdZMwbmvP7teYjy3OmrXuBca854au7cEHqqDGDsLJlfnoC6qF~L5SZNLRlur5ovRmStFg-9wcArcF5OVGDY~AWLV~9dhndaHoYtID5s89cJ~VRLAB0EvfPBz3u4D7rYOvojB1OoVYzV0hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
const videoLinkBosque = "https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/1887/aee7/-309e-4097-a726-e8d33c19b313?Expires=1703462400&Signature=f1C6cCvvb63uNJ-QbDP~iG5czb2axRZ-edm81U~hHAuV3VbbdOtjOjvNDJVuPXSc-FqW4OJZllqu3USyIoWTLsHkjXJ4y~uNk0SoeP2JFRU5LcXTKMj0wf6pMY30c7GIuvFNFADQi44Xauhns58bjKTbkfndMoRcHjIeJ-EypCtixjuOTHur3Nc0T7QWL4dcNZSK7xmfXzl5C0XxSF8gRNApSbS21bYKokv5KMcGn817LfXJ3FFWz3CZMPj~G8z2crf5-1zhmdyvwzDKLNKh3bdbRh7eky4TciTkVsgWUKc-aTQB7R997xOclkXQyviS7G4AbtOlCk-Z8E2InJeLKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"





const textExample = `Los ecosistemas de sabanas y pastizales en América Latina son verdaderos tesoros de biodiversidad, destacándose por su amplitud y singularidad. Con estaciones secas y húmedas, estos entornos dinámicos impulsan la adaptación de la flora y fauna a las cambiantes condiciones climáticas. Esta diversidad brinda un hábitat propicio para una variedad de mamíferos, aves, reptiles e insectos. Los habitantes de estas tierras abiertas han evolucionado con astutas adaptaciones, desde sistemas de camuflaje hasta complejos patrones migratorios y sociales. 
Estos ecosistemas desempeñan un papel vital en la conservación del suelo, además de servir como refugio para especies en peligro de extinción. Sin embargo, la biodiversidad de estos ecosistemas enfrenta desafíos significativos, incluyendo la pérdida de hábitat debido a la expansión agrícola y la caza. La conservación de estos paisajes no solo preserva la diversidad biológica única, sino que también garantiza la sostenibilidad a largo plazo de estos ecosistemas esenciales para la salud del planeta.`
const bannerDePrueba = bannerAllEcosystems


const allEcosystem = [];
export const MAIN_AREA = 'SABANAS'

//


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
  title:`DESIERTOS`,
  area:'DESIERTO',
  text:textExample,
  banerFondo:videoLinkDesierto,
  iconImg:EllipseDesierto,
  allAnimals:{
    left:{
      img:desiertoAnimalLeft,
      link: '#',
      name:'Tortuga del desierto'
    },
    center:{
      img:desiertoAnimalCenter,
      link: '#',
      name:'Condor andino'
    },
    right:{
      top:{
        img:desiertoAnimalRigthTop,
        link: '#',
        name:'Gato de La Pampa'
      },
      down:{
        img:desiertoAnimalRightDown,
        link: '#',
        name:'Iguana Rosada'
      }
    },
    bottom:{
      img:desiertoAnimalBottom,
      link: '#',
      name:'Zorro costeño'
    },
  }

})
allEcosystem.push({
  id:3,
  title:`MONTAÑAS`,
  area:'MONTAÑAS',
  text:textExample,
  banerFondo:videoLinkMontaña,
  iconImg: EllipseMontaña,
  allAnimals:{
    left:{
      img:montañaAnimalLeft,
      link: '#',
      name:'Escuercito achaleño'
    },
    center:{
      img:montañaAnimalCenter,
      link: '#',
      name:`Chinchilla del altiplano`
    },
    right:{
      top:{
        img:montañaAnimalRightTop,
        link: '#',
        name:'Serpiente cascabel de Isla Santa Catalina'
      },down:{
        img:montañaAnimalRightDown,
        link: '#',
        name:'Aguilucho'
      }
    },
    bottom:{
      img:montañaAnimalBottom,
      link: '#',
      name:'Gato andino'
    },
  }
})
allEcosystem.push({
  id:4,
  title:`OCEANOS, RIOS Y LAGUNAS`,
  area:'OCEANOS',
  text: textExample,
  banerFondo:videoLinkOceano,
  iconImg: EllipseOceano,
  allAnimals:{
    left:{
      img:oceanoAnimalLeft,
      link: '#',
      name:'Marsopa espinosa'
    },
    center:{
      img:oceanoAnimalCenter,
      link: '#',
      name:'Lobo peletero de Galápagos'
    },
    right:{
      top:{
        img:oceanoAnimalRigthTop,
        link: '#',
        name:'Tortuga Laúd'
      },
      down:{
        img:oceanoAnimalRightDown,
        link: '#',
        name:'Mantarraya gigante'
      }
    },
    bottom:{
      img:oceanoAnimalBottom,
      link: '#',
      name:'Tiburón ballena'
    },
  }
})
allEcosystem.push({
  id:5,
  title:'BOSQUES Y SELVAS',
  area:'BOSQUES',
  text:textExample,
  banerFondo:videoLinkBosque,
  iconImg:EllipseBosque,
  allAnimals:{
    left:{
      img:bosqueAnimalLeft,
      link: '#',
      name:'Mono nocturno andino'
    },
    center:{
      img:bosqueAnimalCenter,
      link: '#',
      name:'Mono aullador'
    },
    right:{
      top:{
        img:bosqueAnimalRigthTop,
        link: '#',
        name:'Tamarino calvo'
      },
      down:{
        img:bosqueAnimalRightDown,
        link: '#',
        name:'Ocelote'
      }
    },
    bottom:{
      img:bosqueAnimalBottom,
      link: '#',
      name:'Oso prerezoso de tres dedos'
    },
  }
})

export default allEcosystem;


