import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails'
import Modal from './Modal'

export default function Products () {
  const [isModalOpen, setModalOpen] = useState(false)
  const [products, setProducts] = useState([])
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
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
    <ul className='flex-wrap justify-center items-end gap-x-20 gap-y-[1.38rem] flex'>
      {products.map((product) => (
        <li
          onClick={openModal}
          key={product.id}
          className='w-64 pb-4 bg-white rounded-lg shadow border border-zinc-200 flex-col justify-center items-center gap-3 inline-flex'
        >
          <figure className='self-stretch h-72 relative'>
            <img
              className='w-64 h-64 left-0 top-0 absolute rounded-tl-lg rounded-tr-lg'
              src={product.img}
              alt={product.name}
            />
            <figcaption className="w-56 left-[16.68px] top-[267.27px] absolute text-center text-gray-500 text-xs font-medium font-['Roboto'] leading-tight">
              {product.category}
            </figcaption>
          </figure>
          <p className="self-stretch text-center text-slate-800 text-base font-medium font-['Roboto'] leading-snug">
            {product.type}
          </p>
          <p className="self-stretch text-center text-slate-500 text-xs font-medium font-['Roboto'] leading-tight">
            {product.description}
          </p>
          <p className="self-stretch text-center text-green-800 text-base font-bold font-['Roboto'] leading-snug">
            {product.price.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS'
            })}
          </p>
        </li>
      ))}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ProductDetails />
        </Modal>
      )}
    </ul>
  )
}
