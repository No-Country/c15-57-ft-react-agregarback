import { SubtitleInfoStore } from '../../../components'
import ShoppingList from '../Presentation/ShoppingList'
import PurchaseBill from '../Presentation/PurchaseBill'
import ModalDeleteItem from '../Presentation/ModalDeleteItem'

export default function ShoppinCart () {
  return (
    <section className='w-full flex flex-col items-center justify-center md:rounded'>
      <SubtitleInfoStore link='/Store' title='Tu carrito' />
      <div className='w-full flex flex-col  items-center justify-center md:items-start md:gap-[5%] md:flex-row md:pb-[60px] md:w-[95%] md:border-[1px] md:border-slate-100'>
        <ShoppingList />
        <PurchaseBill />
      </div>
      <ModalDeleteItem />
    </section>
  )
}
