import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useUserContext } from '../../../Store/contextStore/UserContext'
import { LandingPage } from '../../../components'

export default function Home () {
  const { item } = useECommerceContext()
  const { item2 } = useUserContext()

  console.table(item, item2)

  return (
    <>
      <div>
        <div>
          <LandingPage />
        </div>
      </div>
    </>
  )
}
