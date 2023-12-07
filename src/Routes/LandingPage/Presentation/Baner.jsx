import BannerContainer from "./BannerContainer";
import BannerShowArea from "./BannerShowArea";


export default function Banner  ({showAnimals ,classBaner ,setMostrar , mostrar}) {  
  const datosMostrar = showAnimals[mostrar];
  
    return (
      <BannerContainer datosMostrar={datosMostrar} classBaner={classBaner} >
        {showAnimals?.map((animals, index) => (
          <BannerShowArea
            setMostrar={setMostrar}
            mostrar={mostrar}
            key={index}
            index={index}
            data={animals}
          />
        ))}
      </BannerContainer>
    )
  }