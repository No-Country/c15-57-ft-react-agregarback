import { useECommerceContext } from "../../../Store/contextStore/ECommerceContext";
import { useUserContext } from "../../../Store/contextStore/UserContext";
import Carrousel from "../../../components/Carrousel/Presentation/Carrousel";


export default function Home() {

  const { item } = useECommerceContext()
  const { item2 } = useUserContext()

  console.table(item, item2);

  return (
    <>
    // aqui inicia la revision de la estructura del carrousel
      home
    </>
  )
}

