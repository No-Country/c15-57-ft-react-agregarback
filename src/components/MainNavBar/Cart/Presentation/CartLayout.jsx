
import CartCounter from '../../CartCounter/Component/CartCounter'
export const CartLayout = ({children}) => {
    return (
        <figcaption className=" md:relative">
            {children}
            <CartCounter />
        </figcaption>
    )
}
