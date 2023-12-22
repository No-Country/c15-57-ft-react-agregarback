import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

function MainSectionElements ({ MainTitle, MainDescription, MainQuote, MainQuoteAuthor, Monkey }) {
  return (
    <>
      <div className='md:w-[50%] h-full flex flex-col items-center md:my-[20px] md:h-full md:mx-[5%]'>
        <h1 className='text-yellow-300 font-robotoM text-3xl font-black mb-6 w-[90%] md:text-5xl'>
          {MainTitle}
        </h1>
        <p className='w-[90%] font-robotoL text-[1rem] md:text-[1.2rem] '>
          {MainDescription}
          <br />
        </p>
        <div className='w-[60%] mt-6 flex flex-col items-center border-[1px] border-slate-200 rounded py-2 px-3 md:w-[65%]'>
          <FaQuoteLeft className='text-gray-300 text-xl self-start' />
          <p className='font-robotoL w-4/5 text-[0.7rem] italic text-center mt-3 md:text-[0.9rem] md:w-[75%]'>
            {MainQuote}
          </p>
          <hr className='w-[50%] mt-2 mb-3' />
          <FaQuoteRight className='text-gray-300 text-xl self-end' />
          <p className='font-robotoM text-[0.7rem] italic text-center md:text-[0.9rem]'>
            {MainQuoteAuthor}
          </p>
        </div>
      </div>
      <figure className='w-1/2  md:h-[758px] lg:h-[608px]  hidden md:block'>
        <img src={Monkey} alt='mono araña' className=' h-full object-cover object-center' />
      </figure>
    </>
  )
}

export default MainSectionElements
