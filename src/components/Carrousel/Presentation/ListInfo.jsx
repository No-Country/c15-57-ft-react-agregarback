export default function ListInfo({pointData}){
  return(
    <section>
      {
        pointData.map((data, index)=>{
          const curretNumber = index + 1;
          const isOdd = index % 2 ===0;
          return(
            <section key={index} >
            <section className=" hidden sm:flex">
              <DesktopList isOdd={isOdd} curretNumber={curretNumber} data={data}/> 
            </section>
           
            
         
            
            </section>
          )
        } )
      }
    </section>
  )
};

const DesktopList = ({isOdd ,curretNumber ,data})=>{
  return(
    <div className={`sm:flex max-w-[1080px] hidden ${isOdd?'flex-row':'flex-row-reverse'} gap-10 items-center w-[80%] mx-auto relative`} >
              <div className='w-[100px]  h-[100px] bg-green-700 bg-opacity-60 rounded-full flex justify-center items-center  '>
               <p className='text-white font-semibold text-[38px]  '> {curretNumber} </p>
                </div>
              <div className='w-[90%] h-auto rounded-[22px] bg-green-200 bg-opacity-60 py-5 px-10 my-5 flex flex-col gap-3'>
              <p className='font-bold text-lg'>{data.title} </p>
              <p className='font-[200]' >{data.information}</p>
              </div>
            </div>

  )
}
