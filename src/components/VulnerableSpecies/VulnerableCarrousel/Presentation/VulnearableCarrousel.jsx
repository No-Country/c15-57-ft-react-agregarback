import React from 'react'
import VulnerableCarrouselContent from './VulnerableCarrouselContent'
import VulnerableCarrouselLayout from './VulnerableCarrouselLayout'

function VulnearableCarrouselContainer({ 
  carouselWrapper,
  translateValue,
  selva2,
  setTranslateValue, }) {
  return (
    <VulnerableCarrouselLayout>
      <VulnerableCarrouselContent 
        carouselWrapper={carouselWrapper}
        selva2={selva2}
        translateValue={translateValue}
        setTranslateValue={setTranslateValue}
      />
    </VulnerableCarrouselLayout>
  )
}

export default VulnearableCarrouselContainer