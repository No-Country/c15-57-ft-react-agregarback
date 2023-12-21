import BannerContainer from './BannerContainer'
import BannerInfo from './BannerInfo'
import BannerOption from './BannerOption'

import './style.css'

export default function Banner ({ animalInfo, showAnimals, classBaner, setMostrar, mostrar }) {
  const datosMostrar = showAnimals[mostrar]

  return (
    <BannerContainer animalInfo={animalInfo} datosMostrar={datosMostrar} classBaner={classBaner}>
      {/* select cards */}
      <div className='hidden  absolute z-40 sm:flex flex-row w-full h-full items-center justify-between'>
        {showAnimals?.map((animals, index) => {
          if (index !== mostrar) {
            return <BannerOption setMostrar={setMostrar} index={index} key={index} name={animals.name} />
          } else {
            return <BannerInfo key={index} data={animals} />
          }
        }
        )}
      </div>
    </BannerContainer>
  )
}
