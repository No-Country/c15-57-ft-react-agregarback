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
      <section className='max-w-[1080px] flex flex-col  sm:pt-26 p-4'>
        <ul className='w-screen max-w-full overflow-auto flex flex-row justify-items-start sm:flex sm:flex-row sm:items-center sm:justify-center'>
          {products.map((product) => (
            <li
              onClick={() => setCategory(product.name)}
              className='cursor-pointer'
              key={product.id}
            >
              <div className='w-32 h-32 flex flex-col items-center'>
                <img
                  className='rounded-full w-[5.625rem] h-[5.625rem]'
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
