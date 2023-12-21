import { useContentContext } from "../../../Store/contextStore/ContentContext";
import DesktopList from "./DesktopList";

export default function ListInfo({pointData}){
  const { moreDataDonate} = useContentContext()
  return(
    <section>
      <div className="sm:flex max-w-[1080px]  hidden mx-auto px-2 items-center  justify-center mb-12"> 
      <p className="flex items-cente justify-cente text-[24px] w text-center">{ moreDataDonate}</p> </div>
      {
        pointData.map((data, index)=>{
          const curretNumber = index + 1;
          const isOdd = index % 2 ===0;
          return(
            <div key={index} className=" hidden sm:flex">
              <DesktopList isOdd={isOdd} curretNumber={curretNumber} data={data}/> 
            </div>
          )
        })
      }
    </section>
  )
}


