import { MdOutlineArrowBackIos } from 'react-icons/md'
import { SlQuestion } from 'react-icons/sl'
import ShipInfo from '../Presentation/ShipInfo'
import ShippingInformationForm from '../Presentation/ShippingInformationForm'
import { useState } from 'react'

export default function ShippingInformation () {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <section className=' w-full flex flex-col items-center justify-center md:rounded'>
      <div className='w-full h-[51px] grid grid-cols-3 grid-rows-1 bg-shoppingTitle items-center justify-between font-Roboto md:w-[95%] md:mt-[29px] md:rounded-t '>
        <MdOutlineArrowBackIos className='col-span-1 ml-[10px] md:ml-[30px]  ' />
        <h2 className='text-xl col-span-2 md:text-center md:col-span-1'>Datos de envío</h2>
      </div>
      <div className='md:flex md:gap-12 '>
        <div className='flex items-center justify-center gap-4 mt-6 md:hidden'>
          <h2 className='text-base'>Envío por DHL Express Worldwide</h2>
          <SlQuestion onClick={openModal} />
        </div>
        <div className={`md:block ${isOpen ? '' : 'hidden'}`} onClick={closeModal}>
          <ShipInfo />
        </div>
        <ShippingInformationForm />
      </div>
    </section>
  )
}
