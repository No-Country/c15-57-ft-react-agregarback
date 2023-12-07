export default function BannerOption({ name }){
  return (
    <div className='hero-cambiarSeccion text-white transition duration-2000 ease-in-out hover:cursor-pointer'>
      <p className='w-full flex text-[72px] justify-center items-center hero-icon'>
        +
      </p>
      <p className='text-[24px] font-semibold'>{name}</p>
    </div>
  )
}