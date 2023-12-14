import { useEffect, useState } from 'react'
import axios from 'axios'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'

export default function ProductsCategories () {
  const { setCategory } = useECommerceContext()
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
      <section className='w-full flex flex-col gap-[1rem] md:pt-26 p-4'>
        <ul className='carousel carousel-center md:flex md:flex-row md:items-center sm:justify-center gap-8'>
          {products.map((product) => (
            <li
              onClick={() => setCategory(product.name)}
              className='cursor-pointer carousel-item'
              key={product.id}
            >
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
