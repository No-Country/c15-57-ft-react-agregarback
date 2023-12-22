function DownSectionElements ({ DownSectionTitle, DownSectionDescription, Certificate }) {
  return (
    <>
      <div className='md:w-[30%]'>
        <h2 className='font-robotoM text-lg font-black mb-3 text-itemTitle'>
          {DownSectionTitle}
        </h2>
        <p className='font-robotoL text-[0.8rem] mb-8'>
          {DownSectionDescription}
        </p>
      </div>
      {/* issue missing figure -> */}
      <img src={Certificate} alt='logo certificado' className='md:w-1/4 md:h-1/4' />
    </>
  )
}

export default DownSectionElements
