import {CartLayout} from "./CartLayout.jsx";
import {CartIcon} from "./CartIcon.jsx";

export const CartContainer = ({iconUrl}) => {
    return (
        <CartLayout>
            <CartIcon iconUrl={iconUrl} />
        </CartLayout>
    )
}
