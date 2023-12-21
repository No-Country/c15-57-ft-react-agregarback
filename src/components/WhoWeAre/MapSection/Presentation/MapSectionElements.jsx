function MapSectionElements ({ MapSectionTitle, MapSectionOperations, MapSectionDefenders, MapSectionDonations, LatamMap }) {
  return (
    <>
      <h2 className='font-robotoM text-xl font-black text-center my-8 w-[90%] md:mt-0 '>
        {MapSectionTitle}
      </h2>
      {/* issue missing figure -> */}
      <img src={LatamMap} alt='mapa de centro y sur América' className='w-[90%] mb-8 md:w-1/2' />

      <div className='flex flex-col items-center md:flex-row md:items-start md:gap-7'>
        <div className='flex flex-col items-center'>
          <h3 className='text-white font-roboto text-[1.7rem] font-extrabold md:text-5xl md:py-2'>9</h3>
          <p className='font-robotoL text-[0.9rem] w-1/2 mb-3 md:w-[60%] md:mb-0'>
            {MapSectionOperations}
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-white font-roboto text-[1.7rem] font-extrabold md:text-5xl md:py-2'>60</h3>
          <p className='font-robotoL text-[0.9rem] w-[65%] mb-3  md:mb-0'>
            {MapSectionDefenders}
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-white font-roboto text-[1.7rem] font-extrabold md:text-5xl md:py-2'>10.000+</h3>
          <p className='mb-8 font-robotoL text-[0.9rem] w-[65%] md:w-[70%] md:mb-0'>
            {MapSectionDonations}
          </p>
        </div>
      </div>
    </>
  )
}

export default MapSectionElements
