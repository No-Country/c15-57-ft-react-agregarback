import React, { useState } from 'react'
import ButtonCarrouseSectionContainer from '../Presentation/ButtonCarrouseSection'
const ButtonCarrousel = () => {
  { /* should pass all this logic to the content context or use the children parent method in order to avoid lose functionalitity  */ }
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressPercentage, setProgressPercentage] = useState(0)

  return (
    <ButtonCarrouseSectionContainer
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      progressPercentage={progressPercentage}
      setProgressPercentage={setProgressPercentage}
    />
  )
}

export default ButtonCarrousel
