import InfoAnimalsLayout from './InfoAnimalsLayout'
import InfoAnimalsInfo from './InfoAnimalsInfo'

const InfoAnimals = ({ Animal, WorldMap1, Amenazas1, Amenazas2, Ayuda1, Ayuda2, EspecieCircular1, EspecieCircular2, EspecieCircular3 }) => {
  return (
    <InfoAnimalsLayout>
      <InfoAnimalsInfo Animal={Animal} WorldMap1={WorldMap1} Amenazas1={Amenazas1} Amenazas2={Amenazas2} Ayuda1={Ayuda1} Ayuda2={Ayuda2} EspecieCircular1={EspecieCircular1} EspecieCircular2={EspecieCircular2} EspecieCircular3={EspecieCircular3} />
    </InfoAnimalsLayout>
  )
}

export default InfoAnimals
