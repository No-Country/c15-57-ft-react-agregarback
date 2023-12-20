import InfoAnimalsLayout from './InfoAnimalsLayout'
import InfoAnimalsInfo from './InfoAnimalsInfo'

const InfoAnimals = ({ VaquitaMarina, WorldMap1, Amenazas1, Ayuda1, Ayuda2, EspecieCircular1, EspecieCircular2, EspecieCircular3 }) => {
  return (
    <InfoAnimalsLayout>
      <InfoAnimalsInfo VaquitaMarina={VaquitaMarina} WorldMap1={WorldMap1} Amenazas1={Amenazas1} Ayuda1={Ayuda1} Ayuda2={Ayuda2} EspecieCircular1={EspecieCircular1} EspecieCircular2={EspecieCircular2} EspecieCircular3={EspecieCircular3} />
    </InfoAnimalsLayout>
  )
}

export default InfoAnimals
