import React from 'react'

function CartSectionLayout({ children }) {
    return (
        <li className='hidden md:flex'>
            <div className='inline-flex w-[100%]'>
                {children}
            </div>
        </li>
    )
}

export default CartSectionLayout