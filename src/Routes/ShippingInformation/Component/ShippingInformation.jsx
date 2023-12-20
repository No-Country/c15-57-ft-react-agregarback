import { SubtitleInfoStore } from '../../../components'
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
      <SubtitleInfoStore link='/ShoppingCart' title='Datos de envío' />
      <div className='md:flex md:gap-12  md:w-[95%] md:border-[1px] md:border-slate-100 md:h-full justify-center'>
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
