
import { bosqueAnimalBottom, bosqueAnimalCenter, bosqueAnimalLeft, bosqueAnimalRightDown, bosqueAnimalRigthTop } from '../../../assets/ecosystem/bosques'
import { desiertoAnimalBottom, desiertoAnimalCenter, desiertoAnimalLeft, desiertoAnimalRightDown, desiertoAnimalRigthTop } from '../../../assets/ecosystem/decierto'
import { montañaAnimalBottom, montañaAnimalCenter, montañaAnimalLeft, montañaAnimalRightDown, montañaAnimalRightTop } from '../../../assets/ecosystem/montaña'
import { oceanoAnimalBottom, oceanoAnimalCenter, oceanoAnimalLeft, oceanoAnimalRightDown, oceanoAnimalRigthTop } from '../../../assets/ecosystem/oceano'
import { sabanaAnimalBottom, sabanaAnimalCenter, sabanaAnimalLeft, sabanaAnimalRightDown, sabanaAnimalRightTop } from '../../../assets/ecosystem/sabana'
import { videoSabana } from '../../../assets/ecosystem/videos'

const videoLinkDesierto = 'https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/c5e6/8eb0/-b17c-434d-aac3-eb3d5392bf84?Expires=1703462400&Signature=VE6QMxvfP9kxVMThfu1nVj8S11VoaoIpUCAFs2nE2yEPNKs8M-fDc4Pk3kEF5Z1un74~ea8UCqN4ejxdUAjInGaO04GRhDtqY563XB67925JljZUUXCFmpyztDrowELm3KIdtxTAIu6BsL6y-nDUd4tgvBYteXw-avAvlv9MUEaG3cbk29TWlsLe2gHpXafTNJugAZArbPOFgpxc~FOA8JrdgtXSpei-MX2elCL14MbWPIoLWEW~ACCG7LTRc9EvzzBmuUi0L~ey54AC126rfJMtrsfHhQavnqqcvL-fykzOHvncocvNMW2-gmKTC60gl2P9vg7jzjJXJPtBTBrnMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const videoLinkMontaña = 'https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/a920/24ca/-536c-4a10-b409-6294389bb57a?Expires=1703462400&Signature=dii88lGMsuDk0E5EjOR5AuQXwUWBnBsbhJKvcEaccljNaPJFkB~C6UtvRa4dtRThyLn7QWV7DXRCZNRRswGJebns3cmGG77-OgS-9tFSqnrh9rMYwNpbO3ciWxzEhmfOmXzfKcWDqx2j6admRp24ovGakP89SN7PSgyumABUa54OC0LnObImelehL7kntbWu72flz1TtuULTOGXiU4yoJyDRyyEmwwhfUg-ornyhaWGP5BHbsz-mXe2v4I0nmg4zxozio6Ou3CA23LWRjqDXCn-9afolx65A8e1tYgCJrAQtVmG0NV1WeFKf5XCoBfWosCYqX2Ux2T7n7chg2NuyGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const videoLinkOceano = 'https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/6d1c/ec1d/-980c-4d4d-b154-204707e7acd4?Expires=1703462400&Signature=jCeZnfH7S8GNozLgoGeidTRDcjGeBrK9au1kLEKxFkh9~RfyJcNz3jAIzOoY7uFfhgsbkhrWCiOvnU3J8c9TZLkBxHM-X16c7Bic1jysyA8WLKnMNVk3kDPzRwvuPwoQsCkp27VvTsp~PggIcyfsoOJM~N6y0aVG4okGQgDC4QbK9qySjOKWafYZNHpQ4hCNob9Y2ZfZhdZMwbmvP7teYjy3OmrXuBca854au7cEHqqDGDsLJlfnoC6qF~L5SZNLRlur5ovRmStFg-9wcArcF5OVGDY~AWLV~9dhndaHoYtID5s89cJ~VRLAB0EvfPBz3u4D7rYOvojB1OoVYzV0hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
const videoLinkBosque = 'https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/1887/aee7/-309e-4097-a726-e8d33c19b313?Expires=1703462400&Signature=f1C6cCvvb63uNJ-QbDP~iG5czb2axRZ-edm81U~hHAuV3VbbdOtjOjvNDJVuPXSc-FqW4OJZllqu3USyIoWTLsHkjXJ4y~uNk0SoeP2JFRU5LcXTKMj0wf6pMY30c7GIuvFNFADQi44Xauhns58bjKTbkfndMoRcHjIeJ-EypCtixjuOTHur3Nc0T7QWL4dcNZSK7xmfXzl5C0XxSF8gRNApSbS21bYKokv5KMcGn817LfXJ3FFWz3CZMPj~G8z2crf5-1zhmdyvwzDKLNKh3bdbRh7eky4TciTkVsgWUKc-aTQB7R997xOclkXQyviS7G4AbtOlCk-Z8E2InJeLKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

