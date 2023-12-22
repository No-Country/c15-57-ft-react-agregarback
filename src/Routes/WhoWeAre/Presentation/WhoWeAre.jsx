import WhoWeAreLayout from './WhoWeAreLayout'
import WhoWeAreInfo from './WhoWeAreInfo'
import {Loader} from '../../../components'

const WhoWeAreContainer = ({ data, loading }) => {
  return (
    <WhoWeAreLayout>
      {
        loading ? <Loader /> : <WhoWeAreInfo data={data} />
      }
    </WhoWeAreLayout>
  )
}

export default WhoWeAreContainer
