import AnimalCategories from '../Presentation/AnimalCategories'
import Filtros from '../Presentation/Filtros'
import ProductCategories from '../Presentation/ProductCategories'
import Products from '../Presentation/Products'

export default function Store () {
  return (
    <section className='flex'>
      <aside className='w-80 h-full ml-6 mt-6 py-12 bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] flex-col justify-start items-center gap-3.5 inline-flex'>
        <AnimalCategories />
      </aside>
      <main className='flex flex-col justify-center items-center w-full h-full pb-12 m-6 border border-gray-300 rounded-xl'>
        <ProductCategories />
        <div className='self-stretch h-px border border-gray-300' />
        <Filtros />
        <Products />
      </main>
    </section>
  )
}