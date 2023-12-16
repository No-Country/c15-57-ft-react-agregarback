import { SubtitleInfoStore } from '../../../components'
import ShoppingList from '../Presentation/ShoppingList'
import PurchaseBill from '../Presentation/PurchaseBill'
import ModalDeleteItem from '../Presentation/ModalDeleteItem'
export default function ShoppinCart () {
  return (
    <section className='w-full flex flex-col items-center justify-center md:rounded '>
      <SubtitleInfoStore title='Tu carrito' />
      <div className='w-full flex flex-col  items-center justify-center md:items-start md:gap-[5%] md:flex-row md:mb-[60px]'>
        <ShoppingList />
        <PurchaseBill />
      </div>
      <ModalDeleteItem />
    </section>
  )
}
