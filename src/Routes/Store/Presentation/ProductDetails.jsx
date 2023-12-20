import { useLocalStorage } from '../../../components/Hooks/useStorage'
import { useECommerceContext } from '../../../Store/contextStore/ECommerceContext'
import { useNavigate } from 'react-router-dom'
export default function ProductDetails () {
  const { product, setProduct } = useECommerceContext()
  const [, setCart] = useLocalStorage('cart', [])
  const navigate = useNavigate()

  const increment = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1
    }))
  }

  const decrement = () => {
    if (product.quantity > 1) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1
      }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCart((prevCart) => [...prevCart, product])
    console.table({ product })
    setTimeout(() => {
      // Redirige después de 2000 milisegundos (2 segundos)
      navigate('/ShoppingCart')
    }, 1000)
  }

  return (
    <form
      className='m-12 grid grid-cols-1 md:grid-cols-2 gap-12'
      onSubmit={handleSubmit}
    >
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
          {product.descriptions?.map((description, index) => (
            <li key={index}>{description} </li>
          ))}
        </ul>
        <div className='mt-4'>
          <h3 className='text-xl font-bold mb-2'>Size</h3>
          <div
            name='size'
            className='flex gap-3 font-display'
          >
            {product.sizes?.map((size, index) => (
              <label
                title={size}
                key={index}
                htmlFor={size}
                className={
                  product.size === size
                    ? 'cursor-pointer w-10 h-10 px-1 pt-0.5 bg-green-800  rounded-full flex-col justify-center items-center gap-2.5 inline-flex text-gray-100 text-base font-medium font-display'
                    : 'cursor-pointer w-10 h-10 px-1 pt-0.5 bg-green-300 bg-opacity-40 rounded-full flex-col justify-center items-center gap-2.5 inline-flex text-gray-800 text-base font-medium font-display'
                }
              >
                {size}
                <input
                  type='radio'
                  name='size'
                  id={size}
                  value={size}
                  checked={product.size === size}
                  onChange={handleChange}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-xl font-bold mb-2'>Color</h3>
          <div
            name='color'
            className='flex gap-5 '
          >
            {product.colors?.map((color, index) => (
              <label
                htmlFor={color}
                key={index}
                title={color}
                value={color}
                style={{ backgroundColor: color }}
                className={
                  product.color === color
                    ? 'w-6 h-6 scale-150 border-2 border-gray-200 rounded-3xl cursor-pointer'
                    : 'w-6 h-6 rounded-3xl border cursor-pointer'
                }
              >
                <input
                  id={color}
                  type='radio'
                  name='color'
                  value={color}
                  checked={product.color === color}
                  onChange={handleChange}
                  hidden
                />
              </label>
            ))}
          </div>
        </div>
        <div className='mt-4 flex gap-5'>
          <div className='w-24 h-10 px-4 py-3 rounded-3xl border border-black justify-start items-end gap-4 inline-flex'>
            <span
              onClick={decrement}
              className='w-2 h-4 text-center text-gray-800 text-sm font-medium font-display cursor-pointer'
            >
              -
            </span>
            <p className='w-2 h-4 text-center text-gray-800 text-sm font-medium font-display'>
              {product.quantity}
            </p>
            <span
              onClick={increment}
              className='w-2 h-4 text-center text-gray-800 text-sm font-medium font-display cursor-pointer'
            >
              +
            </span>
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
