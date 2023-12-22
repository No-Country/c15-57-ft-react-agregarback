import ButtonCarrouselSectionItems from './ButtonCarrouselSectionItems'
import ButtonCarrouselLayoutSection from './ButtonCarrouselLayoutSection'
function ButtonCarrouseSectionContainer ({
  currentIndex,
  setCurrentIndex,
  progressPercentage,
  setProgressPercentage
}) {
  return (
    <ButtonCarrouselLayoutSection>
      <ButtonCarrouselSectionItems
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        progressPercentage={progressPercentage}
        setProgressPercentage={setProgressPercentage}
      />
    </ButtonCarrouselLayoutSection>
  )
}

export default ButtonCarrouseSectionContainer
