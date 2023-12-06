import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProductsCategories () {
  const [products, setProducts] = useState([])
  const url = 'api/productCs'

  useEffect(() => {
    axios(url)
      .then((res) => {
        setProducts(res.data.productCs)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }, [])

  return (
    <>
      <section className='w-full flex flex-col gap-[1rem] pt-26 pb-4'>
        <p className="w-full py-6 text-slate-800 text-3xl font-bold font-['Roboto'] bg-emerald-600 bg-opacity-10 rounded-tl-xl rounded-tr-xl text-center">
          Productos
        </p>

        <ul className='flex flex-row items-center justify-center gap-8'>
          {products.map((product) => (
            <li key={product.id}>
              <div className='flex flex-col items-center'>
                <img
                  className='w-[5.625rem] h-[5.625rem]'
                  src={product.img}
                  alt={product.name}
                />
                <span className='text-[color:var(--Dark,#1E293B)] text-[0.9375rem] not-italic font-light leading-[137%] tracking-[-0.05rem]'>
                  {product.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
