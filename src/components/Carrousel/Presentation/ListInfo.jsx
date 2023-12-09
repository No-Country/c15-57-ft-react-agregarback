export default function ListInfo({pointData}){
  return(
    <section>
      {
        pointData.map((data, index)=>{
          const curretNumber = index + 1;
          const isOdd = index % 2 ===0;
          return(
            <div className={`flex ${isOdd?'flex-row':'flex-row-reverse'} gap-10 items-center w-[1080px] mx-auto`} key={index}>
              <div className='w-20 h-20 bg-green-700 bg-opacity-60 rounded-full flex justify-center items-center'>
               <p className='text-white font-semibold text-[38px]'> {curretNumber} </p>
                </div>
              <div className='w-[978px] h-auto rounded-[22px] bg-green-200 bg-opacity-60 py-5 px-10 my-5 flex flex-col gap-3'>
              <p className='font-bold text-lg'>{data.title}</p>
              <p className='font-[200]' >{data.information}</p>
              </div>
            </div>
          )
        } )
      }
    </section>
  )
};