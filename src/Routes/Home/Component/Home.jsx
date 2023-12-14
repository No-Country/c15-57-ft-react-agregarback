import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useUserContext } from '../../../Store/contextStore/UserContext'
import LandingPage from '../../LandingPage/Component/LandingPage'

export default function Home() {
  const { item } = useECommerceContext()
  const { item2 } = useUserContext()

  console.table(item, item2)

  return (
    <>
      {/* <Carrousel /> */}
      <LandingPage/>
    // aqui inicia la revision de la estructura del carrousel
      home
    </>
  )
}
