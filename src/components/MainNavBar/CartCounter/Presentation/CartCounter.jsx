import React from 'react'
import CartCounterElement from './CartCounterElement'
import CartCounterLayout from './CartCounterLayout'

const CartCounterContainer = () => {
    return (
        <CartCounterLayout>
            <CartCounterElement />
        </CartCounterLayout>
    )
}

export default CartCounterContainer