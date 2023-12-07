<<<<<<< HEAD
import Hero from '../../../components/Hero'

export default function Home () {
=======
import { useECommerceContext } from "../../../Store/contextStore/ECommerceContext";
import { useUserContext } from "../../../Store/contextStore/UserContext";
import Carrousel from "../../../components/Carrousel/Presentation/Carrousel";
import LandingPage from "../../LandingPage/Component/LandingPage";


export default function Home() {

  const { item } = useECommerceContext()
  const { item2 } = useUserContext()

  console.table(item, item2);

>>>>>>> d7772f7ec8d4cd6077345e03dd3a544709524ea7
  return (
    <>
      {/* <Carrousel /> */}
      <LandingPage/>
    // aqui inicia la revision de la estructura del carrousel
      home
    </>
  )
}

