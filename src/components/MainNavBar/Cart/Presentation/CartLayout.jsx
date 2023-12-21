import { Link } from 'react-router-dom'
import CartCounter from '../../CartCounter/Component/CartCounter'
export const CartLayout = ({ children }) => {
  return (
    <Link to='/ShoppingCart'>
      <figcaption className=' md:relative'>
        {children}
      </figcaption>
    </Link>
  )
}
