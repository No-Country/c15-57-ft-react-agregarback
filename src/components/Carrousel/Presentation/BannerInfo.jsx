import BotonBanner from './BotonBanner'

const BannerInfo = ({ data }) => {
  return (
    <section className=' h-full bg-black bg-opacity-50   w-[200%]
     justify-center items-center flex flex-col gap-6 relative '
    >
      <div className='hero-info flex flex-col gap-6  w-[70%]'>
        <div className=''>
          <p className='text-teal-300 font-semibold text-[16px]'>{data?.name}</p>
          <p className='lg:text-[48px] text-[2em] lg:w-[400px] text-white leading-none font-semibold'>
            {data?.titular}
          </p>
        </div>
        <p className='lg:w-[450px] text-white lg:text-base font-light'>{data?.detalle}</p>
        <BotonBanner path='donations/' link={data?.link}>¡DONA AHORA!</BotonBanner>
      </div>
    </section>
  )
}

export default BannerInfo
