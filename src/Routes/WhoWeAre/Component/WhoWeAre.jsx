import { useContentContext } from '../../../Store/contextStore/ContentContext'
import WhoWeAreContainer from '../Presentation/WhoWeAre'

export default function WhoWeAre() {
  const { getDataFromServer } = useContentContext()
  const { data, loading } = getDataFromServer('whoWeAreInfoContents')

  return <WhoWeAreContainer data={data} loading={loading} />

}
