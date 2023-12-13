import { useContentContext } from "../../../Store/contextStore/ContentContext";
import { leftIcon, rigthIcon } from "../../../assets/img-hero";
import ButtomMovileList from "./ButtomMovileList";

export default 
function MovileList ({ data}){
  const { movileIndex, rightMovileIndex, lefMovileIndex ,moreDataDonate} = useContentContext(); 
  const curretNumber = movileIndex + 1;
  const showRightButton = movileIndex === data?.length - 1;
  const showLeftButton = movileIndex === 0;
  return(
  <div>
    
    <div className="flex max-w-[1080px] sm:hidden mx-auto px-2 items-center  justify-center mb-6"> 
      <p className="flex items-cente justify-cente text-[16px] w text-center">{moreDataDonate}</p>
    </div>
    <section className=' max-w-[500px] mx-auto sm:hidden flex flex-row justify-center items-center px-'>
    <ButtomMovileList action={()=>lefMovileIndex(movileIndex)} isVisible={showLeftButton} showImg={leftIcon} />   
      <section className='w-[320px]  mx-auto bg-green-200 rounded-[22px] h-[300px] flex flex-col items-center mt-24 px-6 relative pt-20 gap-6'>
        <div className='w-[125px]  h-[125px] bg-green-700 border-white border-[10px] rounded-full flex justify-center items-center  absolute top-[-70px] bottom-[70px] '>
          <p className='text-white font-semibold text-[56px]  '> {curretNumber} </p>
        </div>
          <p className='font-bold text-lg'>{data[movileIndex].title} </p>
          <p className='font-[200]' >{data[movileIndex].information}</p>
      </section>     
      <ButtomMovileList action={()=>rightMovileIndex(movileIndex)} isVisible={showRightButton} showImg={rigthIcon} />
    </section>

  </div>    
   
  )
}
