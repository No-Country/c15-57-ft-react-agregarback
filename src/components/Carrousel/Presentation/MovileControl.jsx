import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { leftIcon, rigthIcon } from '../../../assets/img-hero'
import InfoMovileBarner from './InfoMovileBarner'

export default function MovileControl ({ animalInfo }) {
  const {
    mostrar, setMostrar
  } = useContentContext()

  const sideDownBanner = () => {
    if (mostrar !== 0) {
      setMostrar(mostrar - 1)
    }
  }
  const sideUPBanner = () => {
    if (mostrar < animalInfo.length - 2) {
      setMostrar(mostrar + 1)
    }
  }

  return (
    <section className='sm:hidden relative w-full h-9 my-10 flex justify-between px-16'>
      <div className='absolute bottom-[100px] left-[-160px]'>
        <InfoMovileBarner data={animalInfo[mostrar]} />
      </div>
      <div>
        <img src={leftIcon} onClick={() => sideDownBanner()} alt='' />
      </div>
      <div>
        <img src={rigthIcon} onClick={() => sideUPBanner()} alt='' />
      </div>
    </section>

  )
}
