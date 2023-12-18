import { IoMdCart } from "react-icons/io";

import {CartLayout} from "./CartLayout.jsx";
import {CartIcon} from "./CartIcon.jsx";

export const CartContainer = () => {
    return (
        <CartLayout>
            <CartIcon icon={IoMdCart} />
        </CartLayout>
    )
}
