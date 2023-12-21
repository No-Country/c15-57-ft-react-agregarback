import { dhl } from '../../../assets/purchase'
import { RiArrowRightDoubleFill } from 'react-icons/ri'

export default function ShipInfo () {
  return (
    <div className='w-full flex flex-col justify-center items-start rounded fixed sm:items-center sm:left-[25%] md:static max-w-[339px] bg-white md:self-start md:mt-[48px]'>
      <img src={dhl} alt='DHL logo' className='w-[90%] mb-2' />
      <h2 className='sm:mx-4 text-base font-robotoM self-start mb-[19px] md:hidden'>
        Envío por DHL Express Worldwide
      </h2>
      <h2 className='sm:mx-4 text-base font-robotoM self-start mb-[19px] hidden md:inline'>
        DHL Express Worldwide
      </h2>
      <p className='text-[0.8rem] font-light mr-4 sm:mx-4 mb-[19px]'>
        DHL es una de las empresas líderes en mensajería a nivel mundial por lo que con el servicio Express Worldwide se pueden enviar paquetes a nivel global.
        <br />
        <br />
        Es un servicio rápido de entrega cuyos tiempos de entrega dependen de la región donde se encuentre el destinatario:
      </p>
      <div className='flex sm:mx-4 w-[90%] justify-evenly'>
        <div>
          <RiArrowRightDoubleFill className='text-red-600 text-[18px]' />
        </div>
        <h3 className=' text-[0.8rem] font-robotoM self-start'>América central</h3>
        <p className='text-[0.8rem] font-light ml-[6%]'>
          Las entregas se harán de 2 a 4 días laborables.
        </p>
      </div>
      <div className='flex sm:mx-4 w-[90%] justify-evenly md:mt-3'>
        <div>
          <RiArrowRightDoubleFill className='text-red-600 text-[18px]' />
        </div>
        <h3 className=' text-[0.8rem] font-robotoM self-start'>Sudamérica</h3>
        <p className='text-[0.8rem] font-light mx-4 md:ml-[6%] shrink'>
          El tiempo de entrega de DHL Express se sitúa de 4 a 5 días laborables.
        </p>
      </div>
    </div>
  )
}
