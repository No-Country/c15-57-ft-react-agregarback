import React from 'react'

function ButtonCarrouselSectionItems({currentIndex,setCurrentIndex, progressPercentage,setProgressPercentage}) {


  const prevBtn = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      updateCarousel()
    }
  }

  const nextBtn = () => {
    if (currentIndex < carouselWrapper.length - 1) {
      setCurrentIndex(currentIndex + 1)
      updateCarousel()
    }
  }

  const updateCarousel = () => {
    setTranslateValue(-currentIndex * (300 + 20)) // 300px for item width and 20px for margin-right
    setProgressPercentage((currentIndex / (carouselWrapper.children.length - 1)) * 100)
  }

  return (
    <>
      <div
        onClick={prevBtn}
        className=' w-[50px] h-[50px] bg-[rgba(255,255,255,0.5)] flex justify-center items-center cursor-pointer rounded-[50%] border-[none] flex-items'
      >
        <i className='fa-solid fa-chevron-left fa-xl' />
      </div>

      <div className='w-[600px] mx-auto my-2.5 flex-items'>

        <div
          style={{ width: progressPercentage }}
          className='h-2.5 bg-[#ddd] relative rounded-[10px_10px_10px_10px]'
        >
          <div
            className='h-full bg-[#EDDD6F] w-0 rounded-[10px_10px_10px_10px]'
          />
        </div>
      </div>

      <div
        onClick={nextBtn}
        className=' w-[50px] h-[50px] bg-[rgba(255,255,255,0.5)] flex justify-center items-center cursor-pointer rounded-[50%] border-[none] flex-items'
      >
        <i className='fa-solid fa-chevron-right fa-xl' />
      </div>
    </>
  )
}

export default ButtonCarrouselSectionItems