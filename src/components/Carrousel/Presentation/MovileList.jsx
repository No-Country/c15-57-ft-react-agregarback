import { useContentContext } from '../../../Store/contextStore/ContentContext'
import { leftIcon, rigthIcon } from '../../../assets/img-hero'
import ButtomMovileList from './ButtomMovileList'

export default
function MovileList ({ data }) {
  const { movileIndex, rightMovileIndex, lefMovileIndex, moreDataDonate } = useContentContext()
  const curretNumber = movileIndex + 1
  const showRightButton = movileIndex === data?.length - 1
  const showLeftButton = movileIndex === 0
  return (
    <div>

      <div className='flex max-w-[1080px] sm:hidden mx-auto px-2 items-center  justify-center mb-6'>
        <p className='flex items-cente justify-cente text-[16px] w text-center'>{moreDataDonate}</p>
      </div>
      <section className=' max-w-[500px] mx-auto sm:hidden flex flex-row justify-center items-center mb-10'>
        <ButtomMovileList action={() => lefMovileIndex(movileIndex)} isVisible={showLeftButton} showImg={leftIcon} />
        <section className='w-[320px]  mx-auto bg-green-100 rounded-[22px] h-[300px] flex flex-col items-center mt-16 px-6 relative pt-20 gap-6'>
          <div className='w-[82px]  h-[82px] bg-green-500 border-white border-[10px] rounded-full flex justify-center items-center  absolute top-[-40px] bottom-[70px] '>
            <p className='text-white font-semibold text-[35px]  '> {curretNumber} </p>
          </div>
          <p className='font-[500]  text-[14px] text-center'>{data[movileIndex].title} </p>
          <p className='font-[300] text-[12px]'>{data[movileIndex].information}</p>
        </section>
        <ButtomMovileList action={() => rightMovileIndex(movileIndex)} isVisible={showRightButton} showImg={rigthIcon} />
      </section>
    </div>
  )
}