const textSabanas = `Los ecosistemas de sabanas y pastizales en América Latina son verdaderos tesoros de biodiversidad, destacándose por su amplitud y singularidad. Con estaciones secas y húmedas, estos entornos dinámicos impulsan la adaptación de la flora y fauna a las cambiantes condiciones climáticas. Esta diversidad brinda un hábitat propicio para una variedad de mamíferos, aves, reptiles e insectos. Los habitantes de estas tierras abiertas han evolucionado con astutas adaptaciones, desde sistemas de camuflaje hasta complejos patrones migratorios y sociales.
Estos ecosistemas desempeñan un papel vital en la conservación del suelo, además de servir como refugio para especies en peligro de extinción. Sin embargo, la biodiversidad de estos ecosistemas enfrenta desafíos significativos, incluyendo la pérdida de hábitat debido a la expansión agrícola y la caza. La conservación de estos paisajes no solo preserva la diversidad biológica única, sino que también garantiza la sostenibilidad a largo plazo de estos ecosistemas esenciales para la salud del planeta.`
const textDesiertos = 'Los desiertos de América Latina son ecosistemas fascinantes caracterizados por condiciones extremas de aridez y temperaturas variables. A pesar de su aparente inhospitalidad, estos entornos albergan una variedad única de vida adaptada a la escasez de agua y los cambios térmicos. Los animales que habitan en los desiertos latinoamericanos han desarrollado estrategias de supervivencia únicas, como adaptaciones fisiológicas y comportamentales para conservar agua, así como la capacidad de buscar alimentos en condiciones aparentemente hostiles. Estos ecosistemas son esenciales para mantener el equilibrio natural y representan un asombroso ejemplo de la capacidad de la vida para prosperar en condiciones adversas. Sin embargo, la presión humana, la desertificación y el cambio climático plantean desafíos significativos para la preservación de estos frágiles ecosistemas. La conciencia y la implementación de prácticas de conservación sostenibles son cruciales para garantizar la supervivencia a largo plazo de los desiertos latinoamericanos y su biodiversidad única.'
const textMintañas = 'Las montañas de América Latina constituyen ecosistemas únicos que albergan una diversidad de formas de vida adaptadas a las condiciones específicas de altitud y terreno montañoso. En estas regiones, la fauna ha desarrollado características particulares para sobrevivir, como la capacidad de habitar en elevaciones extremas y adaptarse a cambios climáticos abruptos. La interacción entre estos animales y su entorno desempeña un papel crucial en la estabilidad de los ecosistemas de montaña, contribuyendo a la regulación de poblaciones y a la preservación del equilibrio natural. Sin embargo, la presión humana, que incluye la expansión de la agricultura y la infraestructura, amenaza la integridad de estos hábitats montañosos. La conservación efectiva de las montañas en América Latina requiere un enfoque integral que promueva prácticas sostenibles, proteja las áreas naturales y fomente la coexistencia armoniosa entre las comunidades locales y la vida silvestre en estos entornos de gran altitud.'
const textOceanos = 'Los ecosistemas acuáticos de América Latina, que abarcan océanos, ríos y lagunas, desempeñan un papel vital en la salud global de nuestro planeta. La diversidad de vida en estos ambientes acuáticos contribuye a mantener el equilibrio ecológico y sustentar la biodiversidad. Los océanos actúan como reguladores climáticos y sumideros de carbono, mientras que los ríos y lagunas son fuentes cruciales de agua dulce y hábitats ricos en vida. La interconexión entre estos cuerpos de agua forma una red compleja donde la fauna marina y fluvial desempeña roles fundamentales en la cadena alimentaria y en los ciclos biogeoquímicos. Sin embargo, la sobreexplotación pesquera, la contaminación, la pérdida de hábitat y el cambio climático amenazan la salud de estos ecosistemas acuáticos en América Latina. La conservación efectiva requiere esfuerzos coordinados a nivel internacional, políticas de gestión sostenible y la promoción de prácticas que aseguren la preservación a largo plazo de estos vitales ambientes acuáticos.'
const textBosques = 'Los bosques y selvas de América Latina forman ecosistemas exuberantes y vitales que albergan una increíble variedad de flora y fauna. La interconexión de la vida en estos ambientes es esencial para el equilibrio ecológico. Los animales que habitan en los bosques y selvas desempeñan roles cruciales en la polinización, dispersión de semillas y regulación de poblaciones, contribuyendo a la salud y sostenibilidad de estos ecosistemas. Sin embargo, la deforestación, la explotación insostenible de recursos y el cambio climático amenazan la estabilidad de estos hábitats. La conservación efectiva implica la protección de áreas naturales, la promoción de prácticas forestales sostenibles y la concientización sobre la importancia de preservar la biodiversidad en los bosques y selvas de América Latina. La preservación de estos ecosistemas no solo es esencial para la supervivencia de numerosas especies, sino que también contribuye directamente al bienestar y equilibrio ambiental a nivel global.'
const allEcosystem = []
export const MAIN_AREA = 'SABANAS'

