import { useState, useEffect } from 'react'

import VulnearableCarrouselContainer from '../Presentation/VulnearableCarrousel'

import { animal1, selva2 } from '../../../../assets/vulnerableSpecies'

function VulnearableCarrousel() {

  const [carouselWrapper, setCarouselWrapper] = useState([])
  const [translateValue, setTranslateValue] = useState(0)
  
  useEffect(() => {
    setCarouselWrapper([
      { name: 'jaguar', image: animal1 },
      { name: 'jaguar', image: animal1 },
      { name: 'jaguar', image: animal1 },
      { name: 'jaguar', image: animal1 },
      { name: 'jaguar', image: animal1 }
    ])
  }, [])

  return <VulnearableCarrouselContainer
  carouselWrapper={carouselWrapper}
  selva2={selva2}
  translateValue={translateValue}
  setTranslateValue={setTranslateValue}
  />

}

export default VulnearableCarrousel