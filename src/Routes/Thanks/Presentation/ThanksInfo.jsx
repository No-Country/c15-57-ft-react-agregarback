
const ThanksInfo = ({Perezoso}) => {
  return (
    <div className='relative h-full'>
      <img src={Perezoso} alt='Jaguarete' className='object-cover min-h-full' />
      <div className='flex flex-col absolute inset-0 p-3 sm:p-5 pl-[10px] sm:pl-[211px]'>
        <h2 className='text-[38px] sm:text-[68px] font-robotoM text-white'>GRACIAS</h2>
        <h2 className='text-[21px] sm:text-[40px] text-white font-robotoM'>POR <span className='text-amber-300 pl-1'>TU APOYO</span> </h2>
      </div>
      <div className=' relative md:absolute inset-0 flex flex-col items-center justify-center'>
        <div className='content-center relative'>
          <div className='mt-5 md:mt-[150px] p-4 sm:p-6 text-white bg-opacity-25 bg-white font-roboto md:backdrop-blur-md shadow-lg rounded-md max-w-[288px] sm:max-w-[1000px]'>
            <p className='text-xs sm:text-sm leading-relaxed'>Tu generosidad respalda proyectos y acciones directas para la conservación de animales en peligro, abordando amenazas como la pérdida de hábitat y la caza ilegal. Contribuirás a programas de investigación esenciales para comprender mejor las necesidades de las especies en riesgo y desarrollar estrategias de conservación efectivas. Tu donación también respaldará iniciativas educativas destinadas a crear conciencia sobre la importancia de preservar la fauna y flora de América Latina.</p>
          </div>
          <div className='flex flex-col md:flex-row justify-center text-colorDonation font-roboto p-4 sm:p-6 mt-2 max-w-[288px] sm:max-w-[1172px] h-[fit-content]'>
            <div className='flex flex-col pr-1 sm:pr-3 pb-3 md:pb-0'>
              <h2 className='text-xs sm:text-sm text-white font-roboto font-thin'>Mantente informado sobre nuestros proyectos.</h2>
              <h2 className='text-xs sm:text-sm text-white font-robotoM'>¡Suscríbete a nuestro newsletter!</h2>
            </div>
            <input className='md:w-[25%] rounded p-3 md:p-1 sm:p-2 pr-8 sm:pr-10 bg-white text-black text-xs sm:text-sm' type='text' placeholder='Ingresa tu email' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThanksInfo
