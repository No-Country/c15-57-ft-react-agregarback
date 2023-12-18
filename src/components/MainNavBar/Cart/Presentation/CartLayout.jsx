import { Link } from 'react-router-dom'
import CartCounter from '../../CartCounter/Component/CartCounter'
export const CartLayout = ({ children }) => {
  return (
    <figcaption className=' md:relative'>
      <Link to='/ShoppingCart'>
        {children}
        <CartCounter />
      </Link>
    </figcaption>
  )
}
