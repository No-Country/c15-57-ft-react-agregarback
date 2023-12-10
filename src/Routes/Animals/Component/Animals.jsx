
import { useECommerceContext } from "../../../Store/contextStore/ECommerceContext";
import { useUserContext } from "../../../Store/contextStore/UserContext";
import { LandingPage } from "../../../components";


export default function Home() {

  const { item } = useECommerceContext()
  const { item2 } = useUserContext()

  console.table(item, item2);

  return (
    <>
      <div> 
        <div>
          carrousel
        </div>
        <div>
          merchandise baner
        </div>
        <div>
        </div>
        animals cards
      </div>
    </>
  )
}