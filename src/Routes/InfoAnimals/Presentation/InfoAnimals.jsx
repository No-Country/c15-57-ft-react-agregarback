import InfoAnimalsLayout from './InfoAnimalsLayout'
import InfoAnimalsInfo from './InfoAnimalsInfo'

const InfoAnimals = ({ Animal, WorldMap1, Amenazas1, Amenazas2, Ayuda1, Ayuda2, Texto1, Logo1, Texto2, Texto3, Texto4, Texto5, Texto6, Texto7, Texto8 }) => {
  return (
    <InfoAnimalsLayout>
      <InfoAnimalsInfo Animal={Animal} WorldMap1={WorldMap1} Amenazas1={Amenazas1} Amenazas2={Amenazas2} Ayuda1={Ayuda1} Ayuda2={Ayuda2} Texto1={Texto1} Logo1={Logo1} Texto2={Texto2} Texto3={Texto3} Texto4={Texto4} Texto5={Texto5} Texto6={Texto6} Texto7={Texto7} Texto8={Texto8} />
    </InfoAnimalsLayout>
  )
}

export default InfoAnimals
