import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Products () {
  const [products, setProducts] = useState([])
  const url = 'api/products/remeras'

  useEffect(() => {
    axios(url)
      .then((res) => {
        setProducts(res.data.products)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }, [])
  return (
    <ul className='grid gap-5 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] '>
      {products.map((product) => (
        <li key={product.id} className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src={product.img}
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>{product.category}</h2>
            <p><strong>{product.type}</strong></p>
            <p>{product.description}</p>
            <div className='card-actions'>
              <button className='btn btn-primary'>{product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