//

allEcosystem.push({
  id: 1,
  title: 'SABANAS Y PASTIZALES',
  area: 'SABANAS',
  text: textSabanas,
  banerFondo: videoSabana,

  path:'sabana-pastizales',
    allAnimals: {

    left: {
      img: sabanaAnimalLeft,
      link: '#',
      name: 'Tapir de Baird'
    },
    center: {
      img: sabanaAnimalCenter,
      link: '#',
      name: 'Huemul'
    },
    right: {
      top: {
        img: sabanaAnimalRightTop,
        link: '#',
        name: 'Tatú Gigante'
      },
      down: {
        img: sabanaAnimalRightDown,
        link: '#',
        name: 'Cardenal  Amarillo'
      }
    },
    bottom: {
      img: sabanaAnimalBottom,
      link: '#',
      name: 'Oso homiguero gigante'
    }
  }
})
allEcosystem.push({
  id: 2,
  title: 'DESIERTOS',
  area: 'DESIERTO',
  text: textDesiertos,
  banerFondo: videoLinkDesierto,

  path:'desiertos',
    allAnimals: {

    left: {
      img: desiertoAnimalLeft,
      link: '#',
      name: 'Tortuga del desierto'
    },
    center: {
      img: desiertoAnimalCenter,
      link: '#',
      name: 'Condor andino'
    },
    right: {
      top: {
        img: desiertoAnimalRigthTop,
        link: '#',
        name: 'Gato de La Pampa'
      },
      down: {
        img: desiertoAnimalRightDown,
        link: '#',
        name: 'Iguana Rosada'
      }
    },
    bottom: {
      img: desiertoAnimalBottom,
      link: '#',
      name: 'Zorro costeño'
    }
  }

})
allEcosystem.push({
  id: 3,
  title: 'MONTAÑAS',
  area: 'MONTAÑAS',
  text: textMintañas,

  path:'montañas',
  banerFondo: videoLinkMontaña,

  allAnimals: {
    left: {
      img: montañaAnimalLeft,
      link: '#',
      name: 'Escuercito achaleño'
    },
    center: {
      img: montañaAnimalCenter,
      link: '#',
      name: 'Chinchilla del altiplano'
    },
    right: {
      top: {
        img: montañaAnimalRightTop,
        link: '#',
        name: 'Serpiente cascabel de Isla Santa Catalina'
      },
      down: {
        img: montañaAnimalRightDown,
        link: '#',
        name: 'Aguilucho'
      }
    },
    bottom: {
      img: montañaAnimalBottom,
      link: '#',
      name: 'Gato andino'
    }
  }
})
allEcosystem.push({
  id: 4,
  title: 'OCEANOS, RIOS Y LAGUNAS',
  area: 'OCEANOS',
  text: textOceanos,
  banerFondo: videoLinkOceano,

  path:'oceanos-rios',
   allAnimals: {
    left: {
      img: oceanoAnimalLeft,
      link: '#',
      name: 'Lobo peletero de Galápagos '

    },
    center: {
      img: oceanoAnimalCenter,
      link: '#',

      name: 'Marsopa espinosa'

    },
    right: {
      top: {
        img: oceanoAnimalRigthTop,
        link: '#',
        name: 'Tortuga Laúd'
      },
      down: {
        img: oceanoAnimalRightDown,
        link: '#',
        name: 'Mantarraya gigante'
      }
    },
    bottom: {
      img: oceanoAnimalBottom,
      link: '#',
      name: 'Tiburón ballena'
    }
  }
})
allEcosystem.push({
  id: 5,
  title: 'BOSQUES Y SELVAS',
  area: 'BOSQUES',
  text: textBosques,
  banerFondo: videoLinkBosque,

  path:'bosques',
    allAnimals: {

    left: {
      img: bosqueAnimalLeft,
      link: '#',
      name: 'Mono nocturno andino'
    },
    center: {
      img: bosqueAnimalCenter,
      link: '#',
      name: 'Mono aullador'
    },
    right: {
      top: {
        img: bosqueAnimalRigthTop,
        link: '#',
        name: 'Tamarino calvo'
      },
      down: {
        img: bosqueAnimalRightDown,
        link: '#',
        name: 'Ocelote'
      }
    },
    bottom: {
      img: bosqueAnimalBottom,
      link: '#',
      name: 'Oso prerezoso de tres dedos'
    }
  }
})

export default allEcosystem
