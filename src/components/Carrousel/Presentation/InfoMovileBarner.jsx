import BotonBanner from './BotonBanner'

export default function InfoMovileBarner ({ data }) {
  return (
    <section className='w-[460px] h-[250px]  top-4 bg-black bg-opacity-50   rounded-bl-[120px] pl-1
      relaticve left-[130px]
      justify-center items-center flex flex-col gap-6 relative '
    >
      <div className='hero-info flex flex-col gap-6  w-[70%]'>
        <div className=''>
          <p className='text-teal-300 font-semibold text-[8spx]'>{data?.name}</p>
          <p className='lg:text-[48px] text-[16px] lg:w-[400px] text-white leading-none font-semibold'>
            {data?.titular}
          </p>
        </div>
        <p className='lg:w-[450px] text-white text-[14px] lg:text-base font-light'>{data?.detalle}</p>
        <div className='px-10'>

          <BotonBanner path='donations/' link={data?.link}>¡DONA AHORA!</BotonBanner>
        </div>
      </div>
    </section>

  )
}
