import Table from './Table'
import { useContentContext } from '../../../Store/contextStore/ContentContext'

const MyDonations = () => {
  const { donationData } = useContentContext()
  return (
    <div className='mt-10 border-[1px] border-slate-400 rounded-md mx-4 mb-8'>
      <h2 className='font-robotoM text-[1.2rem] md:text-[1.4rem] my-4 ml-5'>Historial de donaciones</h2>
      <Table data={donationData} />
    </div>
  )
}

export default MyDonations
