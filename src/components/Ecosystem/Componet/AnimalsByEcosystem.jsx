import { useEffect, useState } from 'react'

import allEcosystem  from './data'

import EcosystemLayaout from '../Presentation/EcosystemLayaout'
import EcosystemInfoDectail from '../Presentation/EcosystemInfoDectail'
import EcosystemHero from '../Presentation/EcosystemHero'
import EcosystemCollageAnimas from '../Presentation/EcosystemCollageAnimas'
import EcosystemsLinksContainer from '../Presentation/EcosystemsLinksContainer'

import { EllipseBosque, EllipseDesierto, EllipseMontania, EllipseOceano, EllipseSabana } from '../../../assets/ecosystem'

import { useParams } from 'react-router-dom';

const moreEcosystems = [
  {
    id:1,
    path:'Ecosystems/sabana-pastizales',
    img:EllipseSabana,
    area: 'SABANAS',

  },
  {
    id:2,
    path:'Ecosystems/desiertos',
    img:EllipseDesierto,
    area: 'DESIERTOS',

  },
  {
    id:3,
    path:'Ecosystems/montañas',
    img:EllipseMontania,
    area: 'MONTAÑAS',

  },
  {
    id:4,
    path:'Ecosystems/oceanos-rios',
    img:EllipseOceano,
    area: 'OCEANOS',

  },
  {
    id:5,
    path:'Ecosystems/bosques',
    img:EllipseBosque,
    area: 'BOSQUES',

  },
]

export default function AnimalsByEcosystem () {
 
  const params = useParams()
  const { ecosystem } = params; 

  const [curretArea, setCurrentArea] = useState(null)
  useEffect(() => {
  if (ecosystem == null ){
    setCurrentArea(allEcosystem[0])
  }else{
    const ecosystemToShow = allEcosystem.filter(data => {
      // 
        return data.path === ecosystem  
      });
      setCurrentArea(ecosystemToShow[0])
  }

  }, [ecosystem])

  return (
    <EcosystemLayaout>
      <EcosystemHero  aratoShow={curretArea?.area} areaBanner={curretArea?.banerFondo} areaTitle={curretArea?.title} />
      <EcosystemInfoDectail showText={curretArea?.text} />
      <EcosystemCollageAnimas getAnimals={curretArea} />
      <EcosystemsLinksContainer correctArea={ecosystem} otherAreas={moreEcosystems} />

    </EcosystemLayaout>
  )
}
//
