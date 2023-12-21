import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from '../../../Hooks/useStorage'
import { useECommerceContext } from '../../../../Store/contextStore/ECommerceContext'

const ProductDetailsElements = ({ product }) => {

  const [, setCart, remove] = useLocalStorage('cart', [])
  const navigate = useNavigate()



  return (
    <form
      className='m-12 grid grid-cols-1 md:grid-cols-2 gap-12'>

      <input
        type='image'
        name='img'
        className='cursor-default w-full h-full object-cover'
        src={product.img}
        alt={product.title}
      />
      <div className='flex flex-col gap-5'>
        <h2 className='text-gray-800 text-5xl font-medium font-display'>
          {product.title}
        </h2>
        <p className='text-gray-800 text-3xl font-medium font-display'>
          {product.price.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS'
          })}
        </p>
        <ul>
          {product.description}
        </ul>
        <div className='mt-4'>
          <h3 className='text-xl font-bold mb-2'>Size</h3>
          <div
            name='size'
            className='flex gap-3 font-display'
          >
      
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-xl font-bold mb-2'>Color</h3>
          <div
            name='color'
            className='flex gap-5 '
          >
          
          </div>
        </div>
        <div className='mt-4 flex gap-5'>
          <div className='w-24 h-10 px-4 py-3 rounded-3xl border border-black justify-start items-end gap-4 inline-flex'>
            <button
              onClick={() => decreaseQuantityToPurchase()}
              className='w-2 h-4 text-center text-gray-800 text-sm font-medium font-display'
            >
              -
            </button>
            <p className='w-2 h-4 text-center text-gray-800 text-sm font-medium font-display'>
              {cartContainCounter}
            </p>
            <button
              onClick={() => addToTheCart({product})}
              className='w-2 h-4 text-center text-gray-800 text-sm font-medium font-display'
            >
              +
            </button>
          </div>
          <button
            type='submit'
            className='w-40 h-10 px-4 py-2 bg-green-700 rounded-full justify-start items-center inline-flex'
          >
            <span className='text-center text-gray-100 text-base font-medium font-display leading-normal'>
              Agregar al carrito
            </span>
          </button>
        </div>
        <br />
        <hr />
        <div className='mt-4 flex gap-5'>
          <span className='text-gray-800 text-base font-medium font-display'>
            Categoría:
          </span>
          <span className='text-gray-500 text-base font-light font-display'>
            {product.title} - {product.category}
          </span>
        </div>
      </div>
    </form>
  )
}

export default ProductDetailsElements