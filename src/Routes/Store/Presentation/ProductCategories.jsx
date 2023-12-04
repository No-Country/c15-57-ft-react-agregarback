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
    <section className='flex w-21.75rem h-53.4375rem flex-col items-center justify-center flex-shrink max-w-21.75rem gap-0.9375rem pt-26 px-16 pb-4'>
      <ul className='flex flex-row items-center gap-8'>
        {products.map((product) => (
          <li key={product.id}>
            <div className='flex flex-col items-center'>
              <img className='w-[5.625rem] h-[5.625rem]' src={product.img} alt={product.name} />
              <span className='text-[color:var(--Dark,#1E293B)] text-[0.9375rem] not-italic font-light leading-[137%] tracking-[-0.05rem]'>{product.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
