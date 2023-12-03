import BotonDonar from "../../BotonDonar";


const HeroInfo = ({ data ,donar }) => {
  const donatePage = 'pagina-donancion/'
  
  return (
    <div className='hero-info mx-10  w-[460px] h-[410px] flex flex-col gap-4 relative '>
      <div>
        <p className='text-teal-300 font-semibold text-[20px]'>{data.name}</p>
        <p className='text-[48px] text-white leading-none font-semibold'>
          {data.titular}
        </p>
      </div>
      <p className='w-[450px] text-white text-base'>{data.detalle}</p>
      <BotonDonar link={donar?(donatePage + data.link):data.link}>¡DONA AHORA!</BotonDonar>
    </div>
  )
}

export default HeroInfo;