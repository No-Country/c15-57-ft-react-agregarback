import AnimalCategories from '../Presentation/AnimalCategories'
import Filtros from '../Presentation/Filtros'
import ProductCategories from '../Presentation/ProductCategories'
import Products from '../Presentation/Products'

export default function Store () {
  return (
    <section className='flex flex-col md:flex-row'>
      <aside className='hidden md:inline-flex md:w-80 h-full mx-6 py-12 bg-white rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] flex-col justify-start items-center gap-3.5'>
        <AnimalCategories />
      </aside>
      <main className='flex flex-col justify-center items-center h-full w-full pb-12  md:border md:border-gray-300 rounded-xl'>
        <p className='w-full py-6 mb-4 text-slate-800 text-3xl font-bold font-roboto bg-emerald-600 bg-opacity-10 text-center'>
          Productos
        </p>
        <article className='inline-flex md:hidden h-full md:ml-6 md:mt-6 md:py-12  md:rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.35)] flex-col justify-start items-center gap-3.5'>
          <AnimalCategories />
        </article>
        <ProductCategories />
        <div className='hidden md:block self-stretch h-px border border-gray-300' />
        <Filtros />
        <Products />
      </main>
    </section>
  )
}
