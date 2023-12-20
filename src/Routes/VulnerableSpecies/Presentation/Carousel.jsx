import { useState } from 'react'
import aguaraGuazu from '../../../assets/vulnerableSpecies/aguaraGuazu.jpg'
import ajolote from '../../../assets/vulnerableSpecies/ajolote.jpg'
import jaguar from '../../../assets/vulnerableSpecies/jaguar.jpg'
import manati from '../../../assets/vulnerableSpecies/manati.jpg'
import monoArania from '../../../assets/vulnerableSpecies/monoArania.jpg'
import osoDeAnteojos from '../../../assets/vulnerableSpecies/osoDeAnteojos.jpg'
import totugaCarey from '../../../assets/vulnerableSpecies/totugaCarey.jpg'

import './Carousel.css'
// const images = [
//   { name: 'Aguara Guazu', image: aguaraGuazu },
//   { name: 'Ajolote', image: ajolote },
//   { name: 'Jaguar', image: jaguar },
//   { name: 'Manati', image: manati },
//   { name: 'Oso De Anteojos', image: osoDeAnteojos },
//   { name: 'Totuga Carey', image: totugaCarey },
//   { name: 'Mono Arania', image: monoArania }
// ]
const images = [aguaraGuazu, ajolote, jaguar, manati, osoDeAnteojos, totugaCarey, monoArania]

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const visibleImages = images.slice(currentImageIndex, currentImageIndex + 4)

  return (
    <div className='carousel-container'>
      <button
        className='carousel-button'
        onClick={prevImage}
      >
        &lt;
      </button>
      <div className='carousel'>
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`carousel-slide ${index === 0 ? 'active' : ''}`}
          />
        ))}
      </div>
      <button
        className='carousel-button'
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  )
}

export default Carousel
